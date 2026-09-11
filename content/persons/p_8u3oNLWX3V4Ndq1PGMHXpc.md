---
schema: wang-person/v1
id: p_8u3oNLWX3V4Ndq1PGMHXpc
status: active
merged_into: null
display_name: 王師閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x4QUzsNZm2KVqM4qCLGoqB
        subject_person_id: p_8u3oNLWX3V4Ndq1PGMHXpc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S1tSJFdc4FPDuWkdNVAD4G
          claim_id: c_x4QUzsNZm2KVqM4qCLGoqB
          source_id: s_kmm5qax6w1tuaFBjPqbYiX
          stance: supports
          locator: CBDB:383620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383620）
          source: &a1
            id: s_kmm5qax6w1tuaFBjPqbYiX
            source_type: api_record
            title: 中国历代人物传记资料库：王師閔（CBDB 383620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383620&o=json
            external_identifier: CBDB:383620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9N7Xx3CW5XFTgH7MEhb46
        subject_person_id: p_8u3oNLWX3V4Ndq1PGMHXpc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師閔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_96VD6KHivzif7otvpKeXd_
          claim_id: c_Q9N7Xx3CW5XFTgH7MEhb46
          source_id: s_kmm5qax6w1tuaFBjPqbYiX
          stance: supports
          locator: CBDB:383620
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

# 王師閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師閔 | accepted |
| bio.summary | 王師閔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師閔（CBDB 383620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383620&o=json)
