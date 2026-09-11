---
schema: wang-person/v1
id: p_iiRZtEXefMF7oQTKZ3gNf9
status: active
merged_into: null
display_name: 王輝祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VsdqrYztN7CKesHCXNhZCM
        subject_person_id: p_iiRZtEXefMF7oQTKZ3gNf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNtg7MASPrXhYuQBfP1e5R
          claim_id: c_VsdqrYztN7CKesHCXNhZCM
          source_id: s_VTRNyiQBa9M1kYy46kgERd
          stance: supports
          locator: CBDB:640376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640376）
          source: &a1
            id: s_VTRNyiQBa9M1kYy46kgERd
            source_type: api_record
            title: 中国历代人物传记资料库：王輝祖（CBDB 640376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640376&o=json
            external_identifier: CBDB:640376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5CXoQoVkGbTD8w312ohbGY
        subject_person_id: p_iiRZtEXefMF7oQTKZ3gNf9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝祖，清人物。籍贯蕭山，曾任知縣。（中国历代人物传记资料库 CBDB 640376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rQ-AdS6srqD67xGfF1HlX5
          claim_id: c_5CXoQoVkGbTD8w312ohbGY
          source_id: s_VTRNyiQBa9M1kYy46kgERd
          stance: supports
          locator: CBDB:640376
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

# 王輝祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝祖 | accepted |
| bio.summary | 王輝祖，清人物。籍贯蕭山，曾任知縣。（中国历代人物传记资料库 CBDB 640376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輝祖（CBDB 640376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640376&o=json)
