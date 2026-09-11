---
schema: wang-person/v1
id: p_BoNq7mcKUT3DBTJYsEFdJF
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_934PyiDa14FA6FAmfQ9QaD
        subject_person_id: p_BoNq7mcKUT3DBTJYsEFdJF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u3cRqdYtAvBT88hMCZvvho
          claim_id: c_934PyiDa14FA6FAmfQ9QaD
          source_id: s_CN6MZ1qXrotCBowiE7ED4S
          stance: supports
          locator: CBDB:38433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38433）
          source: &a1
            id: s_CN6MZ1qXrotCBowiE7ED4S
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 38433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38433&o=json
            external_identifier: CBDB:38433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j6aFCCQ8JgAN78zRPfqVev
        subject_person_id: p_BoNq7mcKUT3DBTJYsEFdJF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，宋人物。曾任中亮大夫、都統制、安撫制置使。（中国历代人物传记资料库 CBDB 38433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SIMMiAJOWlcex6djk2_A2v
          claim_id: c_j6aFCCQ8JgAN78zRPfqVev
          source_id: s_CN6MZ1qXrotCBowiE7ED4S
          stance: supports
          locator: CBDB:38433
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，宋人物。曾任中亮大夫、都統制、安撫制置使。（中国历代人物传记资料库 CBDB 38433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 38433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38433&o=json)
