import useFetch from "./hooks/useFetch";

function Products() {
  const [data, loading, errorMsg] = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (errorMsg) return <p>Error: {errorMsg}</p>;

  if (data) localStorage.setItem("result", "Liste başırılı bir şekilde yüklendi.");

  localStorage.clear();

  return (
    <div>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.email}</p>
          </div>
        ))}
    </div>
  );
}

export default Products;
