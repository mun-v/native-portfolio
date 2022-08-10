import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

const ContactScreen = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["events@amiradanceproductions.com"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  };

  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text>1702 W. Douglas Ave.</Text>
          <Text>Wichita, KS 67203</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
          <Text>Phone: 1-316-221-0648</Text>
          <Text>Email: events@amiradanceproductions.com</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#F8751B", margin: 40 }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => sendMail()}
          />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
