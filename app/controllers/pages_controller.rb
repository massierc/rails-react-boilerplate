class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: :landing

  def react; end

  def landing
    @properties = Property.all
  end
end
