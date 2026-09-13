---
schema: wang-person/v1
id: p_qaPq4Sj3Ee1Mhf9K92RLju
status: active
merged_into: null
display_name: 王师述
cbdb_id: 175430
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mgq6YxQyg2VykdD9oP8itg
        subject_person_id: p_qaPq4Sj3Ee1Mhf9K92RLju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师述（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_irLcatKKcyEJh4rVWqVBck
          claim_id: c_mgq6YxQyg2VykdD9oP8itg
          source_id: s_kFUZFoPEJbcbqCFqx5QZgg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kFUZFoPEJbcbqCFqx5QZgg
            source_type: api_record
            title: 维基数据：王师述（Q45659176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659176
            external_identifier: Q45659176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_kNVII58CeGeMDJLazMABG_
          claim_id: c_mgq6YxQyg2VykdD9oP8itg
          source_id: s_KHTAUKuBgVBt2jhn9khtnu
          stance: supports
          locator: CBDB:175430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KHTAUKuBgVBt2jhn9khtnu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師述（175430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175430&o=json
            external_identifier: CBDB:175430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.751Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Xdtx77gSPTGQNv8LGp8NFs
        subject_person_id: p_qaPq4Sj3Ee1Mhf9K92RLju
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5wzy64GXEAoyCYAjaYyRmp
          claim_id: c_Xdtx77gSPTGQNv8LGp8NFs
          source_id: s_kFUZFoPEJbcbqCFqx5QZgg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kFUZFoPEJbcbqCFqx5QZgg
            source_type: api_record
            title: 维基数据：王师述（Q45659176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659176
            external_identifier: Q45659176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PRT6MLwNrornEM78jsQSF9
        subject_person_id: p_qaPq4Sj3Ee1Mhf9K92RLju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师述
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DNv9QJzQrnCPFu7jsvPGMB
          claim_id: c_PRT6MLwNrornEM78jsQSF9
          source_id: s_KHTAUKuBgVBt2jhn9khtnu
          stance: supports
          locator: Q45659176
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_p9eRUYu8B3L4gTTsqLJq7L
          claim_id: c_PRT6MLwNrornEM78jsQSF9
          source_id: s_kFUZFoPEJbcbqCFqx5QZgg
          stance: supports
          locator: Q45659176
          quotation: null
          interpretation_note: null
          source:
            id: s_kFUZFoPEJbcbqCFqx5QZgg
            source_type: api_record
            title: 维基数据：王师述（Q45659176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659176
            external_identifier: Q45659176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d1b6M4BFsQKyfoMrF9zBjh
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qaPq4Sj3Ee1Mhf9K92RLju
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BDCAAQgCAN1WKGPRq3uvRV
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_NtfudGnpEPemq3XsN4rLdE
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
        - id: cs_wzEMKpvoTznRtBS2uy4V4n
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_kFUZFoPEJbcbqCFqx5QZgg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kFUZFoPEJbcbqCFqx5QZgg
            source_type: api_record
            title: 维基数据：王师述（Q45659176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659176
            external_identifier: Q45659176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_hQ2MgQiPC7uzcu9nqnaDv8
          claim_id: c_d1b6M4BFsQKyfoMrF9zBjh
          source_id: s_KHTAUKuBgVBt2jhn9khtnu
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KHTAUKuBgVBt2jhn9khtnu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師述（175430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175430&o=json
            external_identifier: CBDB:175430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.751Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师述（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175430） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师述（Q45659176）](https://www.wikidata.org/wiki/Q45659176)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師述（175430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175430&o=json)
