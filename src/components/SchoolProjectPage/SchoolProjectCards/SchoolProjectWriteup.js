const RCKObject = {
  heading: ` Remote Controlled Koi (RCK)`,
  subheading: `Design Thinking Project, April 2022`,
  modalHeader: `Remote Controlled Koi (RCK)`,
  modalBodyHeading1: `What is the RCK?`,
  modalBodyHeading2: `Roles and Responsibilities`,
  modalBodyHeading3: `Results`,
  modalBodyHeading4: ``,

  modalBodyHeading5: ``,
  modalBodyDescription1: (
    <>
      {" "}
      As part of a school module focused on{" "}
      <b>Design Thinking and Innovation(3.007 DTI)💡</b>, I took the lead in
      guiding my team to{" "}
      <b>
        conceptualize and develop an engaging solution🛠️ for pond maintenance.{" "}
      </b>
      Our innovative creation not only streamlined the cleaning process but also{" "}
      <b>fostered social interactions.</b>
    </>
  ),
  modalBodyDescription2: (
    <>
      In this endeavor, my responsibilities encompassed <b>team leadership👥</b>
      and overseeing the fabrication of a{" "}
      <b>functional 3D-printed conveyor belt. </b>
    </>
  ),
  modalBodyDescription3: (
    <>
      {" "}
      The culmination of our efforts resulted in a <b>
        fully operational✅
      </b>{" "}
      pond cleaning system, where users engage in <b>friendly competition🏁,</b>{" "}
      racing against the opposing team to efficiently{" "}
      <b>clear floating debris from the pond.</b>
    </>
  ),

  modalBodyDescription4: ``,
  modalBodyVideo: `https://www.youtube.com/embed/wDM8ewmyxkw?si=j1PgF4_p82RMGQeU`,
};

const TaxiObject = {
  heading: `Using Neural Networks to predict Taxi Availability`,
  subheading: `Deep Learning Project, May 2025`,
  modalHeader: `Predicting Taxi Availability`,
  modalBodyHeading1: `Using Long Short-Term Models(LSTM) and Transformers to predict the availability of taxis`,
  modalBodyHeading2: ``,
  modalBodyHeading3: `My Contributions`,
  modalBodyHeading4: ``,

  modalBodyHeading5: ``,
  modalBodyDescription1: (
    <>
      For my Deep Learning module, I explored the use of <b>LSTM models</b> and
      their variations, including the <b>BiLSTM</b>, <b>ED-LSTM</b>, and a
      hybrid I developed called <b>ED-BiLSTM</b>. I also implemented a{" "}
      <b>Transformer model</b> to predict taxi availability within a constrained
      area.
      <br />
      <br />
      In total, I built five different LSTM-based architectures and found that
      the <b>Transformer</b> outperformed them all, achieving a{" "}
      <b>mean absolute error (MAE) of approximately 15 taxis</b>—only slightly
      higher than the <b>state-of-the-art model's MAE of 10</b>.
    </>
  ),
  modalBodyDescription2: (
    <>
      Through this project, I gained valuable experience applying neural
      networks to real-world problems. I developed key skills in{" "}
      <b>data preprocessing, model development, and performance evaluation</b>.
      Most importantly, I learned how to tailor deep learning architectures to
      the specifics of a given dataset. Click on the link below to view the full
      report and explore the GitHub repository containing all the work.
    </>
  ),
  modalBodyDescription3: (
    <>
      My primary contributions to this project included building all five models
      and implementing most of the data cleaning and preprocessing strategies.
    </>
  ),
};

const TCPObject = {
  heading: `Using Neural Networks to Predict TCP Congestion Control Loss Ratios`,
  subheading: `Deep Learning / Networking Project, May 2025`,
  modalHeader: `Predicting Loss Ratios of TCP Congestion Control Algorithms`,
  modalBodyHeading1: `LSTM-Based Modeling of Loss Ratios in TCP Reno and CUBIC`,
  modalBodyHeading2: ``,
  modalBodyHeading3: `My Contributions`,
  modalBodyHeading4: ``,
  modalBodyHeading5: ``,
  modalBodyDescription1: (
    <>
      In this project, my team and I investigated how neural networks can be
      applied in computer networks to enhance congestion control. I developed a
      Long Short-Term Memory (LSTM) model to predict the loss ratios of two TCP
      congestion control algorithms—Reno and CUBIC—under identical network
      conditions simulated using Mininet.
      <br />
      <br />
      The model used a range of input features, including congestion window
      size, number of packets transmitted and received, and other key TCP
      parameters. Our goal was to dynamically identify which congestion control
      would perform better (i.e., exhibit a lower loss ratio) and automatically
      switch between them to optimize packet delivery between hosts.
      <br />
      <br />
      Beyond prediction, we also implemented an algorithm to perform the
      switching between protocols. With further refinement, this project has the
      potential to be developed into a publishable research paper. It could also
      serve as the basis for a load balancing strategy—incorporating loss ratio
      prediction to guide congestion control selection for future TCP
      connections, thereby improving network throughput and reliability.
    </>
  ),
  modalBodyDescription2: (
    <>
      This project allowed me to gain hands-on experience in applying neural
      networks to solve practical networking problems. I developed strong skills
      in{" "}
      <b>
        data preprocessing, model design, performance tuning, and
        experimentation
      </b>
      . It also deepened my understanding of how AI can enhance core network
      infrastructure.
    </>
  ),
  modalBodyDescription3: (
    <>
      I was primarily responsible for designing and implementing the LSTM model,
      conducting feasibility research, initiating the project concept, and
      leading the team through to completion. Please contact me if you would
      like to know more about it.
    </>
  ),
};

export default {
  RCKObject,
  TaxiObject,
  TCPObject,
};
