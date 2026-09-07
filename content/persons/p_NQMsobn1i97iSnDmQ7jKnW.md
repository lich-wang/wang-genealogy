---
schema: wang-person/v1
id: p_NQMsobn1i97iSnDmQ7jKnW
status: active
merged_into: null
display_name: 王智
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WThCvhpz7q3RlX3jQyUeIn
        subject_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智（?—?），琅邪臨沂人，南北朝刘宋政治人物。王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4WTrbzzZJbEIi8I51FEn7E
          claim_id: c_WThCvhpz7q3RlX3jQyUeIn
          source_id: s_i70VF2fbjmji0Yarr81h7-
          stance: supports
          locator: 导言
          quotation: 王智（?—?），琅邪臨沂人，南北朝刘宋政治人物。王智是東晉丞相王
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_i70VF2fbjmji0Yarr81h7-
            source_type: website
            title: 中文维基百科：王智 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
            external_identifier: Q94998004
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JVJHj2kbG82ZbqeqX6pMsN
        subject_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cq56VcaTzywRkS2RxQCGZs
          claim_id: c_JVJHj2kbG82ZbqeqX6pMsN
          source_id: s_98xU1J1Tc3r3THs5RBjF8P
          stance: supports
          locator: Q94998004
          quotation: null
          interpretation_note: null
          source:
            id: s_98xU1J1Tc3r3THs5RBjF8P
            source_type: api_record
            title: 维基数据：王智（Q94998004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998004
            external_identifier: Q94998004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2tiKqWBu7xpsD4fDAjH8hP
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uL713PSCE7VcEsUwNyR7Au
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MhrEW81MhUpnMoCHrMvtpH
            source_type: api_record
            title: 维基数据：王穆（Q16906171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906171
            external_identifier: Q16906171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:59.588Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86
        - id: cs_7RwrE8rP1etHBDyBdwVc8W
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_98xU1J1Tc3r3THs5RBjF8P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_98xU1J1Tc3r3THs5RBjF8P
            source_type: api_record
            title: 维基数据：王智（Q94998004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998004
            external_identifier: Q94998004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
        - id: cs_JEqf8hCATT79qSRNkAWn7t
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_XFJLFL4hF6L1oFiYiPAdvf
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。
          interpretation_note: null
          source:
            id: s_XFJLFL4hF6L1oFiYiPAdvf
            source_type: website
            title: 中文维基百科：王智 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:15.366Z
            metadata_json: null
        - id: cs_JCxxD6MyMR2JPXULQv5CBF
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王智
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_KfemEFebrTE78s7A9fv4YA
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王智
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_kQZ5bmU8mbAHk7K3zBAi1v
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children:
    - claim:
        id: c_Lk7ZotuBmKwrhpCx7fJDKD
        subject_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        claim_kind: relationship
        predicate: kinship.adoptive_parent_of
        object_person_id: p_e64GBPBpS2DkkgzPQzfX54
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_64B6zs7uAUBY8imbxbq6Qw
          claim_id: c_Lk7ZotuBmKwrhpCx7fJDKD
          source_id: s_L4ASBKhQFtxhHjHQ1KfTaX
          stance: supports
          locator: 条文：父
          quotation: 王景文是東晉丞相王導的玄孫，父親是王僧朗，但過繼了給伯父王智
          interpretation_note: null
          source:
            id: s_L4ASBKhQFtxhHjHQ1KfTaX
            source_type: website
            title: 中文维基百科：王景文
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:55.994Z
            metadata_json: null
        - id: cs_V2VXQG4vDohX6y31D7yLmz
          claim_id: c_Lk7ZotuBmKwrhpCx7fJDKD
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 王智 → 王景文
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_ojLV9kERUdULkSewpAMQht
          claim_id: c_Lk7ZotuBmKwrhpCx7fJDKD
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王智 → 王景文
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
      object_person:
        id: p_e64GBPBpS2DkkgzPQzfX54
        status: active
        display_name: 王彧
        merged_into_person_id: null
  spouses: []
  ancestors:
    - claim:
        id: c_vF7326Qoi1YVKQi1NZ7yxy
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pLnmT7L3bV5JCgXU4SD8KC
          claim_id: c_vF7326Qoi1YVKQi1NZ7yxy
          source_id: s_XFJLFL4hF6L1oFiYiPAdvf
          stance: supports
          locator: 条文：条文识读（曾孫）（3世）
          quotation: 王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。
          interpretation_note: null
          source:
            id: s_XFJLFL4hF6L1oFiYiPAdvf
            source_type: website
            title: 中文维基百科：王智 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:15.366Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
    - claim:
        id: c_AvrPDToKyNtjWNt91p8VMD
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nk3Uu4qJG5TXi8Kt3D31CD
          claim_id: c_AvrPDToKyNtjWNt91p8VMD
          source_id: s_XFJLFL4hF6L1oFiYiPAdvf
          stance: supports
          locator: 条文：条文识读（孙）（3世）
          quotation: 王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。
          interpretation_note: null
          source:
            id: s_XFJLFL4hF6L1oFiYiPAdvf
            source_type: website
            title: 中文维基百科：王智 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:15.366Z
            metadata_json: null
      object_person:
        id: p_T4veML4NqsRATCKLcYV7WC
        status: active
        display_name: 王劭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王智（?—?），琅邪臨沂人，南北朝刘宋政治人物。王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。 | accepted |
| name.primary | 王智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kQZ5bmU8mbAHk7K3zBAi1v | 王穆 | accepted |
| adoptive_children | p_e64GBPBpS2DkkgzPQzfX54 | 王彧 | accepted |
| ancestors | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| ancestors | p_T4veML4NqsRATCKLcYV7WC | 王劭 | accepted |

## 外部来源

- [维基数据：王穆（Q16906171）](https://www.wikidata.org/wiki/Q16906171)
- [维基数据：王智（Q94998004）](https://www.wikidata.org/wiki/Q94998004)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王景文](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87)
- [中文维基百科：王智 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D))
