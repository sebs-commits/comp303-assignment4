import StaffCreateForm from "../components/StaffCreateForm";
import StaffTable from "../components/StaffTable";

const HomePage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <StaffCreateForm />
      </div>

      <div className="card-body">
        <StaffTable />
      </div>
    </div>
  );
};

export default HomePage;
