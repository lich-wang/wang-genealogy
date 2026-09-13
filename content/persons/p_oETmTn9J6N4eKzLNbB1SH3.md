---
schema: wang-person/v1
id: p_oETmTn9J6N4eKzLNbB1SH3
status: active
merged_into: null
display_name: 王昶
cbdb_id: 175465
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gTNHP4RDcM1h1i2Fe7oJR8
        subject_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶（卒于856年），唐人物。籍贯咸陽，身份为詩人，曾任太子詹事。（中国历代人物传记资料库 CBDB 175465）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3SujH99D1iBKqdQJnccvbz
          claim_id: c_gTNHP4RDcM1h1i2Fe7oJR8
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_BT0bmfIHOtSc0oaeqjJi3i
          claim_id: c_gTNHP4RDcM1h1i2Fe7oJR8
          source_id: s_3aB21ioLikrnPCUjUqoxPn
          stance: supports
          locator: CBDB:175465
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3aB21ioLikrnPCUjUqoxPn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昶（175465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json
            external_identifier: CBDB:175465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.395Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o9RtJjgDxVZaXGsQLvDjWr
        subject_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0856-01-01
            latest: 0856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vPQgSRPQX1eb2n7QRY7xC6
          claim_id: c_o9RtJjgDxVZaXGsQLvDjWr
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8RaW341P2vXDSLudW7aciF
        subject_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_61B1DHc6pNDeDjm4KYUw3j
          claim_id: c_8RaW341P2vXDSLudW7aciF
          source_id: s_3aB21ioLikrnPCUjUqoxPn
          stance: supports
          locator: Q45661269
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_AoQngjKp5bzHwZSa9WHZ2M
          claim_id: c_8RaW341P2vXDSLudW7aciF
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: Q45661269
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R7oFwiv3eEuffCdiopHNDz
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CwvwiJs56cUmKbgnTnrEHF
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_NPofE26oCHuuY51D8EkJ5S
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_dkAh8ikUDdmNiKfP3nwPuZ
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_ALYh81XRMXHxT9oDPL9LvE
          claim_id: c_R7oFwiv3eEuffCdiopHNDz
          source_id: s_3aB21ioLikrnPCUjUqoxPn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3aB21ioLikrnPCUjUqoxPn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昶（175465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json
            external_identifier: CBDB:175465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.395Z
            metadata_json: null
      object_person:
        id: p_vEhXCL8FygQQwURMRVeMJc
        status: active
        display_name: 王长文
        merged_into_person_id: null
  children:
    - claim:
        id: c_AKiVqMMg1u32so2g3WtK3r
        subject_person_id: p_oETmTn9J6N4eKzLNbB1SH3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QU93bvuq83U6f9kujgzjwU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_48s37ggpcU8VyniSyB5dYd
          claim_id: c_AKiVqMMg1u32so2g3WtK3r
          source_id: s_3aB21ioLikrnPCUjUqoxPn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3aB21ioLikrnPCUjUqoxPn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昶（175465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json
            external_identifier: CBDB:175465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.395Z
            metadata_json: null
        - id: cs_KoxJsA9HfQr5X9esowYRtv
          claim_id: c_AKiVqMMg1u32so2g3WtK3r
          source_id: s_SQE3JhKbCuqeoNvDfhfK3m
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SQE3JhKbCuqeoNvDfhfK3m
            source_type: api_record
            title: 维基数据：王昶（Q45661269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661269
            external_identifier: Q45661269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_fG2qBsoWCZLPyEi9VmrRZ4
          claim_id: c_AKiVqMMg1u32so2g3WtK3r
          source_id: s_h2qgVzWLM4q7a4XtQiNV1X
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_h2qgVzWLM4q7a4XtQiNV1X
            source_type: api_record
            title: 维基数据：王仲鸾（Q45661330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661330
            external_identifier: Q45661330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_oEK7RsvEkvN3BAi4NW9mCP
          claim_id: c_AKiVqMMg1u32so2g3WtK3r
          source_id: s_89B51gVU5TDLB7c5keFqRa
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_89B51gVU5TDLB7c5keFqRa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲鸞（175466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175466&o=json
            external_identifier: CBDB:175466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.183Z
            metadata_json: null
      object_person:
        id: p_QU93bvuq83U6f9kujgzjwU
        status: active
        display_name: 王仲鸾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昶（卒于856年），唐人物。籍贯咸陽，身份为詩人，曾任太子詹事。（中国历代人物传记资料库 CBDB 175465） | accepted |
| death.date | 856年 | accepted |
| name.primary | 王昶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vEhXCL8FygQQwURMRVeMJc | 王长文 | accepted |
| children | p_QU93bvuq83U6f9kujgzjwU | 王仲鸾 | accepted |

## 外部来源

- [维基数据：王昶（Q45661269）](https://www.wikidata.org/wiki/Q45661269)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [维基数据：王仲鸾（Q45661330）](https://www.wikidata.org/wiki/Q45661330)
- [CBDB 中国历代人物传记资料库：王昶（175465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175465&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
- [CBDB 中国历代人物传记资料库：王仲鸞（175466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175466&o=json)
