export default function footer(siteName){
return `
<footer class="amp-footer">
<p>© ${new Date().getFullYear()} ${siteName}</p>
</footer>
`
}
