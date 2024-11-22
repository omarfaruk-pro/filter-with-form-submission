

export default function GenderFilter({handleGenderFilter, genders}) {
  return (
    <>
        <div>
            <select defaultValue={""} className="select select-bordered w-full" onChange={(event) => handleGenderFilter(event)}>
                <option disabled>Filter by gender</option>
                <option value="">All</option>
                {
                    genders.map((gender) => (
                        <option key={gender} value={gender}>{gender}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}
