---
schema: wang-person/v1
id: p_CgjBmkHZVSSVhbNuViZe2h
status: active
merged_into: null
display_name: 王樹棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6zEWvb2e5FDHTti6WShss
        subject_person_id: p_CgjBmkHZVSSVhbNuViZe2h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qsZdfkth3wYcPGesKu8tc6
          claim_id: c_e6zEWvb2e5FDHTti6WShss
          source_id: s_bbk1CGmPgqxz74cyEHz2iZ
          stance: supports
          locator: CBDB:460711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460711）
          source: &a1
            id: s_bbk1CGmPgqxz74cyEHz2iZ
            source_type: api_record
            title: 中国历代人物传记资料库：王樹棠（CBDB 460711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460711&o=json
            external_identifier: CBDB:460711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pdUrHLqY4LCoiGowhMzPyQ
        subject_person_id: p_CgjBmkHZVSSVhbNuViZe2h
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
        - id: cs_BgXdBbcChgQ695DW2dwpr3
          claim_id: c_pdUrHLqY4LCoiGowhMzPyQ
          source_id: s_bbk1CGmPgqxz74cyEHz2iZ
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

# 王樹棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹棠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹棠（CBDB 460711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460711&o=json)
