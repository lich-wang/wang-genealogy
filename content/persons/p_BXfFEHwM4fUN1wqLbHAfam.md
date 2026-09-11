---
schema: wang-person/v1
id: p_BXfFEHwM4fUN1wqLbHAfam
status: active
merged_into: null
display_name: 王國禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6J6cQNN71vuCY5wVXMvm3q
        subject_person_id: p_BXfFEHwM4fUN1wqLbHAfam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98ebVKrgq3wBeFz4xiZK7J
          claim_id: c_6J6cQNN71vuCY5wVXMvm3q
          source_id: s_nbADcjjpUKEfC5Se3w67LD
          stance: supports
          locator: CBDB:504283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504283）
          source: &a1
            id: s_nbADcjjpUKEfC5Se3w67LD
            source_type: api_record
            title: 中国历代人物传记资料库：王國禎（CBDB 504283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504283&o=json
            external_identifier: CBDB:504283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ZKMAiYUMpp9KT4Ht3LJpC
        subject_person_id: p_BXfFEHwM4fUN1wqLbHAfam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 504283）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r9q12yEx1RfyedZXUWLo8y
          claim_id: c_6ZKMAiYUMpp9KT4Ht3LJpC
          source_id: s_nbADcjjpUKEfC5Se3w67LD
          stance: supports
          locator: CBDB:504283
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

# 王國禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國禎 | accepted |
| bio.summary | 王國禎，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 504283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國禎（CBDB 504283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504283&o=json)
