---
schema: wang-person/v1
id: p_DgA93iH24ZodpFmFWyHcNR
status: active
merged_into: null
display_name: 王搏
cbdb_id: 175545
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AhiFaTXYA5XL3TMrRFPT2
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王搏（卒于879年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_MtuHTLCQVFbzXQT6aEdXP8
          claim_id: c_7AhiFaTXYA5XL3TMrRFPT2
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_9vcJ0Uz1tJz9-ie5zhdDco
          claim_id: c_7AhiFaTXYA5XL3TMrRFPT2
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: CBDB:175545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_crdZqTHSz1NiG73g6EJmq6
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 879年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0879-01-01
            latest: 0879-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aNqdNmu1FSsGAoGpN6YFW1
          claim_id: c_crdZqTHSz1NiG73g6EJmq6
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZKdxS3KmK1B2v3dNt18YG
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王搏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xh2Vec6nQ6VRLT5FnBfR6J
          claim_id: c_6ZKdxS3KmK1B2v3dNt18YG
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: Q45665731
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_rHAsz1KLJU1yiKdAGA6P2x
          claim_id: c_6ZKdxS3KmK1B2v3dNt18YG
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: Q45665731
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y7TauhNfATmVSZebDCjgup
        subject_person_id: p_gWJemB5XduGNkLqdFcrivv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DgA93iH24ZodpFmFWyHcNR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E3AcE2E3bu44Fzsrgq9V3o
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_J1jD7P5iGBwY2Y3Rq69tSJ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J1jD7P5iGBwY2Y3Rq69tSJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐬（175544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json
            external_identifier: CBDB:175544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.463Z
            metadata_json: null
        - id: cs_ffTxi6vewLZzfGUeZkgE53
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_RWTsEqw5xx6766DiY6L6C6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWTsEqw5xx6766DiY6L6C6
            source_type: api_record
            title: 维基数据：王鐬（Q45665676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665676
            external_identifier: Q45665676
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_qkTgvk65vdTHFZc1N6MjMT
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_LLoVVDAC7sfau77nd2Lyic
          claim_id: c_y7TauhNfATmVSZebDCjgup
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
      object_person:
        id: p_gWJemB5XduGNkLqdFcrivv
        status: active
        display_name: 王鐬
        merged_into_person_id: null
  children:
    - claim:
        id: c_ux4obhcDEt4gvSf3AF7XPh
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4viNrBuNox2TKzZ1aNLg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6shTpGs8PcS57W9tnMa9eD
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_gePN6toSwEU14P6mjZk4ts
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
        - id: cs_edTvXM7UiMCZ6j7SqdyomQ
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_896dNAEmApLS5KgM7FGf6F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_896dNAEmApLS5KgM7FGf6F
            source_type: api_record
            title: 维基数据：王倜（Q45665784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665784
            external_identifier: Q45665784
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
        - id: cs_43qpHg2fYCgckE47HMPFs3
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_gr7av3xpTJ4QKSfJRnCkme
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_gr7av3xpTJ4QKSfJRnCkme
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倜（175546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175546&o=json
            external_identifier: CBDB:175546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.447Z
            metadata_json: null
      object_person:
        id: p_i4viNrBuNox2TKzZ1aNLg8
        status: active
        display_name: 王倜
        merged_into_person_id: null
    - claim:
        id: c_97CucZ8Bzbb9RGLDjMywg5
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h2aJ2xed81CQszd71i8TGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ESXK3qqzUJ6JMqh66bQGJM
          claim_id: c_97CucZ8Bzbb9RGLDjMywg5
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_y2xemRcZinkF7hrQLjaLnw
          claim_id: c_97CucZ8Bzbb9RGLDjMywg5
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
        - id: cs_9zka3RWyENXmDHULjYcBGR
          claim_id: c_97CucZ8Bzbb9RGLDjMywg5
          source_id: s_3W6a5t1aCZ37H3LMQwGYVc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3W6a5t1aCZ37H3LMQwGYVc
            source_type: api_record
            title: 维基数据：王倓（Q45665860）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665860
            external_identifier: Q45665860
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
        - id: cs_qvVtfgUmBpPNu3TeS8yWvW
          claim_id: c_97CucZ8Bzbb9RGLDjMywg5
          source_id: s_B5R7ixrvTCC8uUQ4JaTAQQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_B5R7ixrvTCC8uUQ4JaTAQQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倓（175547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175547&o=json
            external_identifier: CBDB:175547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.646Z
            metadata_json: null
      object_person:
        id: p_h2aJ2xed81CQszd71i8TGt
        status: active
        display_name: 王倓
        merged_into_person_id: null
    - claim:
        id: c_i3twX9rKnP6AvKC75ZJnxh
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tGseb3s8HjqWiZqR8tDwuU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FLCaKPkwFD2bY8VdLnMtjY
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
        - id: cs_oa2KEV5eC7oux6wLBh89Sm
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_JoeKxgCrTKuDS3FYUkue24
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_g31YJag5o68NZVcBDE8SGX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_g31YJag5o68NZVcBDE8SGX
            source_type: api_record
            title: 维基数据：王伦（Q45665914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665914
            external_identifier: Q45665914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_tA4e3jg84cajRzJg3z1o72
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_1b4gd4yPqyBQ9b8G4iWjQr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1b4gd4yPqyBQ9b8G4iWjQr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倫（175548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175548&o=json
            external_identifier: CBDB:175548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.592Z
            metadata_json: null
      object_person:
        id: p_tGseb3s8HjqWiZqR8tDwuU
        status: active
        display_name: 王伦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王搏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王搏（卒于879年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175545） | accepted |
| death.date | 879年 | accepted |
| name.primary | 王搏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gWJemB5XduGNkLqdFcrivv | 王鐬 | accepted |
| children | p_i4viNrBuNox2TKzZ1aNLg8 | 王倜 | accepted |
| children | p_h2aJ2xed81CQszd71i8TGt | 王倓 | accepted |
| children | p_tGseb3s8HjqWiZqR8tDwuU | 王伦 | accepted |

## 外部来源

- [维基数据：王搏（Q45665731）](https://www.wikidata.org/wiki/Q45665731)
- [维基数据：王鐬（Q45665676）](https://www.wikidata.org/wiki/Q45665676)
- [维基数据：王伦（Q45665914）](https://www.wikidata.org/wiki/Q45665914)
- [维基数据：王倓（Q45665860）](https://www.wikidata.org/wiki/Q45665860)
- [维基数据：王倜（Q45665784）](https://www.wikidata.org/wiki/Q45665784)
- [CBDB 中国历代人物传记资料库：王搏（175545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json)
- [CBDB 中国历代人物传记资料库：王鐬（175544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175544&o=json)
- [CBDB 中国历代人物传记资料库：王倫（175548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175548&o=json)
- [CBDB 中国历代人物传记资料库：王倓（175547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175547&o=json)
- [CBDB 中国历代人物传记资料库：王倜（175546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175546&o=json)
