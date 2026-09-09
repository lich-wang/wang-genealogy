---
schema: wang-person/v1
id: p_45s9HDY1ozAkN8mWJVfQ2g
status: active
merged_into: null
display_name: 王其福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EYkgN1WK8vAEXZjT92w11A
        subject_person_id: p_45s9HDY1ozAkN8mWJVfQ2g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xEMaVP4GsDm6HvL1N8C37j
          claim_id: c_EYkgN1WK8vAEXZjT92w11A
          source_id: s_NrWFWgwLgW9g3smWF7d5yi
          stance: supports
          locator: CBDB:636335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636335）
          source: &a1
            id: s_NrWFWgwLgW9g3smWF7d5yi
            source_type: api_record
            title: 中国历代人物传记资料库：王其福（CBDB 636335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636335&o=json
            external_identifier: CBDB:636335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rQKDdxwUCeyske4DhQBt1H
        subject_person_id: p_45s9HDY1ozAkN8mWJVfQ2g
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
        - id: cs_k2TVBNhDVumha6Phx9ysdt
          claim_id: c_rQKDdxwUCeyske4DhQBt1H
          source_id: s_NrWFWgwLgW9g3smWF7d5yi
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

# 王其福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其福 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其福（CBDB 636335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636335&o=json)
