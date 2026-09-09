---
schema: wang-person/v1
id: p_nyHGqvA9YTKT9YQnGQ6pMM
status: active
merged_into: null
display_name: 王大賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXHrZ2VDkR8YyMC8VcL9uT
        subject_person_id: p_nyHGqvA9YTKT9YQnGQ6pMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yFugMXxPYg2YEJ9kTn3chu
          claim_id: c_FXHrZ2VDkR8YyMC8VcL9uT
          source_id: s_HzGWmSex6535AXKT7cDc3R
          stance: supports
          locator: CBDB:305532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305532）
          source: &a1
            id: s_HzGWmSex6535AXKT7cDc3R
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 305532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json
            external_identifier: CBDB:305532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQHGbyd6M4cuHCxetuUM1G
        subject_person_id: p_nyHGqvA9YTKT9YQnGQ6pMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvcBJQG71Bm6ExMzwUGwSw
          claim_id: c_mQHGbyd6M4cuHCxetuUM1G
          source_id: s_HzGWmSex6535AXKT7cDc3R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants: []
  other: []
---

# 王大賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大賓（CBDB 305532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json)
