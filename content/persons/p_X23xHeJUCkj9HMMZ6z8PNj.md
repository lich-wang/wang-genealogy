---
schema: wang-person/v1
id: p_X23xHeJUCkj9HMMZ6z8PNj
status: active
merged_into: null
display_name: 王坚儿
cbdb_id: 158880
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W3Rmr85EctDFnbZtHEMshM
        subject_person_id: p_X23xHeJUCkj9HMMZ6z8PNj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坚儿，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 158880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FVaFaCHFavFtpy6XMWAi8W
          claim_id: c_W3Rmr85EctDFnbZtHEMshM
          source_id: s_PBm4GfFAughuDNPgNMpdHm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PBm4GfFAughuDNPgNMpdHm
            source_type: api_record
            title: 维基数据：王坚儿（Q45582712）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582712
            external_identifier: Q45582712
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_2q4pIWI1ZZjm3SRCdd3rnp
          claim_id: c_W3Rmr85EctDFnbZtHEMshM
          source_id: s_RZcnB1s9Uoies5tUTit5hY
          stance: supports
          locator: CBDB:158880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RZcnB1s9Uoies5tUTit5hY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王堅兒（158880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158880&o=json
            external_identifier: CBDB:158880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.217Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRt7frKcwGbEAwxYSgaHJG
        subject_person_id: p_X23xHeJUCkj9HMMZ6z8PNj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坚儿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JB6yCxrsaPDpc8ekCKMUqk
          claim_id: c_oRt7frKcwGbEAwxYSgaHJG
          source_id: s_RZcnB1s9Uoies5tUTit5hY
          stance: supports
          locator: Q45582712
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RUVbAZw5eEHJ7TwzJ3SRaW
          claim_id: c_oRt7frKcwGbEAwxYSgaHJG
          source_id: s_PBm4GfFAughuDNPgNMpdHm
          stance: supports
          locator: Q45582712
          quotation: null
          interpretation_note: null
          source:
            id: s_PBm4GfFAughuDNPgNMpdHm
            source_type: api_record
            title: 维基数据：王坚儿（Q45582712）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582712
            external_identifier: Q45582712
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2U9Q3twKNuHbwmAfALw7wE
        subject_person_id: p_riJJsaXCL8C4KFLVPRybNk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X23xHeJUCkj9HMMZ6z8PNj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nANpEDG8bGFRarVKuesspM
          claim_id: c_2U9Q3twKNuHbwmAfALw7wE
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
        - id: cs_x9ox2q6DUPbXcWpBpWVuCu
          claim_id: c_2U9Q3twKNuHbwmAfALw7wE
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
        - id: cs_vNQYb5Y3848r37LFg865QC
          claim_id: c_2U9Q3twKNuHbwmAfALw7wE
          source_id: s_PBm4GfFAughuDNPgNMpdHm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PBm4GfFAughuDNPgNMpdHm
            source_type: api_record
            title: 维基数据：王坚儿（Q45582712）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582712
            external_identifier: Q45582712
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:58.059Z
            metadata_json: null
        - id: cs_BC4Acb66sGfuDZWW8mHo9p
          claim_id: c_2U9Q3twKNuHbwmAfALw7wE
          source_id: s_RZcnB1s9Uoies5tUTit5hY
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_RZcnB1s9Uoies5tUTit5hY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王堅兒（158880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158880&o=json
            external_identifier: CBDB:158880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:58.217Z
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

# 王坚儿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坚儿，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 158880） | accepted |
| name.primary | 王坚儿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_riJJsaXCL8C4KFLVPRybNk | 王翱 | accepted |

## 外部来源

- [维基数据：王翱（Q45546232）](https://www.wikidata.org/wiki/Q45546232)
- [维基数据：王坚儿（Q45582712）](https://www.wikidata.org/wiki/Q45582712)
- [CBDB 中国历代人物传记资料库：王翱（141842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json)
- [CBDB 中国历代人物传记资料库：王堅兒（158880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158880&o=json)
