---
schema: wang-person/v1
id: p_3nhmsrNxtUo7jrqAfFZ7tV
status: active
merged_into: null
display_name: 王以曜
cbdb_id: 67114
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_afG6PMxLktQDbVEuFL6Cbp
        subject_person_id: p_3nhmsrNxtUo7jrqAfFZ7tV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以曜，清人物。籍贯大竹，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 67114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FB5GDDDxBAVPeUSdszi4Y6
          claim_id: c_afG6PMxLktQDbVEuFL6Cbp
          source_id: s_pw7km37R8n9jB4fodbvi4Y
          stance: supports
          locator: CBDB:67114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pw7km37R8n9jB4fodbvi4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王以曜（CBDB 67114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67114&o=json
            external_identifier: CBDB:67114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sqFhCd2MvD3ie3buTAw9NE
        subject_person_id: p_3nhmsrNxtUo7jrqAfFZ7tV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EyYuHgaFvSzt46T3ZLZvLN
          claim_id: c_sqFhCd2MvD3ie3buTAw9NE
          source_id: s_pw7km37R8n9jB4fodbvi4Y
          stance: supports
          locator: CBDB:67114
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王以曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以曜，清人物。籍贯大竹，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 67114） | accepted |
| name.primary | 王以曜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以曜（CBDB 67114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67114&o=json)
