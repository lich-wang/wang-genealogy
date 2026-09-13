---
schema: wang-person/v1
id: p_yv85iMSEixKWR4Bwa93MTf
status: active
merged_into: null
display_name: 王朝用
cbdb_id: 35272
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BvnBdihZMbGzBeU87QTi4y
        subject_person_id: p_yv85iMSEixKWR4Bwa93MTf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 35272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_EZz5qgpuRxs8j4G6VhQ1Ha
          claim_id: c_BvnBdihZMbGzBeU87QTi4y
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_yJrmajipRuAV1QZPatauhk
            source_type: api_record
            title: 维基数据：王朝用（Q45426051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426051
            external_identifier: Q45426051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_TE2_P0NVAT1Pcp2dvtjSNi
          claim_id: c_BvnBdihZMbGzBeU87QTi4y
          source_id: s_CwhUEJoHdrvQ9LEyt21yLX
          stance: supports
          locator: CBDB:35272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CwhUEJoHdrvQ9LEyt21yLX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王朝用（35272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35272&o=json
            external_identifier: CBDB:35272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.418Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_veZN2uFdeuod5Z2sx8yv1Z
        subject_person_id: p_yv85iMSEixKWR4Bwa93MTf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T4x4CB2fPxSxCA6EpGuG4D
          claim_id: c_veZN2uFdeuod5Z2sx8yv1Z
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: Q45426051
          quotation: null
          interpretation_note: null
          source:
            id: s_yJrmajipRuAV1QZPatauhk
            source_type: api_record
            title: 维基数据：王朝用（Q45426051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426051
            external_identifier: Q45426051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_sHjHgDFdqZBhE8MyB5XcuM
          claim_id: c_veZN2uFdeuod5Z2sx8yv1Z
          source_id: s_CwhUEJoHdrvQ9LEyt21yLX
          stance: supports
          locator: Q45426051
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J7pQ7fuFxJxLTd81GAHNKQ
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yv85iMSEixKWR4Bwa93MTf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_if7mfVMgC7MfduyYuPWXdX
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_He7adhF56nziofDuPL9FLp
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DoBjWv3uiE5kRTQKLU6pMe
            source_type: api_record
            title: 维基数据：王忠（Q45426092）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426092
            external_identifier: Q45426092
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_9eCcDpeVkEgC9tqMMZEZWG
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_WH9uXRvGN5NozL1gWJ7b28
        subject_person_id: p_yv85iMSEixKWR4Bwa93MTf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nz48pSWAW4LPxqPoD9gVkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8yQYyY1oSFGHkvXdYCaVV
          claim_id: c_WH9uXRvGN5NozL1gWJ7b28
          source_id: s_gn85ptgouvAdUmyZY5r85u
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gn85ptgouvAdUmyZY5r85u
            source_type: api_record
            title: 维基数据：王希淮（Q45425959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425959
            external_identifier: Q45425959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_oBjuKBZXQG7iGAL6SrTX79
          claim_id: c_WH9uXRvGN5NozL1gWJ7b28
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_QER5T6Pbj1NoUNVphDDy64
          claim_id: c_WH9uXRvGN5NozL1gWJ7b28
          source_id: s_CwhUEJoHdrvQ9LEyt21yLX
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_Nz48pSWAW4LPxqPoD9gVkb
        status: active
        display_name: 王希淮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝用，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 35272） | accepted |
| name.primary | 王朝用 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9eCcDpeVkEgC9tqMMZEZWG | 王忠 | accepted |
| children | p_Nz48pSWAW4LPxqPoD9gVkb | 王希淮 | accepted |

## 外部来源

- [维基数据：王朝用（Q45426051）](https://www.wikidata.org/wiki/Q45426051)
- [维基数据：王希淮（Q45425959）](https://www.wikidata.org/wiki/Q45425959)
- [维基数据：王忠（Q45426092）](https://www.wikidata.org/wiki/Q45426092)
- [CBDB 中国历代人物传记资料库：王朝用（35272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35272&o=json)
