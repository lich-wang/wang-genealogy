---
schema: wang-person/v1
id: p_CLnnP5G8SC8KeRrpWpyYkA
status: active
merged_into: null
display_name: 王黝儿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jFkwk7hQRs9dk6s2AVKEmx
        subject_person_id: p_CLnnP5G8SC8KeRrpWpyYkA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黝儿，唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 158881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6TAWttPGqrRK5BD1eki2n7
          claim_id: c_jFkwk7hQRs9dk6s2AVKEmx
          source_id: s_q2sZeY7dKJz629HDxtv8Fu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_q2sZeY7dKJz629HDxtv8Fu
            source_type: api_record
            title: 维基数据：王黝儿（Q45582778）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582778
            external_identifier: Q45582778
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_NVxGb1rf1_QAnv8eH3711r
          claim_id: c_jFkwk7hQRs9dk6s2AVKEmx
          source_id: s_DkQZUPo4MRcRaZYCCJtN6s
          stance: supports
          locator: CBDB:158881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DkQZUPo4MRcRaZYCCJtN6s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王黝兒（158881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158881&o=json
            external_identifier: CBDB:158881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zy5VWsCsR9dMLd635CJ82b
        subject_person_id: p_CLnnP5G8SC8KeRrpWpyYkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黝儿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AoV9yx9iPgLrMrKc4wCT3h
          claim_id: c_Zy5VWsCsR9dMLd635CJ82b
          source_id: s_q2sZeY7dKJz629HDxtv8Fu
          stance: supports
          locator: Q45582778
          quotation: null
          interpretation_note: null
          source:
            id: s_q2sZeY7dKJz629HDxtv8Fu
            source_type: api_record
            title: 维基数据：王黝儿（Q45582778）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582778
            external_identifier: Q45582778
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_xJSZBkXqv6uDp1kEEsitVE
          claim_id: c_Zy5VWsCsR9dMLd635CJ82b
          source_id: s_DkQZUPo4MRcRaZYCCJtN6s
          stance: supports
          locator: Q45582778
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dyy3mWUBzFgRK6T5Mb6EwV
        subject_person_id: p_riJJsaXCL8C4KFLVPRybNk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLnnP5G8SC8KeRrpWpyYkA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Vt8VDosUkDD3CgiRy9CLYi
          claim_id: c_Dyy3mWUBzFgRK6T5Mb6EwV
          source_id: s_uWb2a9ZZyQqGyGvDK17RDm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_uWb2a9ZZyQqGyGvDK17RDm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翱（141842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json
            external_identifier: CBDB:141842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:40.494Z
            metadata_json: null
        - id: cs_W2zykTwjgvsMQ5xq9HA9jN
          claim_id: c_Dyy3mWUBzFgRK6T5Mb6EwV
          source_id: s_RFLhRAYBr7qDPqJtd88cAM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RFLhRAYBr7qDPqJtd88cAM
            source_type: api_record
            title: 维基数据：王翱（Q45546232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45546232
            external_identifier: Q45546232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:40.338Z
            metadata_json: null
        - id: cs_9Td2Z72inFPYajGjmEHcKR
          claim_id: c_Dyy3mWUBzFgRK6T5Mb6EwV
          source_id: s_q2sZeY7dKJz629HDxtv8Fu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2sZeY7dKJz629HDxtv8Fu
            source_type: api_record
            title: 维基数据：王黝儿（Q45582778）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582778
            external_identifier: Q45582778
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_nHJbQPpiMKUY2j1c92TKgT
          claim_id: c_Dyy3mWUBzFgRK6T5Mb6EwV
          source_id: s_DkQZUPo4MRcRaZYCCJtN6s
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_DkQZUPo4MRcRaZYCCJtN6s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王黝兒（158881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158881&o=json
            external_identifier: CBDB:158881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.232Z
            metadata_json: null
      object_person:
        id: p_riJJsaXCL8C4KFLVPRybNk
        status: active
        display_name: 王翱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王黝儿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王黝儿，唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 158881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王黝儿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_riJJsaXCL8C4KFLVPRybNk | 王翱 | accepted |

## 外部来源

- [维基数据：王翱（Q45546232）](https://www.wikidata.org/wiki/Q45546232)
- [维基数据：王黝儿（Q45582778）](https://www.wikidata.org/wiki/Q45582778)
- [CBDB 中国历代人物传记资料库：王翱（141842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json)
- [CBDB 中国历代人物传记资料库：王黝兒（158881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158881&o=json)
