---
schema: wang-person/v1
id: p_6CVrjVUbmy69XzKCAP5upP
status: active
merged_into: null
display_name: 王章
cbdb_id: 175412
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_53L7BNxn64By3iGGvXTf37
        subject_person_id: p_6CVrjVUbmy69XzKCAP5upP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章（卒于968年），史料所见人物。本项目依据《王章》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_8E9I6PAfRVnJ1giQ9gI__o
          claim_id: c_53L7BNxn64By3iGGvXTf37
          source_id: s_vTFBucCLLBe7JeiUG2mYXX
          stance: supports
          locator: Q45658107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vTFBucCLLBe7JeiUG2mYXX
            source_type: api_record
            title: 维基数据：王章（Q45658107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658107
            external_identifier: Q45658107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QZ1mXKHcK5su3iPdhdpBKH
        subject_person_id: p_6CVrjVUbmy69XzKCAP5upP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 968年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0968-01-01
            latest: 0968-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y23bQotptZgwAkdctJxtdb
          claim_id: c_QZ1mXKHcK5su3iPdhdpBKH
          source_id: s_vTFBucCLLBe7JeiUG2mYXX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vTFBucCLLBe7JeiUG2mYXX
            source_type: api_record
            title: 维基数据：王章（Q45658107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658107
            external_identifier: Q45658107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QsJP386ADLzK7Jo5uBhPUM
        subject_person_id: p_6CVrjVUbmy69XzKCAP5upP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9JtzTRbbQQMa8hRAJM3LpQ
          claim_id: c_QsJP386ADLzK7Jo5uBhPUM
          source_id: s_ofPnrB6Mzby8M4z1CNU2gQ
          stance: supports
          locator: Q45658107
          quotation: null
          interpretation_note: null
          source:
            id: s_ofPnrB6Mzby8M4z1CNU2gQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王章（175412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175412&o=json
            external_identifier: CBDB:175412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.776Z
            metadata_json: null
        - id: cs_o3ULJsQHvBiCfLEfPGE7Dh
          claim_id: c_QsJP386ADLzK7Jo5uBhPUM
          source_id: s_vTFBucCLLBe7JeiUG2mYXX
          stance: supports
          locator: Q45658107
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qyuKaG1th1EUBQZTcnc9Cs
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CVrjVUbmy69XzKCAP5upP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_78ecsQTEuB6wgDkbGsCU5d
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_Q6baHs9eCqPomHc8bECyu2
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_zsVKMDmhZf9ymWq5z4Wj2z
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_vTFBucCLLBe7JeiUG2mYXX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vTFBucCLLBe7JeiUG2mYXX
            source_type: api_record
            title: 维基数据：王章（Q45658107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658107
            external_identifier: Q45658107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
        - id: cs_UxXEh1sPoCzPkY9HHX1xL5
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_ofPnrB6Mzby8M4z1CNU2gQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ofPnrB6Mzby8M4z1CNU2gQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王章（175412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175412&o=json
            external_identifier: CBDB:175412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.776Z
            metadata_json: null
      object_person:
        id: p_N5kbg3euLXxpkZM8MisDtX
        status: active
        display_name: 王慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王章（卒于968年），史料所见人物。本项目依据《王章》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 968年 | accepted |
| name.primary | 王章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5kbg3euLXxpkZM8MisDtX | 王慎 | accepted |

## 外部来源

- [维基数据：王慎（Q45658047）](https://www.wikidata.org/wiki/Q45658047)
- [维基数据：王章（Q45658107）](https://www.wikidata.org/wiki/Q45658107)
- [CBDB 中国历代人物传记资料库：王慎（175411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json)
- [CBDB 中国历代人物传记资料库：王章（175412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175412&o=json)
