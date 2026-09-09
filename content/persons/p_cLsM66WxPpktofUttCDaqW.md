---
schema: wang-person/v1
id: p_cLsM66WxPpktofUttCDaqW
status: active
merged_into: null
display_name: 王宫用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QFD6wEVpUaynuo6UNBMiCE
        subject_person_id: p_cLsM66WxPpktofUttCDaqW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宫用
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xt5XeopajdKMNbvY8RokKX
          claim_id: c_QFD6wEVpUaynuo6UNBMiCE
          source_id: s_LB15oqvj6knzC6dhVG8ywd
          stance: supports
          locator: CBDB:414333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414333）
          source: &a1
            id: s_LB15oqvj6knzC6dhVG8ywd
            source_type: api_record
            title: 中国历代人物传记资料库：王宫用（CBDB 414333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414333&o=json
            external_identifier: CBDB:414333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_18521a3XQiCRmfQNtyuyNe
        subject_person_id: p_cLsM66WxPpktofUttCDaqW
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
        - id: cs_YbxcaSLipwyVeaUGHn2UGX
          claim_id: c_18521a3XQiCRmfQNtyuyNe
          source_id: s_LB15oqvj6knzC6dhVG8ywd
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

# 王宫用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宫用 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宫用（CBDB 414333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414333&o=json)
