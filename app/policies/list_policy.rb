class ListPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(user_1: user).order(created_at: :asc)
    end
  end

  def show?
    record.user_1 == user || record.user_2 == user
  end

  def destroy?
    show?
  end
end
