import Container from "../wrappers/Container/Container";
import styles from "./Main.module.scss";
import { Content, Sidebar } from "./components";

const Main = () => {
	return (
		<Container>
			<main className={styles.main}>
				<Sidebar />
				<Content />
			</main>
		</Container>
	);
};

export default Main;
