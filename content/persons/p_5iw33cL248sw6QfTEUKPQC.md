---
schema: wang-person/v1
id: p_5iw33cL248sw6QfTEUKPQC
status: active
merged_into: null
display_name: 王掞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUkGvAC9eGLop7uirEaW4e
        subject_person_id: p_5iw33cL248sw6QfTEUKPQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REMJaN3JUUxM3PWXs69gzj
          claim_id: c_nUkGvAC9eGLop7uirEaW4e
          source_id: s_1773FMqJV6f26ykoAZKMiD
          stance: supports
          locator: CBDB:37906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37906）
          source: &a1
            id: s_1773FMqJV6f26ykoAZKMiD
            source_type: api_record
            title: 中国历代人物传记资料库：王掞（CBDB 37906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json
            external_identifier: CBDB:37906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CydyxFvs49gDDVowKdK3G7
        subject_person_id: p_5iw33cL248sw6QfTEUKPQC
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
        - id: cs_g3uCAEBKxf4CYCosz1SbkZ
          claim_id: c_CydyxFvs49gDDVowKdK3G7
          source_id: s_1773FMqJV6f26ykoAZKMiD
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

# 王掞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王掞（CBDB 37906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json)
