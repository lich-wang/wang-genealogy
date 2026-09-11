---
schema: wang-person/v1
id: p_2XzXDL41w3KHP6qVQFc365
status: active
merged_into: null
display_name: 王必遵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AD4mL3L14SYQ35k6nP5S9f
        subject_person_id: p_2XzXDL41w3KHP6qVQFc365
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QTHhFUobyqZtqebcNC7La3
          claim_id: c_AD4mL3L14SYQ35k6nP5S9f
          source_id: s_NrqJEZLn7AnxXry7vDFytp
          stance: supports
          locator: CBDB:637742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637742）
          source: &a1
            id: s_NrqJEZLn7AnxXry7vDFytp
            source_type: api_record
            title: 中国历代人物传记资料库：王必遵（CBDB 637742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637742&o=json
            external_identifier: CBDB:637742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCB5xuzrJTTPyAGipWyafT
        subject_person_id: p_2XzXDL41w3KHP6qVQFc365
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必遵，清人物。籍贯吉水，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 637742）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AaJ9Zuplapjvx0uPZWbj8b
          claim_id: c_wCB5xuzrJTTPyAGipWyafT
          source_id: s_NrqJEZLn7AnxXry7vDFytp
          stance: supports
          locator: CBDB:637742
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

# 王必遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王必遵 | accepted |
| bio.summary | 王必遵，清人物。籍贯吉水，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 637742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王必遵（CBDB 637742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637742&o=json)
