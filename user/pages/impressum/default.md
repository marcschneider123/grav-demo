---
title: 'Impressum'
process:
    twig: true
---

**{{site.company.name}}**
<p>
{{ site.company.street }}
<br>
{{ site.company.zip }} {{ site.company.city }}
</p> 
 

Telefon: {{site.company.phone}}  
Fax:	{{site.company.fax}}  
E-Mail:	<a href="mailto:{{site.company.email|safe_email}}" title="E-Mail an {{site.company.name}} schreiben">{{site.company.email|safe_email}}</a>
