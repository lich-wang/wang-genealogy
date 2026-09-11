---
schema: wang-person/v1
id: p_2RAVEnAJJ1R4WKFW4exEnp
status: active
merged_into: null
display_name: 王輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NscNM9W2Hj6qPzULV5FQNg
        subject_person_id: p_2RAVEnAJJ1R4WKFW4exEnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBYr7nh8uvSmKZs6Jey5Bi
          claim_id: c_NscNM9W2Hj6qPzULV5FQNg
          source_id: s_8DKTNVdm4NfmrhqtqtCX6K
          stance: supports
          locator: CBDB:23949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23949）
          source: &a1
            id: s_8DKTNVdm4NfmrhqtqtCX6K
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 23949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23949&o=json
            external_identifier: CBDB:23949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jp73Fj2RLvgVApSgD1x84Q
        subject_person_id: p_2RAVEnAJJ1R4WKFW4exEnp
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
        - id: cs_VpAyL38MztXzpVYXWsTkuV
          claim_id: c_jp73Fj2RLvgVApSgD1x84Q
          source_id: s_8DKTNVdm4NfmrhqtqtCX6K
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
        id: c_JkwNYYTu-ySYk0TzCmS_z1
        subject_person_id: p_2RAVEnAJJ1R4WKFW4exEnp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56F6KaXJUP5n34EkDM5DQ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbD42vQ-NGHyPhtAbrOugH
          claim_id: c_JkwNYYTu-ySYk0TzCmS_z1
          source_id: s_8DKTNVdm4NfmrhqtqtCX6K
          stance: supports
          locator: CBDB 双向互证（子 王戩 ⇄ 父 王輔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_56F6KaXJUP5n34EkDM5DQ6
        status: active
        display_name: 王戩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_56F6KaXJUP5n34EkDM5DQ6 | 王戩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 23949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23949&o=json)
