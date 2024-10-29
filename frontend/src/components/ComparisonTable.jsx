import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './featurestable.css';

const ComparisonTable = () => {
  const data = [
    {
      feature: 'Free Recruiting Resources',
      rm: 'Y',
      ncsa: 'Y',
      others: 'N',
    },
    {
      feature: 'Offers Recruiting Services for All Sports',
      rm: 'N',
      ncsa: 'Y',
      others: 'Y',
    },
    {
      feature: 'Designed Specifically for Track and Field',
      rm: 'Y',
      ncsa: 'N',
      others: 'N',
    },
    {
      feature: '1-on-1 Recruiting advice from current D1 Athletes',
      rm: 'Y',
      ncsa: 'N',
      others: 'N',
    },
    {
      feature: 'Affordable Pricing',
      rm: 'Y',
      ncsa: 'N',
      others: 'N',
    },
  ];

  // Function to render tick based on value
  const renderTick = (value) => {
    if (value === 'Y') {
      return <FontAwesomeIcon icon={faCheck} />
    } else {
      return <FontAwesomeIcon icon={faCircleXmark} />
    }
  };

  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>RM - RecruitMate</th>
          <th>NCSA - College Recruiting</th>
          <th>Other Services</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.feature}</td>
            <td>{renderTick(row.rm)}</td>
            <td>{renderTick(row.ncsa)}</td>
            <td>{renderTick(row.others)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
