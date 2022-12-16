import { User, UserId } from "../user";

test('equal method', () => {
    const userId1 = new UserId("hoge");
    const user1 = new User(userId1, "user1");

    const userId2 = new UserId("foo");
    const user2 = new User(userId2, "user2");

    // valid case
    expect(user1.equals(user2)).toBeFalsy();
    
    // no happen case (id is unique)
    const user3 = new User(userId1, "user3");

    expect(user1.equals(user3)).toBeTruthy()
    expect(user2.equals(user3)).toBeFalsy();
});
