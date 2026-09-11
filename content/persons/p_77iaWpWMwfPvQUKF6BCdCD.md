---
schema: wang-person/v1
id: p_77iaWpWMwfPvQUKF6BCdCD
status: active
merged_into: null
display_name: 王魯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdHRUJC5aUHNrPWELMC2wZ
        subject_person_id: p_77iaWpWMwfPvQUKF6BCdCD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UpjyfGFmejKgzBokCQD4WX
          claim_id: c_XdHRUJC5aUHNrPWELMC2wZ
          source_id: s_qWX5r24qndG9FnWgqMNgTP
          stance: supports
          locator: CBDB:235967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235967）
          source: &a1
            id: s_qWX5r24qndG9FnWgqMNgTP
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 235967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235967&o=json
            external_identifier: CBDB:235967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3TgbD6J5N1KKR7Gq1C876
        subject_person_id: p_77iaWpWMwfPvQUKF6BCdCD
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
        - id: cs_6x5hchoCKJHcPC9Y1u2n8C
          claim_id: c_N3TgbD6J5N1KKR7Gq1C876
          source_id: s_qWX5r24qndG9FnWgqMNgTP
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
        id: c_inLu7lkYASlr799dEqp8ez
        subject_person_id: p_77iaWpWMwfPvQUKF6BCdCD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5V5q53MBXYmlbqn8sTAqK
          claim_id: c_inLu7lkYASlr799dEqp8ez
          source_id: s_qWX5r24qndG9FnWgqMNgTP
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王魯（CBDB 235967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235967&o=json)
