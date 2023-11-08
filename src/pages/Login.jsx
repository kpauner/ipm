export default function Login() {
  return (
    <div className="max-w-md">
      <h1 className="text-4xl font-extrabold">Log in</h1>
      <form className="bg-yellow-300 block">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold py-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="border-b-4 border-black py-4"
          />
        </div>
      </form>
    </div>
  );
}
