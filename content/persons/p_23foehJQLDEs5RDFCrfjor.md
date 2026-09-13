---
schema: wang-person/v1
id: p_23foehJQLDEs5RDFCrfjor
status: active
merged_into: null
display_name: 王和友
cbdb_id: 175621
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMJh5GsRAKxbF29zY9LNfn
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和友（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2n9VRUJe3jhME4SYDGBa1H
          claim_id: c_MMJh5GsRAKxbF29zY9LNfn
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_IVjD2JLoygerP0pVOi1pUG
          claim_id: c_MMJh5GsRAKxbF29zY9LNfn
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: CBDB:175621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qM4NtX7VgcbNSP3YzzHGoL
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
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
        - id: cs_TdLTvwVx2J52n9n54amNfD
          claim_id: c_qM4NtX7VgcbNSP3YzzHGoL
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VbJrCdwJb4v44vYG6X16bz
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和友
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EMrE6xgsjMHqvNk2k25wXM
          claim_id: c_VbJrCdwJb4v44vYG6X16bz
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: Q45669592
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_MSnGfW9z1V7VTpxBYQN2wS
          claim_id: c_VbJrCdwJb4v44vYG6X16bz
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: Q45669592
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ea9NhZeSWP9Hu3M875EH8i
        subject_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_23foehJQLDEs5RDFCrfjor
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2nQE9JwjySRLDKmrVf2iBD
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
        - id: cs_7iBKxPxhXjW3J6q56BEKPN
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_z4q8ySWE7UEubdt1n7qjDJ
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_PXFMXSJkD6arDKPsvEutGF
          claim_id: c_ea9NhZeSWP9Hu3M875EH8i
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
      object_person:
        id: p_cHtNMDSwmNv3KVwwrUz5on
        status: active
        display_name: 王佺
        merged_into_person_id: null
  children:
    - claim:
        id: c_DmhQNJfbvnLmh8Tvm7tAh2
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CoVPJFmePtABt4d9xY3HAX
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_G8eMRWomfMpw7XhsF6c4En
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_pPQHou3isqhC3kqC6cBPuD
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P22（父）
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
        - id: cs_iWo1G3XYrCzNm6EoMNLxPw
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_epoDmVwU2aQ9MXeKvgwabg
        status: active
        display_name: 王罕
        merged_into_person_id: null
    - claim:
        id: c_2JALCwuNcrrmEZV8XsnnG3
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tDGonAWba3r6S3bw5VpSS8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Mq7SeWHN73VfBLHiJMqtxR
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_TKhe5u89g1vsyPJdXTbkXB
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_TRzuB8JuLDNx44v4Jbpzg8
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_hQg9v84UcaQGPWueBgGPFi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hQg9v84UcaQGPWueBgGPFi
            source_type: api_record
            title: 维基数据：王笕（Q45669781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669781
            external_identifier: Q45669781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_tAE2MzxhuboRjguQBkCP9s
          claim_id: c_2JALCwuNcrrmEZV8XsnnG3
          source_id: s_6v8hHnM94Rp1WCM4GU6J9w
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6v8hHnM94Rp1WCM4GU6J9w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王筧（175625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175625&o=json
            external_identifier: CBDB:175625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.275Z
            metadata_json: null
      object_person:
        id: p_tDGonAWba3r6S3bw5VpSS8
        status: active
        display_name: 王笕
        merged_into_person_id: null
    - claim:
        id: c_QzDxmKNB39jLsRjyh6Vz28
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MKMdTsEPQpxH1HJth5KaAp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6NQ7MMT7d22Nt8D5iYfURu
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_Myc5qW58qKRP8M1Yajt9CM
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_2mYx592X3LVMh15AUNy7fQ
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_jhxafNuz9qqd1GX4MM6NqH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jhxafNuz9qqd1GX4MM6NqH
            source_type: api_record
            title: 维基数据：王觉（Q45669828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669828
            external_identifier: Q45669828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_SNGoPS5MTKq8RP9mwtShfy
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_ZCvz5UmDswKwXyua42MdPC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZCvz5UmDswKwXyua42MdPC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覺（175626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175626&o=json
            external_identifier: CBDB:175626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.282Z
            metadata_json: null
      object_person:
        id: p_MKMdTsEPQpxH1HJth5KaAp
        status: active
        display_name: 王觉
        merged_into_person_id: null
    - claim:
        id: c_yRCrNtt4dVKUgb39mdWmdC
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pRHuzHP7LP57EjcGVi8LER
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1HHovmBSdALkU3qCVwMgT3
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_VJt2etNSmHiSUE5bzXGgQP
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_y5q3StJBmXjATnAY99bVMg
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
        - id: cs_ZLGkwKSm3pREoduaALBxyA
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_USn8sBuvCM1w3dvyHmCUND
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_USn8sBuvCM1w3dvyHmCUND
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寬（175627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json
            external_identifier: CBDB:175627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.271Z
            metadata_json: null
      object_person:
        id: p_pRHuzHP7LP57EjcGVi8LER
        status: active
        display_name: 王宽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王和友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王和友（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175621） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王和友 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cHtNMDSwmNv3KVwwrUz5on | 王佺 | accepted |
| children | p_epoDmVwU2aQ9MXeKvgwabg | 王罕 | accepted |
| children | p_tDGonAWba3r6S3bw5VpSS8 | 王笕 | accepted |
| children | p_MKMdTsEPQpxH1HJth5KaAp | 王觉 | accepted |
| children | p_pRHuzHP7LP57EjcGVi8LER | 王宽 | accepted |

## 外部来源

- [维基数据：王罕（Q45669640）](https://www.wikidata.org/wiki/Q45669640)
- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王笕（Q45669781）](https://www.wikidata.org/wiki/Q45669781)
- [维基数据：王觉（Q45669828）](https://www.wikidata.org/wiki/Q45669828)
- [维基数据：王宽（Q45669877）](https://www.wikidata.org/wiki/Q45669877)
- [维基数据：王佺（Q45669354）](https://www.wikidata.org/wiki/Q45669354)
- [CBDB 中国历代人物传记资料库：王罕（175622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王筧（175625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175625&o=json)
- [CBDB 中国历代人物传记资料库：王覺（175626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175626&o=json)
- [CBDB 中国历代人物传记资料库：王寬（175627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json)
- [CBDB 中国历代人物传记资料库：王佺（175616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json)
