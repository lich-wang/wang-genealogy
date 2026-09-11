---
schema: wang-person/v1
id: p_9suYfdH8wKPSBNKWkuve7L
status: active
merged_into: null
display_name: 王德華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x8ND9rpF4Nm4rh8ft8N1s7
        subject_person_id: p_9suYfdH8wKPSBNKWkuve7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H84rooaN17KAhL33P4eiiK
          claim_id: c_x8ND9rpF4Nm4rh8ft8N1s7
          source_id: s_4qkYELxj9Qnd3h97fxC6Ji
          stance: supports
          locator: CBDB:637709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637709）
          source: &a1
            id: s_4qkYELxj9Qnd3h97fxC6Ji
            source_type: api_record
            title: 中国历代人物传记资料库：王德華（CBDB 637709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637709&o=json
            external_identifier: CBDB:637709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hr36GnyEFvp5aEonwK5t1u
        subject_person_id: p_9suYfdH8wKPSBNKWkuve7L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德華，清人物。籍贯富平，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 637709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O1DZ0WQXdE7jyEvZqzccpo
          claim_id: c_Hr36GnyEFvp5aEonwK5t1u
          source_id: s_4qkYELxj9Qnd3h97fxC6Ji
          stance: supports
          locator: CBDB:637709
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

# 王德華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德華 | accepted |
| bio.summary | 王德華，清人物。籍贯富平，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 637709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德華（CBDB 637709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637709&o=json)
