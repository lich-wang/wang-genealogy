---
schema: wang-person/v1
id: p_Ku2JGCfpBffDG7VAeD76Fb
status: active
merged_into: null
display_name: 王茂林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9TFhSWNmVkoFKbxRy6zJ1X
        subject_person_id: p_Ku2JGCfpBffDG7VAeD76Fb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SoSRHPMnGMLGdVSSNp4j5w
          claim_id: c_9TFhSWNmVkoFKbxRy6zJ1X
          source_id: s_qs5AeXMGfwPgdkm6JHkc4A
          stance: supports
          locator: CBDB:557080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557080）
          source: &a1
            id: s_qs5AeXMGfwPgdkm6JHkc4A
            source_type: api_record
            title: 中国历代人物传记资料库：王茂林（CBDB 557080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557080&o=json
            external_identifier: CBDB:557080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xduGN6spLTZscRcCw7mB4s
        subject_person_id: p_Ku2JGCfpBffDG7VAeD76Fb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂林，清人物。籍贯桐柏。（中国历代人物传记资料库 CBDB 557080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4YfXmcEyJB0tRPhEx5u2T4
          claim_id: c_xduGN6spLTZscRcCw7mB4s
          source_id: s_qs5AeXMGfwPgdkm6JHkc4A
          stance: supports
          locator: CBDB:557080
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

# 王茂林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂林 | accepted |
| bio.summary | 王茂林，清人物。籍贯桐柏。（中国历代人物传记资料库 CBDB 557080） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂林（CBDB 557080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557080&o=json)
