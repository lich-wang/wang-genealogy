---
schema: wang-person/v1
id: p_AzjP7fEA33eihqAFiWXi6g
status: active
merged_into: null
display_name: 王逄舜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C21NuMA8K5Bn7uMQ916Ao5
        subject_person_id: p_AzjP7fEA33eihqAFiWXi6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逄舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zV9qUPfb5R4onaanbzRyDr
          claim_id: c_C21NuMA8K5Bn7uMQ916Ao5
          source_id: s_TF6E7FcNQCud6hLhwxbW5P
          stance: supports
          locator: CBDB:640402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640402）
          source: &a1
            id: s_TF6E7FcNQCud6hLhwxbW5P
            source_type: api_record
            title: 中国历代人物传记资料库：王逄舜（CBDB 640402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640402&o=json
            external_identifier: CBDB:640402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_so2mBA4eqYYtLALAp1i7SL
        subject_person_id: p_AzjP7fEA33eihqAFiWXi6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逄舜，清人物。籍贯杭州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640402）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bev_6MgpiOG10xeE4rQK4T
          claim_id: c_so2mBA4eqYYtLALAp1i7SL
          source_id: s_TF6E7FcNQCud6hLhwxbW5P
          stance: supports
          locator: CBDB:640402
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

# 王逄舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逄舜 | accepted |
| bio.summary | 王逄舜，清人物。籍贯杭州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640402） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逄舜（CBDB 640402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640402&o=json)
