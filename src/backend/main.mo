import List "mo:core/List";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type VisitorMessage = {
    name : Text;
    message : Text;
    timestamp : Int;
  };

  let messages = List.empty<VisitorMessage>();

  public shared ({ caller }) func submitMessage(name : Text, message : Text) : async () {
    let newMessage : VisitorMessage = {
      name;
      message;
      timestamp = Time.now();
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [VisitorMessage] {
    messages.toArray();
  };
};
