// Deployment settings for the Receivables Control Room. See docs/DEPLOY.md.
// This file is public once hosted, so put no secrets here. The OAuth client ID is not a secret.
window.RCR_CONFIG = {
  // Google Cloud > APIs & Services > Credentials > OAuth 2.0 Client ID (type "Web application")
  clientId: "114080182998-k4rc89441ahkoet42l2sgannbmhialaq.apps.googleusercontent.com",
  // The long id in the sheet's URL: https://docs.google.com/spreadsheets/d/<sheetId>/edit
  sheetId: "16f4A-vXAV1wbFQC38gUcZ7KXa78kR_RuDb3DdVVZAyQ",
  // Only these Google accounts can use the tool. Each one must also have the sheet shared with them (Editor).
  allowedEmails: ["vjprabhu9@gmail.com", "corporate.nityanand@gmail.com"]
};
