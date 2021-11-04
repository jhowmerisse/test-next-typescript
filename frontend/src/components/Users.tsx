import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const UsersQuery = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;

const Users: React.FC = (props: any): JSX.Element => {
  const users =
    props.users && props.users.users
      ? props.users.users[0].name
      : null;

  return <span>{users}</span>;
};

export default graphql(UsersQuery, { name: 'users' })(Users);
