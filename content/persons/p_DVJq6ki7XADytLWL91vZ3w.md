---
schema: wang-person/v1
id: p_DVJq6ki7XADytLWL91vZ3w
status: active
merged_into: null
display_name: 王粹
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iGMQ7zL7_TXByC6B-Pf4l2
        subject_person_id: p_DVJq6ki7XADytLWL91vZ3w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粹，史料所见人物。本项目依据《王粹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U6MX0ZwsZLRJdOr8siBf5k
          claim_id: c_iGMQ7zL7_TXByC6B-Pf4l2
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: Q22814769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLiuPtZ58mz9mMQEgxPqGB
        subject_person_id: p_DVJq6ki7XADytLWL91vZ3w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zHrr4JJWVejaCG7BpX6xuC
          claim_id: c_DLiuPtZ58mz9mMQEgxPqGB
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: Q22814769
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BGoEC6eZKALa5HJm4HPDad
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVJq6ki7XADytLWL91vZ3w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rjPZ5kNasrGxRzSnscCrYK
          claim_id: c_BGoEC6eZKALa5HJm4HPDad
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
        - id: cs_44ghu9kJaQAE4tSVLSBjpX
          claim_id: c_BGoEC6eZKALa5HJm4HPDad
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_Mimu7dhG8c6rJMSXNVr1AX
        status: active
        display_name: 王僧朗
        merged_into_person_id: null
  children:
    - claim:
        id: c_wtkKiE688b8q3gxNYtTB8L
        subject_person_id: p_DVJq6ki7XADytLWL91vZ3w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J1Ags3R9DpGyBdsdxESQDz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_46pe379ynfKMK7uSv3Mv37
          claim_id: c_wtkKiE688b8q3gxNYtTB8L
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
        - id: cs_Ysjqp4FNaTEJdDKtMQ43a3
          claim_id: c_wtkKiE688b8q3gxNYtTB8L
          source_id: s_eWqE2LxNnvBDzBqW4JgEyT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eWqE2LxNnvBDzBqW4JgEyT
            source_type: api_record
            title: 维基数据：王份（Q11572894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572894
            external_identifier: Q11572894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:44.222Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%BD
      object_person:
        id: p_J1Ags3R9DpGyBdsdxESQDz
        status: active
        display_name: 王份
        merged_into_person_id: null
    - claim:
        id: c_Hxp4W3Lk2VLAMKPRA1WwPh
        subject_person_id: p_DVJq6ki7XADytLWL91vZ3w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zgGwkfcEB9wLpMf5REYv7D
          claim_id: c_Hxp4W3Lk2VLAMKPRA1WwPh
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
        - id: cs_dDt6eCW7KBjq6qAof5jUCj
          claim_id: c_Hxp4W3Lk2VLAMKPRA1WwPh
          source_id: s_3zRe6TULU1Be3ts4o7dG7u
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zRe6TULU1Be3ts4o7dG7u
            source_type: api_record
            title: 维基数据：王奂（Q22814768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814768
            external_identifier: Q22814768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%82
      object_person:
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王粹，史料所见人物。本项目依据《王粹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王粹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mimu7dhG8c6rJMSXNVr1AX | 王僧朗 | accepted |
| children | p_J1Ags3R9DpGyBdsdxESQDz | 王份 | accepted |
| children | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |

## 外部来源

- [维基数据：王粹（Q22814769）](https://www.wikidata.org/wiki/Q22814769)
- [维基数据：王份（Q11572894）](https://www.wikidata.org/wiki/Q11572894)
- [维基数据：王奂（Q22814768）](https://www.wikidata.org/wiki/Q22814768)
- [维基数据：王僧朗（Q22814767）](https://www.wikidata.org/wiki/Q22814767)
