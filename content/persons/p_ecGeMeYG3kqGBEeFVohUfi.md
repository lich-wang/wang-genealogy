---
schema: wang-person/v1
id: p_ecGeMeYG3kqGBEeFVohUfi
status: active
merged_into: null
display_name: 王桂發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_64p9b127wE89EnfumjQq2K
        subject_person_id: p_ecGeMeYG3kqGBEeFVohUfi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42X1jpG7XeT27ed8H41La5
          claim_id: c_64p9b127wE89EnfumjQq2K
          source_id: s_hFHQKcbdoi9MzRQCTSuoXh
          stance: supports
          locator: CBDB:688998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688998）
          source: &a1
            id: s_hFHQKcbdoi9MzRQCTSuoXh
            source_type: api_record
            title: 中国历代人物传记资料库：王桂發（CBDB 688998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688998&o=json
            external_identifier: CBDB:688998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnW5iEuA33sH3rLqYmQZ5o
        subject_person_id: p_ecGeMeYG3kqGBEeFVohUfi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGUQ5WNPxCtC3oybzDmVDf
          claim_id: c_GnW5iEuA33sH3rLqYmQZ5o
          source_id: s_hFHQKcbdoi9MzRQCTSuoXh
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

# 王桂發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂發 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂發（CBDB 688998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688998&o=json)
