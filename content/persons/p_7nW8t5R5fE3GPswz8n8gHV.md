---
schema: wang-person/v1
id: p_7nW8t5R5fE3GPswz8n8gHV
status: active
merged_into: null
display_name: 王域
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E65jfUHvtn4375QNGtzYXg
        subject_person_id: p_7nW8t5R5fE3GPswz8n8gHV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ejMuPsoDh83g4yRry6nGy3
          claim_id: c_E65jfUHvtn4375QNGtzYXg
          source_id: s_h88dFAYGf57oH3bcM82Ukk
          stance: supports
          locator: CBDB:126677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126677）
          source: &a1
            id: s_h88dFAYGf57oH3bcM82Ukk
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 126677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126677&o=json
            external_identifier: CBDB:126677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oL3gMxFNkn17YP945jXX4f
        subject_person_id: p_7nW8t5R5fE3GPswz8n8gHV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域，明人物。籍贯華亭，曾任知府、州學正。（中国历代人物传记资料库 CBDB 126677）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I7HSrI4lHK0_vpTEWuOr_3
          claim_id: c_oL3gMxFNkn17YP945jXX4f
          source_id: s_h88dFAYGf57oH3bcM82Ukk
          stance: supports
          locator: CBDB:126677
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

# 王域

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王域 | accepted |
| bio.summary | 王域，明人物。籍贯華亭，曾任知府、州學正。（中国历代人物传记资料库 CBDB 126677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王域（CBDB 126677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126677&o=json)
