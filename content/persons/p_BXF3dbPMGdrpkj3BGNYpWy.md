---
schema: wang-person/v1
id: p_BXF3dbPMGdrpkj3BGNYpWy
status: active
merged_into: null
display_name: 王文政
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JECM8LWJzyHDQLGnLtM7CD
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQRg8Dei6CoYwUwQBFMhuE
          claim_id: c_JECM8LWJzyHDQLGnLtM7CD
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: CBDB:204419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204419）
          source: &a1
            id: s_sVyKijqH5FuBXfq1FgHznE
            source_type: api_record
            title: 中国历代人物传记资料库：王文政（CBDB 204419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204419&o=json
            external_identifier: CBDB:204419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tNCxEvRB1Yyg4QjSp1Jzx7
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uUvgvkpq5ZZPNp24nb8n3
          claim_id: c_tNCxEvRB1Yyg4QjSp1Jzx7
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_soWJ6CiH1HqNdCdzAowyEk
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文政（生于1527年），明人物。明清進士進士，籍贯濰縣，入仕進士。（中国历代人物传记资料库 CBDB 204419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gs4-kRqJOuMzDoIEtY2voB
          claim_id: c_soWJ6CiH1HqNdCdzAowyEk
          source_id: s_sVyKijqH5FuBXfq1FgHznE
          stance: supports
          locator: CBDB:204419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R-_Fyy1ulcVxa0yYN9uNGN
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moukQ6tg-anoO980wL6U1s
          claim_id: c_R-_Fyy1ulcVxa0yYN9uNGN
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1V6Hj2BNbdrieoMYggXvK9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 318793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json
            external_identifier: CBDB:318793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BHMsY8qAbSMNGU2H8r2g2y
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ub81b4Ujcziy61HExabWgv
        subject_person_id: p_hcEP9UcmM7VKPZcPSqcGFm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V8f4aHECDdYa_I259o2oDE
          claim_id: c_Ub81b4Ujcziy61HExabWgv
          source_id: s_GeipakJqXbRTkcPyJyHTgb
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GeipakJqXbRTkcPyJyHTgb
            source_type: api_record
            title: 中国历代人物传记资料库：王新（CBDB 318791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318791&o=json
            external_identifier: CBDB:318791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hcEP9UcmM7VKPZcPSqcGFm
        status: active
        display_name: 王新
        merged_into_person_id: null
    - claim:
        id: c_JhDTJuLddBFBDb_4upDB6J
        subject_person_id: p_NAHrMruW3D6UbLafhCDxg8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcXGv1dQOleggmG4TxbdbP
          claim_id: c_JhDTJuLddBFBDb_4upDB6J
          source_id: s_XoP9yrrkvfJxJDmH48ygRS
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XoP9yrrkvfJxJDmH48ygRS
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 318792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318792&o=json
            external_identifier: CBDB:318792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NAHrMruW3D6UbLafhCDxg8
        status: active
        display_name: 王臣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Hzk3HTNLvWQGYVlHDL59yn
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpsQjeLxXsVXnDiU7j03nS
          claim_id: c_Hzk3HTNLvWQGYVlHDL59yn
          source_id: s_uPHPstok2UzUDGNLC-HE6S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uPHPstok2UzUDGNLC-HE6S
            source_type: api_record
            title: 中国历代人物传记资料库：王文粹（CBDB 318797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json
            external_identifier: CBDB:318797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        status: active
        display_name: 王文粹
        merged_into_person_id: null
    - claim:
        id: c_9Sv3Wq9dc6iuPqv7tNifJf
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XDdPJdkgtz-ukQqh-8U-IW
          claim_id: c_9Sv3Wq9dc6iuPqv7tNifJf
          source_id: s_LoYPZZkDWNooF2_TlLmLEh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LoYPZZkDWNooF2_TlLmLEh
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 318798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json
            external_identifier: CBDB:318798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kjy9dYjGoRWwQ8wu8ELsug
        status: active
        display_name: 王文德
        merged_into_person_id: null
    - claim:
        id: c_NXUlao2kgiBBtM6JAdERP_
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LVn234EP1UkTrcZpmVZYx9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0kQnNBPJQCepdAFIubVLu
          claim_id: c_NXUlao2kgiBBtM6JAdERP_
          source_id: s_jnq_b6VK0ihcw1lHx5DTZY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jnq_b6VK0ihcw1lHx5DTZY
            source_type: api_record
            title: 中国历代人物传记资料库：王文治（CBDB 318800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318800&o=json
            external_identifier: CBDB:318800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LVn234EP1UkTrcZpmVZYx9
        status: active
        display_name: 王文治
        merged_into_person_id: null
    - claim:
        id: c_fg3qDiw7D6h6HYpcJKNkmi
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cNcL5T1puFGTNuJXH348dP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4HIb8y6N33XvYW5gYtaNi
          claim_id: c_fg3qDiw7D6h6HYpcJKNkmi
          source_id: s_hvYct0jO1gKXyiSu4HA-r0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hvYct0jO1gKXyiSu4HA-r0
            source_type: api_record
            title: 中国历代人物传记资料库：王文教（CBDB 318799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318799&o=json
            external_identifier: CBDB:318799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cNcL5T1puFGTNuJXH348dP
        status: active
        display_name: 王文教
        merged_into_person_id: null
---

# 王文政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文政 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | 王文政（生于1527年），明人物。明清進士進士，籍贯濰縣，入仕進士。（中国历代人物传记资料库 CBDB 204419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BHMsY8qAbSMNGU2H8r2g2y | 王佐 | accepted |
| ancestors | p_hcEP9UcmM7VKPZcPSqcGFm | 王新 | accepted |
| ancestors | p_NAHrMruW3D6UbLafhCDxg8 | 王臣 | accepted |
| other | p_CEvK7NRNzrMSwKhp2Yy6Qq | 王文粹 | accepted |
| other | p_Kjy9dYjGoRWwQ8wu8ELsug | 王文德 | accepted |
| other | p_LVn234EP1UkTrcZpmVZYx9 | 王文治 | accepted |
| other | p_cNcL5T1puFGTNuJXH348dP | 王文教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 318792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318792&o=json)
- [中国历代人物传记资料库：王文粹（CBDB 318797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json)
- [中国历代人物传记资料库：王文德（CBDB 318798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json)
- [中国历代人物传记资料库：王文教（CBDB 318799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318799&o=json)
- [中国历代人物传记资料库：王文政（CBDB 204419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204419&o=json)
- [中国历代人物传记资料库：王文治（CBDB 318800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318800&o=json)
- [中国历代人物传记资料库：王新（CBDB 318791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318791&o=json)
- [中国历代人物传记资料库：王佐（CBDB 318793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json)
