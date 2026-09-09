---
schema: wang-person/v1
id: p_PUBtfTr2QXW6N416Jn8KQA
status: active
merged_into: null
display_name: 王剛中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQvFpTQk4Ru4nrF7ES92hg
        subject_person_id: p_PUBtfTr2QXW6N416Jn8KQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bi8UEYipL8UjUwTDxVwQCN
          claim_id: c_EQvFpTQk4Ru4nrF7ES92hg
          source_id: s_GYB3bKNW6CyJWesEvQ78wJ
          stance: supports
          locator: CBDB:38017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38017）
          source: &a1
            id: s_GYB3bKNW6CyJWesEvQ78wJ
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 38017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38017&o=json
            external_identifier: CBDB:38017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QVPFV7GqvNaMiJ4bf5CKxS
        subject_person_id: p_PUBtfTr2QXW6N416Jn8KQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1219年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pfuVUNGP1sA4AzFpQ6CMJ1
          claim_id: c_QVPFV7GqvNaMiJ4bf5CKxS
          source_id: s_GYB3bKNW6CyJWesEvQ78wJ
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
        id: c_d3SYMN2BaEJicBvz9sjRht
        subject_person_id: p_PUBtfTr2QXW6N416Jn8KQA
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
        - id: cs_71SDz1fkLwNCAYLkJZNqa7
          claim_id: c_d3SYMN2BaEJicBvz9sjRht
          source_id: s_GYB3bKNW6CyJWesEvQ78wJ
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

# 王剛中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛中 | accepted |
| birth.date | 1219年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 38017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38017&o=json)
