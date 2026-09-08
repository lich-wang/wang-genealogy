---
schema: wang-person/v1
id: p_3Jpz1MJr19NoGHADTpC82d
status: active
merged_into: null
display_name: 王串
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2EnjFq49nBqtGMbevVXsf9
        subject_person_id: p_3Jpz1MJr19NoGHADTpC82d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王串
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dbdunfrnuDABsMEfzrfS68
          claim_id: c_2EnjFq49nBqtGMbevVXsf9
          source_id: s_A9W6Fn8pDLjwCDupsuh81N
          stance: supports
          locator: Q45430635
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_A9W6Fn8pDLjwCDupsuh81N
            source_type: api_record
            title: 维基数据：王串（Q45430635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430635
            external_identifier: Q45430635
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_zqbyqSK41nVFASozdbMFTj
          claim_id: c_2EnjFq49nBqtGMbevVXsf9
          source_id: s_zrGhehvrVoziMLAjiazdKH
          stance: supports
          locator: CBDB:37767
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_zrGhehvrVoziMLAjiazdKH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王串（37767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37767&o=json
            external_identifier: CBDB:37767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CubLWWNiTQngYPD9M3oV2x
        subject_person_id: p_3Jpz1MJr19NoGHADTpC82d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 37767
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZjAPB1do23W85xf8fHH2k
          claim_id: c_CubLWWNiTQngYPD9M3oV2x
          source_id: s_A9W6Fn8pDLjwCDupsuh81N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5NA5N9BMyx3Bip3HJ9mgmZ
        subject_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Jpz1MJr19NoGHADTpC82d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4QV741ZxNMbrAFuX9kSJh
          claim_id: c_5NA5N9BMyx3Bip3HJ9mgmZ
          source_id: s_HL9c8H9GGz9vuWNZQPLLbQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HL9c8H9GGz9vuWNZQPLLbQ
            source_type: api_record
            title: 维基数据：王松龄（Q45427492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45427492
            external_identifier: Q45427492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
        - id: cs_mKWy2XoZ3TkzGAUsFqia9j
          claim_id: c_5NA5N9BMyx3Bip3HJ9mgmZ
          source_id: s_A9W6Fn8pDLjwCDupsuh81N
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_Bxf4gH2xyWjLA2FCR3BhN7
        status: active
        display_name: 王松龄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王串

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王串 | accepted |
| bio.summary | Song dynasty person CBDB = 37767 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bxf4gH2xyWjLA2FCR3BhN7 | 王松龄 | accepted |

## 外部来源

- [维基数据：王串（Q45430635）](https://www.wikidata.org/wiki/Q45430635)
- [维基数据：王松龄（Q45427492）](https://www.wikidata.org/wiki/Q45427492)
- [CBDB 中国历代人物传记资料库：王串（37767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37767&o=json)
