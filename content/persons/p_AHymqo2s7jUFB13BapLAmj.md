---
schema: wang-person/v1
id: p_AHymqo2s7jUFB13BapLAmj
status: active
merged_into: null
display_name: 王純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gwia7KE2f4TYeGFv59BHo8
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D8TrWQDC1HMXcZMKrcU1q3
          claim_id: c_gwia7KE2f4TYeGFv59BHo8
          source_id: s_wC5TxTs4bQia4UCLbvjEJC
          stance: supports
          locator: CBDB:260406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260406）
          source: &a1
            id: s_wC5TxTs4bQia4UCLbvjEJC
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 260406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json
            external_identifier: CBDB:260406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zenuKDvVQyHMwxguL1KCx7
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQi3L01ESJ69c1kbmBma3e
          claim_id: c_zenuKDvVQyHMwxguL1KCx7
          source_id: s_wC5TxTs4bQia4UCLbvjEJC
          stance: supports
          locator: CBDB:260406
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

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 260406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json)
