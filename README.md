# Lovas Energy Services Website

## DNS and Email Configuration

### Email Configuration with Microsoft 365 (GoDaddy) and Netlify DNS

When using Microsoft 365 email service through GoDaddy with Netlify DNS management, the following DNS records must be properly configured:

#### Required DNS Records

1. **MX Record** (for receiving email)
   - Name: @ (root domain)
   - Value: lovasenergy-com.mail.protection.outlook.com
   - Priority: 0
   - TTL: 3600 (or default)

2. **SPF Record** (implemented as TXT record, for sending email)
   - Name: @ (root domain)
   - Value: v=spf1 a:dispatch-us.ppe-hosted.com include:secureserver.net -all
   - TTL: 3600 (or default)

3. **Microsoft Verification Record** (TXT record)
   - Name: @ (root domain)
   - Value: NETORGFT15108272.onmicrosoft.com (or your specific verification code)
   - TTL: 3600 (or default)

4. **Autodiscover Record** (CNAME, for email client configuration)
   - Name: autodiscover
   - Value: autodiscover.outlook.com
   - TTL: 3600 (or default)

5. **DMARC Record** (TXT record, for email authentication reporting)
   - Name: _dmarc
   - Value: v=DMARC1; p=none; rua=mailto:admin@lovasenergy.com
   - TTL: 3600 (or default)

#### Optional Records for Microsoft Teams/Skype

If you need Microsoft Teams or Skype for Business functionality:

1. **SIP SRV Record**
   - Name: _sip._tls
   - Value: 100 1 443 sipdir.online.lync.com
   - TTL: 3600 (or default)

2. **Federation SRV Record**
   - Name: _sipfederationtls._tcp
   - Value: 100 1 5061 sipfed.online.lync.com
   - TTL: 3600 (or default)

#### Important Notes

- In this hybrid setup, Microsoft 365 handles incoming mail (MX records) while GoDaddy's infrastructure is used for sending mail (SPF record).
- The SPF record must specifically use GoDaddy's sending infrastructure values.
- DNS changes can take up to 24-48 hours to fully propagate globally.
- To verify proper configuration, use MXToolbox (https://mxtoolbox.com) and check:
  - MX records (mx:yourdomain.com)
  - SPF records (spf:yourdomain.com)
  - DMARC configuration (dmarc:yourdomain.com)

#### Troubleshooting

If emails aren't being received:
1. Verify DNS propagation is complete
2. Confirm MX records are pointing to the correct Microsoft mail servers
3. Check that the email accounts are properly configured in Microsoft 365
4. Ensure Microsoft domain verification record is present

If emails are being rejected when sending:
1. Check that your SPF record exactly matches: v=spf1 a:dispatch-us.ppe-hosted.com include:secureserver.net -all
2. Verify the SPF record has fully propagated through DNS
3. Look for authentication errors in bounce messages, which will indicate what needs to be fixed

If receiving SPF authentication errors with specific IP addresses, contact GoDaddy support to confirm the correct SPF record for their sending infrastructure.

## Contact Form Configuration with Netlify Forms

The website includes a contact form that uses Netlify Forms for easy form handling. This is a much simpler approach that requires no additional API keys or services.

### How It Works

1. The form in `components/Home.js` has the attributes `netlify` and `name="contact"` which tells Netlify to handle it
2. Netlify automatically detects and processes the form during deployment
3. Form submissions are stored in the Netlify dashboard
4. You can configure email notifications in the Netlify dashboard

### Setting Up Notifications

To receive email notifications when someone submits the form:

1. Go to your Netlify dashboard
2. Navigate to your site > Forms
3. Click on the "Settings and usage" button for the "contact" form
4. Under "Form notifications", click "Add notification" and select "Email notification"
5. Enter the email address where you want to receive notifications
6. Customize the subject and other settings if desired
7. Save the notification settings

### Accessing Submissions

To view form submissions:

1. Go to your Netlify dashboard
2. Navigate to your site > Forms
3. Click on the "contact" form
4. View all submissions in the dashboard

### Spam Protection

Netlify Forms includes built-in spam filtering:

1. Basic spam filtering is included automatically
2. You can add a honeypot field by adding `netlify-honeypot="bot-field"` to your form and including a hidden field with the name "bot-field"
3. You can add reCAPTCHA by enabling it in the Netlify dashboard

### Customization

To modify the contact form:
- The form UI is in `components/Home.js`
- If you make changes to the form fields, Netlify will automatically update during the next deployment
- No additional API routes or server code is needed 