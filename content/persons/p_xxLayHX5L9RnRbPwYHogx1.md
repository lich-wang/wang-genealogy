---
schema: wang-person/v1
id: p_xxLayHX5L9RnRbPwYHogx1
status: active
merged_into: null
display_name: 王俅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4BLqS2v6FNxDT6tiaDnEa
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dfwASF4SWQKovEkCMBruvF
          claim_id: c_r4BLqS2v6FNxDT6tiaDnEa
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
          stance: supports
          locator: CBDB:276674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276674）
          source: &a1
            id: s_EQJRyvPMAxNA3cYQXqTYJo
            source_type: api_record
            title: 中国历代人物传记资料库：王俅（CBDB 276674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json
            external_identifier: CBDB:276674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58Nuh9QCNUFFhy8RpFHFTo
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
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
        - id: cs_NPxUAYnovh59HK6mEitfe4
          claim_id: c_58Nuh9QCNUFFhy8RpFHFTo
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
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

# 王俅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俅（CBDB 276674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json)
