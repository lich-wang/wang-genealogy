---
schema: wang-person/v1
id: p_zX3iZuoe53FuMaMd8wH2WY
status: active
merged_into: null
display_name: 王讜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PAwjMcwg7n6HCqKRVMiGBq
        subject_person_id: p_zX3iZuoe53FuMaMd8wH2WY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2P1u7z6FvniiFnSKW5Bdxe
          claim_id: c_PAwjMcwg7n6HCqKRVMiGBq
          source_id: s_BqygPZhGhbG1i66s8Xw36n
          stance: supports
          locator: CBDB:1889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1889）
          source: &a1
            id: s_BqygPZhGhbG1i66s8Xw36n
            source_type: api_record
            title: 中国历代人物传记资料库：王讜（CBDB 1889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1889&o=json
            external_identifier: CBDB:1889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KrrGHVNsLsaD6AV4N2kJ3M
        subject_person_id: p_zX3iZuoe53FuMaMd8wH2WY
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
        - id: cs_peNmrXQ1E5jQWNEgaPHSvM
          claim_id: c_KrrGHVNsLsaD6AV4N2kJ3M
          source_id: s_BqygPZhGhbG1i66s8Xw36n
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
        id: c_3ev0Q-zrgW5Su1xitHZgZA
        subject_person_id: p_TG677A2uqsLQn3jRYXYFJs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zX3iZuoe53FuMaMd8wH2WY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qsb1RQNvCD56UeEIJzh3N6
          claim_id: c_3ev0Q-zrgW5Su1xitHZgZA
          source_id: s_BqygPZhGhbG1i66s8Xw36n
          stance: supports
          locator: CBDB 双向互证（父 王彭 ⇄ 子 王讜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TG677A2uqsLQn3jRYXYFJs
        status: active
        display_name: 王彭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王讜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TG677A2uqsLQn3jRYXYFJs | 王彭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讜（CBDB 1889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1889&o=json)
