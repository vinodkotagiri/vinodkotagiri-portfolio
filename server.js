const express = require('express')
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')

const nodemailer = require('nodemailer')

var smtpTransport = nodemailer.createTransport('SMTP', {
	service: 'iCloud',
	auth: {
		user: 'vinodkotagiri@icloud.com',
		pass: 'password',
	},
})
