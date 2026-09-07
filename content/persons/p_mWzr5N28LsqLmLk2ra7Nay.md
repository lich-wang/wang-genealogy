---
schema: wang-person/v1
id: p_mWzr5N28LsqLmLk2ra7Nay
status: active
merged_into: null
display_name: 王寿昌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jODlyvFK0l0FnQJh7mWghM
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿昌（1792年—1845年），史料所见人物。本项目依据《王寿昌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zEqpS-b7M7ZmGMsEubHjNx
          claim_id: c_jODlyvFK0l0FnQJh7mWghM
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: Q13688262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nAvcxr2akwwc1GP8S4QRhS
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1792-01-01
            latest: 1792-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L7K88RFu4n7LkGRvUbwR3Z
          claim_id: c_nAvcxr2akwwc1GP8S4QRhS
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wWiSLZCxLovWJETTeBK9Be
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1845年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1845-01-01
            latest: 1845-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bKQb4cuNzK33DYeFfsqpsr
          claim_id: c_wWiSLZCxLovWJETTeBK9Be
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oqs58uzu2EdDYVW9LrZ7Rn
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿昌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sKRot2nzGCNMjuz9HnqpRG
          claim_id: c_oqs58uzu2EdDYVW9LrZ7Rn
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: Q13688262
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eZaNRKpXwsNCmmas1fyGCd
        subject_person_id: p_x9CQGixzEkUnA7H8VckBPu
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4AUGdH4C35iffDAuCW8NtY
          claim_id: c_eZaNRKpXwsNCmmas1fyGCd
          source_id: s_SwHU4SeGpPq4puTdYE17fn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SwHU4SeGpPq4puTdYE17fn
            source_type: api_record
            title: 维基数据：王引之（Q11573061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573061
            external_identifier: Q11573061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%95%E4%B9%8B
        - id: cs_QSSqXnrQY4c9ywqHeNZM9K
          claim_id: c_eZaNRKpXwsNCmmas1fyGCd
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person:
        id: p_x9CQGixzEkUnA7H8VckBPu
        status: active
        display_name: 王引之
        merged_into_person_id: null
  children:
    - claim:
        id: c_BAm4aTjiwzzVTTBHNLstGD
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rS43g15uFE9NE2ATs6hXvh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2RBVZKXJ1XJmcJ2LB3Sh2d
          claim_id: c_BAm4aTjiwzzVTTBHNLstGD
          source_id: s_6wubF99G6Gw6DbeDfxggcu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6wubF99G6Gw6DbeDfxggcu
            source_type: api_record
            title: 维基数据：王氏（Q13690230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13690230
            external_identifier: Q13690230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
        - id: cs_JiaCXFPDSxB4MJ7jjCKJT6
          claim_id: c_BAm4aTjiwzzVTTBHNLstGD
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person:
        id: p_rS43g15uFE9NE2ATs6hXvh
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寿昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寿昌（1792年—1845年），史料所见人物。本项目依据《王寿昌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1845年 | accepted |
| name.primary | 王寿昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x9CQGixzEkUnA7H8VckBPu | 王引之 | accepted |
| children | p_rS43g15uFE9NE2ATs6hXvh | 王氏 | accepted |

## 外部来源

- [维基数据：王氏（Q13690230）](https://www.wikidata.org/wiki/Q13690230)
- [维基数据：王寿昌（Q13688262）](https://www.wikidata.org/wiki/Q13688262)
- [维基数据：王引之（Q11573061）](https://www.wikidata.org/wiki/Q11573061)
