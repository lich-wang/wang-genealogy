---
schema: wang-person/v1
id: p_MJy5DTuoAKtNQKP91F7YVb
status: active
merged_into: null
display_name: 王渶
cbdb_id: 175531
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1CJdnDiCC8sqM6GwK3FDao
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渶（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175531 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bio6f9DvDQcVwtes5E4tMW
          claim_id: c_1CJdnDiCC8sqM6GwK3FDao
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_HIeqd-95weTRO_j6KdTpd8
          claim_id: c_1CJdnDiCC8sqM6GwK3FDao
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: CBDB:175531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZUzqPMHXBDoK8mmu6kExhX
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
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
        - id: cs_HvEG5HfPmgJPVx65h9E43S
          claim_id: c_ZUzqPMHXBDoK8mmu6kExhX
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNm3sHKQEiE1nPx8KWgmon
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qSRgHeqfctr4mACeafNvew
          claim_id: c_JNm3sHKQEiE1nPx8KWgmon
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: Q45665030
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_sPXwmJV7TkqoRLkeRiFKvQ
          claim_id: c_JNm3sHKQEiE1nPx8KWgmon
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: Q45665030
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A6mBQ48PK2edQnxwsXyvBi
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dmfEbHFusZzBJVc4PDMXW7
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_S3HDHGLJf9GpmQL5eDFUmW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S3HDHGLJf9GpmQL5eDFUmW
            source_type: api_record
            title: 维基数据：王侁（Q45664762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664762
            external_identifier: Q45664762
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_vLi44ysdzVo4pPewxkiB4f
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_9qDvYDyphuaW4PbCNK4SSY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9qDvYDyphuaW4PbCNK4SSY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王侁（175526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json
            external_identifier: CBDB:175526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.123Z
            metadata_json: null
        - id: cs_Fghe3g13kB2NS3A4h6HwCn
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_MWwvPKBfhW4m77oPksKCLA
          claim_id: c_A6mBQ48PK2edQnxwsXyvBi
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
      object_person:
        id: p_cGkviQ74mqPnwC4eLmu3AD
        status: active
        display_name: 王侁
        merged_into_person_id: null
  children:
    - claim:
        id: c_MVa1PcwBpAbH96jBMza8ZV
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XJf25mcNEoKP5faymMB3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9mnPGvCWmHmfdbzJ2md5yG
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
        - id: cs_AeAmWFb6C6BBcfiS8ysj6D
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_fNXNhVsZ7QuNDxg3NgH6uJ
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_xxTTACNSx8BprgXT42Vb49
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xxTTACNSx8BprgXT42Vb49
            source_type: api_record
            title: 维基数据：王源谦（Q45665084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665084
            external_identifier: Q45665084
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_4tNC7g9dBDWUD164hNN94r
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_B69eGQgCKsvsFWCagYGaQz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_B69eGQgCKsvsFWCagYGaQz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源謙（175532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175532&o=json
            external_identifier: CBDB:175532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.689Z
            metadata_json: null
      object_person:
        id: p_9XJf25mcNEoKP5faymMB3N
        status: active
        display_name: 王源谦
        merged_into_person_id: null
    - claim:
        id: c_Q8nCeHPBVQEM2hCN9L5NLZ
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sb5ne2zPhRWsd9A1V7jqCj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2yZDAC1JMS1LnmtozdTGqC
          claim_id: c_Q8nCeHPBVQEM2hCN9L5NLZ
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_KFSS1PSydhqJgd91jidBM6
          claim_id: c_Q8nCeHPBVQEM2hCN9L5NLZ
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
        - id: cs_eySCwKDGD6Td6poQF8UWcK
          claim_id: c_Q8nCeHPBVQEM2hCN9L5NLZ
          source_id: s_BGpvhL2WuFD2i23zr24oJL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BGpvhL2WuFD2i23zr24oJL
            source_type: api_record
            title: 维基数据：王源评（Q45665138）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665138
            external_identifier: Q45665138
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_mRxx66jaivdPCNMF7yQ8NB
          claim_id: c_Q8nCeHPBVQEM2hCN9L5NLZ
          source_id: s_irFX7xmz6PcdYPUi8298qh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_irFX7xmz6PcdYPUi8298qh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源評（175533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175533&o=json
            external_identifier: CBDB:175533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.685Z
            metadata_json: null
      object_person:
        id: p_Sb5ne2zPhRWsd9A1V7jqCj
        status: active
        display_name: 王源评
        merged_into_person_id: null
    - claim:
        id: c_YbMhkYdq8KFbTqrr8QQJt5
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5fRdJNrXdLbTVYRCLCzh9J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Nc1DJ2cFJ3tJp9nG4qpDfK
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_aVw9B8L3a3D9jpBcxTmd3K
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
        - id: cs_hNj73jBoSzjFPwGfNvY4kR
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_LrmPoa4RWufcsyiFoe4xPW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LrmPoa4RWufcsyiFoe4xPW
            source_type: api_record
            title: 维基数据：王源诚（Q45665247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665247
            external_identifier: Q45665247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_6zHCsmsWyuwcPVy8VE4wg8
          claim_id: c_YbMhkYdq8KFbTqrr8QQJt5
          source_id: s_XuwG1wreYTTz7QU5EnhzBu
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_XuwG1wreYTTz7QU5EnhzBu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源誠（175535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175535&o=json
            external_identifier: CBDB:175535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.690Z
            metadata_json: null
      object_person:
        id: p_5fRdJNrXdLbTVYRCLCzh9J
        status: active
        display_name: 王源诚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王渶（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175531 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王渶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cGkviQ74mqPnwC4eLmu3AD | 王侁 | accepted |
| children | p_9XJf25mcNEoKP5faymMB3N | 王源谦 | accepted |
| children | p_Sb5ne2zPhRWsd9A1V7jqCj | 王源评 | accepted |
| children | p_5fRdJNrXdLbTVYRCLCzh9J | 王源诚 | accepted |

## 外部来源

- [维基数据：王侁（Q45664762）](https://www.wikidata.org/wiki/Q45664762)
- [维基数据：王渶（Q45665030）](https://www.wikidata.org/wiki/Q45665030)
- [维基数据：王源诚（Q45665247）](https://www.wikidata.org/wiki/Q45665247)
- [维基数据：王源评（Q45665138）](https://www.wikidata.org/wiki/Q45665138)
- [维基数据：王源谦（Q45665084）](https://www.wikidata.org/wiki/Q45665084)
- [CBDB 中国历代人物传记资料库：王侁（175526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175526&o=json)
- [CBDB 中国历代人物传记资料库：王渶（175531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json)
- [CBDB 中国历代人物传记资料库：王源誠（175535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175535&o=json)
- [CBDB 中国历代人物传记资料库：王源評（175533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175533&o=json)
- [CBDB 中国历代人物传记资料库：王源謙（175532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175532&o=json)
