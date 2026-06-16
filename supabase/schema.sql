-- Supabase Database Schema
-- Run this in the Supabase SQL Editor

-- 1. Create Profiles Table (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique,
  full_name text,
  role text default 'user' check (role in ('user', 'admin')),
  created_at timestamptz default now()
);

-- Enable RLS on Profiles
alter table public.profiles enable row level security;

-- Profiles Policies
create policy "Allow users to read their own profile"
  on public.profiles
  for select
  using (auth.uid() = id);

create policy "Allow users to update their own profile"
  on public.profiles
  for update
  using (auth.uid() = id);

-- 2. Create Leads Table for contact submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text,
  email text,
  company text,
  sector text,
  service_type text not null,
  budget_range text,
  message text not null,
  preferred_contact text,
  status text default 'new' check (status in ('new', 'contacted', 'in_discussion', 'quote_sent', 'won', 'lost')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on Leads
alter table public.leads enable row level security;

-- Leads Policies
create policy "Allow anonymous and public insert on leads"
  on public.leads
  for insert
  with check (true);

create policy "Allow admin read access on leads"
  on public.leads
  for select
  using (
    auth.role() = 'authenticated' and
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

create policy "Allow admin update access on leads"
  on public.leads
  for update
  using (
    auth.role() = 'authenticated' and
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

create policy "Allow admin delete access on leads"
  on public.leads
  for delete
  using (
    auth.role() = 'authenticated' and
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- 3. Automatic Profile Provisioning on Auth Signup
-- This function automatically creates a profile for any new auth.users record.
-- It assigns the 'admin' role if the email matches mohamed.essahafi@um6p.ma.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role, full_name)
  values (
    new.id,
    new.email,
    case
      when new.email in ('mohamed.essahafi@um6p.ma', 'med.essahafi@gmail.com') then 'admin'
      else 'user'
    end,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to execute function on auth.users insert
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
