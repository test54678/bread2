import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from '@aws-amplify/core';
import { authLabels } from './components/TranslationLabels';


I18n.putVocabularies(authLabels);
I18n.setLanguage('ja');


type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

const App: React.FC<AppProps> = ({ signOut, user }) => {
  

  return (
    <div style={styles.container}>
      <Heading level={6}>サインインユーザー名： {user?.username}</Heading><br />
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  
} as const;

export default withAuthenticator(App);