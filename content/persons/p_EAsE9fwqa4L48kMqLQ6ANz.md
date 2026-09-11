---
schema: wang-person/v1
id: p_EAsE9fwqa4L48kMqLQ6ANz
status: active
merged_into: null
display_name: 王克仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5aJJo88mj4kZgvwFrmyKvU
        subject_person_id: p_EAsE9fwqa4L48kMqLQ6ANz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vn1EQhH7P8ENuDM9Ho2Na4
          claim_id: c_5aJJo88mj4kZgvwFrmyKvU
          source_id: s_ncRuJzQGUbpUsLwa718fgN
          stance: supports
          locator: CBDB:319529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319529）
          source: &a1
            id: s_ncRuJzQGUbpUsLwa718fgN
            source_type: api_record
            title: 中国历代人物传记资料库：王克仁（CBDB 319529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319529&o=json
            external_identifier: CBDB:319529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ry1otrG4z1EBdfDt4Xrhw
        subject_person_id: p_EAsE9fwqa4L48kMqLQ6ANz
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
        - id: cs_HJyWrB1dZ8JrwdrAPjabUN
          claim_id: c_9ry1otrG4z1EBdfDt4Xrhw
          source_id: s_ncRuJzQGUbpUsLwa718fgN
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
        id: c_RujeudHnCK0xqgSdn5U_O7
        subject_person_id: p_EAsE9fwqa4L48kMqLQ6ANz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-8jpc9a-K69kXwnaqiLItB
          claim_id: c_RujeudHnCK0xqgSdn5U_O7
          source_id: s_ncRuJzQGUbpUsLwa718fgN
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w8kp3E7GopXJ9s4XjHQN1n
        status: active
        display_name: 王哲
        merged_into_person_id: null
  other: []
---

# 王克仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_w8kp3E7GopXJ9s4XjHQN1n | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克仁（CBDB 319529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319529&o=json)
