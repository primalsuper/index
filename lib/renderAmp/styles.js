// render/styles.js

import globalStyle from './styles/global.js'
import homeStyle from './styles/home.js'
import postStyle from './styles/post.js'
import categoryStyle from './styles/category.js'

export default function styles(type='home'){
return `


${globalStyle()}

${type === 'home' ? homeStyle() : ''}

${type === 'post' ? postStyle() : ''}

${type === 'category' ? categoryStyle() : ''}


`
}
