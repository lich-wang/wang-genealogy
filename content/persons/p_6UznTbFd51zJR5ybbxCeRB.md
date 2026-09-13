---
schema: wang-person/v1
id: p_6UznTbFd51zJR5ybbxCeRB
status: active
merged_into: null
display_name: 王嗣宗
cbdb_id: 175556
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Een3XFuMPp4k55A6LZ1BHn
        subject_person_id: p_6UznTbFd51zJR5ybbxCeRB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗（卒于783年），唐人物。籍贯咸陽，身份为書法家。（中国历代人物传记资料库 CBDB 175556）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tF2KMWUN3eAWEC1Aku4jdR
          claim_id: c_Een3XFuMPp4k55A6LZ1BHn
          source_id: s_3odpPbnaTGaASYYgeAYCRZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3odpPbnaTGaASYYgeAYCRZ
            source_type: api_record
            title: 维基数据：王嗣宗（Q45666343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666343
            external_identifier: Q45666343
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_7mJb85VFlHWBZRVJuosrTg
          claim_id: c_Een3XFuMPp4k55A6LZ1BHn
          source_id: s_8gZR1Rx3KXWGfAdaZJGgs4
          stance: supports
          locator: CBDB:175556
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8gZR1Rx3KXWGfAdaZJGgs4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣宗（175556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175556&o=json
            external_identifier: CBDB:175556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.174Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_txPP8PoVZUki6ep2rj2FxJ
        subject_person_id: p_6UznTbFd51zJR5ybbxCeRB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CJ3WhRZJ3MmYPvPCb4CBFV
          claim_id: c_txPP8PoVZUki6ep2rj2FxJ
          source_id: s_3odpPbnaTGaASYYgeAYCRZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3odpPbnaTGaASYYgeAYCRZ
            source_type: api_record
            title: 维基数据：王嗣宗（Q45666343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666343
            external_identifier: Q45666343
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETk1Cs34HaimBd75LhKU78
        subject_person_id: p_6UznTbFd51zJR5ybbxCeRB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L2xuQbb3cvmikbDVhyhK5g
          claim_id: c_ETk1Cs34HaimBd75LhKU78
          source_id: s_8gZR1Rx3KXWGfAdaZJGgs4
          stance: supports
          locator: Q45666343
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ahr4tCvUrUhaoWBFpvMxVE
          claim_id: c_ETk1Cs34HaimBd75LhKU78
          source_id: s_3odpPbnaTGaASYYgeAYCRZ
          stance: supports
          locator: Q45666343
          quotation: null
          interpretation_note: null
          source:
            id: s_3odpPbnaTGaASYYgeAYCRZ
            source_type: api_record
            title: 维基数据：王嗣宗（Q45666343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666343
            external_identifier: Q45666343
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XgvhGJ5RsqKog8x3mHZAqm
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6UznTbFd51zJR5ybbxCeRB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VNHscbPZtphS9AkX6cxdFT
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_b3BUKe9qGFk1C8AKxDmTUg
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_KtpG9JJaH1rNrcJ56cEKPf
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_3odpPbnaTGaASYYgeAYCRZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3odpPbnaTGaASYYgeAYCRZ
            source_type: api_record
            title: 维基数据：王嗣宗（Q45666343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666343
            external_identifier: Q45666343
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_QS14AiXZVEJPNHnEVbEKAe
          claim_id: c_XgvhGJ5RsqKog8x3mHZAqm
          source_id: s_8gZR1Rx3KXWGfAdaZJGgs4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8gZR1Rx3KXWGfAdaZJGgs4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣宗（175556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175556&o=json
            external_identifier: CBDB:175556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.174Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣宗（卒于783年），唐人物。籍贯咸陽，身份为書法家。（中国历代人物传记资料库 CBDB 175556） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王嗣宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |

## 外部来源

- [维基数据：王嗣宗（Q45666343）](https://www.wikidata.org/wiki/Q45666343)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王嗣宗（175556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175556&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
