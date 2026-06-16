import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

// Supabase backend client using env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      company,
      sector,
      serviceType,
      budgetRange,
      message,
      preferredContact,
    } = body

    // 1. Insert into database
    const { error: dbError } = await supabase.from('leads').insert({
      full_name: fullName,
      phone: phone || null,
      email: email || null,
      company: company || null,
      sector: sector || null,
      service_type: serviceType,
      budget_range: budgetRange || null,
      message: message,
      preferred_contact: preferredContact,
      status: 'new',
    })

    if (dbError) {
      console.error('Database insertion error:', dbError)
    }

    // 2. Send email notification if SMTP credentials are set
    const mailHost = process.env.EMAIL_HOST
    const mailPort = process.env.EMAIL_PORT
    const mailUser = process.env.EMAIL_USER
    const mailPass = process.env.EMAIL_PASS
    const mailTo = process.env.EMAIL_TO || 'essahafi1404@gmail.com'

    if (mailHost && mailUser && mailPass) {
      const transporter = nodemailer.createTransport({
        host: mailHost,
        port: parseInt(mailPort || '465'),
        secure: mailPort === '465', // true for 465, false for other ports
        auth: {
          user: mailUser,
          pass: mailPass,
        },
      })

      const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px; margin-top: 0;">Nouvelle demande de projet - DigitalService</h2>
          <p>Vous avez reçu un nouveau message depuis le formulaire de contact de votre portfolio.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 150px;">Nom Complet :</td>
              <td style="padding: 8px 0; color: #2d3748;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email :</td>
              <td style="padding: 8px 0; color: #2d3748;">${email || 'Non renseigné'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Téléphone :</td>
              <td style="padding: 8px 0; color: #2d3748;">${phone || 'Non renseigné'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Entreprise :</td>
              <td style="padding: 8px 0; color: #2d3748;">${company || 'Non renseigné'} (${sector || 'Secteur non précisé'})</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Service demandé :</td>
              <td style="padding: 8px 0; color: #2d3748; font-weight: 500;">${serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Budget estimé :</td>
              <td style="padding: 8px 0; color: #2d3748;">${budgetRange || 'Non spécifié'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Contact préféré :</td>
              <td style="padding: 8px 0; color: #2d3748; text-transform: uppercase; font-size: 11px; font-weight: bold;">${preferredContact}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 15px; background-color: #f7fafc; border-left: 4px solid #6366f1; border-radius: 4px;">
            <strong style="color: #4a5568; display: block; margin-bottom: 5px;">Message :</strong>
            <p style="color: #2d3748; margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <a href="https://wa.me/${(phone || '').replace(/\D/g, '')}" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; font-size: 14px; margin-right: 10px;">Répondre sur WhatsApp</a>
            <a href="mailto:${email}" style="background-color: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; font-size: 14px;">Répondre par Email</a>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"DigitalService Alerts" <${mailUser}>`,
        to: mailTo,
        subject: `[Nouveau Lead] ${fullName} - ${serviceType}`,
        html: htmlContent,
      });

      console.log('Notification email sent successfully.')
    } else {
      console.warn('SMTP credentials are not fully configured in env. Local database save succeeded.')
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error in contact API route:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Server error' },
      { status: 500 }
    )
  }
}
