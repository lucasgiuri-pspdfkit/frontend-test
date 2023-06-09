import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Components
import Input from "../components/input/input";
import List from "../components/list/list";
import Button from "../components/button/button";
import Text from "../components/text/text";
import Thumbnail from "../components/thumbnail/thumbnail";
// Helpers
import { getUserData, getRepositories } from "../helpers/helpers";
// Types
import type { NextPage } from "next";
import type { UserData, RepositoriesData } from "../helpers/helpers";

const FILE_LANG_NAME = "common";

const Home: NextPage = () => {
  const { t } = useTranslation(FILE_LANG_NAME);
  const [value, setValue] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repositories, setRepositories] = useState<RepositoriesData[] | []>([]);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setHasError(false);
      setRepositories([]);
      setUserData(null);
    const user = await getUserData(value);
    if (user && user.id) {
      setUserData(user);
      const repos = await getRepositories(value);
      setRepositories(repos);
      setHasError(false);
    } else {
      setHasError(true);
      setRepositories([]);
      setUserData(null);
    }
  };

  return (
    <main className="w-screen flex justify-center pt-8">
      <div className="w-full md:w-96 md:max-h-[550px] p-8 flex flex-col bg-white shadow-md-top rounded-xl">
        <form className="flex items-center">
          <Input
            type="text"
            value={value}
            placeholder={t("searchUsername")}
            onChange={setValue}
          />
          <div className="w-4" />
          <Button type="submit" text={t("search")} onClick={handleSubmit} />
        </form>
        {/* If there is no user, loading ends and value is not empty should show an error message */}
        {hasError && (
          <div className="mt-2 px-4 py-2 font-semibold border border-red-600 text-red-500 bg-red-400 rounded">
            {t("userNotFound")}
          </div>
        )}
        {/* If there is a user, we should show their data */}
        {userData && (
          <div className="flex items-stretch pt-4">
            <Thumbnail src={userData.url} alt="avatar" />
            <div className="flex flex-col justify-between items-stretch pl-4">
              <Text type="italic" text={`@${userData.login || ""}`} />
              <Text type="title" text={userData.name || "No name"} />
              <Text type="text" text={userData.bio || "No bio"} />
            </div>
          </div>
        )}
        {/* if user has repositories, we should show them */}
        {repositories && repositories.length > 0 && (
          <div className="flex flex-col pt-4 overflow-scroll">
            <div className="pb-2 border-b-2 border-gray-450">
              <Text type="subtitle" text={t("repositories")} />
            </div>
            <List items={repositories} />
          </div>
        )}
      </div>
    </main>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [FILE_LANG_NAME])),
    },
  };
}

export default Home;
