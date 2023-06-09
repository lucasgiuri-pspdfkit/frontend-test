import {
  getUserData,
  getRepositories,
  filterRepositories,
  filterUserData,
} from "./helpers";

describe("helpers", () => {
  describe("filterUserData", () => {
    it("should return the user data", () => {
      const mockRequest = {
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        name: "mojombo",
        login: "mojombo",
        bio: "GitHub Developer",
      };

      const mockResponse = {
        id: 1,
        name: "mojombo",
        login: "mojombo",
        url: "https://avatars.githubusercontent.com/u/1?v=4",
        bio: "GitHub Developer",
      };

      const userData = filterUserData(mockRequest);
      expect(userData).toEqual(mockResponse);
    });
  });

  describe("filterRepositories", () => {
    it("should return the repositories", () => {
      const mockRequest = [
        {
          id: 1,
          name: "test",
          description: "test",
          forks: 12,
          html_url: "",
          stargazers_count: 1,
          language: "TypeScript",
        },
        {
          id: 2,
          name: "test",
          description: "test",
          html_url: "",
          stargazers_count: 1,
          language: "TypeScript",
        },
      ];

      const mockResponse = [
        {
          id: 1,
          name: "test",
          url: "",
          stars: 1,
          forks: 12,
        },
        {
          id: 2,
          name: "test",
          url: "",
          stars: 1,
          forks: undefined,
        },
      ];

      const repositories = filterRepositories(mockRequest);
      expect(repositories).toEqual(mockResponse);
    });
  });

  describe("getRepositories", () => {
    it("should return the repositories from the github api", async () => {
      const mockRequest = [
        {
          id: 1,
          name: "test",
          description: "test",
          html_url: "",
          stargazers_count: 1,
          language: "TypeScript",
        },
        {
          id: 2,
          name: "test",
          description: "test",
          html_url: "",
          stargazers_count: 1,
          language: "TypeScript",
        },
      ];

      const mockResponse = [
        {
          id: 1,
          name: "test",
          url: "",
          stars: 1,
          forks: undefined,
        },
        {
          id: 2,
          name: "test",
          url: "",
          stars: 1,
          forks: undefined,
        },
      ];

      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockRequest),
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const repositories = await getRepositories("josephmtinangi");
      expect(repositories).toEqual(mockResponse);

      // @ts-ignore
      global.fetch.mockClear();
      // @ts-ignore
      delete global.fetch;
    });
  });

  describe("getUserData", () => {
    it("should return the user data from the github api", async () => {
      const mockRequest = {
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        name: "mojombo",
        login: "mojombo",
        bio: "GitHub Developer",
        public_repos: 61,
        followers: 22200,
        following: 11,
      };

      const mockResponse = {
        id: 1,
        name: "mojombo",
        login: "mojombo",
        url: "https://avatars.githubusercontent.com/u/1?v=4",
        bio: "GitHub Developer",
      };

      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockRequest),
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const userData = await getUserData("josephmtinangi");
      expect(userData).toEqual(mockResponse);

      // @ts-ignore
      global.fetch.mockClear();
      // @ts-ignore
      delete global.fetch;
    });
  });
});
