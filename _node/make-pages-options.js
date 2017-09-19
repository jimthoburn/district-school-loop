
'use strict';

exports.BASE_URL = 'http://ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<!--
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
-->

<meta name="robots" content="noindex" />

<meta name="viewport" content="width=1250" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:300,400|Roboto:300i" />
<link rel="stylesheet" href="/district-custom-code/custom-header.css" />
<link rel="stylesheet" href="/district-custom-code/custom-header-district.css">

<script type="text/template" id="azusa-home-video-template">
  <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/3d0JXqOvtKQ?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</script>

<script src="/district-custom-code/custom-header.js"></script>
`;

/*exports.LOGO_HTML = `
<a href="/">
  <img src="/images/azusa-district.png" width="150" alt="" />
  <h2>Azusa Unified School District</h2>
</a>
`;*/

exports.LOGO_HTML = `
<h1>Azusa Unified School District</h1>
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
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1424952112612",
      "title": "Assessment"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1424952194329",
      "title": "Before and After School Programs"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1424952194329",
      "title": "Bullying"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1424952216031",
      "title": "College and Career Readiness"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1430908574790",
      "title": "Community Resources"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1427276909310",
      "title": "District Parent Committees"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1455013998339",
      "title": "Dual Immersion"
    },
    {
      "url": "/enrollment",
      "title": "Enroll in Azusa Schools"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1430211145599",
      "title": "Family Support"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1425293303004",
      "title": "Graduation Requirements"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1425293303004",
      "title": "Instructional Programs"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1425293308442",
      "title": "Instructional Standards"
    },
    {
      "url": "/trcis",
      "title": "Internet Safety"
    },
    {
      "url": "/LCAP",
      "title": "LCAP"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1463135339973",
      "title": "Mathematics"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1431162694574",
      "title": "Nutrition Services"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1430908697405",
      "title": "Program Improvement"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1425293306290",
      "title": "Quality Websites"
    },
    {
      "url": "/transcripts",
      "title": "Transcripts"
    },
    {
      "url": "/cms/page_view?d=x&piid=&vpid=1430211145424",
      "title": "Transportation"
    },
    {
      "url": "/williams",
      "title": "Williams Compliance Information"
    }
  ]
}];
