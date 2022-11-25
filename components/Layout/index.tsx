import React from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: any) => {
	return (
		<div className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-600 text-neutral-300 font-Quicksand">
			<Header />
			{children}
		</div>
	);
};

export default DefaultLayout;
