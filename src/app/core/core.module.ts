import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';
import { LeafletMapComponent } from './components/map/leaflet-map.component';
import { FeatureGroupComponent } from './components/map/groups/feature-group.component';
import { ClusterGroupComponent } from './components/map/groups/cluster-group.component';
import { MapMarkerComponent } from './components/map/markers/map-marker.component';
import { LocationMarkerComponent } from './components/map/markers/location-marker.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationComponent } from './components/notifications/notification/notification.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

const exports = [
  LoadingComponent,
  MapMarkerComponent,
  LocationMarkerComponent,
  MenuComponent,
  SettingsComponent,
  TypeSelectorComponent,
  LeafletMapComponent,
  FeatureGroupComponent,
  ClusterGroupComponent,
  NotificationsComponent,
];

const declarations = [NotificationComponent];

@NgModule({
  declarations: [...exports, ...declarations, ContentWrapperComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
    RouterModule,
  ],
  exports: [...exports, ContentWrapperComponent],
})
export class CoreModule {}
