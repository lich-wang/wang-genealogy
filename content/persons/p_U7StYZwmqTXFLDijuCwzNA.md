---
schema: wang-person/v1
id: p_U7StYZwmqTXFLDijuCwzNA
status: active
merged_into: null
display_name: 王緯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPeRxYkUmQa8EDo9uZ3QQu
        subject_person_id: p_U7StYZwmqTXFLDijuCwzNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62dPsFwx4zhdF6FN5XtBD6
          claim_id: c_aPeRxYkUmQa8EDo9uZ3QQu
          source_id: s_hWqCjA5UKaMR9kVjegp6Vn
          stance: supports
          locator: CBDB:331185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331185）
          source: &a1
            id: s_hWqCjA5UKaMR9kVjegp6Vn
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 331185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json
            external_identifier: CBDB:331185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F29wG5WmmRWHmA9HfAg9E1
        subject_person_id: p_U7StYZwmqTXFLDijuCwzNA
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
        - id: cs_NnFo83mhY64c5MYKvyzEEQ
          claim_id: c_F29wG5WmmRWHmA9HfAg9E1
          source_id: s_hWqCjA5UKaMR9kVjegp6Vn
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
        id: c_KxWji4RfP-XIhpMq_GzCcs
        subject_person_id: p_U7StYZwmqTXFLDijuCwzNA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jm6Rzv0iJKUzEFn9sHh5Xr
          claim_id: c_KxWji4RfP-XIhpMq_GzCcs
          source_id: s_hWqCjA5UKaMR9kVjegp6Vn
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
  other: []
---

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緯（CBDB 331185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json)
