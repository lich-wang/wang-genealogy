---
schema: wang-person/v1
id: p_awEWD4PFE8u2EVxcU51iT5
status: active
merged_into: null
display_name: 王源
cbdb_id: 175385
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q53ZnqYpmAvL66Lqu4zCcX
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源（卒于733年），唐人物。籍贯臨沂，曾任參軍。（中国历代人物传记资料库 CBDB 175385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fQu1Ql8NynxSVieC4yCvWH
          claim_id: c_q53ZnqYpmAvL66Lqu4zCcX
          source_id: s_qLyunMUXvHHBHqHsBaBvB4
          stance: supports
          locator: CBDB:175385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qLyunMUXvHHBHqHsBaBvB4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源（175385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json
            external_identifier: CBDB:175385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.549Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4RXnbtpF58zYZqC4KcPNyP
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cu1YEF7tGG2ogG5Q7upgR5
          claim_id: c_4RXnbtpF58zYZqC4KcPNyP
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_So4WDk62m4iZFXsnDjCvQt
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐朝
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UXHM7pQakzw3CvNYzHhwdC
          claim_id: c_So4WDk62m4iZFXsnDjCvQt
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：唐朝人，中國歷代人物傳記資料庫編號=175385
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_htmxUNseJx92nGuNUNdcq1
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C5hoWJC3ad23Qh4V8SzFVY
          claim_id: c_htmxUNseJx92nGuNUNdcq1
          source_id: s_qLyunMUXvHHBHqHsBaBvB4
          stance: supports
          locator: Q45656489
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WL3j7WJLL1J5vMMimtYaHk
          claim_id: c_htmxUNseJx92nGuNUNdcq1
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: Q45656489
          quotation: null
          interpretation_note: null
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZKLbd97kNQR5PqFvC4h847
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_awEWD4PFE8u2EVxcU51iT5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3qQHg9ReV7AP4hWN8piFYj
          claim_id: c_ZKLbd97kNQR5PqFvC4h847
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_RQFRb7ZkfNHmmspp2wmJ84
        status: active
        display_name: 王方泰
        merged_into_person_id: null
  children:
    - claim:
        id: c_E9dL8YDt1RjhfLXwY5fCGd
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tQ2ueSAFfHvjwVttGqR6mV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gWHN2szgAjGWXiE1xMVMxD
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_qLyunMUXvHHBHqHsBaBvB4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qLyunMUXvHHBHqHsBaBvB4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源（175385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json
            external_identifier: CBDB:175385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.549Z
            metadata_json: null
        - id: cs_jn374kXKtXMnHgYQNQjdX7
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_75rXUr5EUnAk6i7YZpgvns
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_uqrMM3D2aSPCqD4cFA1w3F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uqrMM3D2aSPCqD4cFA1w3F
            source_type: api_record
            title: 维基数据：王志福（Q45656548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656548
            external_identifier: Q45656548
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_36JukwvWERedXMcf1C2jDx
          claim_id: c_E9dL8YDt1RjhfLXwY5fCGd
          source_id: s_b1g8yrX3GzBXAzaLGgCtHm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b1g8yrX3GzBXAzaLGgCtHm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志福（175386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175386&o=json
            external_identifier: CBDB:175386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.260Z
            metadata_json: null
      object_person:
        id: p_tQ2ueSAFfHvjwVttGqR6mV
        status: active
        display_name: 王志福
        merged_into_person_id: null
    - claim:
        id: c_XCEqy3etcinrpukGCNFLnz
        subject_person_id: p_awEWD4PFE8u2EVxcU51iT5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Avsyhm7q9GKn1oTX83V2dW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CX4uBUqoJnRJAzHRi5MGdJ
          claim_id: c_XCEqy3etcinrpukGCNFLnz
          source_id: s_qLyunMUXvHHBHqHsBaBvB4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qLyunMUXvHHBHqHsBaBvB4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源（175385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json
            external_identifier: CBDB:175385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.549Z
            metadata_json: null
        - id: cs_LW6e7VMhLS37aNzNPH6V1k
          claim_id: c_XCEqy3etcinrpukGCNFLnz
          source_id: s_m8XuWNbCqP9fbo6xFGC5Sf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m8XuWNbCqP9fbo6xFGC5Sf
            source_type: api_record
            title: 维基数据：王源（Q45656489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656489
            external_identifier: Q45656489
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_r84HTrVvtgE3HBYcogE7GB
          claim_id: c_XCEqy3etcinrpukGCNFLnz
          source_id: s_MTDh1TJNoKa3TQgp22S3Hv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MTDh1TJNoKa3TQgp22S3Hv
            source_type: api_record
            title: 维基数据：王志斌（Q45656608）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656608
            external_identifier: Q45656608
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_m8thYzrNLbE4rAYYv9m7zX
          claim_id: c_XCEqy3etcinrpukGCNFLnz
          source_id: s_aaHWJWWzmkr7KmxNALRv1h
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aaHWJWWzmkr7KmxNALRv1h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志斌（175387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175387&o=json
            external_identifier: CBDB:175387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:53.946Z
            metadata_json: null
      object_person:
        id: p_Avsyhm7q9GKn1oTX83V2dW
        status: active
        display_name: 王志斌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源（卒于733年），唐人物。籍贯臨沂，曾任參軍。（中国历代人物传记资料库 CBDB 175385） | accepted |
| death.date | 733年 | accepted |
| historical.period | 唐朝 | accepted |
| name.primary | 王源 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQFRb7ZkfNHmmspp2wmJ84 | 王方泰 | accepted |
| children | p_tQ2ueSAFfHvjwVttGqR6mV | 王志福 | accepted |
| children | p_Avsyhm7q9GKn1oTX83V2dW | 王志斌 | accepted |

## 外部来源

- [维基数据：王源（Q45656489）](https://www.wikidata.org/wiki/Q45656489)
- [维基数据：王志斌（Q45656608）](https://www.wikidata.org/wiki/Q45656608)
- [维基数据：王志福（Q45656548）](https://www.wikidata.org/wiki/Q45656548)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王源（175385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175385&o=json)
- [CBDB 中国历代人物传记资料库：王志斌（175387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175387&o=json)
- [CBDB 中国历代人物传记资料库：王志福（175386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175386&o=json)
