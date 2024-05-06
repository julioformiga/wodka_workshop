import { ApolloProvider } from "@apollo/client";
import { client } from "./main";
import { TotalCharacters } from "./TotalCharacters";

export default function Footer() {
	return (
		<footer className="w-full fixed flex bottom-0 p-1 px-24 z-50 bg-green-800/60 backdrop-blur-md justify-end">
			<div className="flex-row">
				<ApolloProvider client={client}>
					<TotalCharacters />
				</ApolloProvider>
			</div>
		</footer>
	);
}
