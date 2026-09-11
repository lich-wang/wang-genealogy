---
schema: wang-person/v1
id: p_D9jHxz2fw9ahonFBuWFL2r
status: active
merged_into: null
display_name: 王槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjPeCh35y5bEojgyd9inWw
        subject_person_id: p_D9jHxz2fw9ahonFBuWFL2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Vj1Cj98JE4ZB9iQTZFzo7
          claim_id: c_FjPeCh35y5bEojgyd9inWw
          source_id: s_ZkAE9opByvoEcNzNVSfaPg
          stance: supports
          locator: CBDB:696477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696477）
          source: &a1
            id: s_ZkAE9opByvoEcNzNVSfaPg
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 696477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696477&o=json
            external_identifier: CBDB:696477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3Pg7SoytF3c7RFQdZtPCr
        subject_person_id: p_D9jHxz2fw9ahonFBuWFL2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王槐，明人物。籍贯奉節，入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 696477）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5LBARdCE9z6c85qCvqsSaR
          claim_id: c_G3Pg7SoytF3c7RFQdZtPCr
          source_id: s_ZkAE9opByvoEcNzNVSfaPg
          stance: supports
          locator: CBDB:696477
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

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。籍贯奉節，入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 696477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 696477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696477&o=json)
