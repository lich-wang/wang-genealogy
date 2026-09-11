---
schema: wang-person/v1
id: p_1HqBTUsmZ7YVXXfU2nesaV
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k85MK6166Nqv8ZdxovxQJA
        subject_person_id: p_1HqBTUsmZ7YVXXfU2nesaV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ccn3ygUfgvcEfT8DuckiVy
          claim_id: c_k85MK6166Nqv8ZdxovxQJA
          source_id: s_ouXksyZkuCWaDNAy5Sjqt8
          stance: supports
          locator: CBDB:71160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71160）
          source: &a1
            id: s_ouXksyZkuCWaDNAy5Sjqt8
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 71160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71160&o=json
            external_identifier: CBDB:71160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N2vB2bxckjALUyUFmQqZEF
        subject_person_id: p_1HqBTUsmZ7YVXXfU2nesaV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YPmGWDydwQ6JfEA5Qn8Wji
          claim_id: c_N2vB2bxckjALUyUFmQqZEF
          source_id: s_ouXksyZkuCWaDNAy5Sjqt8
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
        id: c_Kq1HWj4jBnzz46AqPygCLb
        subject_person_id: p_1HqBTUsmZ7YVXXfU2nesaV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅（生于1606年），清人物。籍贯句容。（中国历代人物传记资料库 CBDB 71160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qb38l36KePWNnRF8TQs7uk
          claim_id: c_Kq1HWj4jBnzz46AqPygCLb
          source_id: s_ouXksyZkuCWaDNAy5Sjqt8
          stance: supports
          locator: CBDB:71160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| birth.date | 1606年 | accepted |
| bio.summary | 王輅（生于1606年），清人物。籍贯句容。（中国历代人物传记资料库 CBDB 71160） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 71160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71160&o=json)
