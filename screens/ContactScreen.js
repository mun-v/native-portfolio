import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1702 W. Douglas Ave.</Text>
        <Text>Wichita, KS 67203</Text>
        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
        <Text>Phone: 1-316-221-0648</Text>
        <Text>Email: events@amiradanceproductions.com</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
