import Header from "./Components/Navbar/Header";
import Product from "./Components/Product";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useState } from "react";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://pangaea-interviews.vercel.app/api/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("NGN");
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header open={open} setOpen={setOpen} value={value} setValue={setValue} />
        <Product open={open} setOpen={setOpen} value={value}/>
      </div>
    </ApolloProvider>
  );
}

export default App;
