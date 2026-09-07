---
schema: wang-person/v1
id: p_TG2Yq5C8bx1R5aGv84C1Qh
status: active
merged_into: null
display_name: 王宁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M18MPDH8h9wHbYzLfKW6bo
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宁（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175572 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CBtxbJZgnQm5XMs4AyJJwh
          claim_id: c_M18MPDH8h9wHbYzLfKW6bo
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_vx8xquwrGbCeAXleFDp-V6
          claim_id: c_M18MPDH8h9wHbYzLfKW6bo
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: CBDB:175572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o3iG15de9u5UwYAmi489oD
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
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
        - id: cs_M4WxMWXFJMmeQJDGsFDqMS
          claim_id: c_o3iG15de9u5UwYAmi489oD
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KJojU24nU5jovpC4oYVtFd
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9TFhj8t3RVRdGWozD3oHA1
          claim_id: c_KJojU24nU5jovpC4oYVtFd
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: Q45667198
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_dUU6S1MPzky1V9xKsM25of
          claim_id: c_KJojU24nU5jovpC4oYVtFd
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: Q45667198
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vm9a456FyxfWo8tVaRB9nL
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hjKr7x8MeWMfwPPVCk3iRe
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
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
        - id: cs_rFdksN9CTZBG2oyME1kWk5
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
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
        - id: cs_ELYo3oxaKwkFYgWz897dSs
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_iFoCn5CRLnkE8td4iQSwhM
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
      object_person:
        id: p_WdFmE9KEnRrkWkP6FtALJ2
        status: active
        display_name: 王晊
        merged_into_person_id: null
  children:
    - claim:
        id: c_T5xftPBV5ND4UVp6iHjP98
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7KZUHa1HQFL68NCe8QmMwz
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_FT16zP13WxaMCA8tybPA8Q
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
        - id: cs_oHNFBvnJEePLpKzG1HKfR2
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_6SmFgPM47zgsr9QyS7ZAMr
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y8rQfU3JLW6ZBfxLSEyRcE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲文（175573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json
            external_identifier: CBDB:175573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.536Z
            metadata_json: null
      object_person:
        id: p_hUphvs7h4ExD4D4EJkKZ61
        status: active
        display_name: 王仲文
        merged_into_person_id: null
    - claim:
        id: c_xGiLaEA5kFNwiQrQbdLTHf
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JNkmZWzaSaK6LP3ZeFMotA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8abLxyvP8CDxBL7ccybXSJ
          claim_id: c_xGiLaEA5kFNwiQrQbdLTHf
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_PP2Hk4ucYSuMJKN3SEVA9a
          claim_id: c_xGiLaEA5kFNwiQrQbdLTHf
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
        - id: cs_7SA3MUBEauHQxUoTefwqMP
          claim_id: c_xGiLaEA5kFNwiQrQbdLTHf
          source_id: s_wrKqo48keTsavAWr7P1xed
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wrKqo48keTsavAWr7P1xed
            source_type: api_record
            title: 维基数据：王仲武（Q45667356）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667356
            external_identifier: Q45667356
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_3XGjz24mwNzbLEsk24A59k
          claim_id: c_xGiLaEA5kFNwiQrQbdLTHf
          source_id: s_iUfKWxgAVNeM99ehKNw938
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_iUfKWxgAVNeM99ehKNw938
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲武（175575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175575&o=json
            external_identifier: CBDB:175575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.544Z
            metadata_json: null
      object_person:
        id: p_JNkmZWzaSaK6LP3ZeFMotA
        status: active
        display_name: 王仲武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宁（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175572 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王宁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WdFmE9KEnRrkWkP6FtALJ2 | 王晊 | accepted |
| children | p_hUphvs7h4ExD4D4EJkKZ61 | 王仲文 | accepted |
| children | p_JNkmZWzaSaK6LP3ZeFMotA | 王仲武 | accepted |

## 外部来源

- [维基数据：王宁（Q45667198）](https://www.wikidata.org/wiki/Q45667198)
- [维基数据：王晊（Q45666881）](https://www.wikidata.org/wiki/Q45666881)
- [维基数据：王仲文（Q45667250）](https://www.wikidata.org/wiki/Q45667250)
- [维基数据：王仲武（Q45667356）](https://www.wikidata.org/wiki/Q45667356)
- [CBDB 中国历代人物传记资料库：王寧（175572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json)
- [CBDB 中国历代人物传记资料库：王晊（175566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json)
- [CBDB 中国历代人物传记资料库：王仲文（175573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json)
- [CBDB 中国历代人物传记资料库：王仲武（175575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175575&o=json)
