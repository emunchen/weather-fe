import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class CityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: {},
    };
  }
  componentDidMount() {
    this.props.fetchCitySlug(this.props.match.params.slug);
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <Header />
        <div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
          <div
            className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(" +
                `https://loremflickr.com/g/1000/1000/${city.slug}` +
                ")",
            }}
          ></div>

          <div className="bg-gray-100 md:h-full w-full md:flex-1 flex justify-center items-center">
            <div className="px-8 md:px-16">
              <h1 className="text-lg md:text-3xl mb-6">{city.name}</h1>
              <p className="mb-6">
                <span className="font-bold">Wind</span> |{" "}
                <span className="opacity-75">{city.wind}</span>
              </p>
              <p className="mb-6 leading-normal text-sm md:text-base">
                Lorem ipsum dolor sit amet, ne nec tation nonumy salutatus. Ne
                malis audire mnesarchum qui. Et praesent mnesarchum appellantur
                usu. Eu hinc ullum percipitur eos.{" "}
                <a href="#more" className="text-black text-sm">
                  Read More
                </a>
              </p>
              <a
                href="#"
                className="block md:inline-block text-center no-underline px-5 py-3 border-2 border-black hover:bg-black hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="p-12" id="more">
          <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
            Product Description
          </h2>

          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">
            Dico modus appellantur eum at, atqui dicunt ut sea, debet congue
            munere ne usu. Error laudem quaestio te eum, ad cum nihil corrumpit
            adolescens, no eirmod mediocrem expetenda quo. In per solet iuvaret.
            Id audire commune cotidieque mei. Quo diceret patrioque ut, ex his
            animal forensibus maiestatis. No iisque maiorum invenire his, eos ex
            omnis facer delicata.
          </p>

          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800">
            Ad sed liber nihil, pri liber omnium principes id, at est argumentum
            constituam temporibus. Solum munere per ad. Rationibus repudiandae
            nec in. Quo eu verear suscipit abhorreant. Dicam fastidii nam eu,
            quo recusabo periculis dissentiunt id.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}
