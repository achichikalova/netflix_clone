import './PlanList.css';

const plans =
  [
    {
      name: 'Premium',
      desc: '4K + HDR',
      id: 1
    },
    {
      name: 'Basic',
      desc: '720p',
      id: 2
    },
    {
      name: 'Standard',
      desc: '1080p',
      id: 3
    }
  ]


const PlanList = () => {

  const planList = plans.map(plan => {
    return (
      <div className='planList'>
        <div className='planList-info' key={plan.id}>
          <div>{plan.desc}</div>
          <div>{plan.name}</div>
        </div>
        <button className='playList-btn'>Subscribe</button>
      </div>
    )
  });

  return (
    <>
      {planList}
    </>
  )
}

export default PlanList;
