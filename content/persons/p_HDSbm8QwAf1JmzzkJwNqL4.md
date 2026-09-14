---
schema: wang-person/v1
id: p_HDSbm8QwAf1JmzzkJwNqL4
status: active
merged_into: null
display_name: 王延壽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S58G19mvetbZhk1P2179ur
        subject_person_id: p_HDSbm8QwAf1JmzzkJwNqL4
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
        - id: cs_VToeVtpDAQs2rdnKguZdFa
          claim_id: c_S58G19mvetbZhk1P2179ur
          source_id: s_aDiQUSDjJ78Hhs6DYJPphk
          stance: supports
          locator: CBDB:37228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37228）
          source: &a1
            id: s_aDiQUSDjJ78Hhs6DYJPphk
            source_type: api_record
            title: 中国历代人物传记资料库：王延壽（CBDB 37228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37228&o=json
            external_identifier: CBDB:37228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bYV6DeuaJwXzQApUW9jNaz
        subject_person_id: p_HDSbm8QwAf1JmzzkJwNqL4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延壽，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kh3NfVi5Qe3A32XqlUq0RH
          claim_id: c_bYV6DeuaJwXzQApUW9jNaz
          source_id: s_aDiQUSDjJ78Hhs6DYJPphk
          stance: supports
          locator: CBDB:37228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZhTSLm8L0le2f8c4H6bdS2
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HDSbm8QwAf1JmzzkJwNqL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxikkFvOAGVpaPOl43jhrt
          claim_id: c_ZhTSLm8L0le2f8c4H6bdS2
          source_id: s_1yturjw3EwMlhxpEZOIg4g
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1yturjw3EwMlhxpEZOIg4g
            source_type: api_record
            title: 中国历代人物传记资料库：王延壽（CBDB 37228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37228&o=json
            external_identifier: CBDB:37228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HPYYkmNEETrV6SW1UZLFZN
        status: active
        display_name: 王次張
        merged_into_person_id: null
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
| bio.summary | 王延壽，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HPYYkmNEETrV6SW1UZLFZN | 王次張 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延壽（CBDB 37228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37228&o=json)
