---
schema: wang-person/v1
id: p_7r1tFDmKLC5H5M1a3wJKQp
status: active
merged_into: null
display_name: 王焜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JUnP2F12S3BtDhrdJZN7Nb
        subject_person_id: p_7r1tFDmKLC5H5M1a3wJKQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UygjHdNvRc73WFRAXe1f3G
          claim_id: c_JUnP2F12S3BtDhrdJZN7Nb
          source_id: s_c758EJXKcfo72zfmWHX4WN
          stance: supports
          locator: CBDB:561693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561693）
          source: &a1
            id: s_c758EJXKcfo72zfmWHX4WN
            source_type: api_record
            title: 中国历代人物传记资料库：王焜（CBDB 561693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561693&o=json
            external_identifier: CBDB:561693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pRqG1WyQm534yTqkMuCvaR
        subject_person_id: p_7r1tFDmKLC5H5M1a3wJKQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焜，清人物。籍贯會稽，曾任提刑按察司僉事、知縣。（中国历代人物传记资料库 CBDB 561693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kg3aioC0I-Q-xYuy_w2MG9
          claim_id: c_pRqG1WyQm534yTqkMuCvaR
          source_id: s_c758EJXKcfo72zfmWHX4WN
          stance: supports
          locator: CBDB:561693
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

# 王焜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焜 | accepted |
| bio.summary | 王焜，清人物。籍贯會稽，曾任提刑按察司僉事、知縣。（中国历代人物传记资料库 CBDB 561693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焜（CBDB 561693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561693&o=json)
