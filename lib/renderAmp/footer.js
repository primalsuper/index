export default function footer(siteName){
return `
<!-- FOOTER -->
<footer class="footer">
<div class="footer-wrap">
<div class="footer-brand">
<h3>⚡ ${SITE.name}</h3>
<p>
Platform informasi aplikasi penghasil cuan,
AI modern, teknologi digital,
tips internet, dan tren online terbaru
dengan tampilan cepat, ringan,
dan modern.
</p>
</div>
<div class="footer-menu">
<h4>Menu</h4>
<a href="/">Home</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Contact</a>
<a href="/privacy-policy">Privacy Policy</a>
</div>
<div class="footer-menu">
<h4>Informasi</h4>
<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
<a href="/pedoman-media-siber">Pedoman Media Siber</a>
<a href="/rss.xml">RSS Feed</a>
</div>
</div>
<div class="footer-bottom">© ${new Date().getFullYear()} ${SITE.name} • All Rights Reserved</div>
</footer>
`
}
