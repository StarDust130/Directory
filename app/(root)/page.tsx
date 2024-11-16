import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export interface StartupCardType {
  _id: number;
  _createdAt: Date;
  views: number;
  author: { _id: number , name: string };
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "John Doe" },
      description:
        "A platform that helps you find the best coffee shops in your city.",
      image:
        "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww",
      category: "Robotics",
      title: "Robot at Daily Life",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your startup idea and get feedback from the community. <br />
          Connect with other entrepreneurs and grow your network.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? (
            <>
              Search results for <span className="text-primary">{query}</span>
            </>
          ) : (
            "All Startups"
          )}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
