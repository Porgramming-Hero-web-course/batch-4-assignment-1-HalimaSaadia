{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  interface Partial {
    name?: string;
    age?: number;
    email?: string;
  }

  const updateProfile = (user: Profile, updatedInfo: Partial): Profile => {
    return { ...user, ...updatedInfo };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
