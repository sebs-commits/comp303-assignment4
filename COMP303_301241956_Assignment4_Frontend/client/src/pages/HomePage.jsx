import StaffCreateForm from "../components/StaffCreateForm";
import StaffTable from "../components/StaffTable";

const HomePage = () => {
  return (
    <div className="container py-4">
      <div className="card mb-4">
        <div className="card-header bg-light">
          <h3 className="mb-0">Add New Staff Member</h3>
        </div>
        <div className="card-body">
          <StaffCreateForm />
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-light">
          <h3 className="mb-0">Staff Directory</h3>
        </div>
        <div className="card-body">
          <StaffTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
