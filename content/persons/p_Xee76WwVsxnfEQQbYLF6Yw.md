---
schema: wang-person/v1
id: p_Xee76WwVsxnfEQQbYLF6Yw
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39bX6MQ4DCxKdpTFV5J7Gc
        subject_person_id: p_Xee76WwVsxnfEQQbYLF6Yw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c1gMPNAG4s2a6F2GxkK83L
          claim_id: c_39bX6MQ4DCxKdpTFV5J7Gc
          source_id: s_2QZsc2jXQMBdQmvnTWhHYB
          stance: supports
          locator: CBDB:487514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487514）
          source: &a1
            id: s_2QZsc2jXQMBdQmvnTWhHYB
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 487514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487514&o=json
            external_identifier: CBDB:487514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97R9XJv7u8L6w4Gs59JDQo
        subject_person_id: p_Xee76WwVsxnfEQQbYLF6Yw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HGoFoDxcjlHLPGuWQzgFnt
          claim_id: c_97R9XJv7u8L6w4Gs59JDQo
          source_id: s_2QZsc2jXQMBdQmvnTWhHYB
          stance: supports
          locator: CBDB:487514
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| bio.summary | 王三聘，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 487514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 487514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487514&o=json)
