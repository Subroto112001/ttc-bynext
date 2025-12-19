import MemberTable from "@/component/MemberTable";
import { allMembers } from "@/helper/Information";

const StaffsPage = () => {
  // কর্মচারীদের ফিল্টার করা (যারা ইন্সট্রাক্টর বা প্রিন্সিপাল নন)
const staffs = allMembers.filter((m) => m.category === "staff");
  return <MemberTable members={staffs} title="কর্মচারীবৃন্দ" />;
};

export default StaffsPage;
