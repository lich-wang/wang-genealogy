---
schema: wang-person/v1
id: p_F2YtkguWYzwWiDeuf3FweW
status: active
merged_into: null
display_name: 王乂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wfQdRVDjWwVN0q9u7FZuf7
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂，史料所见人物。本项目依据《維基數據：王乂》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Jn-zG4GWmZHOOioNiUTSyj
          claim_id: c_wfQdRVDjWwVN0q9u7FZuf7
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: Q22814893
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UF4uQiXfZ8178g9AZEHCH3
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vVcjv9UXa38pMMNQAk7paH
          claim_id: c_UF4uQiXfZ8178g9AZEHCH3
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: Q22814893
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BQP8Q6fDa3FXSmTM1wz7b5
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F2YtkguWYzwWiDeuf3FweW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5CXFjxQWVXHbDA1qZTmLVf
          claim_id: c_BQP8Q6fDa3FXSmTM1wz7b5
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
        - id: cs_4A6AZcCwQqHBCBQZXiNBv9
          claim_id: c_BQP8Q6fDa3FXSmTM1wz7b5
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7e9JNdDEAeud4LTuyM2xyw
            source_type: api_record
            title: 维基数据：王雄（Q5364171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5364171
            external_identifier: Q5364171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:08.333Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%84_(%E4%B8%89%E5%9B%BD)
      object_person:
        id: p_LG8YoDXiRnc6qeaM7WWt1b
        status: active
        display_name: 王雄
        merged_into_person_id: null
  children:
    - claim:
        id: c_Dt9bAskL5BSK6oz94JWBze
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3FQRLHTWhMBHM5s8M9VaB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7pmYFRznwZ54hCuf8YoDm3
          claim_id: c_Dt9bAskL5BSK6oz94JWBze
          source_id: s_hs5JaNuqXqqHpaNVEc1TZn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hs5JaNuqXqqHpaNVEc1TZn
            source_type: website
            title: 中文维基百科：王衍
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王衍_(西晉)
            external_identifier: Q15886837
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_SYvvdBoapN5oT1uLnsUQt2
          claim_id: c_Dt9bAskL5BSK6oz94JWBze
          source_id: s_w9fFX8M9H2ngc77WZA1erA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w9fFX8M9H2ngc77WZA1erA
            source_type: api_record
            title: 維基數據：王衍（Q15886837）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15886837
            external_identifier: Q15886837
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:34.613Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E8%A5%BF%E6%99%8B)
        - id: cs_U3uG4FPyRdLoGPaAmi2daz
          claim_id: c_Dt9bAskL5BSK6oz94JWBze
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
      object_person:
        id: p_q3FQRLHTWhMBHM5s8M9VaB
        status: active
        display_name: 王衍
        merged_into_person_id: null
    - claim:
        id: c_EDurL2HhASfJz4XVRdLPqe
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_697Z7eZ9KhoXLwDHbnQfqJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JGvhDgQA82EreUVGgpHMQ8
          claim_id: c_EDurL2HhASfJz4XVRdLPqe
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
        - id: cs_48NZyQoCZ89EbdLUvfSs3w
          claim_id: c_EDurL2HhASfJz4XVRdLPqe
          source_id: s_CkWd3e7DPJqphRWCsTLhvH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CkWd3e7DPJqphRWCsTLhvH
            source_type: api_record
            title: 维基数据：王澄 (西晋)（Q15937556）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15937556
            external_identifier: Q15937556
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:55.580Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BE%84_(%E8%A5%BF%E6%99%8B)
      object_person:
        id: p_697Z7eZ9KhoXLwDHbnQfqJ
        status: active
        display_name: 王澄 (西晋)
        merged_into_person_id: null
    - claim:
        id: c_RhDfuqcfjFvAGY1mPcirPk
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9aHEJHkSutqkoqVkH5jqz8
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
        - id: cs_NW3q2R6P76MKzR7S4zDMCk
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_pMDQTCsPBMQFb4RqPjtgQk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pMDQTCsPBMQFb4RqPjtgQk
            source_type: api_record
            title: 维基数据：王诩（Q16906217）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906217
            external_identifier: Q16906217
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:00.544Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
        - id: cs_RN3a9X2Jvw11M9MKYpJY5K
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_aVfP77Ejt5xUCmZ7ddwDSH
          stance: supports
          locator: 条文：之子/之女
          quotation: 王诩，字季演，一字季胤，琅邪临沂人，王雄的孙子，王乂的儿子，王衍和王澄的兄弟，在晋朝官至脩武县县令
          interpretation_note: null
          source:
            id: s_aVfP77Ejt5xUCmZ7ddwDSH
            source_type: website
            title: 中文维基百科：王诩 (脩武县县令)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:56.955Z
            metadata_json: null
      object_person:
        id: p_y8DBtZG7ASfGegNGeXNqD4
        status: active
        display_name: 王诩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fFkeYfFZoya2VCCqgskJ9T
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA8Vzcbpm21eXA3xkCia2b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N7AQAL5kp4TcwRx7fFHMUF
          claim_id: c_fFkeYfFZoya2VCCqgskJ9T
          source_id: s_KjxsVSwTQCk9y9ZMtQVcaa
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王乂之孙，王澄次子，王詹之弟，在晋朝历任尚书郎、右军司马。
          interpretation_note: null
          source:
            id: s_KjxsVSwTQCk9y9ZMtQVcaa
            source_type: website
            title: 中文维基百科：王徽 (晋朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:30.199Z
            metadata_json: null
      object_person:
        id: p_YA8Vzcbpm21eXA3xkCia2b
        status: active
        display_name: 王徽
        merged_into_person_id: null
  other: []
---

# 王乂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乂，史料所见人物。本项目依据《維基數據：王乂》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王乂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LG8YoDXiRnc6qeaM7WWt1b | 王雄 | accepted |
| children | p_q3FQRLHTWhMBHM5s8M9VaB | 王衍 | accepted |
| children | p_697Z7eZ9KhoXLwDHbnQfqJ | 王澄 (西晋) | accepted |
| children | p_y8DBtZG7ASfGegNGeXNqD4 | 王诩 | accepted |
| descendants | p_YA8Vzcbpm21eXA3xkCia2b | 王徽 | accepted |

## 外部来源

- [维基数据：王澄 (西晋)（Q15937556）](https://www.wikidata.org/wiki/Q15937556)
- [维基数据：王雄（Q5364171）](https://www.wikidata.org/wiki/Q5364171)
- [维基数据：王诩（Q16906217）](https://www.wikidata.org/wiki/Q16906217)
- [維基數據：王衍（Q15886837）](https://www.wikidata.org/wiki/Q15886837)
- [維基數據：王乂（Q22814893）](https://www.wikidata.org/wiki/Q22814893)
- [中文维基百科：王徽 (晋朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D))
- [中文维基百科：王诩 (脩武县县令)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4))
- [中文维基百科：王衍](https://zh.wikipedia.org/wiki/王衍_(西晉))
