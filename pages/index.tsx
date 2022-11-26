import DefaultLayout from "../components/Layout";
import Banner from "../components/Pages/Banner";
import { getBlogs } from "../server/blog";

export default function Home() {
	return (
		<DefaultLayout>
			<Banner />
		</DefaultLayout>
	);
}


export const getServerSideProps:GetServerSideProps = async () => {
	let blog = getBlogs();
	return {
		props: {

		}
	}
}
