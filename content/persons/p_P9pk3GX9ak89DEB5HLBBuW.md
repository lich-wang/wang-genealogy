---
schema: wang-person/v1
id: p_P9pk3GX9ak89DEB5HLBBuW
status: active
merged_into: null
display_name: 王用
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3KQFG1DXb4BWr58j5P47G
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LAK4mVBfeGKqdxg34RN17U
          claim_id: c_i3KQFG1DXb4BWr58j5P47G
          source_id: s_R5j2N8JoCqAHGEsJpSCb1m
          stance: supports
          locator: CBDB:699431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699431）
          source: &a1
            id: s_R5j2N8JoCqAHGEsJpSCb1m
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 699431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699431&o=json
            external_identifier: CBDB:699431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m38iXNgADAhZHCHTcpEkzp
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_77XNLyLZstDzH96rXaPNh7
          claim_id: c_m38iXNgADAhZHCHTcpEkzp
          source_id: s_R5j2N8JoCqAHGEsJpSCb1m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1OHAXHpjFV22VT0CWrooUc
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJKyaqOXtmGrQwZhN5yl6F
          claim_id: c_1OHAXHpjFV22VT0CWrooUc
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ebyTGK7ELo3HAFB92wqGA3
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 699373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json
            external_identifier: CBDB:699373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6r5VwfkrP2qbqzP6hHoNQi
        status: active
        display_name: 王弁
        merged_into_person_id: null
    - claim:
        id: c_Z20eGd0qMBDKUdEHlnESjE
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZzzwX3Ueg6u7hYPJgwsLb
          claim_id: c_Z20eGd0qMBDKUdEHlnESjE
          source_id: s_H4sam77qGJPQZBgx4LDicZ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H4sam77qGJPQZBgx4LDicZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 699444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699444&o=json
            external_identifier: CBDB:699444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FpqHn8pwLrMWfy1VHw9FJa
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_3CjVsICod2M9GKCaGeAVtv
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kss91KaUX2qsiS3UfcBtty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bO8wTHawHTjATvndC1f2R
          claim_id: c_3CjVsICod2M9GKCaGeAVtv
          source_id: s_GLGzAvp4fAe84UqYjBvBUx
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLGzAvp4fAe84UqYjBvBUx
            source_type: api_record
            title: 中国历代人物传记资料库：王習（CBDB 699438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699438&o=json
            external_identifier: CBDB:699438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kss91KaUX2qsiS3UfcBtty
        status: active
        display_name: 王習
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ilB6AMovpeWODGQVpSz7rI
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MoCCJRcBFzHJznta14EJo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNMe-UxjAT4LXvHAQxXJ94
          claim_id: c_ilB6AMovpeWODGQVpSz7rI
          source_id: s_uWNJuJ54bP57vC2U6J57gi
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uWNJuJ54bP57vC2U6J57gi
            source_type: api_record
            title: 中国历代人物传记资料库：王喜姑（CBDB 699463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699463&o=json
            external_identifier: CBDB:699463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MoCCJRcBFzHJznta14EJo
        status: active
        display_name: 王喜姑
        merged_into_person_id: null
    - claim:
        id: c_LckcFVa76eLiQCt0tmWoI9
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AgH72LoZH5XqEbKoHmWF2B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z89jYeS-Fv12S3g02iBdio
          claim_id: c_LckcFVa76eLiQCt0tmWoI9
          source_id: s_fPFmc8Lg1FwKxtJT43QQTe
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fPFmc8Lg1FwKxtJT43QQTe
            source_type: api_record
            title: 中国历代人物传记资料库：王羅兒（CBDB 699460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699460&o=json
            external_identifier: CBDB:699460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AgH72LoZH5XqEbKoHmWF2B
        status: active
        display_name: 王羅兒
        merged_into_person_id: null
    - claim:
        id: c_Jg3Ax_0hhbIwVoMNu694VS
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_axq8URLSpJG5GjJ2ugi2TC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3cPcz77_ocUnMuUj2fjEY
          claim_id: c_Jg3Ax_0hhbIwVoMNu694VS
          source_id: s_6BPbjNQm4D2Cw9Ep3xteG2
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6BPbjNQm4D2Cw9Ep3xteG2
            source_type: api_record
            title: 中国历代人物传记资料库：王閏兒（CBDB 699459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699459&o=json
            external_identifier: CBDB:699459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_axq8URLSpJG5GjJ2ugi2TC
        status: active
        display_name: 王閏兒
        merged_into_person_id: null
    - claim:
        id: c_1rVAbn3hFfBUjmB7lUpQan
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eHnXWwDSoLx1gDXyHetbF2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-eSTk2kaGjATNuO_L5VLBf
          claim_id: c_1rVAbn3hFfBUjmB7lUpQan
          source_id: s_8G1niUnNJBECv317ABqLWF
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8G1niUnNJBECv317ABqLWF
            source_type: api_record
            title: 中国历代人物传记资料库：王六姐（CBDB 699469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699469&o=json
            external_identifier: CBDB:699469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eHnXWwDSoLx1gDXyHetbF2
        status: active
        display_name: 王六姐
        merged_into_person_id: null
    - claim:
        id: c_fGVu8r9Ooj6zyHzR1EAZHX
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ha2jFMvroq3Zp6PxAg7LoJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERmLvlJi8ejW8f87y5eRk1
          claim_id: c_fGVu8r9Ooj6zyHzR1EAZHX
          source_id: s_YEL1vRn8uCjuC8FKusZd22
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YEL1vRn8uCjuC8FKusZd22
            source_type: api_record
            title: 中国历代人物传记资料库：王閏姐（CBDB 699466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699466&o=json
            external_identifier: CBDB:699466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ha2jFMvroq3Zp6PxAg7LoJ
        status: active
        display_name: 王閏姐
        merged_into_person_id: null
    - claim:
        id: c_H875941XHwLbuQ1-EWnVoV
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HxXDHBGc1gJ7CMUNuoHTfX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6JkvWAcW-JiUbYGS7s8J6
          claim_id: c_H875941XHwLbuQ1-EWnVoV
          source_id: s_wHkBQnXp2JAcmBcmBbzFjW
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wHkBQnXp2JAcmBcmBbzFjW
            source_type: api_record
            title: 中国历代人物传记资料库：王栲栳兒（CBDB 699451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699451&o=json
            external_identifier: CBDB:699451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HxXDHBGc1gJ7CMUNuoHTfX
        status: active
        display_name: 王栲栳兒
        merged_into_person_id: null
    - claim:
        id: c_x0mFtZQD1wcELCLYvalFM1
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HZwkKexk2XLbosvJUAyZ7Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yv2vvDRvs3TH3uADZy_jqF
          claim_id: c_x0mFtZQD1wcELCLYvalFM1
          source_id: s_4jM26nmDRWtLLJm5iPQcFm
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4jM26nmDRWtLLJm5iPQcFm
            source_type: api_record
            title: 中国历代人物传记资料库：王七兒（CBDB 699456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699456&o=json
            external_identifier: CBDB:699456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HZwkKexk2XLbosvJUAyZ7Y
        status: active
        display_name: 王七兒
        merged_into_person_id: null
    - claim:
        id: c_8gy4wIxiw3TIaK9Q-MHwKV
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ig5jJ8rtecrSaLZugvUeFb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QQTXXaTiF8hSWVYKljInvq
          claim_id: c_8gy4wIxiw3TIaK9Q-MHwKV
          source_id: s_kUnFrBn4a5vzQW6PW5e3Pm
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kUnFrBn4a5vzQW6PW5e3Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王傅喜（CBDB 699455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699455&o=json
            external_identifier: CBDB:699455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ig5jJ8rtecrSaLZugvUeFb
        status: active
        display_name: 王傅喜
        merged_into_person_id: null
    - claim:
        id: c_NtWpDDsyRZcmAByLSkbeVf
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ii71MNmYm2yb9MzkjFFByN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hEZJbfy5mmEnKcDLbTNocn
          claim_id: c_NtWpDDsyRZcmAByLSkbeVf
          source_id: s_A6wgfQvEHNX2aLTEgEx5ci
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A6wgfQvEHNX2aLTEgEx5ci
            source_type: api_record
            title: 中国历代人物传记资料库：王年姐（CBDB 699467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699467&o=json
            external_identifier: CBDB:699467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ii71MNmYm2yb9MzkjFFByN
        status: active
        display_name: 王年姐
        merged_into_person_id: null
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6r5VwfkrP2qbqzP6hHoNQi | 王弁 | accepted |
| children | p_FpqHn8pwLrMWfy1VHw9FJa | 王信 | accepted |
| children | p_kss91KaUX2qsiS3UfcBtty | 王習 | accepted |
| descendants | p_5MoCCJRcBFzHJznta14EJo | 王喜姑 | accepted |
| descendants | p_AgH72LoZH5XqEbKoHmWF2B | 王羅兒 | accepted |
| descendants | p_axq8URLSpJG5GjJ2ugi2TC | 王閏兒 | accepted |
| descendants | p_eHnXWwDSoLx1gDXyHetbF2 | 王六姐 | accepted |
| descendants | p_ha2jFMvroq3Zp6PxAg7LoJ | 王閏姐 | accepted |
| descendants | p_HxXDHBGc1gJ7CMUNuoHTfX | 王栲栳兒 | accepted |
| descendants | p_HZwkKexk2XLbosvJUAyZ7Y | 王七兒 | accepted |
| descendants | p_ig5jJ8rtecrSaLZugvUeFb | 王傅喜 | accepted |
| descendants | p_ii71MNmYm2yb9MzkjFFByN | 王年姐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 699373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json)
- [中国历代人物传记资料库：王傅喜（CBDB 699455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699455&o=json)
- [中国历代人物传记资料库：王栲栳兒（CBDB 699451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699451&o=json)
- [中国历代人物传记资料库：王六姐（CBDB 699469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699469&o=json)
- [中国历代人物传记资料库：王羅兒（CBDB 699460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699460&o=json)
- [中国历代人物传记资料库：王年姐（CBDB 699467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699467&o=json)
- [中国历代人物传记资料库：王七兒（CBDB 699456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699456&o=json)
- [中国历代人物传记资料库：王閏兒（CBDB 699459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699459&o=json)
- [中国历代人物传记资料库：王閏姐（CBDB 699466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699466&o=json)
- [中国历代人物传记资料库：王習（CBDB 699438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699438&o=json)
- [中国历代人物传记资料库：王喜姑（CBDB 699463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699463&o=json)
- [中国历代人物传记资料库：王信（CBDB 699444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699444&o=json)
- [中国历代人物传记资料库：王用（CBDB 699431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699431&o=json)
