---
schema: wang-person/v1
id: p_MLXVv2nuGYn3tYiZki5KGd
status: active
merged_into: null
display_name: 王人鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tcQb87rqfpDtQfZCXVq3SK
        subject_person_id: p_MLXVv2nuGYn3tYiZki5KGd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PtHcyaFGMwkoW4yNbtZuBr
          claim_id: c_tcQb87rqfpDtQfZCXVq3SK
          source_id: s_bac8g6rQLwub6ov4UDKWqK
          stance: supports
          locator: CBDB:635877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635877）
          source: &a1
            id: s_bac8g6rQLwub6ov4UDKWqK
            source_type: api_record
            title: 中国历代人物传记资料库：王人鵬（CBDB 635877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635877&o=json
            external_identifier: CBDB:635877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UNeJniZE4P49Ce3uvfBnoD
        subject_person_id: p_MLXVv2nuGYn3tYiZki5KGd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人鵬，清人物。籍贯安徽省，入仕廩貢生，曾任司獄。（中国历代人物传记资料库 CBDB 635877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nZzn8dvHyoewESENUY1svn
          claim_id: c_UNeJniZE4P49Ce3uvfBnoD
          source_id: s_bac8g6rQLwub6ov4UDKWqK
          stance: supports
          locator: CBDB:635877
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

# 王人鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人鵬 | accepted |
| bio.summary | 王人鵬，清人物。籍贯安徽省，入仕廩貢生，曾任司獄。（中国历代人物传记资料库 CBDB 635877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人鵬（CBDB 635877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635877&o=json)
