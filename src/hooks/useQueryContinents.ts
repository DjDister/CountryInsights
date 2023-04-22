import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface QueryResult<T> {
  loading: boolean;
  error?: Error;
  data?: T;
}

function useQueryContinents<T>(continentCode: string): QueryResult<T> {
  const GET_LOCATIONS = gql`
      query Query {
        continent(code: "${continentCode}") {
          countries {
            name
          }
        }
      }
    `;
  const [result, setResult] = useState<QueryResult<T>>({ loading: true });

  const { loading, error, data } = useQuery<T>(GET_LOCATIONS);

  useEffect(() => {
    if (loading) {
      setResult({ loading: true });
    } else if (error) {
      setResult({ loading: false, error });
    } else {
      setResult({ loading: false, data });
    }
  }, [loading, error, data]);

  return result;
}

export default useQueryContinents;
