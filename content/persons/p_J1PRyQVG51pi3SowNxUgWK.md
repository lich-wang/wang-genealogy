---
schema: wang-person/v1
id: p_J1PRyQVG51pi3SowNxUgWK
status: active
merged_into: null
display_name: 王彥至
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4soPLcGxiTU4FkD4ZKsavc
        subject_person_id: p_J1PRyQVG51pi3SowNxUgWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥至
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ug6KE9GcG1ETY3u9j3ms2N
          claim_id: c_4soPLcGxiTU4FkD4ZKsavc
          source_id: s_cbkd84M5F8Agq91AbK3KpV
          stance: supports
          locator: CBDB:532552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532552）
          source: &a1
            id: s_cbkd84M5F8Agq91AbK3KpV
            source_type: api_record
            title: 中国历代人物传记资料库：王彥至（CBDB 532552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532552&o=json
            external_identifier: CBDB:532552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.371Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2XyvHSwRvE81w7BeY8DY3Y
        subject_person_id: p_J1PRyQVG51pi3SowNxUgWK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥至，宋人物。籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 532552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_suciJ6TH-g0Eiixlcb0d8N
          claim_id: c_2XyvHSwRvE81w7BeY8DY3Y
          source_id: s_cbkd84M5F8Agq91AbK3KpV
          stance: supports
          locator: CBDB:532552
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

# 王彥至

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥至 | accepted |
| bio.summary | 王彥至，宋人物。籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 532552） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥至（CBDB 532552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532552&o=json)
