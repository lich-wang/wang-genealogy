---
schema: wang-person/v1
id: p_rZY47tCzATgSjS4iyRApEg
status: active
merged_into: null
display_name: 王岐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZnGkVmMbZ3ZeJBTx9sJkya
        subject_person_id: p_rZY47tCzATgSjS4iyRApEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EadJDuFyxwmMnMA5FNVU5i
          claim_id: c_ZnGkVmMbZ3ZeJBTx9sJkya
          source_id: s_L6xMeNcqMpN5659bk272KT
          stance: supports
          locator: CBDB:27695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27695）
          source: &a1
            id: s_L6xMeNcqMpN5659bk272KT
            source_type: api_record
            title: 中国历代人物传记资料库：王岐（CBDB 27695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27695&o=json
            external_identifier: CBDB:27695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nZtkUbgvkmfDh8VYLW2aRS
        subject_person_id: p_rZY47tCzATgSjS4iyRApEg
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
        - id: cs_c8KkznTmALwvh6ET8vNQBk
          claim_id: c_nZtkUbgvkmfDh8VYLW2aRS
          source_id: s_L6xMeNcqMpN5659bk272KT
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
        id: c_NKrKH88GY76_tgouruTMzR
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rZY47tCzATgSjS4iyRApEg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kDkuEc07uAzC3ZI9Ie_C8
          claim_id: c_NKrKH88GY76_tgouruTMzR
          source_id: s_L6xMeNcqMpN5659bk272KT
          stance: supports
          locator: CBDB 双向互证（曾祖 王惟熙 ⇄ 曾孫; 重孫 王岐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_JEp5M3BLJajMXRjvLCUuVy
        status: active
        display_name: 王惟熙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王岐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JEp5M3BLJajMXRjvLCUuVy | 王惟熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岐（CBDB 27695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27695&o=json)
