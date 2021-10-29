import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const PatientsQuery = gql`
  query getPatients {
    patients {
      id
      name
    }
  }
`;

const Patients: React.FC = (props: any): JSX.Element => {
  const patients =
    props.patients && props.patients.patients
      ? props.patients.patients[0].name
      : null;

  return <span>{patients}</span>;
};

export default graphql(PatientsQuery, { name: 'patients' })(Patients);
