// styles/index.js

import globalStyle from './global.js'
import homeStyle from './home.js'
import postStyle from './post.js'
import categoryStyle from './category.js'

export default function styles(type='home'){
return `
<style>

${globalStyle()}

${type==='home' ? homeStyle() : ''}

${type==='post' ? postStyle() : ''}

${type==='category' ? categoryStyle() : ''}

</style>
`
}
