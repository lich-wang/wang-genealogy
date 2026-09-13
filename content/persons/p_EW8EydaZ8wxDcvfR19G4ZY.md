---
schema: wang-person/v1
id: p_EW8EydaZ8wxDcvfR19G4ZY
status: active
merged_into: null
display_name: 王均稅
cbdb_id: 254335
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8H7hxKsQRBVWyuZu6qQzp
        subject_person_id: p_EW8EydaZ8wxDcvfR19G4ZY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均稅，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OJvQhA9eNwT3xNfTEJo8As
          claim_id: c_v8H7hxKsQRBVWyuZu6qQzp
          source_id: s_4xb4Jgv9kotQPopxNxP9Ri
          stance: supports
          locator: CBDB:254335
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4xb4Jgv9kotQPopxNxP9Ri
            source_type: api_record
            title: 中国历代人物传记资料库：王均稅（CBDB 254335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254335&o=json
            external_identifier: CBDB:254335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gHCokyBMc8kk6CYEXT15EA
        subject_person_id: p_EW8EydaZ8wxDcvfR19G4ZY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均稅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_62Jb1EZoM1bPADdB1soLQu
          claim_id: c_gHCokyBMc8kk6CYEXT15EA
          source_id: s_4xb4Jgv9kotQPopxNxP9Ri
          stance: supports
          locator: CBDB:254335
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_OsqttvLGCmHlIQ03XVkiBE
        subject_person_id: p_EW8EydaZ8wxDcvfR19G4ZY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a1kot01P2W6A7tj_1sn97L
          claim_id: c_OsqttvLGCmHlIQ03XVkiBE
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_srAnw7NJCmjSg2UeHn9GXe
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 200153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json
            external_identifier: CBDB:200153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jHwZfHWM4vMLPpm1ZfMXFt
        status: active
        display_name: 王彝
        merged_into_person_id: null
  other: []
---

# 王均稅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王均稅，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254335） | accepted |
| name.primary | 王均稅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jHwZfHWM4vMLPpm1ZfMXFt | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均稅（CBDB 254335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254335&o=json)
- [中国历代人物传记资料库：王彝（CBDB 200153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json)
