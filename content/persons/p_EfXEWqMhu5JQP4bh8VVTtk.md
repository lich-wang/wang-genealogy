---
schema: wang-person/v1
id: p_EfXEWqMhu5JQP4bh8VVTtk
status: active
merged_into: null
display_name: 王友
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPcrk96zxRppsH4NZHpydA
        subject_person_id: p_EfXEWqMhu5JQP4bh8VVTtk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dpy1GSF6YPiqZ3RCM9nkEK
          claim_id: c_nPcrk96zxRppsH4NZHpydA
          source_id: s_zcTxWMNGjp7NGzuwbcrXTu
          stance: supports
          locator: CBDB:216906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216906）
          source: &a1
            id: s_zcTxWMNGjp7NGzuwbcrXTu
            source_type: api_record
            title: 中国历代人物传记资料库：王友（CBDB 216906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216906&o=json
            external_identifier: CBDB:216906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CsBhXcHXMXKZvyuPAPLk5c
        subject_person_id: p_EfXEWqMhu5JQP4bh8VVTtk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 216906）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJBwO15HmhpM94qUAaQWAz
          claim_id: c_CsBhXcHXMXKZvyuPAPLk5c
          source_id: s_zcTxWMNGjp7NGzuwbcrXTu
          stance: supports
          locator: CBDB:216906
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
        id: c_e6Mer22-ULN3kTAxodTrP4
        subject_person_id: p_EfXEWqMhu5JQP4bh8VVTtk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yG7PhgDQVSKGud9S77AKym
          claim_id: c_e6Mer22-ULN3kTAxodTrP4
          source_id: s_zcTxWMNGjp7NGzuwbcrXTu
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9yrh3LG22eDzqwJQoBMgVx
        status: active
        display_name: 王世揚
        merged_into_person_id: null
  other: []
---

# 王友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友 | accepted |
| bio.summary | 王友，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 216906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9yrh3LG22eDzqwJQoBMgVx | 王世揚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友（CBDB 216906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216906&o=json)
