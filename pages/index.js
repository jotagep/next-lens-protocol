import Link from "next/link";
import { useQuery } from "urql"
import { RecommendedProfiles } from '../graphql/queries/RecommendProfiles.gql'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr);
  grid-gap: 20px;

  a {
    display: block;
  }
`;

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: RecommendedProfiles,
  });

  const { data = { recommendedProfiles: [] }, fetching, error } = result;

  return (
    <Grid>
      {data.recommendedProfiles.map((profile => (
        <Link key={profile.id} href={`/profile/${profile.id}`}>
          <a>
            <div>
              <h4>{profile.name}</h4>
            </div>
          </a>
        </Link>
      )))}
    </Grid>
  )
}
