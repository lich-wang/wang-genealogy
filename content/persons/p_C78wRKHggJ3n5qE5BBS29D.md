---
schema: wang-person/v1
id: p_C78wRKHggJ3n5qE5BBS29D
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GAhZJeMGPG1wXxmfNKfzT
        subject_person_id: p_C78wRKHggJ3n5qE5BBS29D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NwxpguNqQkZApiiL4cE77g
          claim_id: c_8GAhZJeMGPG1wXxmfNKfzT
          source_id: s_2PmoNRHpgVhLM6jSVUEdEo
          stance: supports
          locator: CBDB:100693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100693）
          source: &a1
            id: s_2PmoNRHpgVhLM6jSVUEdEo
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 100693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100693&o=json
            external_identifier: CBDB:100693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3XFEdtDkQezos8eVa1upZM
        subject_person_id: p_C78wRKHggJ3n5qE5BBS29D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRurpTtZxwo5Sud16DuD6f
          claim_id: c_3XFEdtDkQezos8eVa1upZM
          source_id: s_2PmoNRHpgVhLM6jSVUEdEo
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
        id: c_ruW19bQWLGHndN0K8zZxJv
        subject_person_id: p_SY1TQoKyM6Wq3uhY9SXgwA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C78wRKHggJ3n5qE5BBS29D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNhXo3-kDiN-9r_Do0ZokV
          claim_id: c_ruW19bQWLGHndN0K8zZxJv
          source_id: s_2PmoNRHpgVhLM6jSVUEdEo
          stance: supports
          locator: 元人傳記資料索引，503：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SY1TQoKyM6Wq3uhY9SXgwA
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SY1TQoKyM6Wq3uhY9SXgwA | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 100693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100693&o=json)
