class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :landing

  def root; end

  def landing; end
end
