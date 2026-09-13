---
schema: wang-person/v1
id: p_sAZUvMC7u8bMFh2JrU8PMj
status: active
merged_into: null
display_name: 王良心
cbdb_id: 205923
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ro49ARWhhFhnaWp9XQZHKx
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良心（生于1542年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 205923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PIbMrPIgWukMcW7WczVK6l
          claim_id: c_Ro49ARWhhFhnaWp9XQZHKx
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PJGfr4y19Ad9rFabzSb4so
            source_type: api_record
            title: 中国历代人物传记资料库：王良心（CBDB 205923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json
            external_identifier: CBDB:205923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WZfMYSs4xvBVFSBrSy9GSq
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QSGWieuWK5egGD9x76rbVH
          claim_id: c_WZfMYSs4xvBVFSBrSy9GSq
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_PJGfr4y19Ad9rFabzSb4so
            source_type: api_record
            title: 中国历代人物传记资料库：王良心（CBDB 205923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json
            external_identifier: CBDB:205923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4tgnFmU3YXG4FvSJTKYT16
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eAPWc9HKxSYNfM11u9yeW7
          claim_id: c_4tgnFmU3YXG4FvSJTKYT16
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N_oWAkIotFtNPNFN-eEMQJ
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1CcOiZMUx8iBs7OZe6ObTS
          claim_id: c_N_oWAkIotFtNPNFN-eEMQJ
          source_id: s_ZkLWzBEnVE1LYHvpg5QRZ2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZkLWzBEnVE1LYHvpg5QRZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 210723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json
            external_identifier: CBDB:210723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cX0LzGc2vQ5RrVHgD04Myw
        subject_person_id: p_FBZHK8U948C8S9kFQmA1wR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWMM3CLh7eOTqB76Y4fLmY
          claim_id: c_cX0LzGc2vQ5RrVHgD04Myw
          source_id: s_h8UAB5v7EvgXTVo3GcM12a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h8UAB5v7EvgXTVo3GcM12a
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 210722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210722&o=json
            external_identifier: CBDB:210722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FBZHK8U948C8S9kFQmA1wR
        status: active
        display_name: 王岳
        merged_into_person_id: null
    - claim:
        id: c_L6DOF4Oq--XQj596QIU8L0
        subject_person_id: p_K4dxAXnJm9smZxCxzJsN4q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Shw4WuBrROT78Hj1COLNCS
          claim_id: c_L6DOF4Oq--XQj596QIU8L0
          source_id: s_o9AZwP8QTSSANnPFXMAnD5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o9AZwP8QTSSANnPFXMAnD5
            source_type: api_record
            title: 中国历代人物传记资料库：王鐔（CBDB 210721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json
            external_identifier: CBDB:210721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K4dxAXnJm9smZxCxzJsN4q
        status: active
        display_name: 王鐔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王良心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良心（生于1542年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 205923） | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王良心 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| ancestors | p_FBZHK8U948C8S9kFQmA1wR | 王岳 | accepted |
| ancestors | p_K4dxAXnJm9smZxCxzJsN4q | 王鐔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 210723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json)
- [中国历代人物传记资料库：王良心（CBDB 205923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json)
- [中国历代人物传记资料库：王鐔（CBDB 210721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json)
- [中国历代人物传记资料库：王岳（CBDB 210722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210722&o=json)
