---
schema: wang-person/v1
id: p_g2sQw7oP694pyJYYDNMCo3
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SbQoxKVA37TnBmeEwcvAn4
        subject_person_id: p_g2sQw7oP694pyJYYDNMCo3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇（？—10年），新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bo7P6WqNyxt48QFzCPMrG7
          claim_id: c_SbQoxKVA37TnBmeEwcvAn4
          source_id: s_AqCHrgvzHyG9_NINIOgzbF
          stance: supports
          locator: 导言
          quotation: 王奇（？—10年），新朝宗室，王莽五叔成都景成侯王商之子，成都侯
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_AqCHrgvzHyG9_NINIOgzbF
            source_type: website
            title: 中文维基百科：王奇 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
            external_identifier: Q26209982
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Sp9cSYoCw2v52DGQWFygh
        subject_person_id: p_g2sQw7oP694pyJYYDNMCo3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kNPfTPHUTjQw8iDNoCSA4V
          claim_id: c_6Sp9cSYoCw2v52DGQWFygh
          source_id: s_viU299AdY68Yj13Q7k8ZGQ
          stance: supports
          locator: Q26209982
          quotation: null
          interpretation_note: null
          source:
            id: s_viU299AdY68Yj13Q7k8ZGQ
            source_type: api_record
            title: 维基数据：王奇（Q26209982）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209982
            external_identifier: Q26209982
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:54.602Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G63EKCfUfL4EBYpR9Avfqg
        subject_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_g2sQw7oP694pyJYYDNMCo3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_833c3HEeP3Ay9xCrJn43Za
          claim_id: c_G63EKCfUfL4EBYpR9Avfqg
          source_id: s_668NHgQQtC1Eo5Picquk9u
          stance: supports
          locator: 条文：之子/之女
          quotation: 王奇{{BD|？||10年|}}，新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟
          interpretation_note: null
          source:
            id: s_668NHgQQtC1Eo5Picquk9u
            source_type: website
            title: 中文维基百科：王奇 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:56.902Z
            metadata_json: null
        - id: cs_2JajeRpF8ajKt7XBPKsnkN
          claim_id: c_G63EKCfUfL4EBYpR9Avfqg
          source_id: s_T4KwGm2pGnGDYEC4M7BafK
          stance: supports
          locator: 条文：之子/之女
          quotation: 王奇，新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟
          interpretation_note: null
          source:
            id: s_T4KwGm2pGnGDYEC4M7BafK
            source_type: website
            title: 中文维基百科：王奇 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:09.161Z
            metadata_json: null
      object_person:
        id: p_FqRJZ4FbxNLE8WDCkdUSH2
        status: active
        display_name: 王商
        merged_into_person_id: null
    - claim:
        id: c_9iEkKGSFFL1yMN68ZscQY6
        subject_person_id: p_L84jn2bobEqW6DPu32c5vg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_g2sQw7oP694pyJYYDNMCo3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dfyq4Sm3a9SN9hzF1ALcAP
          claim_id: c_9iEkKGSFFL1yMN68ZscQY6
          source_id: s_viU299AdY68Yj13Q7k8ZGQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_viU299AdY68Yj13Q7k8ZGQ
            source_type: api_record
            title: 维基数据：王奇（Q26209982）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209982
            external_identifier: Q26209982
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:54.602Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D)
        - id: cs_fBBCZJKYmpWN2SV2RwbvXW
          claim_id: c_9iEkKGSFFL1yMN68ZscQY6
          source_id: s_e3TcvhZK4GEeRDZ93ML51A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e3TcvhZK4GEeRDZ93ML51A
            source_type: api_record
            title: 维基数据：王邑（Q11573232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573232
            external_identifier: Q11573232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%82%91_(%E6%96%B0%E6%9C%9D)
      object_person:
        id: p_L84jn2bobEqW6DPu32c5vg
        status: active
        display_name: 王邑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奇（？—10年），新朝宗室，王莽五叔成都景成侯王商之子，成都侯王况、隆信公王邑的弟弟。 | accepted |
| name.primary | 王奇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqRJZ4FbxNLE8WDCkdUSH2 | 王商 | accepted |
| parents | p_L84jn2bobEqW6DPu32c5vg | 王邑 | accepted |

## 外部来源

- [维基数据：王奇（Q26209982）](https://www.wikidata.org/wiki/Q26209982)
- [维基数据：王邑（Q11573232）](https://www.wikidata.org/wiki/Q11573232)
- [中文维基百科：王奇 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%87_(%E6%96%B0%E6%9C%9D))
