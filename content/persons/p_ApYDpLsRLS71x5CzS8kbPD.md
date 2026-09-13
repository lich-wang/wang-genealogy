---
schema: wang-person/v1
id: p_ApYDpLsRLS71x5CzS8kbPD
status: active
merged_into: null
display_name: 王作極
cbdb_id: 342449
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cN7KaXx25JvB1BMF6jpnj2
        subject_person_id: p_ApYDpLsRLS71x5CzS8kbPD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作極，清人物。明清進士進士，籍贯稷山，入仕進士。（中国历代人物传记资料库 CBDB 342449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_InGUMVdk6gGOQU5SEjPZr6
          claim_id: c_cN7KaXx25JvB1BMF6jpnj2
          source_id: s_nUQNDxHbhGhSvGNFcn9GLA
          stance: supports
          locator: CBDB:342449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nUQNDxHbhGhSvGNFcn9GLA
            source_type: api_record
            title: 中国历代人物传记资料库：王作極（CBDB 342449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342449&o=json
            external_identifier: CBDB:342449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:12.174Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GgfbWW7uXNQmQ28BiahjGF
        subject_person_id: p_ApYDpLsRLS71x5CzS8kbPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xVWBN8o7sVtv6L58ZKqy16
          claim_id: c_GgfbWW7uXNQmQ28BiahjGF
          source_id: s_nUQNDxHbhGhSvGNFcn9GLA
          stance: supports
          locator: CBDB:342449
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4301-4400）｜历史性依据：CBDB 朝代 = 清
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

# 王作極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王作極，清人物。明清進士進士，籍贯稷山，入仕進士。（中国历代人物传记资料库 CBDB 342449） | accepted |
| name.primary | 王作極 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作極（CBDB 342449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342449&o=json)
