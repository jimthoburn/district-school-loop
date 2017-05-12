
'use strict';

exports.BASE_URL = 'http://ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<!--
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
-->

<meta name="robots" content="noindex" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:100,300,400,700" />
<link rel="stylesheet" href="/css/shared.css" />
`;

exports.LOGO_HTML = `
<a href="/">
  <img src="/images/azusa-district.png" width="150" alt="" />
  <h2>Azusa Unified School District</h2>
</a>
`;

exports.FOOTER_HTML = `
<div class="contact">
  <div>
    <h2>Azusa Unified School District</h2>
    <p>546 South Citrus Avenue<br />Azusa, CA 91702</p>
    <p>626-967-6211</p>
  </div>

  <p><strong>Linda Kaminski, Superintendent</strong><br /><a href="mailto:LKaminski@azusa.org">LKaminski@azusa.org</a></p>
  <p><strong>Kathy Purpero, Secretary</strong><br /><a href="mailto:kpurpero@azusa.org">kpurpero@azusa.org</a></p>
</div>

<div class="legal">
  <h2><a href="http://azusa.org"><img src="/images/azusa-district.png" width="100" height="100" alt="Azusa Unified School District" /></a></h2>
  <p>The District prohibits, at any district school or school activity, unlawful discrimination, harassment, intimidation, and bullying of any student based on the student’s actual race, color, ancestry, national origin, ethnic group, identication, age, religion, marital or parental status, physical or mental disability, sex, sexual orientation, gender, gender identity, or gender expression; the perception of one or more of such characteristics; or association with a person or group with one or more these actual or perceived characteristics.</p>
</div>
`;

exports.SITE_MAP_URL = 'http://ausd-ca.schoolloop.com/portal/site_map?d=x';

exports.SECTIONS_DATA = [{
  title: 'Main Pages',
  pages: [
    {
      url: '/',
      title: 'Home'
    }
  ]
}];
