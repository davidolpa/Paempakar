export default function Home() {
  return (
    <main style={{background:"#0f0f1a", color:"white", fontFamily:"Arial"}}>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"80px"}}>
        <h1 style={{color:"#f72585", fontSize:"50px"}}>PaEmpakar</h1>
        <p>Empaques que elevan tu marca</p>

        <a href="https://wa.me/573008718152">
          <button style={btn}>Cotizar ahora</button>
        </a>
      </section>

      {/* BOLSAS */}
      <Section 
        title="Bolsas Kraft"
        img="/img/bolsas.jpg"
      />

      {/* CAJAS */}
      <Section 
        title="Cajas Plegadizas"
        img="/img/cajas.jpg"
      />

      {/* BIO */}
      <Section 
        title="Portacomidas Biodegradables"
        img="/img/bio.jpg"
      />

      {/* PIZZA */}
      <Section 
        title="Cajas para Pizza"
        img="/img/pizza.jpg"
      />

      {/* MICRO */}
      <Section 
        title="Cajas Microcorrugadas"
        img="/img/micro.jpg"
      />

      {/* CONTACTO */}
      <section style={{textAlign:"center", padding:"50px"}}>
        <h2>Contáctanos</h2>
        <p>📱 300 871 8152 | 318 502 9354</p>
      </section>

      {/* BOTÓN WHATSAPP */}
      <a href="https://wa.me/573008718152" style={whatsapp}>
        💬
      </a>

    </main>
  )
}

function Section({title, img}:{title:string, img:string}) {
  return (
    <section style={{textAlign:"center", padding:"50px"}}>
      <h2 style={{color:"#b5179e"}}>{title}</h2>

      <img src={img} style={{width:"80%", borderRadius:"20px"}} />

      <br/><br/>

      <a href="https://wa.me/573185029354">
        <button style={btn}>Solicitar cotización</button>
      </a>
    </section>
  )
}

const btn = {
  background:"#f72585",
  border:"none",
  padding:"15px 25px",
  borderRadius:"10px",
  color:"white",
  cursor:"pointer"
}

const whatsapp = {
  position:"fixed",
  bottom:"20px",
  right:"20px",
  background:"#25D366",
  padding:"15px",
  borderRadius:"50%",
  fontSize:"24px"
}