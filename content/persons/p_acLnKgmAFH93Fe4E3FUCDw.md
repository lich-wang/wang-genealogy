---
schema: wang-person/v1
id: p_acLnKgmAFH93Fe4E3FUCDw
status: active
merged_into: null
display_name: 王紹曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFsx6A7u5w5r916A3V5aLJ
        subject_person_id: p_acLnKgmAFH93Fe4E3FUCDw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B3S1TUv2VAa6HEf2f5pn16
          claim_id: c_hFsx6A7u5w5r916A3V5aLJ
          source_id: s_M2uUewKMWdeGVeVUBuarhE
          stance: supports
          locator: CBDB:453374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453374）
          source: &a1
            id: s_M2uUewKMWdeGVeVUBuarhE
            source_type: api_record
            title: 中国历代人物传记资料库：王紹曾（CBDB 453374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453374&o=json
            external_identifier: CBDB:453374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8cEJR7Bs4C8pGxiE3ceom
        subject_person_id: p_acLnKgmAFH93Fe4E3FUCDw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPbPHWzXLkcM3ioYW1QsSm
          claim_id: c_B8cEJR7Bs4C8pGxiE3ceom
          source_id: s_M2uUewKMWdeGVeVUBuarhE
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

# 王紹曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹曾（CBDB 453374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453374&o=json)
