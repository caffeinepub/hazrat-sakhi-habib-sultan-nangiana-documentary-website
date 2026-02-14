import List "mo:core/List";

module {
  type VisitorMessage = {
    name : Text;
    message : Text;
    timestamp : Int;
  };

  type Actor = {
    messages : List.List<VisitorMessage>;
  };

  public func run(old : Actor) : Actor {
    old;
  };
};
