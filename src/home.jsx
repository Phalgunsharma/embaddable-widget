import React from "react";
// class homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Wait for few minutes");
//     event.preventDefault();
//   }
// }

/* <nav class="root vbar bg-body-tertiary">
      <div class="container-fluid">
          Embeddable Widget
      </div>
    </nav> */
const Homepage = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      <header>
        <h3>Hi, Hare is some Badges which I earn from google</h3>
      </header>
      <div className="widget">
        <section className="widget_1 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847349"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Encoder-Decoder Architecture</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_2 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847315"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Introduction to Generative AI Studio</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_3 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847289"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Create Image Captioning Models</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_4 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847239"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Transformer Models and BERT Model</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_5 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847201"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Attention Mechanism</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_6 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847160"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Introduction to Image Generation</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_7 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4847132"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Generative AI Fundamentals</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_8 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4846804"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Introduction to Responsible AI</h6>
          <p>Earned Aug 25, 2023 EDT</p>
        </section>

        <section className="widget_9 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4790147"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Introduction to Large Language Models</h6>
          <p>Earned Aug 21, 2023 EDT</p>
        </section>

        <section className="widget_10 widget_components">
          <a
            href="https://www.cloudskillsboost.google/public_profiles/52d28fce-877f-436a-b01f-dd0ea8db8b15/badges/4771815"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="img-thumbnail"
              src="https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D"
              alt=""
            />
          </a>
          <h6>Introduction to Generative AI</h6>
          <p>Earned Aug 20, 2023 EDT</p>
        </section>
      </div>
    </div>
  );
};
export default Homepage;
