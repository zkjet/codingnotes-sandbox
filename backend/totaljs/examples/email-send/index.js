require('total.js');

var message = new Mail.Message('Subject', 'Body');

message.to('petersirka@gmail.com');

// message.cc('@');
// message.bcc('@');
// message.reply('@');
// message.attachment('/filename.txt', 'name.txt');

message.from('jankohrasko@gmail.com', 'Janko Hrasko');

Mail.on('error', function (err) {
	console.log(err);
});

// SEND via GMAIL
// message.send('smtp.gmail.com', { port: 465, secure: true, user: 'ENTER_YOUR_EMAIL', password: 'ENTER_YOUR_PASSWORD' });
// SOLUTION [Error: SELF_SIGNED_CERT_IN_CHAIN]: message.send('smtp.gmail.com', { port: 465, secure: true, user: 'ENTER_YOUR_EMAIL', password: 'ENTER_YOUR_PASSWORD', rejectUnauthorized: true });

// SEND via AUTH BASIC SMTP
// message.send('smtp.yourdomain.com', { user: 'ENTER_YOUR_EMAIL', password: 'ENTER_YOUR_PASSWORD' });

// SEND via SMTP
message.send('smtp.yourdomain.com');