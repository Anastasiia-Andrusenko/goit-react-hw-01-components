
export const Statistics = ({title, stats}) => {
  return <section className="statistics">
    <h2 className="title">{title}</h2>
  <ul className="stat-list">
    <li className="item">
      <span className="label">.docx</span>
      <span className="percentage"{}%</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">{}%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">{}%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">{}%</span>
      </li>
      <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">{}%</span>
    </li>
  </ul>
</section>
}