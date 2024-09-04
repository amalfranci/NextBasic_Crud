import React from "react";
import Button from "./Button";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.log("error to load topics", error);
    return null; // Return null if there's an error
  }
};

async function TopicsList() {
  const data = await getTopics();
  const { topics } = await data;

  return (
    <>
      {topics.map((t) => (
        <div className="flex justify-between p-2 mt-3 border ">
          <div>
            <h2 className="font-bold">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-6 p-3">
            <Button id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicsList;
