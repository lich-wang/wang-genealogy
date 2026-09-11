---
schema: wang-person/v1
id: p_8GmE2mtKXF9gY2iwgPCfjf
status: active
merged_into: null
display_name: 王俞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQFFN6uQa1dHxxrzEBxaCU
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AFzQtRoJFNdTb23y8As454
          claim_id: c_KQFFN6uQa1dHxxrzEBxaCU
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: CBDB:338130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338130）
          source: &a1
            id: s_6uwC9rto3h6f8eErDmJUR6
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 338130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json
            external_identifier: CBDB:338130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uj1inpFgc6jGDH19VYbCiq
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
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
        - id: cs_EDGm9kkY3xxKHdDTs4TLAC
          claim_id: c_uj1inpFgc6jGDH19VYbCiq
          source_id: s_6uwC9rto3h6f8eErDmJUR6
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
        id: c_bkSudoMatNQFVdNaOYPkPi
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QaWtxoBjlmQug3rMirVymI
          claim_id: c_bkSudoMatNQFVdNaOYPkPi
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: 敬亭文藳:九卷：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xHk7N3AX4R3UJV5CDubwrX
        status: active
        display_name: 王澧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yM-8T_8oQ17WfwxYAUtxs_
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T8xHGLm7WH9NkAatFpz26S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQNfFCLoSPuAgg1CAgwhn1
          claim_id: c_yM-8T_8oQ17WfwxYAUtxs_
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: CBDB 双向互证（孫 王世傑 ⇄ 祖父 王俞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_T8xHGLm7WH9NkAatFpz26S
        status: active
        display_name: 王世傑
        merged_into_person_id: null
    - claim:
        id: c_O4USDDRVveuZWvCe9ndxDp
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHru16jGHKcfWy9wEAhHfF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lG3f-lntkafN3zvjvo04-
          claim_id: c_O4USDDRVveuZWvCe9ndxDp
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王之麟 ⇄ 曾祖 王俞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_DHru16jGHKcfWy9wEAhHfF
        status: active
        display_name: 王之麟
        merged_into_person_id: null
  other: []
---

# 王俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xHk7N3AX4R3UJV5CDubwrX | 王澧 | accepted |
| descendants | p_T8xHGLm7WH9NkAatFpz26S | 王世傑 | accepted |
| descendants | p_DHru16jGHKcfWy9wEAhHfF | 王之麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俞（CBDB 338130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json)
