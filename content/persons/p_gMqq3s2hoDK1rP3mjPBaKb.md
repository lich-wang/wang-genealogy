---
schema: wang-person/v1
id: p_gMqq3s2hoDK1rP3mjPBaKb
status: active
merged_into: null
display_name: 王覲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ljmu67N88JdRvo1jzxepNx
        subject_person_id: p_gMqq3s2hoDK1rP3mjPBaKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L62zs19QHP1fcrAigKYRHm
          claim_id: c_Ljmu67N88JdRvo1jzxepNx
          source_id: s_ZNHoeLAn3hC7gFV1qpPJAu
          stance: supports
          locator: CBDB:26826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26826）
          source: &a1
            id: s_ZNHoeLAn3hC7gFV1qpPJAu
            source_type: api_record
            title: 中国历代人物传记资料库：王覲（CBDB 26826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26826&o=json
            external_identifier: CBDB:26826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ibqk6BTH1FiFkQZSCK6S6x
        subject_person_id: p_gMqq3s2hoDK1rP3mjPBaKb
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
        - id: cs_gYHTC393KdYpgyGj6vaFdo
          claim_id: c_ibqk6BTH1FiFkQZSCK6S6x
          source_id: s_ZNHoeLAn3hC7gFV1qpPJAu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UTOGIT21OyYPyW6vBNvcRK
        subject_person_id: p_hxF78b2rz2LFiMtmEUFnCz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gMqq3s2hoDK1rP3mjPBaKb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GhkFNRRk3TQaZgns9wHW0
          claim_id: c_UTOGIT21OyYPyW6vBNvcRK
          source_id: s_ZNHoeLAn3hC7gFV1qpPJAu
          stance: supports
          locator: CBDB 双向互证（父 王復 ⇄ 子 王覲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_hxF78b2rz2LFiMtmEUFnCz
        status: active
        display_name: 王復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王覲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覲 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hxF78b2rz2LFiMtmEUFnCz | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王覲（CBDB 26826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26826&o=json)
