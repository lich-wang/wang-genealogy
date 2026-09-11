---
schema: wang-person/v1
id: p_33KUeSL8mD8pXcnsWQFjZP
status: active
merged_into: null
display_name: 王協一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XD4VEQBDz8aAej2ZJwU5f5
        subject_person_id: p_33KUeSL8mD8pXcnsWQFjZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p4qhdeN3ULLFDcoFfFNEWV
          claim_id: c_XD4VEQBDz8aAej2ZJwU5f5
          source_id: s_URc7WCKLvfLtXnpP7NSJUG
          stance: supports
          locator: CBDB:101227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101227）
          source: &a1
            id: s_URc7WCKLvfLtXnpP7NSJUG
            source_type: api_record
            title: 中国历代人物传记资料库：王協一（CBDB 101227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101227&o=json
            external_identifier: CBDB:101227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t5KAs5zJ9vuu9e9P9UXvQP
        subject_person_id: p_33KUeSL8mD8pXcnsWQFjZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協一，元人物。曾任祕書監令史。（中国历代人物传记资料库 CBDB 101227）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z0qx7CCWYd7vSujb5YW0_1
          claim_id: c_t5KAs5zJ9vuu9e9P9UXvQP
          source_id: s_URc7WCKLvfLtXnpP7NSJUG
          stance: supports
          locator: CBDB:101227
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

# 王協一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王協一 | accepted |
| bio.summary | 王協一，元人物。曾任祕書監令史。（中国历代人物传记资料库 CBDB 101227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王協一（CBDB 101227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101227&o=json)
