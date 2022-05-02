import { Container } from './Container';
import { FriendList } from './Friends';
import { Profile } from './Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics';
import data from './Statistics/data.json';
import { Friends } from './Friends';
import friends from './Friends/friends.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </Container>
  );
};
