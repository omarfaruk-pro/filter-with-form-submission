
export default function GroupFilter({ handleGroupFilter, groups}) {
  return (
    <>
        <div>
            <select defaultValue="" className="select select-bordered w-full max-w-xs" onChange={(event) => handleGroupFilter(event)}>
                <option disabled>Filter by group</option>
                <option value="">All</option>
                {
                    groups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}
