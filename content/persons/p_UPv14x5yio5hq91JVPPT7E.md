---
schema: wang-person/v1
id: p_UPv14x5yio5hq91JVPPT7E
status: active
merged_into: null
display_name: 王貫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o27FvWogr1JgMCndUF2DYi
        subject_person_id: p_UPv14x5yio5hq91JVPPT7E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CBqmAn6Uv3CEH8m3GzFtjP
          claim_id: c_o27FvWogr1JgMCndUF2DYi
          source_id: s_1afEd545eDPk9aNPHTVBvj
          stance: supports
          locator: CBDB:640308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640308）
          source: &a1
            id: s_1afEd545eDPk9aNPHTVBvj
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 640308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640308&o=json
            external_identifier: CBDB:640308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_medMgfJVpA3CaA378NEE61
        subject_person_id: p_UPv14x5yio5hq91JVPPT7E
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
        - id: cs_4beMq4gCNmBYYeZkf4EdJb
          claim_id: c_medMgfJVpA3CaA378NEE61
          source_id: s_1afEd545eDPk9aNPHTVBvj
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

# 王貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 640308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640308&o=json)
