function BlogHeader() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog-head">
            <h1>About Technology</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur saepe laboriosam amet illo quibusdam officia velit,
              blanditiis illum fugiat fuga a maiores obcaecati numquam, quam
              commodi aspernatur. Fugit tempore, numquam hic incidunt beatae
              cupiditate dolorum enim reiciendis amet reprehenderit quae!
            </p>
            <div className="blog-nav">
              <h3>Reactjs</h3>
              <h3>Nodejs</h3>
              <h3>Express</h3>
              <h3>Mongodb</h3>
            </div>
          </div>
          <div className="image-info-blog">
            <div className="layer">
              <div className="image-layer">
                <div className="image-blog">
                  <img
                    src="https://miro.medium.com/max/1400/1*iXsCHAHPN7xFAWuuWjE6-Q.png"
                    alt=""
                  />
                </div>
                <div className="title-blog">
                  <h2>View more</h2>
                </div>
              </div>
              <h1>How to deploy in Nextjs</h1>
            </div>
              <div className="layer">
              <div className="image-layer">
                <div className="image-blog">
                  <img
                    src="https://www.fastcomet.com/blog/wp-content/uploads/2021/03/10-nodejs-frameworks-in-2021.png"
                    alt=""
                  />
                </div>
                <div className="title-blog">
                  <h2>View more</h2>
                </div>
              </div>
              <h1>Top 10 Node.js Frameworks to Use in 2022</h1>
            </div>
              <div className="layer">
              <div className="image-layer">
                <div className="image-blog">
                  <img
                    src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                    alt=""
                  />
                </div>
                <div className="title-blog">
                  <h2>View more</h2>
                </div>
              </div>
              <h1>How to Use MongoDB + Mongoose with Node.js</h1>
            </div>
              <div className="layer">
              <div className="image-layer">
                <div className="image-blog">
                  <img
                    src="https://www.chevtek.io/content/images/2021/02/Untitled-1.jpg"
                    alt=""
                  />
                </div>
                <div className="title-blog">
                  <h2>View more</h2>
                </div>
              </div>
              <h1>An Intuitive Way To Organize Your ExpressJS Routes</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHeader;
