import Link from "next/link";

const Error = (error: any) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-red-500 flex-col">
      <p>Error: {error.message}</p>
      <Link href={"/"} className="text-blue-600">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error;
