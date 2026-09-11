---
schema: wang-person/v1
id: p_Yf2MuJDvdZWdKqL5H3SSRR
status: active
merged_into: null
display_name: 王天爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jamTzMg6k5gz68U3GoHPjF
        subject_person_id: p_Yf2MuJDvdZWdKqL5H3SSRR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iZs4oQn9XZFSMJHwDe6hy
          claim_id: c_jamTzMg6k5gz68U3GoHPjF
          source_id: s_8uN1UU3Qswgj6JfmNRjYJM
          stance: supports
          locator: CBDB:487662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487662）
          source: &a1
            id: s_8uN1UU3Qswgj6JfmNRjYJM
            source_type: api_record
            title: 中国历代人物传记资料库：王天爵（CBDB 487662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487662&o=json
            external_identifier: CBDB:487662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AXJ1MmKhi2XmVdeoFZuLn3
        subject_person_id: p_Yf2MuJDvdZWdKqL5H3SSRR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天爵，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fhd_q02uW03SUlCqQ4zKPL
          claim_id: c_AXJ1MmKhi2XmVdeoFZuLn3
          source_id: s_8uN1UU3Qswgj6JfmNRjYJM
          stance: supports
          locator: CBDB:487662
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

# 王天爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天爵 | accepted |
| bio.summary | 王天爵，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天爵（CBDB 487662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487662&o=json)
