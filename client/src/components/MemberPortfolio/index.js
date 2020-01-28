import React from "react";
import "./style.css";

function MemberPortfolio() {
  return (
    <body>
      <section className="section">
        <div className="container">
          <h1 className="title" id="myPage">
            MyPage
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <h2 className="title">Hello, this is me...</h2>
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt="#"
                  />
                </figure>
              </div>
              <div className="tile is-child box">
                <h2 className="title">And, this is my dog.</h2>
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <h2 className="title">About us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Suspendisse varius ligula in molestie lacinia. Maecenas varius
                  eget ligula a sagittis. Pellentesque interdum, nisl nec
                  interdum maximus, augue diam porttitor lorem, et sollicitudin
                  felis neque sit amet erat. Maecenas imperdiet felis nisi,
                  fringilla luctus felis hendrerit sit amet. Aenean vitae
                  gravida diam, finibus dignissim turpis. Sed eget varius
                  ligula, at volutpat tortor.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
                <div className="tile is-ancestor">
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default MemberPortfolio;
