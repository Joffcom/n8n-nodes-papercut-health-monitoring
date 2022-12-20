# n8n-nodes-papercut-health-monitoring

PaperCut MF / PaperCut NG is a print management platform for Linux, Mac and Windows. This community node allows you to work with the health monitoring api in your n8n worklfows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Information
 - Base System
 - Devices
 - Job Ticketing
 - Mobility Print
 - Print Providers
 - Printers
 - Site Servers
 - Web Print

### Devices & Printers
 - Recent Jobs
 - Status

### Statistics
 - Held Jobs Count
 - Recent Errors Count
 - Recent Pages Count
 - Recent Warnings Count

### Status
 - Application Server
 - Database Server
 - Devices
 - Job Ticketing 
 - License
 - Mobility Print Servers
 - Primary Health Check
 - Print Providers
 - Printers
 - Site Servers
 - Web Print Servers

## Credentials

### Domain
The domain is the hostname / ip / FQDN of your PaperCut server including protocol and port, As an example if you use `http://10.10.0.1:9191` to access your PaperCut server this would be the value you enter here.

### Token
The token can be found in the PaperCut admin console under Options > Advanced > System Health Monitoring.

You can also find this under Options > Config Editor by searching for `health.api.key`

### Self Signed Certificate
If you are using a self signed certificate or if you don't know enable this option.

## Compatibility

This node has been tested using n8n 0.208.0 and PaperCut MF 22.0.4, Although this node will work with any currently supported PaperCut version (20.0.0 or later).

## Usage

There are 2 example workflows in the `_Examples` folder in the GitHub repository.

### Get a daily summary of the PaperCut system
Get information on disk space usage, printers and device counts and a count of printers and devices with errors every morning in a Slack channel.

### Check for issues with Mobility Print
Check every 5 minutes for any errors with Mobility Print Servers and send them to a Slack channel.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## Version history

0.1.0 - Initial Release
