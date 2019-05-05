class Api::V1::PropertiesController < ActionController::Base
  before_action :set_property, only: %i[show destroy]

  def index
    properties = Property.all
    render json: properties
  end

  def show
    render json: @property, include: { user: { only: %i[first_name last_name] } }
  end

  def create
    property = Property.create(property_params)
    render json: property
  end

  def destroy
    @property.destroy
    head :no_content
  end

  private

  def set_property
    @property = Property.find(params[:id])
  end

  def property_params
    params.require(:propery).permit(
      :name,
      :description,
      :city,
      :street_name,
      :building_number,
      :zip_code
    )
  end
end
