---
schema: wang-person/v1
id: p_JMVqvEBj5oj2jaX7P1PA3S
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6hh6PJUpaLZtUnUPQh3PyM
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SxyyMPMsxbN15E3jiRBETB
          claim_id: c_6hh6PJUpaLZtUnUPQh3PyM
          source_id: s_F1B6uHSeCPMDY2gJ9yLE63
          stance: supports
          locator: CBDB:245219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245219）
          source: &a1
            id: s_F1B6uHSeCPMDY2gJ9yLE63
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTVoEkqxmik4EpZDvKA2xj
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
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
        - id: cs_LZVC4T7KV6syXTtrgBsryu
          claim_id: c_UTVoEkqxmik4EpZDvKA2xj
          source_id: s_F1B6uHSeCPMDY2gJ9yLE63
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 245219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json)
