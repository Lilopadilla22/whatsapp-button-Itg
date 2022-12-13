import React from 'react'
import PropTypes from 'prop-types'


type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}



const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    return (
        <>
            <div className="fixed bottom-2 right-2 flex flexColumn">
                <a href={`https://wa.me/${phone}?text=${formattedMessage}`}
                    target="_blank"
                    rel="noreferrer noopener">
                    <img src={logo}
                    width={width}
                    height={height}
                    alt="logo de whatsaap" />
                </a>
            </div>
        </>
    )
}

WhatsappButton.PropTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3008765620",
    message: "hola mundo",
    width: 60,
    height: 60
}

WhatsappButton.Schema = {
    title: "Boton de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo de whatsapp",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "numero",
            description: "agrega tu número de telefono",
            type: "string"
        },
        message: {
            title: "mesage",
            description: "agrega un mensaje",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: 'width',
            type: 'number'
        },
        height: {
            title: 'height',
            type: 'number'
        }

    }
}


export default WhatsappButton;
