---
schema: wang-person/v1
id: p_rFx4rFX4Tv2LfgzTCnSKu7
status: active
merged_into: null
display_name: 王楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2neYYesHVepbUtmRJRJeTN
        subject_person_id: p_rFx4rFX4Tv2LfgzTCnSKu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKF2eC4zZZHC63ygKdjwv8
          claim_id: c_2neYYesHVepbUtmRJRJeTN
          source_id: s_TRiP9bUdx6VPZVYRYabMM1
          stance: supports
          locator: CBDB:97934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97934）
          source: &a1
            id: s_TRiP9bUdx6VPZVYRYabMM1
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 97934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97934&o=json
            external_identifier: CBDB:97934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G8H4cvHCu4DDLHjuPt2YVD
        subject_person_id: p_rFx4rFX4Tv2LfgzTCnSKu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨，宋人物。曾任國子監博士。（中国历代人物传记资料库 CBDB 97934）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gExILOg2J09ABZkYZBb3E3
          claim_id: c_G8H4cvHCu4DDLHjuPt2YVD
          source_id: s_TRiP9bUdx6VPZVYRYabMM1
          stance: supports
          locator: CBDB:97934
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

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | 王楨，宋人物。曾任國子監博士。（中国历代人物传记资料库 CBDB 97934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 97934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97934&o=json)
