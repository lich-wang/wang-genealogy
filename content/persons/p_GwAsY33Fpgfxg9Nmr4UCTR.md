---
schema: wang-person/v1
id: p_GwAsY33Fpgfxg9Nmr4UCTR
status: active
merged_into: null
display_name: 王廷彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FiLTNce6BjXPNCfbWA8dXB
        subject_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTmaTD9WCioLPV3fU7Ca8X
          claim_id: c_FiLTNce6BjXPNCfbWA8dXB
          source_id: s_JPx4rtnD2GC9ic14HUNwka
          stance: supports
          locator: CBDB:555114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555114）
          source: &a1
            id: s_JPx4rtnD2GC9ic14HUNwka
            source_type: api_record
            title: 中国历代人物传记资料库：王廷彥（CBDB 555114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555114&o=json
            external_identifier: CBDB:555114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gLQDdF1dubhbeECpboVH7Z
        subject_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cgG2x5cn2LNYN8BMHy85J
          claim_id: c_gLQDdF1dubhbeECpboVH7Z
          source_id: s_JPx4rtnD2GC9ic14HUNwka
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

# 王廷彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷彥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷彥（CBDB 555114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555114&o=json)
