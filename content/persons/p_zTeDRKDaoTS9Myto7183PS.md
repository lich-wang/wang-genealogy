---
schema: wang-person/v1
id: p_zTeDRKDaoTS9Myto7183PS
status: active
merged_into: null
display_name: 王克俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_86F6yTYXLwE9AJsHo59u6w
        subject_person_id: p_zTeDRKDaoTS9Myto7183PS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HdQ5p7Ko157GjPaiC48P3h
          claim_id: c_86F6yTYXLwE9AJsHo59u6w
          source_id: s_bV1kXcoP8BDdRJpkLECWGT
          stance: supports
          locator: CBDB:636290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636290）
          source: &a1
            id: s_bV1kXcoP8BDdRJpkLECWGT
            source_type: api_record
            title: 中国历代人物传记资料库：王克俊（CBDB 636290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636290&o=json
            external_identifier: CBDB:636290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4cu3gSz4XJWZgqRu3vUNSP
        subject_person_id: p_zTeDRKDaoTS9Myto7183PS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克俊，清人物。籍贯敘州府，曾任訓導。（中国历代人物传记资料库 CBDB 636290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V2jny0PTYhzHcazFHHLZyU
          claim_id: c_4cu3gSz4XJWZgqRu3vUNSP
          source_id: s_bV1kXcoP8BDdRJpkLECWGT
          stance: supports
          locator: CBDB:636290
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

# 王克俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克俊 | accepted |
| bio.summary | 王克俊，清人物。籍贯敘州府，曾任訓導。（中国历代人物传记资料库 CBDB 636290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克俊（CBDB 636290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636290&o=json)
