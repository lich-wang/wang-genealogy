---
schema: wang-person/v1
id: p_ThZ1fLjfnyC98szbw3tnMJ
status: active
merged_into: null
display_name: 王锷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nPmf2Kv470hsRS7QJjwSzZ
        subject_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锷（730年—815年），史料所见人物。本项目依据《王锷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ER7b6IPXxndug4Y-hMXftw
          claim_id: c_nPmf2Kv470hsRS7QJjwSzZ
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: Q15930590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3ZKGqRfgN2wupVCqGCxdk9
        subject_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 730年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0730-01-01
            latest: 0730-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_esmAnzLrKXrRgsFnmqEMTA
          claim_id: c_3ZKGqRfgN2wupVCqGCxdk9
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SULayZSGk9NrnzzQEs4vPc
        subject_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0815-01-01
            latest: 0815-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eEjyDJVPLL4r8QxpcxSMJ8
          claim_id: c_SULayZSGk9NrnzzQEs4vPc
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RDMUqvoEJedmvyyzgUwEt2
        subject_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5odg33D66w3JQxhitPBELU
          claim_id: c_RDMUqvoEJedmvyyzgUwEt2
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: Q15930590
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wf8xLWgFANB7PCWuCHnwmf
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nrZiUmTqwwnsrs7dbK7GB
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_mBKVm2gQP9YH97mK36jZsM
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person:
        id: p_c8C8PQBtyD8TinfV8tVU4U
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children:
    - claim:
        id: c_j44Hjwq5YgViKke5VzTzqj
        subject_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gzNfjAGXGNGgShinLATrJk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HvWUFNNkLdZ4vrZQLkEWZH
          claim_id: c_j44Hjwq5YgViKke5VzTzqj
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
        - id: cs_NBxB2HdKSQq7VFHZmkNFK6
          claim_id: c_j44Hjwq5YgViKke5VzTzqj
          source_id: s_eDBdduCacEAnjr5dfvhmsg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eDBdduCacEAnjr5dfvhmsg
            source_type: api_record
            title: 维基数据：王稷（Q16077527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077527
            external_identifier: Q16077527
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A8%B7_(%E5%94%90%E6%9C%9D)
        - id: cs_kLU7VqSCwqeoCULKsTxjfN
          claim_id: c_j44Hjwq5YgViKke5VzTzqj
          source_id: s_6moCHfjeLWUJGN6FhihiiT
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6moCHfjeLWUJGN6FhihiiT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍔（186698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json
            external_identifier: CBDB:186698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:33.058Z
            metadata_json: null
      object_person:
        id: p_gzNfjAGXGNGgShinLATrJk
        status: active
        display_name: 王稷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王锷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王锷（730年—815年），史料所见人物。本项目依据《王锷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 730年 | accepted |
| death.date | 815年 | accepted |
| name.primary | 王锷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c8C8PQBtyD8TinfV8tVU4U | 王澄 | accepted |
| children | p_gzNfjAGXGNGgShinLATrJk | 王稷 | accepted |

## 外部来源

- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王锷（Q15930590）](https://www.wikidata.org/wiki/Q15930590)
- [维基数据：王稷（Q16077527）](https://www.wikidata.org/wiki/Q16077527)
- [CBDB 中国历代人物传记资料库：王鍔（186698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json)
