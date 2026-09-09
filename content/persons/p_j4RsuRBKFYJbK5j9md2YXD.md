---
schema: wang-person/v1
id: p_j4RsuRBKFYJbK5j9md2YXD
status: active
merged_into: null
display_name: 王承裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAddxJYPFVuEahtjnQ2Fd5
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZCEGuvneeFxAG6fgzEugzN
          claim_id: c_jAddxJYPFVuEahtjnQ2Fd5
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: CBDB:67772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67772）
          source: &a1
            id: s_KwAAbYEBjQwNhkLyALJnCV
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VJLFhcaV4Y4fyCLtAHJhL5
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4BfwwH8Zk2ai7FLYp7uAM
          claim_id: c_VJLFhcaV4Y4fyCLtAHJhL5
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TjgPDqKyd1LGddw6tFbR5V
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
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
        - id: cs_ADzHHf3wijkUvoBXEGBR4j
          claim_id: c_TjgPDqKyd1LGddw6tFbR5V
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
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

# 王承裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承裕 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承裕（CBDB 67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
