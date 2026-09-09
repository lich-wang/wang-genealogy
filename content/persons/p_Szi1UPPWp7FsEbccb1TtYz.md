---
schema: wang-person/v1
id: p_Szi1UPPWp7FsEbccb1TtYz
status: active
merged_into: null
display_name: 王沛思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w7JozZYMP5zpqTtvpeCyfY
        subject_person_id: p_Szi1UPPWp7FsEbccb1TtYz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uJWmASKNEaeUeG9JMpwMzW
          claim_id: c_w7JozZYMP5zpqTtvpeCyfY
          source_id: s_K2hCPxLu8ufaeqEkq8Hkf3
          stance: supports
          locator: CBDB:71707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71707）
          source: &a1
            id: s_K2hCPxLu8ufaeqEkq8Hkf3
            source_type: api_record
            title: 中国历代人物传记资料库：王沛思（CBDB 71707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71707&o=json
            external_identifier: CBDB:71707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C1FqnhQ3QLGqYsytvZJEo4
        subject_person_id: p_Szi1UPPWp7FsEbccb1TtYz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S6ok1r74EBeZHjb5bgkxKz
          claim_id: c_C1FqnhQ3QLGqYsytvZJEo4
          source_id: s_K2hCPxLu8ufaeqEkq8Hkf3
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
        id: c_mh2aDRwxiA2SaSLdKh1pmz
        subject_person_id: p_Szi1UPPWp7FsEbccb1TtYz
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
        - id: cs_2QCRETJ3rUMHifFsBrKCHZ
          claim_id: c_mh2aDRwxiA2SaSLdKh1pmz
          source_id: s_K2hCPxLu8ufaeqEkq8Hkf3
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

# 王沛思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛思 | accepted |
| birth.date | 1642年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沛思（CBDB 71707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71707&o=json)
