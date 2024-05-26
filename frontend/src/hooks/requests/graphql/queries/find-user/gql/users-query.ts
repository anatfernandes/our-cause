import { gql } from "@apollo/client";

const USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      name
      username
      about
      avatar
      background

      following {
        id
        name
        username
        about
        avatar
      }

      followed {
        id
        name
        username
        about
        avatar
      }

      posts {
        id
        content
        locale
        links
        createdAt
        reactions
        comments
        saved
        liked

        topics {
          id
          name
        }

        owner {
          id
          name
          username
          avatar
        }
      }

      liked {
        id
        content
        locale
        links
        createdAt
        reactions
        comments
        saved
        liked

        topics {
          id
          name
        }

        owner {
          id
          name
          username
          avatar
        }
      }

      saved {
        id
        content
        locale
        links
        createdAt
        reactions
        comments
        saved
        liked

        topics {
          id
          name
        }

        owner {
          id
          name
          username
          avatar
        }
      }
    }
  }
`;

export { USER };
