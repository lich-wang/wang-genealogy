---
schema: wang-person/v1
id: p_DhbDxoGuChmwGgnkuHpfgA
status: active
merged_into: null
display_name: 王廷葵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P1PsHnQA5xD39FQJPyKvEq
        subject_person_id: p_DhbDxoGuChmwGgnkuHpfgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ax7QfHqHnziYWc8cRxQth
          claim_id: c_P1PsHnQA5xD39FQJPyKvEq
          source_id: s_7noAPPoyNEc8d2Dz1gduHj
          stance: supports
          locator: CBDB:637551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637551）
          source: &a1
            id: s_7noAPPoyNEc8d2Dz1gduHj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷葵（CBDB 637551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637551&o=json
            external_identifier: CBDB:637551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jTaff83yo9sASCNU4U1dmq
        subject_person_id: p_DhbDxoGuChmwGgnkuHpfgA
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
        - id: cs_8BA26C1g7wcSHwyLJFqAMe
          claim_id: c_jTaff83yo9sASCNU4U1dmq
          source_id: s_7noAPPoyNEc8d2Dz1gduHj
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

# 王廷葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷葵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷葵（CBDB 637551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637551&o=json)
