import "../../app.css";

const Services = () => {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <img
                    src="../assets/photoshop.png"
                    className="photoshop"
                    alt=""
                  />
                </div>
                <h3 className="h4 mb-2">Graphic Design</h3>
                <p className="text-muted mb-0">Design is self explanatory.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <img src="../assets/logo192.png" className="react" alt="" />
                </div>
                <h3 className="h4 mb-2">FrontEnd</h3>
                <p className="text-muted mb-0">Maximising user efficiency</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <img src="../assets/sanity.png" className="sanity" alt="" />
                </div>
                <h3 className="h4 mb-2">CMS</h3>
                <p className="text-muted mb-0">
                  Fast Content Management System
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <img src="../assets/node.png" className="node" alt="" />
                </div>
                <h3 className="h4 mb-2">BackEnd</h3>
                <p className="text-muted mb-0">
                  An open source server environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
