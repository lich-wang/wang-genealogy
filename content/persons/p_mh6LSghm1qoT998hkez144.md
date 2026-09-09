---
schema: wang-person/v1
id: p_mh6LSghm1qoT998hkez144
status: active
merged_into: null
display_name: 王蘅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7yRE5xKUHR3w411r6SA8A
        subject_person_id: p_mh6LSghm1qoT998hkez144
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4MT8HtCxck1W5xDX6bVzbs
          claim_id: c_e7yRE5xKUHR3w411r6SA8A
          source_id: s_wGoAEDV6EAMMPgKbiG8Wwr
          stance: supports
          locator: CBDB:101006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101006）
          source: &a1
            id: s_wGoAEDV6EAMMPgKbiG8Wwr
            source_type: api_record
            title: 中国历代人物传记资料库：王蘅（CBDB 101006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101006&o=json
            external_identifier: CBDB:101006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7cNCPFC153z32bzuvyfsUx
        subject_person_id: p_mh6LSghm1qoT998hkez144
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pMJNkxJAW3Ev7r3d6ob8dh
          claim_id: c_7cNCPFC153z32bzuvyfsUx
          source_id: s_wGoAEDV6EAMMPgKbiG8Wwr
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

# 王蘅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘅 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘅（CBDB 101006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101006&o=json)
