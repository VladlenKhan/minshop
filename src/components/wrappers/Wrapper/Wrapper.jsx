import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

 const Wrapper = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Wrapper