module ApplicationHelper
  def should_render_react
    routes = Rails.configuration.rails_routes
    current_path = request.env['PATH_INFO'].gsub(/\//, '')
    current_path = 'root' if current_path.empty?
    !routes.include? current_path
  end
end
