---
schema: wang-person/v1
id: p_ERXsTDEmjc26z17216nWhi
status: active
merged_into: null
display_name: 王廷棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BXZBmjftDTeP25YHBRFVHQ
        subject_person_id: p_ERXsTDEmjc26z17216nWhi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8H6J8C9qZB1LAJLPYdxBib
          claim_id: c_BXZBmjftDTeP25YHBRFVHQ
          source_id: s_Qwcir2Ea4FGwh6zimufQGn
          stance: supports
          locator: CBDB:487812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487812）
          source: &a1
            id: s_Qwcir2Ea4FGwh6zimufQGn
            source_type: api_record
            title: 中国历代人物传记资料库：王廷棟（CBDB 487812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487812&o=json
            external_identifier: CBDB:487812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Lr8w9QBLxvUDmXPdeznkB
        subject_person_id: p_ERXsTDEmjc26z17216nWhi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷棟，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 487812）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bIyGCyKRaubdNaqd73ssbo
          claim_id: c_9Lr8w9QBLxvUDmXPdeznkB
          source_id: s_Qwcir2Ea4FGwh6zimufQGn
          stance: supports
          locator: CBDB:487812
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

# 王廷棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷棟 | accepted |
| bio.summary | 王廷棟，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 487812） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷棟（CBDB 487812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487812&o=json)
