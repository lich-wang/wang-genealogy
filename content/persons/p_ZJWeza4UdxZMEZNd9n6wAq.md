---
schema: wang-person/v1
id: p_ZJWeza4UdxZMEZNd9n6wAq
status: active
merged_into: null
display_name: 王紀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Ltfwkh1ghBMhVC1QQEySG
        subject_person_id: p_ZJWeza4UdxZMEZNd9n6wAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i6gVdW45TMY7iQfZCyqRZU
          claim_id: c_4Ltfwkh1ghBMhVC1QQEySG
          source_id: s_yKEZH1F2FrG7eBoN7xk5t4
          stance: supports
          locator: CBDB:493881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493881）
          source: &a1
            id: s_yKEZH1F2FrG7eBoN7xk5t4
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 493881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493881&o=json
            external_identifier: CBDB:493881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qAy6RjXdcayNs2vjZaQukm
        subject_person_id: p_ZJWeza4UdxZMEZNd9n6wAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。曾任縣丞、主簿。（中国历代人物传记资料库 CBDB 493881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Vv4cVpXt_e-nD9nWWI_7p
          claim_id: c_qAy6RjXdcayNs2vjZaQukm
          source_id: s_yKEZH1F2FrG7eBoN7xk5t4
          stance: supports
          locator: CBDB:493881
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

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。曾任縣丞、主簿。（中国历代人物传记资料库 CBDB 493881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 493881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493881&o=json)
