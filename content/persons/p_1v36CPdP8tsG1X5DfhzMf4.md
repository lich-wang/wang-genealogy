---
schema: wang-person/v1
id: p_1v36CPdP8tsG1X5DfhzMf4
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjrAmxL9hUp5HsBpeF5EiF
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VzHwEVHnTMQA1zmMjTZmgQ
          claim_id: c_kjrAmxL9hUp5HsBpeF5EiF
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: CBDB:298814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298814）
          source: &a1
            id: s_FJtEgs9bbiRiw48hNDodxR
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 298814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json
            external_identifier: CBDB:298814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6D87tGNuyB5ZLNQjjfBNk
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。嘉靖十七年進士，籍贯永嘉，曾任禮部尚書、禮部左侍郎。（中国历代人物传记资料库 CBDB 298814）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dKyxAlgnxoMo2Luj_12-sE
          claim_id: c_U6D87tGNuyB5ZLNQjjfBNk
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: CBDB:298814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__ywE885zfnmlbWUYrniV6z
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM-P3C9Z1T52-9gexZ7Xer
          claim_id: c__ywE885zfnmlbWUYrniV6z
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。嘉靖十七年進士，籍贯永嘉，曾任禮部尚書、禮部左侍郎。（中国历代人物传记资料库 CBDB 298814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 298814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json)
