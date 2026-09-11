---
schema: wang-person/v1
id: p_7HBoToLM8roSc5SmSpWW1N
status: active
merged_into: null
display_name: 王積
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2w7r8QMmJeojixKGhGep5b
        subject_person_id: p_7HBoToLM8roSc5SmSpWW1N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LWSB7ryX6noJLq69tJaJX4
          claim_id: c_2w7r8QMmJeojixKGhGep5b
          source_id: s_PXutwnS1Y33rAnEMkPXJKm
          stance: supports
          locator: CBDB:437555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437555）
          source: &a1
            id: s_PXutwnS1Y33rAnEMkPXJKm
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 437555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437555&o=json
            external_identifier: CBDB:437555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M2PDTC8d3PuyCaMywZydDw
        subject_person_id: p_7HBoToLM8roSc5SmSpWW1N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vw5RHk2W7QcoLoPHb321na
          claim_id: c_M2PDTC8d3PuyCaMywZydDw
          source_id: s_PXutwnS1Y33rAnEMkPXJKm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bt3IdK359RmDlS1i9Aopze
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7HBoToLM8roSc5SmSpWW1N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jGk6BO1BnpS10DwUJQOz-
          claim_id: c_bt3IdK359RmDlS1i9Aopze
          source_id: s_PXutwnS1Y33rAnEMkPXJKm
          stance: supports
          locator: CBDB 双向互证（祖父 王文彪 ⇄ 孫 王積）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王積（CBDB 437555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437555&o=json)
