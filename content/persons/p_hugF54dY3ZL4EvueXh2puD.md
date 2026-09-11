---
schema: wang-person/v1
id: p_hugF54dY3ZL4EvueXh2puD
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NZKrbCm416G2P56PCBPo4Q
        subject_person_id: p_hugF54dY3ZL4EvueXh2puD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AiLgZKGt9ScrkJqhBdYsyR
          claim_id: c_NZKrbCm416G2P56PCBPo4Q
          source_id: s_83Hs2b3y8487KQJBwQxr77
          stance: supports
          locator: CBDB:286976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286976）
          source: &a1
            id: s_83Hs2b3y8487KQJBwQxr77
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 286976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json
            external_identifier: CBDB:286976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9EJzoHoGc1SnLw7B3Bqh3o
        subject_person_id: p_hugF54dY3ZL4EvueXh2puD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。永樂十年進士，曾任同知。（中国历代人物传记资料库 CBDB 286976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ODdEZsOFZwFvZaWpTL_Gz1
          claim_id: c_9EJzoHoGc1SnLw7B3Bqh3o
          source_id: s_83Hs2b3y8487KQJBwQxr77
          stance: supports
          locator: CBDB:286976
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
  descendants:
    - claim:
        id: c_CjT-QQVvVUhCtDRHDW-hXX
        subject_person_id: p_hugF54dY3ZL4EvueXh2puD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAe9raLaZds4oGgDZyI_V5
          claim_id: c_CjT-QQVvVUhCtDRHDW-hXX
          source_id: s_83Hs2b3y8487KQJBwQxr77
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hnJsBrtLd1JZGUx5u8hGVs
        status: active
        display_name: 王觀
        merged_into_person_id: null
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。永樂十年進士，曾任同知。（中国历代人物传记资料库 CBDB 286976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hnJsBrtLd1JZGUx5u8hGVs | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 286976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json)
