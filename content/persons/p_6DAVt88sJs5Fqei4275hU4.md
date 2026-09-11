---
schema: wang-person/v1
id: p_6DAVt88sJs5Fqei4275hU4
status: active
merged_into: null
display_name: 王鈅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ziWe7n7Kji4uD27eTThfkH
        subject_person_id: p_6DAVt88sJs5Fqei4275hU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W67pktr3qhC8f2McscfCEt
          claim_id: c_ziWe7n7Kji4uD27eTThfkH
          source_id: s_s2kbWxsH8wgx7T159b2djd
          stance: supports
          locator: CBDB:640545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640545）
          source: &a1
            id: s_s2kbWxsH8wgx7T159b2djd
            source_type: api_record
            title: 中国历代人物传记资料库：王鈅（CBDB 640545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640545&o=json
            external_identifier: CBDB:640545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kyVw1Qt4DahVR7eWDQ7GSP
        subject_person_id: p_6DAVt88sJs5Fqei4275hU4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鈅，清人物。籍贯肅寧，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 640545）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Dg-6C1n6rIuVUB0ELoT9E
          claim_id: c_kyVw1Qt4DahVR7eWDQ7GSP
          source_id: s_s2kbWxsH8wgx7T159b2djd
          stance: supports
          locator: CBDB:640545
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

# 王鈅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈅 | accepted |
| bio.summary | 王鈅，清人物。籍贯肅寧，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 640545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈅（CBDB 640545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640545&o=json)
