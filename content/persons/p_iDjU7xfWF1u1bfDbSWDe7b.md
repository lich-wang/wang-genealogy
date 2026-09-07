---
schema: wang-person/v1
id: p_iDjU7xfWF1u1bfDbSWDe7b
status: active
merged_into: null
display_name: 王涛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_863DT6wQ4qnwP84ACctLBL
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涛（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175594 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N26hGrgLUmS597ts5bfAY6
          claim_id: c_863DT6wQ4qnwP84ACctLBL
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_MHe5nJfYbrZpReklc3mdw9
          claim_id: c_863DT6wQ4qnwP84ACctLBL
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: CBDB:175594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dB2h8qndWe6QFfKABKKSLZ
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
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
        - id: cs_hcTeStwcTppf1u4o8H4A7A
          claim_id: c_dB2h8qndWe6QFfKABKKSLZ
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4qqiEtGtzo6g4vhGgk37r
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W44jV5ZYafUU7F7RJo14Rm
          claim_id: c_h4qqiEtGtzo6g4vhGgk37r
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: Q45668270
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WZNT2T6TpaGPjFtWCEU2cL
          claim_id: c_h4qqiEtGtzo6g4vhGgk37r
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: Q45668270
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pctQsHWJ7AnbvZVGEHgexV
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BpW6qrPD9bzS6yHMJCrDD8
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_fPzmTzCJD4c8M4TryD5ANw
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_HtDAo8QMX77fv1fjkGhtJA
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_exRp4pxir1ax27tBdLJN44
          claim_id: c_pctQsHWJ7AnbvZVGEHgexV
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
      object_person:
        id: p_DbKg6Z6wj4BMKWgbEDKMoY
        status: active
        display_name: 王佾
        merged_into_person_id: null
  children:
    - claim:
        id: c_WLGdCxBv2AQJx5xZu9Wfna
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2y2Lv2wwPmAeHd6wAzori
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jfeBeE6Ppjj4WLevs28NAK
          claim_id: c_WLGdCxBv2AQJx5xZu9Wfna
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_txgS1CqH85c5MaLLG87ue5
          claim_id: c_WLGdCxBv2AQJx5xZu9Wfna
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_bjGDJTHiZLPHkEUqzRgkez
          claim_id: c_WLGdCxBv2AQJx5xZu9Wfna
          source_id: s_Fyb5MjRA1MohoCTJafJngH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Fyb5MjRA1MohoCTJafJngH
            source_type: api_record
            title: 维基数据：王源孚（Q45668322）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668322
            external_identifier: Q45668322
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
        - id: cs_kzvi4Hr2LFKUbF6h27Hijr
          claim_id: c_WLGdCxBv2AQJx5xZu9Wfna
          source_id: s_mCZgkRae11JELYPM1JWWaB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mCZgkRae11JELYPM1JWWaB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源孚（175595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175595&o=json
            external_identifier: CBDB:175595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.724Z
            metadata_json: null
      object_person:
        id: p_D2y2Lv2wwPmAeHd6wAzori
        status: active
        display_name: 王源孚
        merged_into_person_id: null
    - claim:
        id: c_CE2XPL8pmKmLwWmqsMANBo
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gg1UgtGeCXPsZbGbRxxciL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CBy4LFHLoXLaY8SKK1KYav
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_mv8k2GofGbnUaLrJBL5BQb
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_vHdEup2NumZJJDArmS2dN9
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_1V1N5CqgbbC8iNfh3VWMwF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1V1N5CqgbbC8iNfh3VWMwF
            source_type: api_record
            title: 维基数据：王源采（Q45668371）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668371
            external_identifier: Q45668371
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
        - id: cs_KpdFVBKNE9CeeJBetckB28
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_GPMJGyS2DpCP28UFKw1YX4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GPMJGyS2DpCP28UFKw1YX4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源采（175596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175596&o=json
            external_identifier: CBDB:175596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.717Z
            metadata_json: null
      object_person:
        id: p_gg1UgtGeCXPsZbGbRxxciL
        status: active
        display_name: 王源采
        merged_into_person_id: null
    - claim:
        id: c_LPfitWPwiDLVbQCKhwN8bR
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BjfWTQ3bxaePX6m9r2vdD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_869ETBFRbCd1mZTb5FYHAT
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_gy4mEDxJ8EEQsAn3KUS9xG
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_26L7uUKt4kQxcMwtEhQnAW
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_3G1fWK7mDYLJrAK92Euy8n
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3G1fWK7mDYLJrAK92Euy8n
            source_type: api_record
            title: 维基数据：王源芳（Q45668420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668420
            external_identifier: Q45668420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json: null
        - id: cs_1TokK2evNBTLKZ9tvPkNDN
          claim_id: c_LPfitWPwiDLVbQCKhwN8bR
          source_id: s_h3Bf8MJ7aYsXqUtFS7MsG9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h3Bf8MJ7aYsXqUtFS7MsG9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源芳（175597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175597&o=json
            external_identifier: CBDB:175597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.725Z
            metadata_json: null
      object_person:
        id: p_1BjfWTQ3bxaePX6m9r2vdD
        status: active
        display_name: 王源芳
        merged_into_person_id: null
    - claim:
        id: c_VpikFQJJJe48kBuzjfiL4o
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zms3XCQG3jDEGZghagHh4H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WjdeKi6sXWXzufZMQptc5J
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_zVyj49fuB1cY8XRmMB495Z
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_FHTHfP14BBfTRcCcXSLT5R
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_yMKh7d8VoLyomJ4w4APrZD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yMKh7d8VoLyomJ4w4APrZD
            source_type: api_record
            title: 维基数据：王源旭（Q45668472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668472
            external_identifier: Q45668472
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.395Z
            metadata_json: null
        - id: cs_NWbXYsvaDSaKPcGoANNXhJ
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_PSJsdrzM4L7j1eUN2mrJo6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PSJsdrzM4L7j1eUN2mrJo6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源旭（175598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175598&o=json
            external_identifier: CBDB:175598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.550Z
            metadata_json: null
      object_person:
        id: p_zms3XCQG3jDEGZghagHh4H
        status: active
        display_name: 王源旭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王涛（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175594 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王涛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DbKg6Z6wj4BMKWgbEDKMoY | 王佾 | accepted |
| children | p_D2y2Lv2wwPmAeHd6wAzori | 王源孚 | accepted |
| children | p_gg1UgtGeCXPsZbGbRxxciL | 王源采 | accepted |
| children | p_1BjfWTQ3bxaePX6m9r2vdD | 王源芳 | accepted |
| children | p_zms3XCQG3jDEGZghagHh4H | 王源旭 | accepted |

## 外部来源

- [维基数据：王涛（Q45668270）](https://www.wikidata.org/wiki/Q45668270)
- [维基数据：王佾（Q45667814）](https://www.wikidata.org/wiki/Q45667814)
- [维基数据：王源采（Q45668371）](https://www.wikidata.org/wiki/Q45668371)
- [维基数据：王源芳（Q45668420）](https://www.wikidata.org/wiki/Q45668420)
- [维基数据：王源孚（Q45668322）](https://www.wikidata.org/wiki/Q45668322)
- [维基数据：王源旭（Q45668472）](https://www.wikidata.org/wiki/Q45668472)
- [CBDB 中国历代人物传记资料库：王濤（175594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json)
- [CBDB 中国历代人物传记资料库：王佾（175585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json)
- [CBDB 中国历代人物传记资料库：王源采（175596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175596&o=json)
- [CBDB 中国历代人物传记资料库：王源芳（175597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175597&o=json)
- [CBDB 中国历代人物传记资料库：王源孚（175595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175595&o=json)
- [CBDB 中国历代人物传记资料库：王源旭（175598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175598&o=json)
