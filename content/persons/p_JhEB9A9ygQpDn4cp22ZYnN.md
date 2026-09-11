---
schema: wang-person/v1
id: p_JhEB9A9ygQpDn4cp22ZYnN
status: active
merged_into: null
display_name: 王熢煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gd7hYuyGNfGJoW1Era9ARD
        subject_person_id: p_JhEB9A9ygQpDn4cp22ZYnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熢煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t7Qc9cQ8zQKiLe1YxZQaGN
          claim_id: c_gd7hYuyGNfGJoW1Era9ARD
          source_id: s_o1duRtEDeuqfF9MYKJKXD5
          stance: supports
          locator: CBDB:639339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639339）
          source: &a1
            id: s_o1duRtEDeuqfF9MYKJKXD5
            source_type: api_record
            title: 中国历代人物传记资料库：王熢煜（CBDB 639339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639339&o=json
            external_identifier: CBDB:639339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y2CMFZzSDk6fNFT73S9LVf
        subject_person_id: p_JhEB9A9ygQpDn4cp22ZYnN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熢煜，清人物。籍贯臨海，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HmvgCI1zguerRqVILdUnNC
          claim_id: c_y2CMFZzSDk6fNFT73S9LVf
          source_id: s_o1duRtEDeuqfF9MYKJKXD5
          stance: supports
          locator: CBDB:639339
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

# 王熢煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熢煜 | accepted |
| bio.summary | 王熢煜，清人物。籍贯臨海，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熢煜（CBDB 639339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639339&o=json)
