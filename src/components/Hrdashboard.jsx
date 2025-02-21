import './Hrdashboard.css';
import Menu from './Menu/Menu';
import VuesaxLinearCalendar from './VuesaxLinearCalendar/VuesaxLinearCalendar';
/*import MessageChat01 from "../MessageChat01/MessageChat01.jsx";
import LogOutSize48 from "../LogOutSize48/LogOutSize48.jsx";
*/
export const Hrdashboard = ({ className, ...props }) => {
  return (
    <div className={"hr-mangment " + className}>
      <div className="rectangle-108"></div>
      <img className="rectangle-4" src="/rectangle-40.svg" alt="rectangle" />
      <img className="icon" src="/icon0.svg" alt="icon" />
      <div className="employee-reports">Employee &amp; Reports</div>
      <div className="dashboard">Dashboard</div>
      
      {/* Notification Section */}
      <div className="group-3">
        <div className="ellipse-4"></div>
      </div>
      <img className="bell" src="/bell0.svg" alt="bell" />
      <div className="ellipse-42"></div>
      <div className="_13">13</div>
      
      {/* User Profile */}
      <div className="ellipse-2"></div>
      <div className="group-1">
        <div className="ellipse-1"></div>
        <img className="dp-1" src="/dp-10.png" alt="profile" />
      </div>
      
      {/* Main Content */}
      <div className="rectangle-124"></div>
      <div className="events">Events</div>
      <div className="ellipse-51"></div>
      
      {/* Charts Section */}
      <div className="frame-26">
        <img className="ellipse-38" src="/ellipse-380.svg" alt="ellipse" />
        {/* Months */}
        <div className="jan">Jan</div>
        <div className="feb">Feb</div>
        <div className="mar">Mar</div>
        <div className="may">May</div>
        <div className="apr">Apr</div>
        <div className="jun">Jun</div>
        <div className="jul">Jul</div>
        <div className="agu">Agu</div>
        <div className="sep">Sep</div>
        <div className="oct">Oct</div>
        
        {/* Chart Elements */}
        <div className="_40">40%</div>
        <div className="ellipse-39"></div>
        <div className="ellipse-40"></div>
        <div className="ellipse-41"></div>
        <div className="ellipse-422"></div>
        <div className="ellipse-43"></div>
        <img className="ellipse-45" src="/ellipse-450.svg" alt="ellipse" />
        <div className="_10">10%</div>
        <div className="_20">20%</div>
        <div className="_30">30%</div>
        
        {/* Chart Lines */}
        <img className="line-22" src="/line-220.svg" alt="line" />
        <div className="line-23"></div>
        <div className="line-24"></div>
        <div className="line-25"></div>
        <div className="line-26"></div>
        <div className="line-27"></div>
        
        <div className="attrition-rate">Attrition rate</div>
        <img className="bar-chart" src="/bar-chart0.svg" alt="chart" />
        <div className="nov">Nov</div>
        <div className="dec">Dec</div>
        
        <div className="frame-22">
          <div className="view-details">View details</div>
        </div>
        <div className="text"></div>
      </div>

      {/* Stats Section */}
      <div className="rectangle-32"></div>
      <div className="_1200">1200</div>
      <div className="total-employees">Total Employees</div>
      <img className="user-alt" src="/user-alt0.svg" alt="users" />
      
      {/* Jobs Section */}
      <div className="rectangle-29"></div>
      <div className="_5">5</div>
      <div className="jobs">Jobs</div>
      <img className="vector" src="/vector0.svg" alt="vector" />
      
      {/* Menu */}
      <div className="envelope"></div>
      <Menu className="menu-instance" />
      
      {/* Department Overview */}
      <img className="bg" src="/bg0.svg" alt="background" />
      <div className="it">IT</div>
      <div className="numbers">
        <div className="_150">150</div>
        <div className="_100">100</div>
        <div className="_50">50</div>
        <div className="_102">10</div>
        <div className="_0">0</div>
      </div>
      <img className="line" src="/line0.svg" alt="line" />
      
      {/* Department List */}
      <div className="years">
        <div className="_2010">Marketing</div>
        <div className="_2011">HR</div>
        <div className="_2012">Finance</div>
        <div className="_2013">Sales</div>
      </div>
      <img className="bar" src="/bar0.svg" alt="bar" />
      
      {/* Workforce Section */}
      <div className="employee-gaps-by-department">
        Employee Gaps by Department
      </div>
      <img className="arrow-7" src="/arrow-70.svg" alt="arrow" />
      <img className="bg2" src="/bg1.svg" alt="background" />
      
      {/* Additional Stats */}
      <div className="numbers">
        <div className="_1502">150</div>
        <div className="_1002">100</div>
        <div className="_502">50</div>
        <div className="_103">10</div>
        <div className="_02">0</div>
      </div>
      <img className="line2" src="/line1.svg" alt="line" />
      <img className="bar2" src="/bar1.svg" alt="bar" />
      
      {/* Timeframe */}
      <div className="_3-months">(3 months)</div>
      
      {/* Status Indicators */}
      <div className="promotions">Promotions</div>
      <div className="exit">Exit</div>
      <div className="new-hire">New Hire</div>
      <div className="work-force-tenders">Work Force Tenders</div>
      <div className="ellipse-52"></div>
      <div className="ellipse-53"></div>
      <div className="ellipse-54"></div>
      
      {/* Projects Section */}
      <div className="frame-29">
        <VuesaxLinearCalendar className="vuesax-linear-calendar-instance" />
        <div className="projects">Projects</div>
      </div>
      
      {/* Vertical Line */}
      <img className="vertical-line" src="/vertical-line0.svg" alt="line" />
      
     
    </div>
  );
};