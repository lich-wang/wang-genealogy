---
schema: wang-person/v1
id: p_A3UBftvcv8pqxG7C1kJFXP
status: active
merged_into: null
display_name: 王瑱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujPXAAt9RWiHJdsCKHXgAU
        subject_person_id: p_A3UBftvcv8pqxG7C1kJFXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qdj2eE4K1h3v3GUsd3VTwF
          claim_id: c_ujPXAAt9RWiHJdsCKHXgAU
          source_id: s_QEfF7tS7cuj8uNpgxEDwBK
          stance: supports
          locator: CBDB:152417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152417）
          source: &a1
            id: s_QEfF7tS7cuj8uNpgxEDwBK
            source_type: api_record
            title: 中国历代人物传记资料库：王瑱（CBDB 152417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152417&o=json
            external_identifier: CBDB:152417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xi7HvE3nLJAL5fma1MNi89
        subject_person_id: p_A3UBftvcv8pqxG7C1kJFXP
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
        - id: cs_B8mBL1qyLZ5K5JV7Zx28cq
          claim_id: c_Xi7HvE3nLJAL5fma1MNi89
          source_id: s_QEfF7tS7cuj8uNpgxEDwBK
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
        id: c_k3BqnsBV9XHZGgVwRFjfjL
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3UBftvcv8pqxG7C1kJFXP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1cgaDq5qCrEFD5cUmRJOM
          claim_id: c_k3BqnsBV9XHZGgVwRFjfjL
          source_id: s_QEfF7tS7cuj8uNpgxEDwBK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MPKDCVoTw3ezXKDrH5XZgB
        status: active
        display_name: 王希俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑱 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MPKDCVoTw3ezXKDrH5XZgB | 王希俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑱（CBDB 152417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152417&o=json)
