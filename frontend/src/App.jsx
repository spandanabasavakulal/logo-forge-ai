import html2canvas from "html2canvas"
import { useState } from "react"
import "./App.css"

function App() {

const [brand,setBrand]=useState("")
const [style,setStyle]=useState("Modern")
const [logos,setLogos]=useState([])

const styleShapes={

Modern:["⬢","◆","▲","●","◉","⬟"],

Luxury:["💎","👑","✨","🏆","♦","💠"],

Minimal:["○","□","△","⬡","⬤","◌"],

Futuristic:["⚡","🚀","🛰","🔷","☄","🛸"],

Gaming:["🎮","🕹","👾","🎯","🏅","⚔"],

Creative:["🎨","🖌","🌈","🧩","⭐","🎭"]

}

const styleColors={

Modern:[
"#4f46e5",
"#3b82f6",
"#2563eb",
"#0ea5e9",
"#8b5cf6",
"#6366f1"
],

Luxury:[
"#FFD700",
"#D4AF37",
"#C9A227",
"#F59E0B",
"#FFCC00",
"#B8860B"
],

Minimal:[
"#111",
"#222",
"#333",
"#444",
"#555",
"#666"
],

Futuristic:[
"#00bfff",
"#14b8a6",
"#06b6d4",
"#38bdf8",
"#22d3ee",
"#0ea5e9"
],

Gaming:[
"#ff006e",
"#db2777",
"#f43f5e",
"#ec4899",
"#fb7185",
"#ff3366"
],

Creative:[
"#9333ea",
"#ec4899",
"#22c55e",
"#06b6d4",
"#f97316",
"#8b5cf6"
]

}

const generateLogo=()=>{

if(!brand){

alert(
"Enter Brand Name"
)

return

}

const generated=[]

for(

let i=0;

i<6;

i++

){

generated.push({

title:
`${style} Logo ${i+1}`,

svg:`

<svg
viewBox="0 0 300 300"
>

<circle

cx="150"

cy="150"

r="120"

fill="${
styleColors[
style
][i]
}"

/>

<text

x="150"

y="185"

text-anchor="middle"

font-size="90"

fill="white"

>

${
styleShapes[
style
][i]
}

</text>

</svg>

`

})

}

setLogos(
generated
)

}

const download=(index)=>{

const card=

document.getElementById(
`logo-${index}`
)

html2canvas(
card
)

.then(

(canvas)=>{

const link=

document.createElement(
"a"
)

link.download=

`${brand}.png`

link.href=

canvas.toDataURL()

link.click()

}

)

}

return(

<div className="container">

<h1>

LogoForge AI

</h1>

<p>

Create unique logos instantly

</p>

<input

value={brand}

onChange={(e)=>

setBrand(
e.target.value
)

}

placeholder=
"Enter Brand"

/>

<select

value={style}

onChange={(e)=>

setStyle(
e.target.value
)

}

>

<option>Modern</option>

<option>Luxury</option>

<option>Minimal</option>

<option>Futuristic</option>

<option>Gaming</option>

<option>Creative</option>

</select>

<button

onClick={
generateLogo
}

>

Generate Logo

</button>

<div className="grid">

{

logos.map(

(item,index)=>(

<div

className="card"

key={index}

id={`logo-${index}`}

>

<div

dangerouslySetInnerHTML={{

__html:
item.svg

}}

>

</div>

<h2>

{brand}

</h2>

<h3>

{item.title}

</h3>

<button

onClick={()=>

download(
index
)

}

>

Download PNG

</button>

</div>

)

)

}

</div>

</div>

)

}

export default App