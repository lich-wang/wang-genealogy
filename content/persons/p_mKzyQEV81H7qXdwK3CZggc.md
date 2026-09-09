---
schema: wang-person/v1
id: p_mKzyQEV81H7qXdwK3CZggc
status: active
merged_into: null
display_name: 王育秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PU8NqSGRSYe4vyZh8P6G2p
        subject_person_id: p_mKzyQEV81H7qXdwK3CZggc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tALyLMK5YJg3WA5WQ1yp3B
          claim_id: c_PU8NqSGRSYe4vyZh8P6G2p
          source_id: s_ERe1RLfky2HU1g3LtnrDj7
          stance: supports
          locator: CBDB:639996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639996）
          source: &a1
            id: s_ERe1RLfky2HU1g3LtnrDj7
            source_type: api_record
            title: 中国历代人物传记资料库：王育秀（CBDB 639996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639996&o=json
            external_identifier: CBDB:639996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LqJPX6yEVdcWYrAHeaTvbu
        subject_person_id: p_mKzyQEV81H7qXdwK3CZggc
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
        - id: cs_yYChXg1usEjUgDCmGcV2vQ
          claim_id: c_LqJPX6yEVdcWYrAHeaTvbu
          source_id: s_ERe1RLfky2HU1g3LtnrDj7
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

# 王育秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育秀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育秀（CBDB 639996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639996&o=json)
