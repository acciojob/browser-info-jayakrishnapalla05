//your JS code here. If required.
const div=document.getElementById('Browser-info');
const bName=navigator.appName;
const version=navigator.appVersion;
div.innerText="You are using ${bName} version ${version}";
