import Head from "next/head";
function Contactt() {
  return (  
    <section id="contact">
      <div className="container">
        <div className="contact-left"></div>
        <div className="contact-right">
          <form>
            <h2>Name</h2>
            <input type="text" placeholder="Name" />
            <h2>Email</h2>
            <input type="email" placeholder="Email" />

            <textarea placeholder="wirete shomething"></textarea>
            <button className="btn-contact">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactt;
