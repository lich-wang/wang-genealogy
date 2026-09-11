---
schema: wang-person/v1
id: p_HPbqm6VJ9TFK5Zur8BEF7g
status: active
merged_into: null
display_name: 王欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EY4FmT9KpCDh1R8gsvd2Ce
        subject_person_id: p_HPbqm6VJ9TFK5Zur8BEF7g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iCZoF5UDvLhrLY8vrQxegh
          claim_id: c_EY4FmT9KpCDh1R8gsvd2Ce
          source_id: s_36LxzTfHdEz1tdpdFQ5Yj9
          stance: supports
          locator: CBDB:260163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260163）
          source: &a1
            id: s_36LxzTfHdEz1tdpdFQ5Yj9
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 260163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260163&o=json
            external_identifier: CBDB:260163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_18f8xV7FedAM7nE55D6xqP
        subject_person_id: p_HPbqm6VJ9TFK5Zur8BEF7g
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
        - id: cs_Wgp3YAKEQp9jvq7mv71a1R
          claim_id: c_18f8xV7FedAM7nE55D6xqP
          source_id: s_36LxzTfHdEz1tdpdFQ5Yj9
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
        id: c_z-BT4JUgL0S0e981WP9TuD
        subject_person_id: p_HPbqm6VJ9TFK5Zur8BEF7g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3L7NAaWbKh2lXZ9LIpFKN
          claim_id: c_z-BT4JUgL0S0e981WP9TuD
          source_id: s_36LxzTfHdEz1tdpdFQ5Yj9
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y8c9Xt6HZtEueH7Ywuv2af
        status: active
        display_name: 王啟
        merged_into_person_id: null
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Y8c9Xt6HZtEueH7Ywuv2af | 王啟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 260163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260163&o=json)
