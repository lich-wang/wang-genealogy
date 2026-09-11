---
schema: wang-person/v1
id: p_v8QJWiNZrqJwnkJQPtUaSk
status: active
merged_into: null
display_name: 王鴻儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJxQMzYg3vA21GxkKLNuvE
        subject_person_id: p_v8QJWiNZrqJwnkJQPtUaSk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jpF3VNQ5hzMzWYW8NT98Am
          claim_id: c_DJxQMzYg3vA21GxkKLNuvE
          source_id: s_uusV72MC3fMFY8PY3aXtD8
          stance: supports
          locator: CBDB:507978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507978）
          source: &a1
            id: s_uusV72MC3fMFY8PY3aXtD8
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 507978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507978&o=json
            external_identifier: CBDB:507978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RYK2GvywvMHsAfViZUc5En
        subject_person_id: p_v8QJWiNZrqJwnkJQPtUaSk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒，明人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 507978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gg-LPi5uBaXjsiLhc5Ti1Y
          claim_id: c_RYK2GvywvMHsAfViZUc5En
          source_id: s_uusV72MC3fMFY8PY3aXtD8
          stance: supports
          locator: CBDB:507978
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

# 王鴻儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻儒 | accepted |
| bio.summary | 王鴻儒，明人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 507978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻儒（CBDB 507978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507978&o=json)
