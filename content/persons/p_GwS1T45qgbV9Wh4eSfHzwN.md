---
schema: wang-person/v1
id: p_GwS1T45qgbV9Wh4eSfHzwN
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4Rqy3TBCV2DRD7XFLJd2S
        subject_person_id: p_GwS1T45qgbV9Wh4eSfHzwN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TH6ADN7MULFxNFRovGWKSq
          claim_id: c_P4Rqy3TBCV2DRD7XFLJd2S
          source_id: s_gf2QwyU3LNFC5sGm7rJT8s
          stance: supports
          locator: CBDB:460975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460975）
          source: &a1
            id: s_gf2QwyU3LNFC5sGm7rJT8s
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 460975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460975&o=json
            external_identifier: CBDB:460975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_APpgmV4TDNLGoVwpcEPZZT
        subject_person_id: p_GwS1T45qgbV9Wh4eSfHzwN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ETxCQdqucZcrex7B8cELj
          claim_id: c_APpgmV4TDNLGoVwpcEPZZT
          source_id: s_gf2QwyU3LNFC5sGm7rJT8s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 460975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460975&o=json)
