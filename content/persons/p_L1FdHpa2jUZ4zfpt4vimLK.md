---
schema: wang-person/v1
id: p_L1FdHpa2jUZ4zfpt4vimLK
status: active
merged_into: null
display_name: 王制
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1mzk25SfCZAzrkwBpvq1Rt
        subject_person_id: p_L1FdHpa2jUZ4zfpt4vimLK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王制
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjbQB6KBLfTq7Rqqw9LDBQ
          claim_id: c_1mzk25SfCZAzrkwBpvq1Rt
          source_id: s_D4UKA8z772X1TmXyNFzybG
          stance: supports
          locator: CBDB:18661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18661）
          source: &a1
            id: s_D4UKA8z772X1TmXyNFzybG
            source_type: api_record
            title: 中国历代人物传记资料库：王制（CBDB 18661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18661&o=json
            external_identifier: CBDB:18661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZsbrjePzeRQiPhNZAsQcLh
        subject_person_id: p_L1FdHpa2jUZ4zfpt4vimLK
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
        - id: cs_YPqVnwW7WWdNpVaELQESz8
          claim_id: c_ZsbrjePzeRQiPhNZAsQcLh
          source_id: s_D4UKA8z772X1TmXyNFzybG
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
        id: c_ar0PN7gJif0-Nh-91WfZmF
        subject_person_id: p_L1FdHpa2jUZ4zfpt4vimLK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kEX7BaCTJnDcpamj7bx62V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_44zR3f6lQfsoBDNlcNiwFc
          claim_id: c_ar0PN7gJif0-Nh-91WfZmF
          source_id: s_atn5EwK9xW4fiPsno6Hdmy
          stance: supports
          locator: CBDB 双向互证（父 王制 ⇄ 子 王申）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_atn5EwK9xW4fiPsno6Hdmy
            source_type: api_record
            title: 中国历代人物传记资料库：王申（CBDB 18662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18662&o=json
            external_identifier: CBDB:18662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kEX7BaCTJnDcpamj7bx62V
        status: active
        display_name: 王申
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iEtgQdt46KBvr-gyvu6fP9
        subject_person_id: p_L1FdHpa2jUZ4zfpt4vimLK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_miziP4o1dvPJFQh5oBz2tf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nTO_c9WOp_tzhTZUYjpV1
          claim_id: c_iEtgQdt46KBvr-gyvu6fP9
          source_id: s_D4UKA8z772X1TmXyNFzybG
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王葆 ⇄ 曾祖 王制）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_miziP4o1dvPJFQh5oBz2tf
        status: active
        display_name: 王葆
        merged_into_person_id: null
  other: []
---

# 王制

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王制 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kEX7BaCTJnDcpamj7bx62V | 王申 | accepted |
| descendants | p_miziP4o1dvPJFQh5oBz2tf | 王葆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王申（CBDB 18662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18662&o=json)
- [中国历代人物传记资料库：王制（CBDB 18661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18661&o=json)
