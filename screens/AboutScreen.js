import { Text, ScrollView } from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const AboutScreen = () => {
  const instructors = useSelector((state) => state.instructors);

  const Founder = () => {
    return (
      <Card>
        <Card.Title>About Us</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Founded in 1974, Amira Dance Productions is Wichita's longest running,
          community dance studio offering instruction and performances in
          various cultural dance styles from across the globe.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Our dance studio was founded by Alice Castilow, who also co-founded
          the Metropolitan Ballet of Wichita. Castilow, who took teh stage name
          Amira, was among the first dance instructors in Wichita to offer belly
          dance.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          She also embraced other forms of dance, including flamenco, folkloric,
          and Polynesian, teaching them to her students as well.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Since her death in 2004, the studio ownership has transitioned to
          former students who have grown the number of staff, students and class
          offerings.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          The studio is known for its annual dance show that educates and
          entertains Wichita audiences with cultural dances, as well as
          performances at community and private events.
        </Text>
      </Card>
    );
  };

  const Mission = () => {
    return (
      <Card>
        <Card.Title>Mission</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>
          Dedicated to enriching lives through teaching, educating, and
          performing of cultural dances.
        </Text>
      </Card>
    );
  };

  const Vision = () => {
    return (
      <Card>
        <Card.Title>Vision</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>
          To create a welcoming community of dancers who share the joy of dance.
        </Text>
      </Card>
    );
  };

  return (
    <ScrollView>
      <Founder></Founder>
      <Mission></Mission>
      <Vision></Vision>
      <Card>
        <Card.Title>Studio Instructors</Card.Title>
        <Card.Divider />
        {instructors.instructorsArray.map((instructor) => (
          <ListItem key={instructor.id}>
            <Avatar rounded source={{ uri: baseUrl + instructor.image }} />
            <ListItem.Content>
              <ListItem.Title>{instructor.name}</ListItem.Title>
              <ListItem.Subtitle>{instructor.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
