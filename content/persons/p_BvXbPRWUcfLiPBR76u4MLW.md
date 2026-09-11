---
schema: wang-person/v1
id: p_BvXbPRWUcfLiPBR76u4MLW
status: active
merged_into: null
display_name: 王埜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECVX7MmJUYJtePpLNguwkV
        subject_person_id: p_BvXbPRWUcfLiPBR76u4MLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uyv6VR2N37w3skv6e7G2XL
          claim_id: c_ECVX7MmJUYJtePpLNguwkV
          source_id: s_JE3EYBu67fSr2MZLKWmG78
          stance: supports
          locator: CBDB:10242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10242）
          source: &a1
            id: s_JE3EYBu67fSr2MZLKWmG78
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 10242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10242&o=json
            external_identifier: CBDB:10242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MHGCwEWum73fpKLq23b9jL
        subject_person_id: p_BvXbPRWUcfLiPBR76u4MLW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1260年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Y1p2kLhfZ6mGbnNDaFEka
          claim_id: c_MHGCwEWum73fpKLq23b9jL
          source_id: s_JE3EYBu67fSr2MZLKWmG78
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
        id: c_hqPkCHDbfjEQahgXcK7B6R
        subject_person_id: p_BvXbPRWUcfLiPBR76u4MLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜（卒于1260年），宋人物。籍贯金華，入仕進士，曾任安撫使、磨勘諸路提點刑獄司、端明殿學士。（中国历代人物传记资料库 CBDB 10242）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0HWvG_W63J1Azb4V61Yaas
          claim_id: c_hqPkCHDbfjEQahgXcK7B6R
          source_id: s_JE3EYBu67fSr2MZLKWmG78
          stance: supports
          locator: CBDB:10242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Et1YCQ0dSqNDkZr2O0mpRi
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BvXbPRWUcfLiPBR76u4MLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OM1fsujhsV_o7uaIGZR5Zz
          claim_id: c_Et1YCQ0dSqNDkZr2O0mpRi
          source_id: s_JE3EYBu67fSr2MZLKWmG78
          stance: supports
          locator: CBDB 双向互证（父 王介 ⇄ 子 王埜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_N1sjWWAngPbNQ5mXRM9s3H
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埜 | accepted |
| death.date | 1260年 | accepted |
| bio.summary | 王埜（卒于1260年），宋人物。籍贯金華，入仕進士，曾任安撫使、磨勘諸路提點刑獄司、端明殿學士。（中国历代人物传记资料库 CBDB 10242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N1sjWWAngPbNQ5mXRM9s3H | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王埜（CBDB 10242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10242&o=json)
