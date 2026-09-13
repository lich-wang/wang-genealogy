---
schema: wang-person/v1
id: p_zXY7kt53p3ANN9H4P6ii19
status: active
merged_into: null
display_name: 王源洁
cbdb_id: 175569
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pJxSPrj92DTMTES7a28Uqb
        subject_person_id: p_zXY7kt53p3ANN9H4P6ii19
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源洁（卒于783年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_7fwtN3x9b7kDMvbGMQLUwo
          claim_id: c_pJxSPrj92DTMTES7a28Uqb
          source_id: s_19EyDSQnj4zvB8tdPKo9g4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_19EyDSQnj4zvB8tdPKo9g4
            source_type: api_record
            title: 维基数据：王源洁（Q45667041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667041
            external_identifier: Q45667041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_2JLEDNCijn8eRYiRIcxObp
          claim_id: c_pJxSPrj92DTMTES7a28Uqb
          source_id: s_FTKTsyMES28Vt7EAo11DbX
          stance: supports
          locator: CBDB:175569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FTKTsyMES28Vt7EAo11DbX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源潔（175569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175569&o=json
            external_identifier: CBDB:175569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.831Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4GB4SshBZqNXto7QS55wT7
        subject_person_id: p_zXY7kt53p3ANN9H4P6ii19
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
        - id: cs_9q7o9yPLsox8SX4fro7HLs
          claim_id: c_4GB4SshBZqNXto7QS55wT7
          source_id: s_19EyDSQnj4zvB8tdPKo9g4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_19EyDSQnj4zvB8tdPKo9g4
            source_type: api_record
            title: 维基数据：王源洁（Q45667041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667041
            external_identifier: Q45667041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJCtY3iszYMKuCVRRWFB6P
        subject_person_id: p_zXY7kt53p3ANN9H4P6ii19
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源洁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6p1adYJW8FnQs34qoXqMCU
          claim_id: c_zJCtY3iszYMKuCVRRWFB6P
          source_id: s_19EyDSQnj4zvB8tdPKo9g4
          stance: supports
          locator: Q45667041
          quotation: null
          interpretation_note: null
          source:
            id: s_19EyDSQnj4zvB8tdPKo9g4
            source_type: api_record
            title: 维基数据：王源洁（Q45667041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667041
            external_identifier: Q45667041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_UkMrQKXmx1bf2vcTRY52tQ
          claim_id: c_zJCtY3iszYMKuCVRRWFB6P
          source_id: s_FTKTsyMES28Vt7EAo11DbX
          stance: supports
          locator: Q45667041
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LCN6mvtarX2hWTX2j82bBi
        subject_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zXY7kt53p3ANN9H4P6ii19
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZGcJ7vhbPrskAkA8PdEc8G
          claim_id: c_LCN6mvtarX2hWTX2j82bBi
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CDmGssuD4bbsbkTxTHmB8V
            source_type: api_record
            title: 维基数据：王寰（Q45666933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666933
            external_identifier: Q45666933
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_xnZCMEU9cuspvUPhdjWCyz
          claim_id: c_LCN6mvtarX2hWTX2j82bBi
          source_id: s_wb4Nstb43vxda3d1EoF9mK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wb4Nstb43vxda3d1EoF9mK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寰（175567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175567&o=json
            external_identifier: CBDB:175567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.939Z
            metadata_json: null
        - id: cs_9zCAaoEj2kgRaaUJSrHpz4
          claim_id: c_LCN6mvtarX2hWTX2j82bBi
          source_id: s_19EyDSQnj4zvB8tdPKo9g4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_19EyDSQnj4zvB8tdPKo9g4
            source_type: api_record
            title: 维基数据：王源洁（Q45667041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667041
            external_identifier: Q45667041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_dRvbySWAA5vgDKRWeazZMc
          claim_id: c_LCN6mvtarX2hWTX2j82bBi
          source_id: s_FTKTsyMES28Vt7EAo11DbX
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FTKTsyMES28Vt7EAo11DbX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源潔（175569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175569&o=json
            external_identifier: CBDB:175569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.831Z
            metadata_json: null
      object_person:
        id: p_SfcEYoZkoLruJ4uuLuNwXA
        status: active
        display_name: 王寰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源洁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源洁（卒于783年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175569） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王源洁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SfcEYoZkoLruJ4uuLuNwXA | 王寰 | accepted |

## 外部来源

- [维基数据：王寰（Q45666933）](https://www.wikidata.org/wiki/Q45666933)
- [维基数据：王源洁（Q45667041）](https://www.wikidata.org/wiki/Q45667041)
- [CBDB 中国历代人物传记资料库：王寰（175567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175567&o=json)
- [CBDB 中国历代人物传记资料库：王源潔（175569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175569&o=json)
