---
schema: wang-person/v1
id: p_epomT3DrAzh2aXobBoSETt
status: active
merged_into: null
display_name: 王居政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9drKJmYSDGNr7DpP6o8ZAU
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNGyNFo732FMYyKB4tNACX
          claim_id: c_9drKJmYSDGNr7DpP6o8ZAU
          source_id: s_yezgmY497dtJs4dTK7k1MS
          stance: supports
          locator: CBDB:22042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22042）
          source: &a1
            id: s_yezgmY497dtJs4dTK7k1MS
            source_type: api_record
            title: 中国历代人物传记资料库：王居政（CBDB 22042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22042&o=json
            external_identifier: CBDB:22042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gvqJxqBFPeumG8j3DLHvwH
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_33q6jNbNyc9Lqq1FMVr7JX
          claim_id: c_gvqJxqBFPeumG8j3DLHvwH
          source_id: s_yezgmY497dtJs4dTK7k1MS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_h_i9qp6fg_CFYJANIp_H25
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ckQkehAjm2rn3hFgW1SLDn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FunSZmGm4a9-YSlm9Ow9Kd
          claim_id: c_h_i9qp6fg_CFYJANIp_H25
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
          stance: supports
          locator: CBDB 双向互证（父 王居政 ⇄ 子 王平）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Sq9mToAc9R7an6v6Qu7tjp
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 1856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json
            external_identifier: CBDB:1856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ckQkehAjm2rn3hFgW1SLDn
        status: active
        display_name: 王平
        merged_into_person_id: null
    - claim:
        id: c_AuLdY9yPxc1fHnI0zir3Am
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxDZwJTZQuf8ut2s6DCCCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1peApUA8YBF4WASC3rfdkl
          claim_id: c_AuLdY9yPxc1fHnI0zir3Am
          source_id: s_GcRaQdEKpzsrBmGZERADjX
          stance: supports
          locator: CBDB 双向互证（父 王居政 ⇄ 子 王弁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GcRaQdEKpzsrBmGZERADjX
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 22203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22203&o=json
            external_identifier: CBDB:22203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CxDZwJTZQuf8ut2s6DCCCY
        status: active
        display_name: 王弁
        merged_into_person_id: null
    - claim:
        id: c_7aUycwVm-o5p6Z8R4hDbtp
        subject_person_id: p_epomT3DrAzh2aXobBoSETt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SDq2AJhSXYcpNKdASsF1Kw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MevDHzE_--GXvJ9WwAjABo
          claim_id: c_7aUycwVm-o5p6Z8R4hDbtp
          source_id: s_yezgmY497dtJs4dTK7k1MS
          stance: supports
          locator: CBDB 双向互证（子 王甲 ⇄ 父 王居政）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_SDq2AJhSXYcpNKdASsF1Kw
        status: active
        display_name: 王甲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王居政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居政 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ckQkehAjm2rn3hFgW1SLDn | 王平 | accepted |
| children | p_CxDZwJTZQuf8ut2s6DCCCY | 王弁 | accepted |
| children | p_SDq2AJhSXYcpNKdASsF1Kw | 王甲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 22203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22203&o=json)
- [中国历代人物传记资料库：王居政（CBDB 22042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22042&o=json)
- [中国历代人物传记资料库：王平（CBDB 1856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json)
