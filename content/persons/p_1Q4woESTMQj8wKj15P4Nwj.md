---
schema: wang-person/v1
id: p_1Q4woESTMQj8wKj15P4Nwj
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tty7n15Cgtqu_uiWcgycCd
        subject_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷，史料所见人物。本项目依据《王楷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_No5opvj1eTGOwIVgajMRNW
          claim_id: c_tty7n15Cgtqu_uiWcgycCd
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: Q66776942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nTfNurm19GjeuwxJH5BQkV
            source_type: api_record
            title: 维基数据：王楷（Q66776942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q66776942
            external_identifier: Q66776942
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:26.424Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2N7AsH3JQ4sUDXjps7gXGS
        subject_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ewwRdpc1KuW9Q3yTdF8y6Q
          claim_id: c_2N7AsH3JQ4sUDXjps7gXGS
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: Q66776942
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jFdWeqKadrP2Pc2ZESW4tG
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wBpDE4xrtVxV3c6sdG57P5
          claim_id: c_jFdWeqKadrP2Pc2ZESW4tG
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_4TxPwmCf7qDKrxUjUzCsQy
          claim_id: c_jFdWeqKadrP2Pc2ZESW4tG
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nTfNurm19GjeuwxJH5BQkV
            source_type: api_record
            title: 维基数据：王楷（Q66776942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q66776942
            external_identifier: Q66776942
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:26.424Z
            metadata_json: null
      object_person:
        id: p_Mimu7dhG8c6rJMSXNVr1AX
        status: active
        display_name: 王僧朗
        merged_into_person_id: null
  children:
    - claim:
        id: c_EWkQHXPTez6jeHtwUDe1dx
        subject_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SRLhD8xS2bAAujHnnLBMrK
          claim_id: c_EWkQHXPTez6jeHtwUDe1dx
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nTfNurm19GjeuwxJH5BQkV
            source_type: api_record
            title: 维基数据：王楷（Q66776942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q66776942
            external_identifier: Q66776942
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:26.424Z
            metadata_json: null
        - id: cs_cK23iodqQTqpeV8fZFVDqF
          claim_id: c_EWkQHXPTez6jeHtwUDe1dx
          source_id: s_UUXiCNYxp6g8cnPoWW9idP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UUXiCNYxp6g8cnPoWW9idP
            source_type: api_record
            title: 维基数据：王蘊（Q48936426）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48936426
            external_identifier: Q48936426
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%98%8A_(%E5%8A%89%E5%AE%8B)
      object_person:
        id: p_bvfS4Dfw6Yxku7ijMc2RS6
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楷，史料所见人物。本项目依据《王楷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王楷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mimu7dhG8c6rJMSXNVr1AX | 王僧朗 | accepted |
| children | p_bvfS4Dfw6Yxku7ijMc2RS6 | 王蘊 | accepted |

## 外部来源

- [维基数据：王楷（Q66776942）](https://www.wikidata.org/wiki/Q66776942)
- [维基数据：王僧朗（Q22814767）](https://www.wikidata.org/wiki/Q22814767)
- [维基数据：王蘊（Q48936426）](https://www.wikidata.org/wiki/Q48936426)
