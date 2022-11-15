"use strict";(self.webpackChunkDennnnny_io=self.webpackChunkDennnnny_io||[]).push([[406],{747:function(t,e,n){n.d(e,{J:function(){return l}});var o=n(7294),i=n(1597),r=n(7817),l=function(t){var e=t.title,n=t.description,l=t.pathname,a=t.subtitle,c=void 0===a?null:a,s=t.children,u=(0,i.useStaticQuery)("3764592887").site.siteMetadata,m=u.title,p=u.description,d={title:e||m,description:n||p,url:""+u.siteUrl+(l||"")},g=c?d.title+" | "+(0,r.f)(c):d.title;return o.createElement(o.Fragment,null,o.createElement("title",null,g),o.createElement("meta",{name:"description",content:d.description}),o.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>☀️</text></svg>"}),s)}},8766:function(t,e,n){n.d(e,{$:function(){return r}});var o=n(7166),i=n(5499),r=(0,o.css)(["> *{margin-top:24px;}h1,h2,h3,h4,h5,h6{color:",';font-weight:600;}h1{font-size:24px;position:relative;width:fit-content;z-index:0;::after{content:"";width:100%;height:30%;position:absolute;bottom:0px;left:0px;background-image:linear-gradient( to left,',","," );z-index:-1;transform:rotateZ(-1deg);}}h2{font-size:24px;}h3{font-size:22px;}code:not(pre > code){color:",";display:inline-block;font-family:monospace;}p{line-height:150%;font-size:18px;}ol{> li{font-size:20px;list-style:lower-roman;line-height:150%;}}ul{> li:not(.task-list-item){list-style:square;font-size:20px;font-weight:700;line-height:150%;}}blockquote{border:none;color:",";font-style:italic;font-weight:400;margin:2.5rem 0;padding:0.5rem 1rem;overflow-wrap:anywhere;border-left:3px solid;}pre{background-color:",";border-radius:8px;font-size:1em;font-weight:400;line-height:1.7142857;overflow-x:auto;padding:1rem 0;}a{text-decoration:none;color:",";margin:0 4px;}summary{margin-bottom:8px;}strong{font-weight:900;}details.change_log{> *:not(summary){white-space:break-spaces;background-color:",";color:",";padding:8px;font-size:1rem;font-weight:300;}}@media ","{h1{font-size:28px;}h2{font-size:24px;}p{line-height:150%;font-size:20px;}ul{> li{font-size:22px;}}}"],(function(t){return t.theme.color}),i.O9.gradientPurple,i.O9.gradientRed,i.O9.codeStyle,(function(t){return t.theme.color}),i.O9.deepBlue,i.O9.blue,i.O9.deepBlue,i.O9.white,i.Uh.tablet)},3201:function(t,e,n){n.r(e),n.d(e,{Head:function(){return p},default:function(){return m}});var o=n(7294),i=n(7166),r=n(8766),l=n(5499);function a(){var t=(0,o.useRef)(null),e=(0,i.useTheme)(),n=(null==e?void 0:e.type)||"dark";return(0,o.useEffect)((function(){var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","Dennnnny/dennnnny.github.io.comments"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","✨💬✨"),e.setAttribute("theme","github-"+n),e.setAttribute("crossorigin","anonymous"),e.async=!0;var o=t.current;return o&&o.appendChild(e),function(){o&&(o.innerHTML="")}}),[n]),o.createElement("div",{ref:t})}var c=n(747),s=n(7782),u=i.default.div.withConfig({componentId:"BlogPost_Layout"}).withConfig({displayName:"blog__Layout",componentId:"sc-1amkdk2-0"})(["display:grid;grid-template-columns:repeat(12,minmax(0,1fr));padding:32px 16px;color:",";.post-title{font-size:32px;font-weight:800;grid-column-start:3;grid-column:1/-1;}.post-date{grid-column:1/-1;color:",";margin-top:8px;}img{grid-column:1/-1;width:100%;height:200px;object-fit:cover;margin-top:24px;border-radius:16px;}.post-content{grid-column:1/-1;color:",";background-color:",";backdrop-filter:blur(15px);",";}.post-comments{border-top:0.5px solid ",";margin-top:32px;padding-top:16px;grid-column:1/-1;}.post-image-source{margin-top:4px;grid-column:1/-1;font-size:14px;font-style:italic;color:",";}@media ","{.post-title{grid-column:2/-2;font-size:36px;}.post-date{grid-column:2/-2;}img{grid-column:2/-2;height:300px;}.post-content{grid-column:2/-2;}.post-comments{margin-top:64px;padding-top:32px;grid-column:2/-2;}.post-image-source{grid-column:2/-2;}}@media ","{.post-title{grid-column:3/-3;font-size:40px;}.post-date{grid-column:3/-3;}img{grid-column:3/-3;height:400px;}.post-content{grid-column:3/-3;}.post-comments{grid-column:3/-3;}.post-image-source{grid-column:3/-3;}}"],(function(t){return t.theme.color}),(function(t){return t.theme.postColor}),(function(t){return t.theme.contentColor}),(function(t){return t.theme.bgColor}),r.$,(function(t){return t.theme.color}),(function(t){return t.theme.hintColor}),l.Uh.tablet,l.Uh.laptop),m=function(t){var e=t.data,n=e.blog.frontmatter,i=n.title,r=n.date,l=n.image_cover,c=e.blog.html,m=(0,s.useTranslation)().t;return o.createElement(u,null,o.createElement("div",{className:"post-title"},i),o.createElement("div",{className:"post-date"},r.split("T")[0]),o.createElement("img",{src:l,alt:i}),o.createElement("span",{className:"post-image-source"},m("image-source")," "),o.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:null!=c?c:""}}),o.createElement("div",{className:"post-comments"},o.createElement(a,null)))},p=function(t){var e=t.data.blog.frontmatter.title;return o.createElement(c.J,{subtitle:e,pathname:"/blog/"+e})}},7817:function(t,e,n){n.d(e,{f:function(){return i},i:function(){return r}});var o=n(7294);function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(t,e){void 0===e&&(e="");var n=new RegExp("("+e+")","ig");return t.split(n).map((function(t,n){var i;return t.toLocaleLowerCase()===(null===(i=e)||void 0===i?void 0:i.toLocaleLowerCase())?o.createElement("span",{key:n,className:"highlight"},t):t}))}}}]);
//# sourceMappingURL=component---src-templates-blog-index-tsx-4496bb801e6538e09b27.js.map