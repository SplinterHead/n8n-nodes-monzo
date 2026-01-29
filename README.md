# n8n-nodes-monzo

![Coded with Gemini](https://img.shields.io/badge/Coded%20with-Gemini-8E75B2)

This is an n8n community node. It lets you use [Monzo bank](https://monzo.com/) in your n8n workflows.

Monzo bank is a digital bank that operates in the UK and US. This node is not affiliated with Monzo

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Account
*   **Get Many**: Returns a list of all accounts associated with the authenticated user.
*   **Get Balance**: Returns the balance information for a specific `Account ID`.

## Credentials

1. Open Monzo's [Developer Playground](https://developers.monzo.com/api/playground) and log in with your monzo account
  1. This will need approval via the app
2. Navigate to "Clients" in the top right
3. Create a New OAuth Client
  1. Choose a name and logo and description
  2. Copy & Paste the OAuth Redirect URL from n8n
  3. Set the Confidentiality to "Confidential"
4. Ensure that this is approved via the Monzo app
5. Open the created OAuth app and copy the ClientID and Clienyt Secret
6. Follow the flow to complete authorisation

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)