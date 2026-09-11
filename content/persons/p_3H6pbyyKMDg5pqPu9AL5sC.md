---
schema: wang-person/v1
id: p_3H6pbyyKMDg5pqPu9AL5sC
status: active
merged_into: null
display_name: 王允中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3vRcSgdyCTPcPVRzGg8Q1
        subject_person_id: p_3H6pbyyKMDg5pqPu9AL5sC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxaknQ489Un19LxrF7aT3y
          claim_id: c_K3vRcSgdyCTPcPVRzGg8Q1
          source_id: s_B8XNZfG4p9Utb4GmN1ZfKn
          stance: supports
          locator: CBDB:21990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21990）
          source: &a1
            id: s_B8XNZfG4p9Utb4GmN1ZfKn
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 21990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21990&o=json
            external_identifier: CBDB:21990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EmyafBmpFpB4kPwNKaGPvY
        subject_person_id: p_3H6pbyyKMDg5pqPu9AL5sC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中，宋人物。籍贯穀城。（中国历代人物传记资料库 CBDB 21990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2_NsMwnKtmlM_hbnyuTgBK
          claim_id: c_EmyafBmpFpB4kPwNKaGPvY
          source_id: s_B8XNZfG4p9Utb4GmN1ZfKn
          stance: supports
          locator: CBDB:21990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vXrVIfoJ8PcZQ5UdjUwfRq
        subject_person_id: p_BChCuFHjEoLkJji1RG47tG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3H6pbyyKMDg5pqPu9AL5sC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ssTNaC1r9RLBiB_n5RASI
          claim_id: c_vXrVIfoJ8PcZQ5UdjUwfRq
          source_id: s_B8XNZfG4p9Utb4GmN1ZfKn
          stance: supports
          locator: CBDB 双向互证（父 王崇遇 ⇄ 子 王允中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_BChCuFHjEoLkJji1RG47tG
        status: active
        display_name: 王崇遇
        merged_into_person_id: null
  children:
    - claim:
        id: c_EiH2ipI0p0koitZIhYb8fA
        subject_person_id: p_3H6pbyyKMDg5pqPu9AL5sC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_strJmPSamv7xYKXXKW9MTr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cszxc_0Z2sg8_UPkObIK_J
          claim_id: c_EiH2ipI0p0koitZIhYb8fA
          source_id: s_B8XNZfG4p9Utb4GmN1ZfKn
          stance: supports
          locator: CBDB 双向互证（子 王遷 ⇄ 父 王允中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_strJmPSamv7xYKXXKW9MTr
        status: active
        display_name: 王迁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | 王允中，宋人物。籍贯穀城。（中国历代人物传记资料库 CBDB 21990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BChCuFHjEoLkJji1RG47tG | 王崇遇 | accepted |
| children | p_strJmPSamv7xYKXXKW9MTr | 王迁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 21990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21990&o=json)
