---
schema: wang-person/v1
id: p_v9JXi3CCd8LV9hsuaFheGJ
status: active
merged_into: null
display_name: 王起鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sfPX5argqWLqNABQnvK6pn
        subject_person_id: p_v9JXi3CCd8LV9hsuaFheGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MzYKzoFjLiQW7QuHLDKwe2
          claim_id: c_sfPX5argqWLqNABQnvK6pn
          source_id: s_XGsv4xR8TANX7uwEkbJaw1
          stance: supports
          locator: CBDB:640357
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640357）
          source: &a1
            id: s_XGsv4xR8TANX7uwEkbJaw1
            source_type: api_record
            title: 中国历代人物传记资料库：王起鳳（CBDB 640357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640357&o=json
            external_identifier: CBDB:640357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QnKmtx6pEDS9wzQt1aCdFT
        subject_person_id: p_v9JXi3CCd8LV9hsuaFheGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起鳳，清人物。籍贯趙州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640357）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q8aGzbP9mvLwpDm5jqhnjL
          claim_id: c_QnKmtx6pEDS9wzQt1aCdFT
          source_id: s_XGsv4xR8TANX7uwEkbJaw1
          stance: supports
          locator: CBDB:640357
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

# 王起鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起鳳 | accepted |
| bio.summary | 王起鳳，清人物。籍贯趙州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640357） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起鳳（CBDB 640357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640357&o=json)
