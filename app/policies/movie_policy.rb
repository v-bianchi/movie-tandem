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
    destroy? || record.list.user_1 == user
  end
end