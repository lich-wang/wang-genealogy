---
schema: wang-person/v1
id: p_A3uRXC9mMtYKSL9frBUu1z
status: active
merged_into: null
display_name: 王鏗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2sr41fH1H1ne6UtZ3KEaYw
        subject_person_id: p_A3uRXC9mMtYKSL9frBUu1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3vqRcEVqSxHJwk7A8rB5FE
          claim_id: c_2sr41fH1H1ne6UtZ3KEaYw
          source_id: s_3b9v4LWKAVa5LN2HkCGZ8g
          stance: supports
          locator: CBDB:496830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496830）
          source: &a1
            id: s_3b9v4LWKAVa5LN2HkCGZ8g
            source_type: api_record
            title: 中国历代人物传记资料库：王鏗（CBDB 496830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496830&o=json
            external_identifier: CBDB:496830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bquw6GMTPPD5LE7x5DNib9
        subject_person_id: p_A3uRXC9mMtYKSL9frBUu1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏗，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 496830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_psKjsLITj6adK1ILoBTN01
          claim_id: c_Bquw6GMTPPD5LE7x5DNib9
          source_id: s_3b9v4LWKAVa5LN2HkCGZ8g
          stance: supports
          locator: CBDB:496830
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

# 王鏗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏗 | accepted |
| bio.summary | 王鏗，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 496830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏗（CBDB 496830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496830&o=json)
