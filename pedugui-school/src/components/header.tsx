interface IHeaderProps {
  title: string;
}
const Header = ({ title }: IHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          {title}
          {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-portal-yellow/30 text-portal-dark">
            Section élève
          </span> */}
        </h1>
        {/* <p className="text-sm text-portal-dark/70">
          Passez en revue votre journée, vos communications et résultats.
        </p> */}
      </div>

      <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-2xl shadow-md">
        <div className="w-10 h-10 rounded-full bg-portal-green/20 flex items-center justify-center text-lg font-semibold text-portal-green">
          JL
        </div>
        <div className="hidden sm:block leading-tight">
          <p className="text-sm font-semibold">John Learner</p>
          <p className="text-xs text-portal-dark/60">ID: STU-2025-014</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
