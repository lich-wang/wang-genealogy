---
schema: wang-person/v1
id: p_weKPF8KJ76tecCepSnnkSG
status: active
merged_into: null
display_name: 王光潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dckwcD8QChWqEFKHz41v3
        subject_person_id: p_weKPF8KJ76tecCepSnnkSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JkEnv44912iFF2Td6xDzJR
          claim_id: c_5dckwcD8QChWqEFKHz41v3
          source_id: s_bw5N29dQBzEgMYPWgQCyDg
          stance: supports
          locator: CBDB:636259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636259）
          source: &a1
            id: s_bw5N29dQBzEgMYPWgQCyDg
            source_type: api_record
            title: 中国历代人物传记资料库：王光潤（CBDB 636259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636259&o=json
            external_identifier: CBDB:636259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fgq4dhafw6dKV4Tcq4t9ve
        subject_person_id: p_weKPF8KJ76tecCepSnnkSG
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
        - id: cs_VEYEBvQGhEZyWJs3w9UY81
          claim_id: c_fgq4dhafw6dKV4Tcq4t9ve
          source_id: s_bw5N29dQBzEgMYPWgQCyDg
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

# 王光潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光潤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光潤（CBDB 636259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636259&o=json)
