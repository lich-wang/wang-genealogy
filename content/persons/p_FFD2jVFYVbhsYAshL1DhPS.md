---
schema: wang-person/v1
id: p_FFD2jVFYVbhsYAshL1DhPS
status: active
merged_into: null
display_name: 王擢
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2GmURL33rBANEv1d4PTLHx
        subject_person_id: p_FFD2jVFYVbhsYAshL1DhPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175397 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s2EksMRjHLAjn9Lqa8N5gj
          claim_id: c_2GmURL33rBANEv1d4PTLHx
          source_id: s_z7226Pa3uynT3owB8yDoGh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_z7226Pa3uynT3owB8yDoGh
            source_type: api_record
            title: 维基数据：王擢（Q45657213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657213
            external_identifier: Q45657213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:55.642Z
            metadata_json: null
        - id: cs_HhgK9jI0B7b8jLltG4HmUf
          claim_id: c_2GmURL33rBANEv1d4PTLHx
          source_id: s_bFz3h1cb5eZbtyoVRSmjFJ
          stance: supports
          locator: CBDB:175397
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bFz3h1cb5eZbtyoVRSmjFJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王擢（175397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175397&o=json
            external_identifier: CBDB:175397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:55.782Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E7wyFprMja4376gkBAcyu8
        subject_person_id: p_FFD2jVFYVbhsYAshL1DhPS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AN2dFEMVEeRcvfjmzv95iK
          claim_id: c_E7wyFprMja4376gkBAcyu8
          source_id: s_z7226Pa3uynT3owB8yDoGh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_z7226Pa3uynT3owB8yDoGh
            source_type: api_record
            title: 维基数据：王擢（Q45657213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657213
            external_identifier: Q45657213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:55.642Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sV5aWHdPJ1tncTNNo9sK3U
        subject_person_id: p_FFD2jVFYVbhsYAshL1DhPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HGZyHv3XoVVP5mNNvx9EM9
          claim_id: c_sV5aWHdPJ1tncTNNo9sK3U
          source_id: s_z7226Pa3uynT3owB8yDoGh
          stance: supports
          locator: Q45657213
          quotation: null
          interpretation_note: null
          source:
            id: s_z7226Pa3uynT3owB8yDoGh
            source_type: api_record
            title: 维基数据：王擢（Q45657213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657213
            external_identifier: Q45657213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:55.642Z
            metadata_json: null
        - id: cs_KZD4TBj2WtfiWJpUkPDxXh
          claim_id: c_sV5aWHdPJ1tncTNNo9sK3U
          source_id: s_bFz3h1cb5eZbtyoVRSmjFJ
          stance: supports
          locator: Q45657213
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CPnP6wxbwaaEuQ2u8d7ASp
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FFD2jVFYVbhsYAshL1DhPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kPSwCNbHPKcmjo8ZDT316a
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_zYdguymW7YX87gFEHMC1vE
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
        - id: cs_fVMPGDpRdAa2i5CDeyZLwc
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_z7226Pa3uynT3owB8yDoGh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_z7226Pa3uynT3owB8yDoGh
            source_type: api_record
            title: 维基数据：王擢（Q45657213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657213
            external_identifier: Q45657213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:55.642Z
            metadata_json: null
        - id: cs_k8p4CnMS1LBJGHyTbqd5k5
          claim_id: c_CPnP6wxbwaaEuQ2u8d7ASp
          source_id: s_bFz3h1cb5eZbtyoVRSmjFJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_bFz3h1cb5eZbtyoVRSmjFJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王擢（175397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175397&o=json
            external_identifier: CBDB:175397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:55.782Z
            metadata_json: null
      object_person:
        id: p_V58imM4qevLKTMUDbrBs11
        status: active
        display_name: 王思晳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王擢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王擢（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175397 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王擢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V58imM4qevLKTMUDbrBs11 | 王思晳 | accepted |

## 外部来源

- [维基数据：王思晳（Q45657096）](https://www.wikidata.org/wiki/Q45657096)
- [维基数据：王擢（Q45657213）](https://www.wikidata.org/wiki/Q45657213)
- [CBDB 中国历代人物传记资料库：王思晳（175395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json)
- [CBDB 中国历代人物传记资料库：王擢（175397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175397&o=json)
