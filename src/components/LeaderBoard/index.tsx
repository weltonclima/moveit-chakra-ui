import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, User } from "./styles";

interface User {
  ref: {
    id: string;
  },
  data: {
    id: number;
    name: string;
    avatar_url: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

interface LoaderBoardProps {
  home: boolean;
}

export function LeaderBoard({ home }: LoaderBoardProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [screenWidth, setScreenWidth] = useState(screen.width);

  const interval = setInterval(() => {
    screenWidth != screen.width && setScreenWidth(screen.width)
    home && clearInterval(interval)
  }, 1000)

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get<User[]>('/users');

      setUsers(data)
    }
    getUser()
  }, [])

  return (
    <Container>
      <h1>LeaderBoard</h1>
      <table>
        <thead>
          <tr>
            <th>POSIÇÃO</th>
            <th>USUÁRIO</th>
            {screenWidth > 430 &&
              <>
                <th>DESAFIOS</th>
                <th>EXPERIÊNCIA</th>
              </>
            }
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.data.id}>
              <td>{index + 1}</td>
              <td>
                <User>
                  <img src={user.data.avatar_url} alt={user.data.name} />
                  <div>
                    <span>{user.data.name}</span>
                    <div>
                      <img src="icons/level.svg" alt="Level" />
                      <small>{user.data.level}</small>
                    </div>
                  </div>
                </User>
              </td>
              { screenWidth > 430 &&
                <>
                  <td>
                    <span>{user.data.challengesCompleted}</span> completados
                  </td>
                  <td>
                    <span>{user.data.currentExperience}</span> xp
                  </td>
                </>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
