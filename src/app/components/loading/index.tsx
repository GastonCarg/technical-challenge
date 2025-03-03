const Loading = ({ className = "items-center min-h-screen" }: { className?: string }) => {
  return (
    <div
      className={`flex justify-center ${className}`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
