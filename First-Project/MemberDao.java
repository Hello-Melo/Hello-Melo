package Dao;

import java.util.ArrayList;
import java.util.List;

import Common.NotFoundMember;
import Model.Member;

public class MemberDao {

	List<Member> memberlist = new ArrayList<Member>();
	
	public MemberDao() {
		memberlist.add(new Member(1, "병거니", "1234", "byung@bb.bb"));
		memberlist.add(new Member(2, "펭이커", "4444", "byung@bb.bb"));
		memberlist.add(new Member(3, "기디디", "3334", "byung@bb.bb"));
		memberlist.add(new Member(4, "펭수84", "2224", "byung@bb.bb"));
	}

	public List<Member> selectAll() {
		return memberlist;
	}

	public Member selectById(int id) {
			Member findMember = null;
			for(Member m : memberlist) {
				if(id == m.getId())
				findMember = m;
				}
		if(findMember == null) throw new NotFoundMember("찾으시는 회원이 없습니다.");
		return findMember;
	}

	public List<Member> selectByName(String name) {
			List<Member> findMember = new ArrayList<Member>();
			for(var n : memberlist) {
				if(name.equals(n.getName()))
					findMember.add(n);
			}
		if(findMember.isEmpty()) throw new NotFoundMember("닥춋!");
		return findMember;
	}

	public void insert(Member members) {
		int index = memberlist.size() -1;
		members.setId(memberlist.get(index).getId()+1);
		memberlist.add(members);
		System.out.println(members.getName() + " 님의 회원가입이 완료되었습니다.");
	}

	public void delest(int id) {
		Member selectById = selectById(id);
		int index = memberlist.indexOf(selectById);
		System.out.println(selectById.getName() + " 님이 삭제되었습니다.");
		memberlist.remove(index);
	}

	public void update(int id, String email) {
		Member selectById = selectById(id);
		int index = memberlist.indexOf(selectById);
		System.out.println(selectById.getName() + " 님의 이메일이 변경되었습니다.");
		memberlist.get(index).setEmail(email);
		
	}

	
	
}
