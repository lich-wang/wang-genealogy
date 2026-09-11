---
schema: wang-person/v1
id: p_JXKdLRZMZ2YY2MD7Q6D8KL
status: active
merged_into: null
display_name: 王纓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CAiFQbhRw5SkqMDbaUedRH
        subject_person_id: p_JXKdLRZMZ2YY2MD7Q6D8KL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9iAqJxR43sfea6UbsbK9o
          claim_id: c_CAiFQbhRw5SkqMDbaUedRH
          source_id: s_stjHdLYaSrYujtuA8EeKKd
          stance: supports
          locator: CBDB:336579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336579）
          source: &a1
            id: s_stjHdLYaSrYujtuA8EeKKd
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 336579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336579&o=json
            external_identifier: CBDB:336579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HDprHbAfraF5kYKbC3Ckzr
        subject_person_id: p_JXKdLRZMZ2YY2MD7Q6D8KL
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
        - id: cs_xTCR3AoH5SGo7hxhokDaKj
          claim_id: c_HDprHbAfraF5kYKbC3Ckzr
          source_id: s_stjHdLYaSrYujtuA8EeKKd
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
        id: c_xu3d7p_gpU_eBrSRVOaqkS
        subject_person_id: p_JXKdLRZMZ2YY2MD7Q6D8KL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-zkqF9Cl9YIi0quIVYVfs
          claim_id: c_xu3d7p_gpU_eBrSRVOaqkS
          source_id: s_stjHdLYaSrYujtuA8EeKKd
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
  other: []
---

# 王纓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纓（CBDB 336579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336579&o=json)
