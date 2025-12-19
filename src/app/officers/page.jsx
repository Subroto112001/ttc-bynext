import MemberTable from "@/component/MemberTable";
import { allMembers } from "@/helper/Information";


const OfficersPage = () => {
  // কর্মকর্তাদের ফিল্টার করা (Principal + Instructors)
 const officers = allMembers.filter((m) => m.category === "officer");

  return <MemberTable members={officers} title="কর্মকর্তাবৃন্দ" />;
};

export default OfficersPage;
