---
schema: wang-person/v1
id: p_VQKPrs82LXPUUMRnjPBHq2
status: active
merged_into: null
display_name: 王重文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LRH3kFfe4C6vvKxzX8hwN2
        subject_person_id: p_VQKPrs82LXPUUMRnjPBHq2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5CeMtcvGW3By5vS7TN6LTN
          claim_id: c_LRH3kFfe4C6vvKxzX8hwN2
          source_id: s_XGueRfso5eZ3VFq2L8pLAo
          stance: supports
          locator: CBDB:640497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640497）
          source: &a1
            id: s_XGueRfso5eZ3VFq2L8pLAo
            source_type: api_record
            title: 中国历代人物传记资料库：王重文（CBDB 640497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640497&o=json
            external_identifier: CBDB:640497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8vjQtNVhNtLyN4sH7Rhjbi
        subject_person_id: p_VQKPrs82LXPUUMRnjPBHq2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重文，清人物。籍贯澂江府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640497）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SmeW6Mgjp_qM2XfXG_Pbwl
          claim_id: c_8vjQtNVhNtLyN4sH7Rhjbi
          source_id: s_XGueRfso5eZ3VFq2L8pLAo
          stance: supports
          locator: CBDB:640497
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

# 王重文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重文 | accepted |
| bio.summary | 王重文，清人物。籍贯澂江府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640497） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重文（CBDB 640497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640497&o=json)
