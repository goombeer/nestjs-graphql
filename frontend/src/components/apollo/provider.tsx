"use client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import client from "../../../apollo/client";

const ApolloProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={client}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloProvider;
