const { sgMail } = require('./config')


const emailText = (user, origin) => {
    const msg = {
        to: user.email,
        from: 'mansoor.hussain@mach3bi.com',
        subject: 'Verify Your Email',
        text: `Hello ${user.firstName},
        <br/>
        <br/>
        To complete your signup to Sureter, Please verify your email by clicking the link below:
        <br />
        <br />
        ${origin}/verifyemail/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Sureter.
        `,
        html: `Hello ${user.firstName},
        <br/>
        <br/>
        To complete your signup to Sureter, Please verify your email by clicking the link below:
        <br />
        <br />
        ${origin}/verifyemail/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Sureter.
        `
    }
    sgMail.send(msg)
}

const forgotEmail = (user, origin) => {
    const msg = {
        to: user.email,
        from: 'mansoor.hussain@mach3bi.com',
        subject: 'Update your password',
        text: `Hello ${user.firstName},
        <br/>
        <br/>
        To update your password, Please click the link below:
        <br />
        <br />
        ${origin}/update-password/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Sureter.
        `,
        html: `Hello ${user.firstName},
        <br/>
        <br/>
        To update your password, Please click the link below:
        <br />
        <br />
        ${origin}/update-password/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Sureter.
        `
    }
    sgMail.send(msg)
}

module.exports = {
    emailText,
    forgotEmail
}