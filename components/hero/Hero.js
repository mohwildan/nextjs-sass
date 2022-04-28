import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
function Hero() {
  return (
    <section id="hero">
      <div className="social-media">
        <AiFillFacebook
          style={{ fontSize: "3.3rem", marginBottom: "1rem", color: "#0B185A" }}
        />
        <AiFillTwitterSquare
          style={{ fontSize: "3.3rem", marginBottom: "1rem", color: "#0B185A" }}
        />
        <AiFillYoutube
          style={{ fontSize: "3.3rem", marginBottom: "1rem", color: "#0B185A" }}
        />
      </div>
      <div className="container">
        <div className="hero-left">
          <div className="img">
            <Image src="/square1.png" width={100} height={100} />
          </div>
          <h1>
            Hey ,i’m a <span>frontend</span> developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, adipisicing elit. Molestiae veniam rem
            illum, accusantium natus amet. Minus aut quae molestiae autem beatae
            provident amet quis repellendus.
          </p>
          <button className="btn-profile">View My Profile</button>
        </div>
        <div className="hero-right">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
