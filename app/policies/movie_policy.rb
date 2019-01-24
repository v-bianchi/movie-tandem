class MoviePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(user: user)
    end
  end

  def create?
    true
  end

  def destroy?
    record.user == user
  end

  def toggle_watched?
    record.list.user_1 == user || record.list.user_2 == user
  end
end