---
schema: wang-person/v1
id: p_NF8podpLsEgEc39ofXyyLv
status: active
merged_into: null
display_name: 王亭
cbdb_id: 175623
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XiKyXPFNAQNJcEjWQif9cz
        subject_person_id: p_NF8podpLsEgEc39ofXyyLv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亭（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xxd3ffGgMKiEwMpD6Xz67D
          claim_id: c_XiKyXPFNAQNJcEjWQif9cz
          source_id: s_KgqgFE3oCMhc3oCeQxpDQF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KgqgFE3oCMhc3oCeQxpDQF
            source_type: api_record
            title: 维基数据：王亭（Q45669688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669688
            external_identifier: Q45669688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
        - id: cs_ueX_qhQYKC5-HaVXb2-K-w
          claim_id: c_XiKyXPFNAQNJcEjWQif9cz
          source_id: s_EsLKVWKFTiR6F1Ps4XJsD1
          stance: supports
          locator: CBDB:175623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EsLKVWKFTiR6F1Ps4XJsD1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王亭（175623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175623&o=json
            external_identifier: CBDB:175623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.865Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QqF4hwmLsHP32wDZY2mbjM
        subject_person_id: p_NF8podpLsEgEc39ofXyyLv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tqnXy2fhd4wfB2hEJoGQk6
          claim_id: c_QqF4hwmLsHP32wDZY2mbjM
          source_id: s_KgqgFE3oCMhc3oCeQxpDQF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KgqgFE3oCMhc3oCeQxpDQF
            source_type: api_record
            title: 维基数据：王亭（Q45669688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669688
            external_identifier: Q45669688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNDNudVVUtkpGEvMFEaQ5c
        subject_person_id: p_NF8podpLsEgEc39ofXyyLv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LdETNy8rXTu32nicN2TEB4
          claim_id: c_eNDNudVVUtkpGEvMFEaQ5c
          source_id: s_EsLKVWKFTiR6F1Ps4XJsD1
          stance: supports
          locator: Q45669688
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_PjxajSP6Tu4pPaMWaUREjH
          claim_id: c_eNDNudVVUtkpGEvMFEaQ5c
          source_id: s_KgqgFE3oCMhc3oCeQxpDQF
          stance: supports
          locator: Q45669688
          quotation: null
          interpretation_note: null
          source:
            id: s_KgqgFE3oCMhc3oCeQxpDQF
            source_type: api_record
            title: 维基数据：王亭（Q45669688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669688
            external_identifier: Q45669688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p5UFeGBua1FQGRoPfM3gM7
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NF8podpLsEgEc39ofXyyLv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_39WL8SnmBUx6rJQJfmfavu
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
        - id: cs_EqEs8FajPsHnKLJmXM8kwY
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_VgwBwzA2pAArGk2k8Y9PBP
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_KgqgFE3oCMhc3oCeQxpDQF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KgqgFE3oCMhc3oCeQxpDQF
            source_type: api_record
            title: 维基数据：王亭（Q45669688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669688
            external_identifier: Q45669688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
        - id: cs_dPbycnFBjrCHZ61fRkQTw1
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_EsLKVWKFTiR6F1Ps4XJsD1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EsLKVWKFTiR6F1Ps4XJsD1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王亭（175623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175623&o=json
            external_identifier: CBDB:175623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.865Z
            metadata_json: null
      object_person:
        id: p_epoDmVwU2aQ9MXeKvgwabg
        status: active
        display_name: 王罕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王亭（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175623） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王亭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epoDmVwU2aQ9MXeKvgwabg | 王罕 | accepted |

## 外部来源

- [维基数据：王罕（Q45669640）](https://www.wikidata.org/wiki/Q45669640)
- [维基数据：王亭（Q45669688）](https://www.wikidata.org/wiki/Q45669688)
- [CBDB 中国历代人物传记资料库：王罕（175622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json)
- [CBDB 中国历代人物传记资料库：王亭（175623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175623&o=json)
