---
schema: wang-person/v1
id: p_XjCKYE9HyGf2oUyEP2AnT9
status: active
merged_into: null
display_name: 王延壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oyAhaj2G6nhPfi1NVrZ3W6
        subject_person_id: p_XjCKYE9HyGf2oUyEP2AnT9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kJZwhDKo2qyHkZnagyyocN
          claim_id: c_oyAhaj2G6nhPfi1NVrZ3W6
          source_id: s_hknhSYsV458WPRuna96ZK1
          stance: supports
          locator: CBDB:71578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71578）
          source: &a1
            id: s_hknhSYsV458WPRuna96ZK1
            source_type: api_record
            title: 中国历代人物传记资料库：王延壽（CBDB 71578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71578&o=json
            external_identifier: CBDB:71578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4JxHav772DCLMybBKdaTh2
        subject_person_id: p_XjCKYE9HyGf2oUyEP2AnT9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hhvd6gyK3Z2gFVMDAu9i8c
          claim_id: c_4JxHav772DCLMybBKdaTh2
          source_id: s_hknhSYsV458WPRuna96ZK1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4tmLsvTneobmDCowuUBihi
        subject_person_id: p_XjCKYE9HyGf2oUyEP2AnT9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J46zFWuBKgJEqLRi6Rn1vs
          claim_id: c_4tmLsvTneobmDCowuUBihi
          source_id: s_hknhSYsV458WPRuna96ZK1
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
        id: c_7Lp8BW1u4oRxTsBeG67EXG
        subject_person_id: p_XjCKYE9HyGf2oUyEP2AnT9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延壽（1786年—1849年），清人物。籍贯內鄉。（中国历代人物传记资料库 CBDB 71578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLBPhIDY1t6jhxytbQjmM0
          claim_id: c_7Lp8BW1u4oRxTsBeG67EXG
          source_id: s_hknhSYsV458WPRuna96ZK1
          stance: supports
          locator: CBDB:71578
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

# 王延壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延壽 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1849年 | accepted |
| bio.summary | 王延壽（1786年—1849年），清人物。籍贯內鄉。（中国历代人物传记资料库 CBDB 71578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延壽（CBDB 71578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71578&o=json)
