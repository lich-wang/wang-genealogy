---
schema: wang-person/v1
id: p_ycnqfdny49ravnSyMWF16A
status: active
merged_into: null
display_name: 王雷
cbdb_id: 301983
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55ZZmTiMw1Gzv27w7W8Ujs
        subject_person_id: p_ycnqfdny49ravnSyMWF16A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雷，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pUkMQ8py9psTkMjT5WRMGW
          claim_id: c_55ZZmTiMw1Gzv27w7W8Ujs
          source_id: s_n9NkcAwF9TLeP7HSXePRKD
          stance: supports
          locator: CBDB:301983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n9NkcAwF9TLeP7HSXePRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王雷（CBDB 301983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301983&o=json
            external_identifier: CBDB:301983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eAuF63aqK6XE95mjKQMLCe
        subject_person_id: p_ycnqfdny49ravnSyMWF16A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CjhqEPfUywYPEXJq65uWz9
          claim_id: c_eAuF63aqK6XE95mjKQMLCe
          source_id: s_n9NkcAwF9TLeP7HSXePRKD
          stance: supports
          locator: CBDB:301983
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_ZvLJvM8zF3R-V8piyOfqLn
        subject_person_id: p_ycnqfdny49ravnSyMWF16A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptnBPYAhPqg41-OEXZt5BV
          claim_id: c_ZvLJvM8zF3R-V8piyOfqLn
          source_id: s_n9NkcAwF9TLeP7HSXePRKD
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n9NkcAwF9TLeP7HSXePRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王雷（CBDB 301983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301983&o=json
            external_identifier: CBDB:301983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GQ1GXZbABMzPSWjdERZQAa
        status: active
        display_name: 王心
        merged_into_person_id: null
  other: []
---

# 王雷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雷，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301983） | accepted |
| name.primary | 王雷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GQ1GXZbABMzPSWjdERZQAa | 王心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雷（CBDB 301983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301983&o=json)
