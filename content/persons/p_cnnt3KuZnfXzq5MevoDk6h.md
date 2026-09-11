---
schema: wang-person/v1
id: p_cnnt3KuZnfXzq5MevoDk6h
status: active
merged_into: null
display_name: 王該
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2vtTfo8hqaFVCw4UAvo1TH
        subject_person_id: p_cnnt3KuZnfXzq5MevoDk6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王該
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDZRwhJR3mTkypygeE1eDm
          claim_id: c_2vtTfo8hqaFVCw4UAvo1TH
          source_id: s_WdWKXXTUb2YAApJJeZ6rR8
          stance: supports
          locator: CBDB:38787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38787）
          source: &a1
            id: s_WdWKXXTUb2YAApJJeZ6rR8
            source_type: api_record
            title: 中国历代人物传记资料库：王該（CBDB 38787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38787&o=json
            external_identifier: CBDB:38787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAm3SfP43Vfb8cspb5LJ4e
        subject_person_id: p_cnnt3KuZnfXzq5MevoDk6h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王該，宋人物。籍贯龍城。（中国历代人物传记资料库 CBDB 38787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yHIdTdhznPpRJSPmZZdgI-
          claim_id: c_RAm3SfP43Vfb8cspb5LJ4e
          source_id: s_WdWKXXTUb2YAApJJeZ6rR8
          stance: supports
          locator: CBDB:38787
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

# 王該

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王該 | accepted |
| bio.summary | 王該，宋人物。籍贯龍城。（中国历代人物传记资料库 CBDB 38787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王該（CBDB 38787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38787&o=json)
