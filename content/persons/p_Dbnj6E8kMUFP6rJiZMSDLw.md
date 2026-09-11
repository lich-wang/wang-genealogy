---
schema: wang-person/v1
id: p_Dbnj6E8kMUFP6rJiZMSDLw
status: active
merged_into: null
display_name: 王說
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pKkUng6s2pQj3WUT5XQPS
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dr8JbiDomCXczh781AUkHP
          claim_id: c_2pKkUng6s2pQj3WUT5XQPS
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB:386572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386572）
          source: &a1
            id: s_L4DnLA3g6o2C8iwvdjkTk9
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 386572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json
            external_identifier: CBDB:386572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mH7jaAT3w6cZ5JBH6MDg48
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說，宋人物。籍贯義烏，曾任宣奉大夫。（中国历代人物传记资料库 CBDB 386572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VU4L0eD0HJQE_USHjn71KM
          claim_id: c_mH7jaAT3w6cZ5JBH6MDg48
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB:386572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cyL0A0qS-DtrnIvejBosks
        subject_person_id: p_b8z3AshEUaWSDVZdUAZQmw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P85NrTgtjtEcZErmGNJk_z
          claim_id: c_cyL0A0qS-DtrnIvejBosks
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（父 王從用 ⇄ 子 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_b8z3AshEUaWSDVZdUAZQmw
        status: active
        display_name: 王從用
        merged_into_person_id: null
  children:
    - claim:
        id: c_-q_0oKWn1u2PLdyCjBAxmw
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LhmHMoaCfk1_g-BX-sdLI
          claim_id: c_-q_0oKWn1u2PLdyCjBAxmw
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（子 王永年 ⇄ 父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
    - claim:
        id: c_c6WTCHXzREXEP15MBv-Ywk
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WrdABvZJN9cX74q6iDQUDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v13jeSzwl_wlsEzxNFfjMz
          claim_id: c_c6WTCHXzREXEP15MBv-Ywk
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（子 王喬年 ⇄ 父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WrdABvZJN9cX74q6iDQUDp
        status: active
        display_name: 王喬年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_VEci3Ruz6pZATnSaxP1Iv9
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_spLcNFvqSKmQAtJPr23JgF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlVMwyF1tez_wB35l-hLgs
          claim_id: c_VEci3Ruz6pZATnSaxP1Iv9
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（孫 王鑄 ⇄ 祖父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_spLcNFvqSKmQAtJPr23JgF
        status: active
        display_name: 王鑄
        merged_into_person_id: null
    - claim:
        id: c_6TstPQI4OICmR9KBSvofqN
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOO3hxyltSL_3UUdOMzHNC
          claim_id: c_6TstPQI4OICmR9KBSvofqN
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（孫 王儔 ⇄ 祖父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xD51Nz4rSAkq5zdMahqJPm
        status: active
        display_name: 王儔
        merged_into_person_id: null
  other: []
---

# 王說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王說 | accepted |
| bio.summary | 王說，宋人物。籍贯義烏，曾任宣奉大夫。（中国历代人物传记资料库 CBDB 386572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b8z3AshEUaWSDVZdUAZQmw | 王從用 | accepted |
| children | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |
| children | p_WrdABvZJN9cX74q6iDQUDp | 王喬年 | accepted |
| descendants | p_spLcNFvqSKmQAtJPr23JgF | 王鑄 | accepted |
| descendants | p_xD51Nz4rSAkq5zdMahqJPm | 王儔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王說（CBDB 386572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json)
