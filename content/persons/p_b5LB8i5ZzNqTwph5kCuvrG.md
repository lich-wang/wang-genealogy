---
schema: wang-person/v1
id: p_b5LB8i5ZzNqTwph5kCuvrG
status: active
merged_into: null
display_name: 王锡爵
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5OWCBoDToeVA5VL-wXXwrh
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡爵，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_V1JZdDRrCIcsVfj7JRdSUz
          claim_id: c_5OWCBoDToeVA5VL-wXXwrh
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kP7ikcbUwkpSTP5R31cMc3
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡爵
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uem1xaoQzK6Ck3TgZDS2hf
          claim_id: c_kP7ikcbUwkpSTP5R31cMc3
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: Q7967692
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1KDC4BcQxGtuxscKEMpSP2
        subject_person_id: p_DxwJM636W5vtKFREGSDF23
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6MdoufrVascwq2P1Bv1QfD
          claim_id: c_1KDC4BcQxGtuxscKEMpSP2
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 曾祖王侁。祖父王湧。父王夢祥，监生。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_DxwJM636W5vtKFREGSDF23
        status: active
        display_name: 王夢祥
        merged_into_person_id: null
  children:
    - claim:
        id: c_cfdLE6n3zNpfutjJhSwpyy
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nNCdrm1mnJ77Np28ADWXHR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WE4e3CjCsJ67Gb5vKLd95B
          claim_id: c_cfdLE6n3zNpfutjJhSwpyy
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 娶朱氏。有子王衡，王錫爵為避浮議。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_nNCdrm1mnJ77Np28ADWXHR
        status: active
        display_name: 王衡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dzo4atsDFhb2xQNFhAfyqH
        subject_person_id: p_BVxtn8sqY7KpZnCL3GT5E5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_McrkhQDKovvqB8NKRB3W3t
          claim_id: c_Dzo4atsDFhb2xQNFhAfyqH
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶朱氏。有子王衡，王錫爵為避浮議。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_BVxtn8sqY7KpZnCL3GT5E5
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_wMgwu7UFBDLc1317CVKSby
        subject_person_id: p_cGkviQ74mqPnwC4eLmu3AD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6VdmYejvsBLDy9Zj6Tys3k
          claim_id: c_wMgwu7UFBDLc1317CVKSby
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王侁。祖父王湧。父王夢祥，监生。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_cGkviQ74mqPnwC4eLmu3AD
        status: active
        display_name: 王侁
        merged_into_person_id: null
    - claim:
        id: c_BaKFoXk9Cy4NwP4KvVxL96
        subject_person_id: p_8d9ANo8YWX5qcCvtaa8P9y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6uASh287diU9JraEvTDMXp
          claim_id: c_BaKFoXk9Cy4NwP4KvVxL96
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（祖父）（3世）
          quotation: 曾祖王侁。祖父王湧。父王夢祥，监生。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_8d9ANo8YWX5qcCvtaa8P9y
        status: active
        display_name: 王湧
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_J4YrqKpNkxBqaBWHEs6fyK
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Xs7SSNKR6whA118xZvjxN2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_268hPAFoir8RRk9wNrjGWL
          claim_id: c_J4YrqKpNkxBqaBWHEs6fyK
          source_id: s_JrZ38wtSfjchSjwE411t3z
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 祖父王锡爵爲榜眼及第，在万历朝曾任内阁首辅。
          interpretation_note: null
          source:
            id: s_JrZ38wtSfjchSjwE411t3z
            source_type: website
            title: 中文维基百科：王时敏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:57:09.351Z
            metadata_json: null
        - id: cs_sSAWGdBoKuwziH4J7U7uR4
          claim_id: c_J4YrqKpNkxBqaBWHEs6fyK
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（孫）（3世）
          quotation: 孫王時敏，工書畫。曾孫王掞。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_Xs7SSNKR6whA118xZvjxN2
        status: active
        display_name: 王時敏
        merged_into_person_id: null
    - claim:
        id: c_6SUNJ1JNpYRemDvHghoabP
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LjUBKKWB8y1kUFy2sjZaD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2NqqFdFo3VshCHjR2dT3e
          claim_id: c_6SUNJ1JNpYRemDvHghoabP
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（曾孫）（3世）
          quotation: 孫王時敏，工書畫。曾孫王掞，清康熙年間官至大學士。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_2LjUBKKWB8y1kUFy2sjZaD
        status: active
        display_name: 王掞
        merged_into_person_id: null
  other: []
---

# 王锡爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王锡爵，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王锡爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DxwJM636W5vtKFREGSDF23 | 王夢祥 | accepted |
| children | p_nNCdrm1mnJ77Np28ADWXHR | 王衡 | accepted |
| spouses | p_BVxtn8sqY7KpZnCL3GT5E5 | 朱氏 | accepted |
| ancestors | p_cGkviQ74mqPnwC4eLmu3AD | 王侁 | accepted |
| ancestors | p_8d9ANo8YWX5qcCvtaa8P9y | 王湧 | accepted |
| descendants | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |
| descendants | p_2LjUBKKWB8y1kUFy2sjZaD | 王掞 | accepted |

## 外部来源

- [中文维基百科：王时敏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F)
- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
