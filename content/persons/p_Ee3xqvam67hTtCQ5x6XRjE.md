---
schema: wang-person/v1
id: p_Ee3xqvam67hTtCQ5x6XRjE
status: active
merged_into: null
display_name: 王增丞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFeeYM71AQ7H2jKd4MZMXM
        subject_person_id: p_Ee3xqvam67hTtCQ5x6XRjE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增丞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7NG15C8VHTDZYN96tYtoT
          claim_id: c_LFeeYM71AQ7H2jKd4MZMXM
          source_id: s_T4949JoMdJAWNUT355TYd9
          stance: supports
          locator: CBDB:636767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636767）
          source: &a1
            id: s_T4949JoMdJAWNUT355TYd9
            source_type: api_record
            title: 中国历代人物传记资料库：王增丞（CBDB 636767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636767&o=json
            external_identifier: CBDB:636767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cx6PdbWX8JvraZRr2Re7BA
        subject_person_id: p_Ee3xqvam67hTtCQ5x6XRjE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增丞，清人物。籍贯潞安府，曾任訓導。（中国历代人物传记资料库 CBDB 636767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3rH9RH_sPXKavq6seijTM9
          claim_id: c_Cx6PdbWX8JvraZRr2Re7BA
          source_id: s_T4949JoMdJAWNUT355TYd9
          stance: supports
          locator: CBDB:636767
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

# 王增丞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增丞 | accepted |
| bio.summary | 王增丞，清人物。籍贯潞安府，曾任訓導。（中国历代人物传记资料库 CBDB 636767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增丞（CBDB 636767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636767&o=json)
