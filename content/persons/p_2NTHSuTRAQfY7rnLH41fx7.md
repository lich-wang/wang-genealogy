---
schema: wang-person/v1
id: p_2NTHSuTRAQfY7rnLH41fx7
status: active
merged_into: null
display_name: 王仲连
cbdb_id: 175540
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K3KeHqw2CyroNcgCaoNo1J
        subject_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲连（卒于694年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任府錄事參軍。中国历代人物传记资料库（CBDB）以人物编号 175540 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xyN94uWgQ2XpzP6Q3P8vTB
          claim_id: c_K3KeHqw2CyroNcgCaoNo1J
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
        - id: cs_aNeuzlKfwCjWQSTR_970zB
          claim_id: c_K3KeHqw2CyroNcgCaoNo1J
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: CBDB:175540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VtRYHnhDAVQax6saLZ9QEq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲連（175540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json
            external_identifier: CBDB:175540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.171Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N3uvNYFcdzwxr1hPx325U8
        subject_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 694年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0694-01-01
            latest: 0694-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ozpWmMKqE28qKYHZA4WJy
          claim_id: c_N3uvNYFcdzwxr1hPx325U8
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wrPgF8KXkhAAxkY7SLg2LR
        subject_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲连
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8AmQf3rNPCdkw3C14pJ3hK
          claim_id: c_wrPgF8KXkhAAxkY7SLg2LR
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: Q45665461
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Ezt4PjXzqHpPp4C2sjdc41
          claim_id: c_wrPgF8KXkhAAxkY7SLg2LR
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: Q45665461
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TwQqFgMg4L1dAvEjQLTb5p
        subject_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TjuP4MSq53RzAGYZQaXfH9
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_X2uyhoD9WfiZCP1R56Waot
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HQykX6s4hZd7PDx465NMUH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寵（92046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json
            external_identifier: CBDB:92046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.640Z
            metadata_json: null
        - id: cs_E13gJMiJ4ModV9Cuz1m6MP
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
        - id: cs_LU9Szp1hsUCFd6R8otWHs5
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VtRYHnhDAVQax6saLZ9QEq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲連（175540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json
            external_identifier: CBDB:175540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.171Z
            metadata_json: null
      object_person:
        id: p_vt9u4K3V19Gr4t4KHNh8JT
        status: active
        display_name: 王宠
        merged_into_person_id: null
  children:
    - claim:
        id: c_dns25JfHD9kmGM7LsRefsq
        subject_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPVUDqmRJviwWheZyyk9pk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bae6AAbirzECBz1c8xLZY4
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
        - id: cs_TaBrfw4qdpL4NQdog5n52n
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VtRYHnhDAVQax6saLZ9QEq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲連（175540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json
            external_identifier: CBDB:175540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.171Z
            metadata_json: null
        - id: cs_BrVyJpffXh654nru7aDfxD
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_4Jaj8t31HZfWzfJZGujcYT
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_DPpMP6xXykbVKBLZJZvPA2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_DPpMP6xXykbVKBLZJZvPA2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紹（175541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json
            external_identifier: CBDB:175541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.369Z
            metadata_json: null
      object_person:
        id: p_kPVUDqmRJviwWheZyyk9pk
        status: active
        display_name: 王绍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲连

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲连（卒于694年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任府錄事參軍。中国历代人物传记资料库（CBDB）以人物编号 175540 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 694年 | accepted |
| name.primary | 王仲连 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vt9u4K3V19Gr4t4KHNh8JT | 王宠 | accepted |
| children | p_kPVUDqmRJviwWheZyyk9pk | 王绍 | accepted |

## 外部来源

- [维基数据：王宠（Q45442967）](https://www.wikidata.org/wiki/Q45442967)
- [维基数据：王绍（Q45665515）](https://www.wikidata.org/wiki/Q45665515)
- [维基数据：王仲连（Q45665461）](https://www.wikidata.org/wiki/Q45665461)
- [CBDB 中国历代人物传记资料库：王寵（92046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json)
- [CBDB 中国历代人物传记资料库：王紹（175541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json)
- [CBDB 中国历代人物传记资料库：王仲連（175540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json)
