class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(sender: user).or(scope.where(receiver: user))
    end
  end

  def create?
    true
  end

  def accept?
    record.receiver == user
  end

  def destroy?
    accept? || record.sender == user
  end
end
