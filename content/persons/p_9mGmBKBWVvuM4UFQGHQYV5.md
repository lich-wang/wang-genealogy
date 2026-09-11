---
schema: wang-person/v1
id: p_9mGmBKBWVvuM4UFQGHQYV5
status: active
merged_into: null
display_name: 王從義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sJnifJhCUbqvZU9LS4oXQd
        subject_person_id: p_9mGmBKBWVvuM4UFQGHQYV5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X5XgnNc9G1WTL1Q9CHofQm
          claim_id: c_sJnifJhCUbqvZU9LS4oXQd
          source_id: s_sn4YXNJvDBGBDZVuwoGLuH
          stance: supports
          locator: CBDB:281259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281259）
          source: &a1
            id: s_sn4YXNJvDBGBDZVuwoGLuH
            source_type: api_record
            title: 中国历代人物传记资料库：王從義（CBDB 281259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281259&o=json
            external_identifier: CBDB:281259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ncHEQ6ZtJHvreEnL4GiA1
        subject_person_id: p_9mGmBKBWVvuM4UFQGHQYV5
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
        - id: cs_zfYreYCA6ebXGJ8wV8izKk
          claim_id: c_7ncHEQ6ZtJHvreEnL4GiA1
          source_id: s_sn4YXNJvDBGBDZVuwoGLuH
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
        id: c_L7rFhcH0Bjj3bRdet9NPmu
        subject_person_id: p_9mGmBKBWVvuM4UFQGHQYV5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HW595LoSX5sZYxTZGrBbPN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UA8-_o8df8G8Jy7KCPOpQ7
          claim_id: c_L7rFhcH0Bjj3bRdet9NPmu
          source_id: s_sn4YXNJvDBGBDZVuwoGLuH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HW595LoSX5sZYxTZGrBbPN
        status: active
        display_name: 王正宗
        merged_into_person_id: null
  other: []
---

# 王從義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HW595LoSX5sZYxTZGrBbPN | 王正宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從義（CBDB 281259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281259&o=json)
