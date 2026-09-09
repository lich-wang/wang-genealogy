---
schema: wang-person/v1
id: p_BcuhtjD5d59vQDR3NcyyPZ
status: active
merged_into: null
display_name: 王愛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a3k9XhAhzChXwkpu8CW267
        subject_person_id: p_BcuhtjD5d59vQDR3NcyyPZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wC7jeJjqEmD9qQgZJw6vxN
          claim_id: c_a3k9XhAhzChXwkpu8CW267
          source_id: s_VaP1HgMVxVE81M2kijsMJB
          stance: supports
          locator: CBDB:126768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126768）
          source: &a1
            id: s_VaP1HgMVxVE81M2kijsMJB
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 126768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126768&o=json
            external_identifier: CBDB:126768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1WHQbKrBHCQf6z1gKVu6ZJ
        subject_person_id: p_BcuhtjD5d59vQDR3NcyyPZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z6oqvH7ZzwjqXY2SxL2akt
          claim_id: c_1WHQbKrBHCQf6z1gKVu6ZJ
          source_id: s_VaP1HgMVxVE81M2kijsMJB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_umD8a4HLpPdsA9k6sBJC3Z
        subject_person_id: p_BcuhtjD5d59vQDR3NcyyPZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1571年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kFLrkFYY3A68S64pvLfZh6
          claim_id: c_umD8a4HLpPdsA9k6sBJC3Z
          source_id: s_VaP1HgMVxVE81M2kijsMJB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQB2Nhpp8x1X74WgiQnszz
        subject_person_id: p_BcuhtjD5d59vQDR3NcyyPZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1P9GtYiXGyDu1gxCWPnDHr
          claim_id: c_bQB2Nhpp8x1X74WgiQnszz
          source_id: s_VaP1HgMVxVE81M2kijsMJB
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

# 王愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛 | accepted |
| birth.date | 1507年 | accepted |
| death.date | 1571年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 126768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126768&o=json)
