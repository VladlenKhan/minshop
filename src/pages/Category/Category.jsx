import Card from "../../UI/Card/Card";
import { Wrapper } from "../../components";
import styles from "./Category.module.scss";

const Categroy = () => {
	return (
		<Wrapper>
			<div className={styles.title}>
				Категория : <span>Suzani</span>
			</div>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</Wrapper>
	);
};

export default Categroy;
