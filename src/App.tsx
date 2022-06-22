import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      
      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

