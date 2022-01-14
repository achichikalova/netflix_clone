import './PlanList.css';

const plans =
  [
    {
      name: 'Premium',
      desc: '4K + HDR'
    },
    {
      name: 'Basic',
      desc: '720p'
    },
    {
      name: 'Standard',
      desc: '1080p'   
    }
  ]


const PlanList = () => {

  const planList = plans.map(plan => {
    return (
      <div className='planList'>
        <div className='planList-info'>
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
