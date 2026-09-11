---
schema: wang-person/v1
id: p_HnKjL1FF1J7Z19fUdMogtu
status: active
merged_into: null
display_name: 王玫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bZ4ZQEQQX4WrKzczx7cTRX
        subject_person_id: p_HnKjL1FF1J7Z19fUdMogtu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FP8KAFa6n4mXef3EDRZspJ
          claim_id: c_bZ4ZQEQQX4WrKzczx7cTRX
          source_id: s_fbF3VVHgtDTvQUNWws1ri2
          stance: supports
          locator: CBDB:490291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490291）
          source: &a1
            id: s_fbF3VVHgtDTvQUNWws1ri2
            source_type: api_record
            title: 中国历代人物传记资料库：王玫（CBDB 490291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490291&o=json
            external_identifier: CBDB:490291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NAJpmVxMo2NATGtLKFHJK
        subject_person_id: p_HnKjL1FF1J7Z19fUdMogtu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玫，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 490291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x-rQDER6GHOuJW4-WM40J8
          claim_id: c_6NAJpmVxMo2NATGtLKFHJK
          source_id: s_fbF3VVHgtDTvQUNWws1ri2
          stance: supports
          locator: CBDB:490291
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

# 王玫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玫 | accepted |
| bio.summary | 王玫，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 490291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玫（CBDB 490291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490291&o=json)
