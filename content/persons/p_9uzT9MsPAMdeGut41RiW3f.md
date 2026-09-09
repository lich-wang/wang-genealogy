---
schema: wang-person/v1
id: p_9uzT9MsPAMdeGut41RiW3f
status: active
merged_into: null
display_name: 王易從
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzcSK2a7fFDyFgRmALvrVy
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdYMAb692EwKjfLRqXEUbP
          claim_id: c_FzcSK2a7fFDyFgRmALvrVy
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: CBDB:92036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92036）
          source: &a1
            id: s_LaQHp5mjAHgZukLwRbkP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王易從（CBDB 92036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json
            external_identifier: CBDB:92036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qJiXUrZXnTQRmyS7VJuX1U
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rYpRe4nU9rJQREMyszXHk7
          claim_id: c_qJiXUrZXnTQRmyS7VJuX1U
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wZve7NBAERNdH5HzeAUFwG
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 726年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NQBzUVNE4r5pDWfFybF5G
          claim_id: c_wZve7NBAERNdH5HzeAUFwG
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6jDq6nNQ6M1gaGy3KxX25
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BsQ1bod6o38tDz67TYa9kf
          claim_id: c_p6jDq6nNQ6M1gaGy3KxX25
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
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
  descendants: []
  other: []
---

# 王易從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易從 | accepted |
| birth.date | 667年 | accepted |
| death.date | 726年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王易從（CBDB 92036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json)
