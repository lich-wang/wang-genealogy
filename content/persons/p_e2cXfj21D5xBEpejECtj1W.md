---
schema: wang-person/v1
id: p_e2cXfj21D5xBEpejECtj1W
status: active
merged_into: null
display_name: 王支燾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZgEyQSg1WZeH3b1HicZHC
        subject_person_id: p_e2cXfj21D5xBEpejECtj1W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王支燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQFa8uZuEgrno8FQqQRAxH
          claim_id: c_6ZgEyQSg1WZeH3b1HicZHC
          source_id: s_EVVwW7TTyRLkg8hRJR9zDM
          stance: supports
          locator: CBDB:71391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71391）
          source: &a1
            id: s_EVVwW7TTyRLkg8hRJR9zDM
            source_type: api_record
            title: 中国历代人物传记资料库：王支燾（CBDB 71391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71391&o=json
            external_identifier: CBDB:71391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9hw9P5HA2Z3U8s36LiWDDg
        subject_person_id: p_e2cXfj21D5xBEpejECtj1W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1614年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fD7mMBz7YVW8VL73E49wnC
          claim_id: c_9hw9P5HA2Z3U8s36LiWDDg
          source_id: s_EVVwW7TTyRLkg8hRJR9zDM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w79Hw4Hi1XVH4uygRY1W1z
        subject_person_id: p_e2cXfj21D5xBEpejECtj1W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FWpuaE21boueignTh8y1y
          claim_id: c_w79Hw4Hi1XVH4uygRY1W1z
          source_id: s_EVVwW7TTyRLkg8hRJR9zDM
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

# 王支燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王支燾 | accepted |
| birth.date | 1614年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王支燾（CBDB 71391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71391&o=json)
