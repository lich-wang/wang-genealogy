---
schema: wang-person/v1
id: p_qRAo74wWb3E8sikq6ywKgJ
status: active
merged_into: null
display_name: 王楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HZoKU81q4fQLjpyZgfPT5e
        subject_person_id: p_qRAo74wWb3E8sikq6ywKgJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BaLeqK8L2wtxwY23FeCj6w
          claim_id: c_HZoKU81q4fQLjpyZgfPT5e
          source_id: s_nFeSnT8FAfLepU2cLRe5LJ
          stance: supports
          locator: CBDB:343049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343049）
          source: &a1
            id: s_nFeSnT8FAfLepU2cLRe5LJ
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 343049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343049&o=json
            external_identifier: CBDB:343049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_po5zBCpCiaAXNV1bHSRyxK
        subject_person_id: p_qRAo74wWb3E8sikq6ywKgJ
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
        - id: cs_oq6auf1w9q7pFZUpoy1B8P
          claim_id: c_po5zBCpCiaAXNV1bHSRyxK
          source_id: s_nFeSnT8FAfLepU2cLRe5LJ
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

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 343049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343049&o=json)
