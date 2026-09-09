---
schema: wang-person/v1
id: p_VD7tzpuZ5tXdMcs81Z6Q1K
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r3tzS9yY4sQ1bAkW7AiaJF
        subject_person_id: p_VD7tzpuZ5tXdMcs81Z6Q1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vR3cJVQAaMDvEBbuKgd4Yb
          claim_id: c_r3tzS9yY4sQ1bAkW7AiaJF
          source_id: s_NGjFc7v7Fx8q8SAEMPKC1Z
          stance: supports
          locator: CBDB:149159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149159）
          source: &a1
            id: s_NGjFc7v7Fx8q8SAEMPKC1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 149159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149159&o=json
            external_identifier: CBDB:149159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6n1wNGrVBsvuMCMEdpi1Jf
        subject_person_id: p_VD7tzpuZ5tXdMcs81Z6Q1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FkpTC4aFxBqWV7RX5nEJP
          claim_id: c_6n1wNGrVBsvuMCMEdpi1Jf
          source_id: s_NGjFc7v7Fx8q8SAEMPKC1Z
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 149159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149159&o=json)
