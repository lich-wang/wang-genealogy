---
schema: wang-person/v1
id: p_tuQz8K1QJhTDMtht3PXNax
status: active
merged_into: null
display_name: 王浹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGP8mC7QbsiqdDKXWsAgEB
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9D17LsDyTxVXbr52ZQFxu8
          claim_id: c_vGP8mC7QbsiqdDKXWsAgEB
          source_id: s_xWo8bK1WmAhKEr5zJ99FvF
          stance: supports
          locator: CBDB:23648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23648）
          source: &a1
            id: s_xWo8bK1WmAhKEr5zJ99FvF
            source_type: api_record
            title: 中国历代人物传记资料库：王浹（CBDB 23648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23648&o=json
            external_identifier: CBDB:23648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gK1TVj3Sv3bXCxa63ZZd87
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
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
        - id: cs_LJxx6KmStzDAHe2pbbzhqc
          claim_id: c_gK1TVj3Sv3bXCxa63ZZd87
          source_id: s_xWo8bK1WmAhKEr5zJ99FvF
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
  ancestors: []
  descendants:
    - claim:
        id: c_rHwtyaBbC4_12dI2Xget7M
        subject_person_id: p_tuQz8K1QJhTDMtht3PXNax
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4URDBVNgueUm0xB0OpELnz
          claim_id: c_rHwtyaBbC4_12dI2Xget7M
          source_id: s_ctSqJWMJMSBisWmAAWSuL9
          stance: supports
          locator: 紹興十八年同年小錄，157：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ctSqJWMJMSBisWmAAWSuL9
            source_type: api_record
            title: 中国历代人物传记资料库：王允功（CBDB 23652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json
            external_identifier: CBDB:23652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2RzrzUqsutK3yv9cd9dwXj
        status: active
        display_name: 王允功
        merged_into_person_id: null
  other: []
---

# 王浹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2RzrzUqsutK3yv9cd9dwXj | 王允功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浹（CBDB 23648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23648&o=json)
- [中国历代人物传记资料库：王允功（CBDB 23652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23652&o=json)
