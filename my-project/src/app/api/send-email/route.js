import { Resend } from "resend";
import { NextResponse } from "next/server";



export async function POST(req) {
    
    try{
        const {name, email, message} = await req.json();
        const resend = new Resend(process.env.RESEND_API_KEY);

        //Enviar el correo
        const response = await resend.emails.send({
            from: process.env.EMAIL_REMITENTE,
            to: process.env.EMAIL_DESTINATARIO,
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
             <h2>Nuevo mensaje de contacto</h2>
             <p> <stron> Nombre:  </stron> ${name}</p>
             <p> <stron> Email:  </stron> ${email}</p>
             <p> <stron> Mensaje:  </stron> ${message}</p>

            `,
        });

        return NextResponse.json({sucess: true, Response})


    }catch(error){
        console.error("Error al enviar el correo", error);
        return NextResponse.json({error: error.message}), ({status: 500});
    }

}