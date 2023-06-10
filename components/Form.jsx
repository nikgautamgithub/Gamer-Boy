import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Game</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing Games with the world, and let your favourite
        game be known.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Game Name
          </span>
          <input
            defaultValue={post.gameName}
            onChange={(e) => {
              setPost({
                ...post,
                gameName: e.target.value,
              });
            }}
            placeholder="Mention the name of the game..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Game Info
          </span>
          <textarea
            defaultValue={post.game}
            onChange={(e) => {
              setPost({
                ...post,
                game: e.target.value,
              });
            }}
            placeholder="Write about this game..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Genre {` `}
            <span className="font-normal">
              (#adventure,#shooting,#fighting)
            </span>
          </span>
          <input
            defaultValue={post.tag}
            onChange={(e) => {
              setPost({
                ...post,
                tag: e.target.value,
              });
            }}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
