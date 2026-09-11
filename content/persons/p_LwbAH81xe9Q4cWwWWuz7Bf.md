---
schema: wang-person/v1
id: p_LwbAH81xe9Q4cWwWWuz7Bf
status: active
merged_into: null
display_name: 王友
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZ3ttEZtP2En57ohQz9BZN
        subject_person_id: p_LwbAH81xe9Q4cWwWWuz7Bf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBkgJq37UdxCEE3kRaGETR
          claim_id: c_sZ3ttEZtP2En57ohQz9BZN
          source_id: s_sP5TaJvnbzxxynSKpmHJgm
          stance: supports
          locator: CBDB:282422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282422）
          source: &a1
            id: s_sP5TaJvnbzxxynSKpmHJgm
            source_type: api_record
            title: 中国历代人物传记资料库：王友（CBDB 282422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282422&o=json
            external_identifier: CBDB:282422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h2aA2W49YkLmn2vjtBu9NH
        subject_person_id: p_LwbAH81xe9Q4cWwWWuz7Bf
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
        - id: cs_Ds2XV66y6xqtZNURK6Kr3N
          claim_id: c_h2aA2W49YkLmn2vjtBu9NH
          source_id: s_sP5TaJvnbzxxynSKpmHJgm
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
        id: c_JTLZnNlSgSCcsFA5MYMhp_
        subject_person_id: p_LwbAH81xe9Q4cWwWWuz7Bf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gAAfv7JQBPfPSFmCq4BBah
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKkXbX45s5Kc_lHwP9MTTZ
          claim_id: c_JTLZnNlSgSCcsFA5MYMhp_
          source_id: s_sP5TaJvnbzxxynSKpmHJgm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gAAfv7JQBPfPSFmCq4BBah
        status: active
        display_name: 王天民
        merged_into_person_id: null
  other: []
---

# 王友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gAAfv7JQBPfPSFmCq4BBah | 王天民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友（CBDB 282422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282422&o=json)
