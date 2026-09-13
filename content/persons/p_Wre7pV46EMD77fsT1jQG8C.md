---
schema: wang-person/v1
id: p_Wre7pV46EMD77fsT1jQG8C
status: active
merged_into: null
display_name: 王軔
cbdb_id: 329350
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9iqGyPGDBWX4F3Siaoij7
        subject_person_id: p_Wre7pV46EMD77fsT1jQG8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軔，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329350）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_z820rk3WSQR0nyofwrhmvO
          claim_id: c_E9iqGyPGDBWX4F3Siaoij7
          source_id: s_dQgsNTpUEDSmTLSghqQYEE
          stance: supports
          locator: CBDB:329350
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dQgsNTpUEDSmTLSghqQYEE
            source_type: api_record
            title: 中国历代人物传记资料库：王軔（CBDB 329350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json
            external_identifier: CBDB:329350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8mQC1Fyvc5Lh3thACDv8Gm
        subject_person_id: p_Wre7pV46EMD77fsT1jQG8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DWmZSQvkn4MiDsAtN8gV5F
          claim_id: c_8mQC1Fyvc5Lh3thACDv8Gm
          source_id: s_dQgsNTpUEDSmTLSghqQYEE
          stance: supports
          locator: CBDB:329350
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
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

# 王軔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王軔，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329350） | accepted |
| name.primary | 王軔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軔（CBDB 329350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json)
