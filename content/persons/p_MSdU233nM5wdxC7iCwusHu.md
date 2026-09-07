---
schema: wang-person/v1
id: p_MSdU233nM5wdxC7iCwusHu
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3TUMH8FhKzk58XyMeg7Ux2
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175470 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tpPtKdmv34kBPw4uCkWAoh
          claim_id: c_3TUMH8FhKzk58XyMeg7Ux2
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_VzIS1BsXdXJifWJZd6ukg2
          claim_id: c_3TUMH8FhKzk58XyMeg7Ux2
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: CBDB:175470
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_reczkSoDLcEiQg38kHBHgV
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
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
        - id: cs_bANbXTEdf2tnhQdANcaXNk
          claim_id: c_reczkSoDLcEiQg38kHBHgV
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZvQJZHE6t11zW9S7HGe2Ea
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YQo4xC92pGeCv6Kq7E4Kyf
          claim_id: c_ZvQJZHE6t11zW9S7HGe2Ea
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: Q45661568
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_s16EKVsqWLXhnPQZyBnoYp
          claim_id: c_ZvQJZHE6t11zW9S7HGe2Ea
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: Q45661568
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sXH6syRWYTeM9E4ZH3fFjr
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSdU233nM5wdxC7iCwusHu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iEFSHAH98Dbo7Ep3ryHA3A
          claim_id: c_sXH6syRWYTeM9E4ZH3fFjr
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_imV24KN28cio1nj7KN6zbQ
          claim_id: c_sXH6syRWYTeM9E4ZH3fFjr
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_HA4rMV9321XpW3ZnH9epYh
          claim_id: c_sXH6syRWYTeM9E4ZH3fFjr
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_TxKE8xUYsaFeEC8cA6BXAN
          claim_id: c_sXH6syRWYTeM9E4ZH3fFjr
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_hQfGPdtFedizCQ47pm576n
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWczLwq2nt4NbhEboLi4hv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4jftKuRFbAwMPyChWt7PJn
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_rXa58HaHGJCvn43y8DDW6h
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_j3ptk3ZgiKZbtKBjEFEV4v
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_LaK21tcc72LnvhT2C1bcxN
          claim_id: c_hQfGPdtFedizCQ47pm576n
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
      object_person:
        id: p_dWczLwq2nt4NbhEboLi4hv
        status: active
        display_name: 王逵
        merged_into_person_id: null
    - claim:
        id: c_neE6E4k9Puhby8gWBmbySH
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15x2i4C5D5P8QTv566zUQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hKAtaTtDCf4qNdVLLggQEA
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_iynUDD4pF2RZJqVUARNXuV
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_yNt2ELLcLcRh5gdfbf7r6j
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_vYFAo2AcDdnkdHXwUonBx5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vYFAo2AcDdnkdHXwUonBx5
            source_type: api_record
            title: 维基数据：王造（Q45661626）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661626
            external_identifier: Q45661626
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_J5NgYHZMwbB3gtecwtNCwK
          claim_id: c_neE6E4k9Puhby8gWBmbySH
          source_id: s_9EvPHGrkgCmeWVjEDm4Lw2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9EvPHGrkgCmeWVjEDm4Lw2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王造（175471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175471&o=json
            external_identifier: CBDB:175471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.388Z
            metadata_json: null
      object_person:
        id: p_15x2i4C5D5P8QTv566zUQB
        status: active
        display_name: 王造
        merged_into_person_id: null
    - claim:
        id: c_x2CvayzSdq6bQ4Rk6G3BMd
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ha5m4LN9UakVx5unFGkpVX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_f9JcEg4CLfMgdBmgpBWoBL
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_mEoUqGNgALBQD7rgs9uzC2
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_xWFACiLTfXrgahdmJHmkpG
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_pukhUtH9FTJUiD8QVWMV6P
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
      object_person:
        id: p_ha5m4LN9UakVx5unFGkpVX
        status: active
        display_name: 王迺
        merged_into_person_id: null
    - claim:
        id: c_6xo1vQv9pPBwgpn5ajaSmY
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yC7oX7WQEm937KZhY1jcS5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nQ7WVDQhBoJPQrXe8H9rH5
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_ngHpPYHjf8CLkahsM7g6BE
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_a6QoZKdaiWPGuij3sVZyMb
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_eseimQHD6NtaN9BWjDRd4J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eseimQHD6NtaN9BWjDRd4J
            source_type: api_record
            title: 维基数据：王迈（Q45662103）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662103
            external_identifier: Q45662103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_AcjCKsxE6xV3uQkLdcs9Rj
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_FVoY37iJwLTHSmJCJYnXFc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FVoY37iJwLTHSmJCJYnXFc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175479&o=json
            external_identifier: CBDB:175479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.390Z
            metadata_json: null
      object_person:
        id: p_yC7oX7WQEm937KZhY1jcS5
        status: active
        display_name: 王迈
        merged_into_person_id: null
    - claim:
        id: c_ihwgfrQhG2CLJJHYb4cRSD
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9n32TMSKZKXd8WzKUCmVpE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3gSZLoQw5BKqaK1HPK8uu6
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_PRqtc9U5fhDHeVXYqPu6US
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_2nG1b8Gpqqct3rEhEFS8d1
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_BAYeDpmfGxWKgcQEQabCfq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAYeDpmfGxWKgcQEQabCfq
            source_type: api_record
            title: 维基数据：王起（Q45662162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662162
            external_identifier: Q45662162
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_ThkE8JM9ZJW5h8WrehoAXx
          claim_id: c_ihwgfrQhG2CLJJHYb4cRSD
          source_id: s_CmAa597A7JHvoqEvt6HSS6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CmAa597A7JHvoqEvt6HSS6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王起（175480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175480&o=json
            external_identifier: CBDB:175480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.098Z
            metadata_json: null
      object_person:
        id: p_9n32TMSKZKXd8WzKUCmVpE
        status: active
        display_name: 王起
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bZJfDKCRR6Ubty1buuUy8Q
        subject_person_id: p_6CsBtUkKZsiVpBL5KJ61Rz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MSdU233nM5wdxC7iCwusHu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_EhFg25uWL1aTd7g9QneSNz
          claim_id: c_bZJfDKCRR6Ubty1buuUy8Q
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_K3DZqUXaML84Hi7DC51YU4
          claim_id: c_bZJfDKCRR6Ubty1buuUy8Q
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_G4zoxdMJr2qAo4bakFkjfF
          claim_id: c_bZJfDKCRR6Ubty1buuUy8Q
          source_id: s_prjgRiRzEzJenA3Rrmn5WB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_prjgRiRzEzJenA3Rrmn5WB
            source_type: api_record
            title: 维基数据：崔氏（Q65803822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803822
            external_identifier: Q65803822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
      object_person:
        id: p_6CsBtUkKZsiVpBL5KJ61Rz
        status: active
        display_name: 崔氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澄（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175470 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_dWczLwq2nt4NbhEboLi4hv | 王逵 | accepted |
| children | p_15x2i4C5D5P8QTv566zUQB | 王造 | accepted |
| children | p_ha5m4LN9UakVx5unFGkpVX | 王迺 | accepted |
| children | p_yC7oX7WQEm937KZhY1jcS5 | 王迈 | accepted |
| children | p_9n32TMSKZKXd8WzKUCmVpE | 王起 | accepted |
| spouses | p_6CsBtUkKZsiVpBL5KJ61Rz | 崔氏 | accepted |

## 外部来源

- [维基数据：崔氏（Q65803822）](https://www.wikidata.org/wiki/Q65803822)
- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王逵（Q45576024）](https://www.wikidata.org/wiki/Q45576024)
- [维基数据：王迈（Q45662103）](https://www.wikidata.org/wiki/Q45662103)
- [维基数据：王迺（Q45661685）](https://www.wikidata.org/wiki/Q45661685)
- [维基数据：王起（Q45662162）](https://www.wikidata.org/wiki/Q45662162)
- [维基数据：王造（Q45661626）](https://www.wikidata.org/wiki/Q45661626)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王逵（158714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json)
- [CBDB 中国历代人物传记资料库：王邁（175479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175479&o=json)
- [CBDB 中国历代人物传记资料库：王迺（175472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json)
- [CBDB 中国历代人物传记资料库：王起（175480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175480&o=json)
- [CBDB 中国历代人物传记资料库：王造（175471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175471&o=json)
