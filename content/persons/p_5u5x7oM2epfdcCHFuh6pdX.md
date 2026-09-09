---
schema: wang-person/v1
id: p_5u5x7oM2epfdcCHFuh6pdX
status: active
merged_into: null
display_name: 王敏修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPATxQcUoYkiJrLFAm33M6
        subject_person_id: p_5u5x7oM2epfdcCHFuh6pdX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VJd3QBRKbnyCbggCRdZ7Td
          claim_id: c_UPATxQcUoYkiJrLFAm33M6
          source_id: s_nh8qHFdNg76JUUhcJjFp31
          stance: supports
          locator: CBDB:29230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29230）
          source: &a1
            id: s_nh8qHFdNg76JUUhcJjFp31
            source_type: api_record
            title: 中国历代人物传记资料库：王敏修（CBDB 29230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29230&o=json
            external_identifier: CBDB:29230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6FEAk7BaQKFsQJxU3vtHYj
        subject_person_id: p_5u5x7oM2epfdcCHFuh6pdX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yNNeaESj1JgTKvKSwW5SEf
          claim_id: c_6FEAk7BaQKFsQJxU3vtHYj
          source_id: s_nh8qHFdNg76JUUhcJjFp31
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

# 王敏修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏修 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏修（CBDB 29230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29230&o=json)
