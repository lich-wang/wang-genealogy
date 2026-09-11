---
schema: wang-person/v1
id: p_mykX7xwaoF7SL9hSK7DJ1V
status: active
merged_into: null
display_name: 王艮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KqDmjvxkrJnQPAv4kkHCwC
        subject_person_id: p_mykX7xwaoF7SL9hSK7DJ1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王艮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5RPfnLa3VCSGindKoeeTN3
          claim_id: c_KqDmjvxkrJnQPAv4kkHCwC
          source_id: s_9cEGKj8rAG96krnVxT7W2e
          stance: supports
          locator: CBDB:286460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286460）
          source: &a1
            id: s_9cEGKj8rAG96krnVxT7W2e
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 286460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286460&o=json
            external_identifier: CBDB:286460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9JN4DEhbvam61Mm47T9tq
        subject_person_id: p_mykX7xwaoF7SL9hSK7DJ1V
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
        - id: cs_h6dsErEh7zecMGjCspDDAh
          claim_id: c_Q9JN4DEhbvam61Mm47T9tq
          source_id: s_9cEGKj8rAG96krnVxT7W2e
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
        id: c_4ye_wlUxp501rPUr2-FMmk
        subject_person_id: p_mykX7xwaoF7SL9hSK7DJ1V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rzQDNnMKSBa8nJNVJmieoC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HHriCxrLlD1IezMnwWLknA
          claim_id: c_4ye_wlUxp501rPUr2-FMmk
          source_id: s_9cEGKj8rAG96krnVxT7W2e
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第一甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rzQDNnMKSBa8nJNVJmieoC
        status: active
        display_name: 王鈺
        merged_into_person_id: null
  other: []
---

# 王艮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王艮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rzQDNnMKSBa8nJNVJmieoC | 王鈺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王艮（CBDB 286460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286460&o=json)
