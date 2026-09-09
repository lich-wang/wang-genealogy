---
schema: wang-person/v1
id: p_55cMaCQ46kYbkwneDb1NVp
status: active
merged_into: null
display_name: 王裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtL9fbFg3m85cxiBkyK3y1
        subject_person_id: p_55cMaCQ46kYbkwneDb1NVp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95sECUDLM7u5DRVu3P1vru
          claim_id: c_XtL9fbFg3m85cxiBkyK3y1
          source_id: s_nN6QrGQDiqBVmwkhfk7EEb
          stance: supports
          locator: CBDB:100883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100883）
          source: &a1
            id: s_nN6QrGQDiqBVmwkhfk7EEb
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 100883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100883&o=json
            external_identifier: CBDB:100883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LqvHTn2ogxLDR9FA8jq13R
        subject_person_id: p_55cMaCQ46kYbkwneDb1NVp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQHKjspwVBCnPcG1j4hV5k
          claim_id: c_LqvHTn2ogxLDR9FA8jq13R
          source_id: s_nN6QrGQDiqBVmwkhfk7EEb
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

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 100883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100883&o=json)
