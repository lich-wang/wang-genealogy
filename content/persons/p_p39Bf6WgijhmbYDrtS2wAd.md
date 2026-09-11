---
schema: wang-person/v1
id: p_p39Bf6WgijhmbYDrtS2wAd
status: active
merged_into: null
display_name: 王新楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXqdg3wH2G61MH7w1vgrhP
        subject_person_id: p_p39Bf6WgijhmbYDrtS2wAd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oHKdMHBH5J3SUAZj16r2ot
          claim_id: c_xXqdg3wH2G61MH7w1vgrhP
          source_id: s_hMYKSs2i6fzMWMLWJ6CsN9
          stance: supports
          locator: CBDB:638305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638305）
          source: &a1
            id: s_hMYKSs2i6fzMWMLWJ6CsN9
            source_type: api_record
            title: 中国历代人物传记资料库：王新楨（CBDB 638305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638305&o=json
            external_identifier: CBDB:638305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMazrq8Qc7wnau8PwKjvMD
        subject_person_id: p_p39Bf6WgijhmbYDrtS2wAd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新楨，清人物。籍贯太康，入仕進士，曾任知縣、主事。（中国历代人物传记资料库 CBDB 638305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TcaCepFfT58kbtB69Wr9b2
          claim_id: c_mMazrq8Qc7wnau8PwKjvMD
          source_id: s_hMYKSs2i6fzMWMLWJ6CsN9
          stance: supports
          locator: CBDB:638305
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

# 王新楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新楨 | accepted |
| bio.summary | 王新楨，清人物。籍贯太康，入仕進士，曾任知縣、主事。（中国历代人物传记资料库 CBDB 638305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新楨（CBDB 638305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638305&o=json)
