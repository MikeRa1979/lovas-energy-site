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