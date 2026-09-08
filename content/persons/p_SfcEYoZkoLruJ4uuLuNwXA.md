---
schema: wang-person/v1
id: p_SfcEYoZkoLruJ4uuLuNwXA
status: active
merged_into: null
display_name: 王寰
cbdb_id: 175567
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sebGvtQrLw9CGKMVYfvX56
        subject_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175567 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_a4CL5WediTXJRuBALT3x7k
          claim_id: c_sebGvtQrLw9CGKMVYfvX56
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: null
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
        - id: cs_7f30HT-wG9JjzH8HqCUfXa
          claim_id: c_sebGvtQrLw9CGKMVYfvX56
          source_id: s_wb4Nstb43vxda3d1EoF9mK
          stance: supports
          locator: CBDB:175567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W947SQGBqBRCR5E3KdBywr
        subject_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
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
        - id: cs_1Z1jag85JbqvPdieX4hd62
          claim_id: c_W947SQGBqBRCR5E3KdBywr
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgVA2ifKApeNNTtewojsQY
        subject_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KjroFrxXGzGizJKS4A8BN6
          claim_id: c_dgVA2ifKApeNNTtewojsQY
          source_id: s_wb4Nstb43vxda3d1EoF9mK
          stance: supports
          locator: Q45666933
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NUMHAEmR1rWoMWurk6HFVq
          claim_id: c_dgVA2ifKApeNNTtewojsQY
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: Q45666933
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qk2vBVPH9pvZzGpyeRqKrP
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9yvVLNqWQYzDeaVCSF8vRC
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_EEAFPHxS2gADUiJGdZx61w
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
        - id: cs_JL3Yy62mTVPDi6aagi3vZ1
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: P22（父）
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
        - id: cs_YFFeXFwNfKDxxVKL76tu33
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_wb4Nstb43vxda3d1EoF9mK
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_WdFmE9KEnRrkWkP6FtALJ2
        status: active
        display_name: 王晊
        merged_into_person_id: null
  children:
    - claim:
        id: c_by51NARTN6YJ4GP3DAcwKo
        subject_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M3D2FKDJFx2Hq3AxD7bJQN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TyxtehE9fRXdLtnBBTf96b
          claim_id: c_by51NARTN6YJ4GP3DAcwKo
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
        - id: cs_W65tciJZQCa2AXDpw9nrLU
          claim_id: c_by51NARTN6YJ4GP3DAcwKo
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
        - id: cs_pnTjHJR3aGRV2PaG4GDgCX
          claim_id: c_by51NARTN6YJ4GP3DAcwKo
          source_id: s_KJB7goeN9BnZMJKgpV3FfQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KJB7goeN9BnZMJKgpV3FfQ
            source_type: api_record
            title: 维基数据：王嗣立（Q45666988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666988
            external_identifier: Q45666988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_PKHvWE38G2VDctFABu9Jq1
          claim_id: c_by51NARTN6YJ4GP3DAcwKo
          source_id: s_G5LXWEd5DGRLyXv1D4GBvb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_G5LXWEd5DGRLyXv1D4GBvb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣立（175568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175568&o=json
            external_identifier: CBDB:175568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.853Z
            metadata_json: null
      object_person:
        id: p_M3D2FKDJFx2Hq3AxD7bJQN
        status: active
        display_name: 王嗣立
        merged_into_person_id: null
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
        id: p_zXY7kt53p3ANN9H4P6ii19
        status: active
        display_name: 王源洁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寰（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175567 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王寰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WdFmE9KEnRrkWkP6FtALJ2 | 王晊 | accepted |
| children | p_M3D2FKDJFx2Hq3AxD7bJQN | 王嗣立 | accepted |
| children | p_zXY7kt53p3ANN9H4P6ii19 | 王源洁 | accepted |

## 外部来源

- [维基数据：王寰（Q45666933）](https://www.wikidata.org/wiki/Q45666933)
- [维基数据：王嗣立（Q45666988）](https://www.wikidata.org/wiki/Q45666988)
- [维基数据：王源洁（Q45667041）](https://www.wikidata.org/wiki/Q45667041)
- [维基数据：王晊（Q45666881）](https://www.wikidata.org/wiki/Q45666881)
- [CBDB 中国历代人物传记资料库：王寰（175567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175567&o=json)
- [CBDB 中国历代人物传记资料库：王嗣立（175568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175568&o=json)
- [CBDB 中国历代人物传记资料库：王源潔（175569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175569&o=json)
- [CBDB 中国历代人物传记资料库：王晊（175566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json)
