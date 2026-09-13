---
schema: wang-person/v1
id: p_Sb5ne2zPhRWsd9A1V7jqCj
status: active
merged_into: null
display_name: 王源评
cbdb_id: 175533
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxFxqhyD7nefiUyVhbf7Ja
        subject_person_id: p_Sb5ne2zPhRWsd9A1V7jqCj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源评（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ka89s4cDu7HD2eR7wQv29e
          claim_id: c_zxFxqhyD7nefiUyVhbf7Ja
          source_id: s_BGpvhL2WuFD2i23zr24oJL
          stance: supports
          locator: null
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
        - id: cs_nPezVshc1wkECvbq9stafp
          claim_id: c_zxFxqhyD7nefiUyVhbf7Ja
          source_id: s_irFX7xmz6PcdYPUi8298qh
          stance: supports
          locator: CBDB:175533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fsFynFv2jJaZKJMtxjBLMp
        subject_person_id: p_Sb5ne2zPhRWsd9A1V7jqCj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oQyEDmK8e7xq626QyMpie2
          claim_id: c_fsFynFv2jJaZKJMtxjBLMp
          source_id: s_BGpvhL2WuFD2i23zr24oJL
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lj8rYLiDziwXZhwnDDCpja
        subject_person_id: p_Sb5ne2zPhRWsd9A1V7jqCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源评
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KGY3RJ85j4GGfBWFN5L4rc
          claim_id: c_Lj8rYLiDziwXZhwnDDCpja
          source_id: s_irFX7xmz6PcdYPUi8298qh
          stance: supports
          locator: Q45665138
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YXvvmTWSLd5LT48Ag9zt1V
          claim_id: c_Lj8rYLiDziwXZhwnDDCpja
          source_id: s_BGpvhL2WuFD2i23zr24oJL
          stance: supports
          locator: Q45665138
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_MJy5DTuoAKtNQKP91F7YVb
        status: active
        display_name: 王渶
        merged_into_person_id: null
  children:
    - claim:
        id: c_pF4EKNhT3DsiKCJ1NE1iEG
        subject_person_id: p_Sb5ne2zPhRWsd9A1V7jqCj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vjBwCNgpRBHD5fVkcTLKcD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_S6CK6RDAARwGWd4XxmTeW2
          claim_id: c_pF4EKNhT3DsiKCJ1NE1iEG
          source_id: s_irFX7xmz6PcdYPUi8298qh
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_uQAUiAHR3mL6A4P9mQZFXu
          claim_id: c_pF4EKNhT3DsiKCJ1NE1iEG
          source_id: s_BGpvhL2WuFD2i23zr24oJL
          stance: supports
          locator: P40（子女）
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
        - id: cs_bmhQJXWENHx25J6N67hjnV
          claim_id: c_pF4EKNhT3DsiKCJ1NE1iEG
          source_id: s_ZocsXCjD4gHs6gFb4m5mPq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZocsXCjD4gHs6gFb4m5mPq
            source_type: api_record
            title: 维基数据：王修礼（Q45665192）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665192
            external_identifier: Q45665192
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_XTFn8WCGaXeq79tvVQDG1R
          claim_id: c_pF4EKNhT3DsiKCJ1NE1iEG
          source_id: s_ecrBm85KSMLjos9632ww9k
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ecrBm85KSMLjos9632ww9k
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王脩禮（175534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175534&o=json
            external_identifier: CBDB:175534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.528Z
            metadata_json: null
      object_person:
        id: p_vjBwCNgpRBHD5fVkcTLKcD
        status: active
        display_name: 王修礼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源评

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源评（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175533） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源评 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MJy5DTuoAKtNQKP91F7YVb | 王渶 | accepted |
| children | p_vjBwCNgpRBHD5fVkcTLKcD | 王修礼 | accepted |

## 外部来源

- [维基数据：王修礼（Q45665192）](https://www.wikidata.org/wiki/Q45665192)
- [维基数据：王渶（Q45665030）](https://www.wikidata.org/wiki/Q45665030)
- [维基数据：王源评（Q45665138）](https://www.wikidata.org/wiki/Q45665138)
- [CBDB 中国历代人物传记资料库：王脩禮（175534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175534&o=json)
- [CBDB 中国历代人物传记资料库：王渶（175531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json)
- [CBDB 中国历代人物传记资料库：王源評（175533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175533&o=json)
