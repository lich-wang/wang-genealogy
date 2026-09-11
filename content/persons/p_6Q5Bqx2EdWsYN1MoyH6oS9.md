---
schema: wang-person/v1
id: p_6Q5Bqx2EdWsYN1MoyH6oS9
status: active
merged_into: null
display_name: 王光紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tbMSQzMVQwo63mWQ2yhPag
        subject_person_id: p_6Q5Bqx2EdWsYN1MoyH6oS9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3Kfk8gGxcB9aFbH9kxUQC
          claim_id: c_tbMSQzMVQwo63mWQ2yhPag
          source_id: s_m8kGVhyCCK6foKfmfkRzBd
          stance: supports
          locator: CBDB:636273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636273）
          source: &a1
            id: s_m8kGVhyCCK6foKfmfkRzBd
            source_type: api_record
            title: 中国历代人物传记资料库：王光紹（CBDB 636273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636273&o=json
            external_identifier: CBDB:636273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SP8s62vVRP8hbg7sHc6y8o
        subject_person_id: p_6Q5Bqx2EdWsYN1MoyH6oS9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光紹，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636273）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EHqrIFIHrzPitru9utCcea
          claim_id: c_SP8s62vVRP8hbg7sHc6y8o
          source_id: s_m8kGVhyCCK6foKfmfkRzBd
          stance: supports
          locator: CBDB:636273
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

# 王光紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光紹 | accepted |
| bio.summary | 王光紹，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光紹（CBDB 636273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636273&o=json)
