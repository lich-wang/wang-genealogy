---
schema: wang-person/v1
id: p_FVuzXNFP5SintLTZXR7oqL
status: active
merged_into: null
display_name: 王翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FwywTJtTsGGhmLa42P1SNi
        subject_person_id: p_FVuzXNFP5SintLTZXR7oqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uEBf66uwqDC4sCFAqyK9Q9
          claim_id: c_FwywTJtTsGGhmLa42P1SNi
          source_id: s_8yDJcg2qpBjVJdEQ2DJGZz
          stance: supports
          locator: CBDB:464843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464843）
          source: &a1
            id: s_8yDJcg2qpBjVJdEQ2DJGZz
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 464843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464843&o=json
            external_identifier: CBDB:464843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_anzUxnnpB3KA1ZaGJZpGEQ
        subject_person_id: p_FVuzXNFP5SintLTZXR7oqL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5kCf0SViVbKIyL96melb7
          claim_id: c_anzUxnnpB3KA1ZaGJZpGEQ
          source_id: s_8yDJcg2qpBjVJdEQ2DJGZz
          stance: supports
          locator: CBDB:464843
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

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | 王翔，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 464843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翔（CBDB 464843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464843&o=json)
