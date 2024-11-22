

export default function Table({filtered, removeStudent, groupFilterRender, genderFilterRender, marksFilterRender}) {
   
    return (
        <div className="overflow-x-auto mt-6">
          <table className="table capitalize">
            <thead>
              <tr className="text-white text-lg">
                <td></td>
                <td></td>
                <td>{genderFilterRender}</td>
                <td>{groupFilterRender}</td>
                <td>{marksFilterRender}</td>
                <td></td>
              </tr>
              {filtered.length > 0 && (
                <tr className="text-white text-lg">
                  <td>ID</td>
                  <td>Name</td>
                  <td>Gender</td>
                  <td>Group</td>
                  <td>Mark</td>
                  <td>Action</td>
                </tr>
              )}
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-white text-lg">
                    No student data here...
                  </td>
                </tr>
              ) : (
                filtered.map((student) => (
                  <tr key={student.id}>
                    <td className="border-b border-slate-500">{student.id}</td>
                    <td className="border-b border-slate-500">{student.name}</td>
                    <td className="border-b border-slate-500">{student.gender}</td>
                    <td className="border-b border-slate-500">{student.group}</td>
                    <td className="border-b border-slate-500">{student.mark}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => removeStudent(student.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      );
      
}
