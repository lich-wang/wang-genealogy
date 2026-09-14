---
schema: wang-person/v1
id: p_BHMsY8qAbSMNGU2H8r2g2y
status: active
merged_into: null
display_name: 王佐
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DgAEGchiGt5X1c2Q6MXBEA
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gL5BaJBcKmX3RXTvx4DvKW
          claim_id: c_DgAEGchiGt5X1c2Q6MXBEA
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: CBDB:318793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318793）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G7cYGGQregSvvL1tfqGMSQ
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。嘉靖三十二年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 318793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UNGvwN5J9EgCXBIf0TN9UN
          claim_id: c_G7cYGGQregSvvL1tfqGMSQ
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: CBDB:318793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
    - claim:
        id: c_h8DcbRQeyc0m5FS8ugmgB_
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CEvK7NRNzrMSwKhp2Yy6Qq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_51omyb4ryjP768IsqsPTJH
          claim_id: c_h8DcbRQeyc0m5FS8ugmgB_
          source_id: s_uPHPstok2UzUDGNLC-HE6S
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文粹 与 王文政 为同胞（CBDB 记「弟」），王文政 之父／母即 王文粹 之父／母。
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
        id: c_ydOv3RdcZbOrOccProvYoI
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__qK-3Qt5z3h9qxor9Gnr_1
          claim_id: c_ydOv3RdcZbOrOccProvYoI
          source_id: s_LoYPZZkDWNooF2_TlLmLEh
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文德 与 王文政 为同胞（CBDB 记「弟」），王文政 之父／母即 王文德 之父／母。
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
        id: c_ZfJjviXXkls6J7PuI8qhSk
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LVn234EP1UkTrcZpmVZYx9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PmVEyrZ_Tu72V0BHgf7Ytm
          claim_id: c_ZfJjviXXkls6J7PuI8qhSk
          source_id: s_jnq_b6VK0ihcw1lHx5DTZY
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文治 与 王文政 为同胞（CBDB 记「兄」），王文政 之父／母即 王文治 之父／母。
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
        id: c_rZFA7ErFeHpN1PWuXbJLGD
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cNcL5T1puFGTNuJXH348dP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lik5G5T7sRQM0NN3UxoG7z
          claim_id: c_rZFA7ErFeHpN1PWuXbJLGD
          source_id: s_hvYct0jO1gKXyiSu4HA-r0
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文教 与 王文政 为同胞（CBDB 记「兄」），王文政 之父／母即 王文教 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。嘉靖三十二年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 318793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |
| children | p_CEvK7NRNzrMSwKhp2Yy6Qq | 王文粹 | accepted |
| children | p_Kjy9dYjGoRWwQ8wu8ELsug | 王文德 | accepted |
| children | p_LVn234EP1UkTrcZpmVZYx9 | 王文治 | accepted |
| children | p_cNcL5T1puFGTNuJXH348dP | 王文教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文粹（CBDB 318797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318797&o=json)
- [中国历代人物传记资料库：王文德（CBDB 318798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json)
- [中国历代人物传记资料库：王文教（CBDB 318799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318799&o=json)
- [中国历代人物传记资料库：王文治（CBDB 318800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318800&o=json)
- [中国历代人物传记资料库：王佐（CBDB 318793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json)
