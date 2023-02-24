import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MapMarkerComponent } from './components/map/markers/map-marker.component';
import { LocationMarkerComponent } from './components/map/markers/location-marker.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';

@NgModule({
  declarations: [
    MapComponent,
    LoadingComponent,
    MapMarkerComponent,
    LocationMarkerComponent,
    MenuComponent,
    SettingsComponent,
    TypeSelectorComponent,
  ],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule],
  exports: [
    MapComponent,
    LoadingComponent,
    MapMarkerComponent,
    LocationMarkerComponent,
    MenuComponent,
    SettingsComponent,
    TypeSelectorComponent,
  ],
})
export class CoreModule {}
