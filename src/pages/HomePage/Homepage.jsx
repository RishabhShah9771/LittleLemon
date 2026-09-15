import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import Specials from "../../components/Specials/Specials.jsx";
import CustomersSay from "../../components/CustomerSay/CustomerSay.jsx";
import Chicago from "../../components/Chicago/Chicago.jsx";

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;