class Api::V1::PropertiesController < ActionController::Base
  def index
    properties = Property.all
    render json: properties
  end

  def show
    property = Property.find(params[:id])
    render json: property, include: { user: { only: %i[first_name last_name] } }
  end

  def create
    property = Property.create(property_params)
    render json: property
  end

  private

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
