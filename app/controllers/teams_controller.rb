class TeamsController < ApplicationController
  def index
    @teams = Team.all

    respond_to do |format|
      format.json { render :json => { :content => @teams.map{ |t| json_for_team(t)} } }
      format.html
      format.xml { render :xml => @teams }
    end
  end

  def show
    @team = Team.find( params[:id] )

    respond_to do |format|
      format.html
      format.xml { render :xml => @team }
      format.json do
        render :json => {
          :content => json_for_team( @team ),
          :location => team_path(@team)
        }
      end
    end
  end

  def new
  end

  def create
    @team = Team.new( params[:team] )

    respond_to do |format|
      if( @team.save )
        flash[:notice] = 'Team was successfully created'
        format.json do
          render :json => { 
            :content => json_for_team( @team ) },
            :status => :created,
            :location => team_path(@team)
        end
        format.html { render :action => 'new' }
        format.xml { render :xml => @team, :status => :created, :location => @task }
      else
        format.html { render :action => 'new' }
        format.xml { render :xml => @team.errors, :status => :unprocessable_entity }

      end
    end
  end

  def update
    @team = Team.find( params[:id] )
    params[:team].delete(:guid)

    respond_to do |format|
      if( @team.update_attributes( params[:team] ) )
        flash[:notice] = 'Team was successfully updated.'
        format.json do
          render :json => { :content => json_for_team( @team ), :location => team_path(@team) }
        end
        format.html { redirect_to( @task ) }
        format.xml { head :ok }
      else
        format.html { render :action => 'edit' }
        format.xml { render :xml => @team.errors, :status => :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def destroy
    @team = Team.find( params[:id] )
    @team.destroy

    respond_to do |format|
      format.json { head :ok }
      format.html { redirect_to(teams_url_)}
      format.xml { head :ok }
    end
  end

  protected

  def json_for_team( team )
    {
      :guid => team_path(team),
      :name => team.name,
      :is_registered => team.is_registered
    }
  end
end
