---
schema: wang-person/v1
id: p_CKCFhcenmNXzf2AQ9a64SJ
status: active
merged_into: null
display_name: 王均
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fZjTgDjdDhJpq3guWkgN1e
        subject_person_id: p_CKCFhcenmNXzf2AQ9a64SJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fPuieXW6vHTUn4V728iJm6
          claim_id: c_fZjTgDjdDhJpq3guWkgN1e
          source_id: s_6g21zEBYrQUdZhz1Emhf3k
          stance: supports
          locator: CBDB:289102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289102）
          source: &a1
            id: s_6g21zEBYrQUdZhz1Emhf3k
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 289102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289102&o=json
            external_identifier: CBDB:289102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KG4x2RfwxevTasLUScThqx
        subject_person_id: p_CKCFhcenmNXzf2AQ9a64SJ
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
        - id: cs_vBH9BbnnAfoijG4hozxKok
          claim_id: c_KG4x2RfwxevTasLUScThqx
          source_id: s_6g21zEBYrQUdZhz1Emhf3k
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
        id: c_K0FATZp32lw_lt8-Rpy8h7
        subject_person_id: p_CKCFhcenmNXzf2AQ9a64SJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7EG9g58Y1UiqnS1IJk1M4
          claim_id: c_K0FATZp32lw_lt8-Rpy8h7
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YLAaNeVEveDrzsSbZWJD1r
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json
            external_identifier: CBDB:202497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9uL4CzY8WtBqKSLRcVb8TP
        status: active
        display_name: 王銳
        merged_into_person_id: null
  other: []
---

# 王均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9uL4CzY8WtBqKSLRcVb8TP | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均（CBDB 289102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289102&o=json)
- [中国历代人物传记资料库：王銳（CBDB 202497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json)
