---
schema: wang-person/v1
id: p_F1SA4GMpW7hY9zvxJGubQ2
status: active
merged_into: null
display_name: 王鏵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkS8N9HNxLCbMKbvoS81yq
        subject_person_id: p_F1SA4GMpW7hY9zvxJGubQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3QuXA7zMJ7F4EA8B51cjEW
          claim_id: c_ZkS8N9HNxLCbMKbvoS81yq
          source_id: s_2xFsH5VuSMJeAKB66dhJgF
          stance: supports
          locator: CBDB:640711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640711）
          source: &a1
            id: s_2xFsH5VuSMJeAKB66dhJgF
            source_type: api_record
            title: 中国历代人物传记资料库：王鏵（CBDB 640711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640711&o=json
            external_identifier: CBDB:640711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JBEMCBA5noE4tg3LjmN7ii
        subject_person_id: p_F1SA4GMpW7hY9zvxJGubQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏵，清人物。籍贯祁陽，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 640711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PHU_Mpgv1u_sLHIYqBkMwX
          claim_id: c_JBEMCBA5noE4tg3LjmN7ii
          source_id: s_2xFsH5VuSMJeAKB66dhJgF
          stance: supports
          locator: CBDB:640711
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

# 王鏵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏵 | accepted |
| bio.summary | 王鏵，清人物。籍贯祁陽，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 640711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏵（CBDB 640711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640711&o=json)
