---
schema: wang-person/v1
id: p_YA8Vzcbpm21eXA3xkCia2b
status: active
merged_into: null
display_name: 王徽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nJwt_yn8BPc87nRSuuF1FG
        subject_person_id: p_YA8Vzcbpm21eXA3xkCia2b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽（？—？），一作微，字幼仁，小字荆产，琅邪临沂人，王乂之孙，王澄次子，王詹之弟，在晋朝历任尚书郎、右军司马。 刘惔说：“人们认为王徽很优秀，这就与认为长松下必有清风是一样的。”
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m3aWF0yzQx7WbLPNKOyEPL
          claim_id: c_nJwt_yn8BPc87nRSuuF1FG
          source_id: s_vrsA2TEYDYwpQaTLmmZ01V
          stance: supports
          locator: 导言
          quotation: 王徽（？—？），一作微，字幼仁，小字荆产，琅邪临沂人，王乂之孙，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_vrsA2TEYDYwpQaTLmmZ01V
            source_type: website
            title: 中文维基百科：王徽 (晋朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D)
            external_identifier: Q16906028
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wg2sWPnYRmvvHGPjqXhJCF
        subject_person_id: p_YA8Vzcbpm21eXA3xkCia2b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_szT2X8AAxhoR3H4dF47fJ4
          claim_id: c_wg2sWPnYRmvvHGPjqXhJCF
          source_id: s_DSkj5jke8azXcK56VyHZpF
          stance: supports
          locator: Q16906028
          quotation: null
          interpretation_note: null
          source:
            id: s_DSkj5jke8azXcK56VyHZpF
            source_type: api_record
            title: 维基数据：王徽（Q16906028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906028
            external_identifier: Q16906028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QH4DyZ2Pvv2iQcP2kZbBwb
        subject_person_id: p_697Z7eZ9KhoXLwDHbnQfqJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YA8Vzcbpm21eXA3xkCia2b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CCG5hCxqVDtED3mpEuGLSz
          claim_id: c_QH4DyZ2Pvv2iQcP2kZbBwb
          source_id: s_CkWd3e7DPJqphRWCsTLhvH
          stance: supports
          locator: P40（子女）
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
        - id: cs_C1M1bdSHJrPLdYokBVuhgs
          claim_id: c_QH4DyZ2Pvv2iQcP2kZbBwb
          source_id: s_DSkj5jke8azXcK56VyHZpF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DSkj5jke8azXcK56VyHZpF
            source_type: api_record
            title: 维基数据：王徽（Q16906028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906028
            external_identifier: Q16906028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D)
      object_person:
        id: p_697Z7eZ9KhoXLwDHbnQfqJ
        status: active
        display_name: 王澄 (西晋)
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
        id: p_F2YtkguWYzwWiDeuf3FweW
        status: active
        display_name: 王乂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徽（？—？），一作微，字幼仁，小字荆产，琅邪临沂人，王乂之孙，王澄次子，王詹之弟，在晋朝历任尚书郎、右军司马。 刘惔说：“人们认为王徽很优秀，这就与认为长松下必有清风是一样的。” | accepted |
| name.primary | 王徽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_697Z7eZ9KhoXLwDHbnQfqJ | 王澄 (西晋) | accepted |
| ancestors | p_F2YtkguWYzwWiDeuf3FweW | 王乂 | accepted |

## 外部来源

- [维基数据：王澄 (西晋)（Q15937556）](https://www.wikidata.org/wiki/Q15937556)
- [维基数据：王徽（Q16906028）](https://www.wikidata.org/wiki/Q16906028)
- [中文维基百科：王徽 (晋朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD_(%E6%99%8B%E6%9C%9D))
