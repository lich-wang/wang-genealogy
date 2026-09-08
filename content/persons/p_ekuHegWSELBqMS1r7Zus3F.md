---
schema: wang-person/v1
id: p_ekuHegWSELBqMS1r7Zus3F
status: active
merged_into: null
display_name: 王佋
cbdb_id: 175629
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BcFXBEFnJQvqVdio3Pr3K7
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佋（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任節度使、州司馬。中国历代人物传记资料库（CBDB）以人物编号 175629 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ef2CM1DMzBnBoTRr9nATsQ
          claim_id: c_BcFXBEFnJQvqVdio3Pr3K7
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_Ax3cTqoo9BwCE2kVov_5T9
          claim_id: c_BcFXBEFnJQvqVdio3Pr3K7
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: CBDB:175629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x4pDCqW85hbsT32ewh39US
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
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
        - id: cs_gBpmQh2LB2bzsmW69c3Anz
          claim_id: c_x4pDCqW85hbsT32ewh39US
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UfDj5GMzbXd9mx5iLxEJxm
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4KbMzAZCrqYV9LETMwfkYh
          claim_id: c_UfDj5GMzbXd9mx5iLxEJxm
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: Q45669971
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_QSNpDiQiD7uTAg4Hp555eH
          claim_id: c_UfDj5GMzbXd9mx5iLxEJxm
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: Q45669971
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_meYAsUz9oT4y3GVNr5VTNV
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ekuHegWSELBqMS1r7Zus3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V6TLkR1zDPUVSPPDY3R7rq
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_tmw9zpZ7N8TmBPTgRmzGh4
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
        - id: cs_nQBMjMw7v1nB8sbHaNo2Xy
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_J2Nxugzptxdr2Lc4HueNpM
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
      object_person:
        id: p_B9cesCgD7mqBrmZ8ukgb39
        status: active
        display_name: 王𬀩
        merged_into_person_id: null
  children:
    - claim:
        id: c_KUwi9ArmrJFLxFBGGwt4Pd
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cSCerkW55vcTYeQ2U48t8D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KKLBCrDDUKQhFMAvNro8M3
          claim_id: c_KUwi9ArmrJFLxFBGGwt4Pd
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_u2inhJCKhwnKSr5BAnafK7
          claim_id: c_KUwi9ArmrJFLxFBGGwt4Pd
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
        - id: cs_vFr9wgvJAg1ctcYUHuWT29
          claim_id: c_KUwi9ArmrJFLxFBGGwt4Pd
          source_id: s_NA6yWmvjycHKJv9FYbxDV8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NA6yWmvjycHKJv9FYbxDV8
            source_type: api_record
            title: 维基数据：王澈（Q45670020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670020
            external_identifier: Q45670020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
        - id: cs_k9AvWQ5WvNEhoH8SMeMgav
          claim_id: c_KUwi9ArmrJFLxFBGGwt4Pd
          source_id: s_94keFnRCNJhpQUoKyEjfEv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_94keFnRCNJhpQUoKyEjfEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澈（175630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175630&o=json
            external_identifier: CBDB:175630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.364Z
            metadata_json: null
      object_person:
        id: p_cSCerkW55vcTYeQ2U48t8D
        status: active
        display_name: 王澈
        merged_into_person_id: null
    - claim:
        id: c_A7i7fbGEWJ2H7JD2DRQnuJ
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bK5L8kQGojpPS4vq64Eeqb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9PRnosZUmtKok16PMg9QiL
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
        - id: cs_Eyg6CXd6fPD9NQw2vQE1uF
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_CmTMemekdbfBnd4zs29LWG
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_6YhmMhKyS3Wqg3uyTb1kLd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6YhmMhKyS3Wqg3uyTb1kLd
            source_type: api_record
            title: 维基数据：王湜（Q45670066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670066
            external_identifier: Q45670066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
        - id: cs_CBnZxVsA6e4TZK9VXpZzKE
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_y6EyBW5ivP26jac44pB32y
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y6EyBW5ivP26jac44pB32y
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王湜（175631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175631&o=json
            external_identifier: CBDB:175631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.375Z
            metadata_json: null
      object_person:
        id: p_bK5L8kQGojpPS4vq64Eeqb
        status: active
        display_name: 王湜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佋（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任節度使、州司馬。中国历代人物传记资料库（CBDB）以人物编号 175629 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王佋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B9cesCgD7mqBrmZ8ukgb39 | 王𬀩 | accepted |
| children | p_cSCerkW55vcTYeQ2U48t8D | 王澈 | accepted |
| children | p_bK5L8kQGojpPS4vq64Eeqb | 王湜 | accepted |

## 外部来源

- [维基数据：王澈（Q45670020）](https://www.wikidata.org/wiki/Q45670020)
- [维基数据：王湜（Q45670066）](https://www.wikidata.org/wiki/Q45670066)
- [维基数据：王𬀩（Q45669308）](https://www.wikidata.org/wiki/Q45669308)
- [维基数据：王佋（Q45669971）](https://www.wikidata.org/wiki/Q45669971)
- [CBDB 中国历代人物传记资料库：王澈（175630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175630&o=json)
- [CBDB 中国历代人物传记资料库：王湜（175631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175631&o=json)
- [CBDB 中国历代人物传记资料库：王暐（175615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json)
- [CBDB 中国历代人物传记资料库：王佋（175629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json)
