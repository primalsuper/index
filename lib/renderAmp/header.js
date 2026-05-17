export default function header(siteName){
return `
<!-- SIDEBAR -->
<amp-sidebar id="sidebar" layout="nodisplay" side="right" class="sidebar">
<div class="sidebar-top">
<div class="sidebar-title">⚡ ${siteName}</div>
<button on="tap:sidebar.close" style="background:none;border:none;color:#fff;font-size:26px;cursor:pointer;">✕</button>
</div>
<div class="sidebar-links">
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Contact</a>
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
</div>
</amp-sidebar>
<!-- HEADER -->
<header class="header">
<div class="header-wrap">
<a href="/" class="logo">⚡ <span>${siteName}</span></a>
<button class="menu-btn" on="tap:sidebar.toggle" aria-label="Menu">☰</button>
<nav class="nav">
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
</nav>
</div>
</header>
`
}
