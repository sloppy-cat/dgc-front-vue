import axios from "axios"
import { User, UserList} from "./type"


export const fetchUserList = async (keyword: string, page?: number): Promise<UserList> => {
  const params = {
    q: keyword ? `${keyword} in:login` : " in:login",
    per_page: 5,
    
  }
  // const TOKEN = process.env.PERSONAL_TOKEN
  // console.log(TOKEN)
  return axios.request<UserList>({
    url: "https://api.github.com/search/users",
    headers: {
      // Authorization: `token ${TOKEN}`
      Authorization: `token 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`
    },
    params: {...params, page},
    method: 'GET'
  }).then((res) => res.data).catch((error)=>error)
}

export const fetchUser = async (username: string): Promise<User> => {
  return axios.request<UserList>({
    url: `https://api.github.com/users/${username}`,
    headers: {
      // Authorization: `token ${TOKEN}`
      Authorization: `token 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`
    },
    method: 'GET'
  }).then((res)=>res.data).catch((error)=>error)
}

export const fetchMultiUser = async (userList: UserList): Promise<User[]> => {
  return axios.all<User>(
    userList.items.map((value: User)=>fetchUser(value.login))
  ).then(
    axios.spread((...userDetailList)=>userDetailList)
  ).catch((error)=>error)
}