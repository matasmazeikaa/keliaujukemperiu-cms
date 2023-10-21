module.exports = ({ env }) => ({
	email: {
	  config: {
		provider: 'nodemailer',
		providerOptions: {
			host: "smtp.hostinger.com",
			port: 465,
			secure: true,
			auth: {
			  user: env('SMTP_USERNAME'),
			  pass: env('SMTP_PASSWORD'),
			},
		},
	  },
	},
});