---
schema: wang-person/v1
id: p_JyQurP22g37oU9bmwXM9Eq
status: active
merged_into: null
display_name: 王繼曾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UxoekYN9BxbDip76dLrJ7D
        subject_person_id: p_JyQurP22g37oU9bmwXM9Eq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QEizu8bTyZ8uV5sjk3cwHW
          claim_id: c_UxoekYN9BxbDip76dLrJ7D
          source_id: s_B65mxtnFJKabJQPmjMpx5F
          stance: supports
          locator: CBDB:294731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294731）
          source: &a1
            id: s_B65mxtnFJKabJQPmjMpx5F
            source_type: api_record
            title: 中国历代人物传记资料库：王繼曾（CBDB 294731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294731&o=json
            external_identifier: CBDB:294731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z49y78EJdNqVMMe6Bb7SQ1
        subject_person_id: p_JyQurP22g37oU9bmwXM9Eq
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
        - id: cs_rzU5XThHXKD8iXS21LcUXo
          claim_id: c_z49y78EJdNqVMMe6Bb7SQ1
          source_id: s_B65mxtnFJKabJQPmjMpx5F
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
  ancestors:
    - claim:
        id: c_PEoFAH4wPDT3QJClD7ivrQ
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JyQurP22g37oU9bmwXM9Eq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_rx8nPUNeSpa3qou53Xyz
          claim_id: c_PEoFAH4wPDT3QJClD7ivrQ
          source_id: s_B65mxtnFJKabJQPmjMpx5F
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_35PzL233nqJ85Q2BX1Q5dA
        status: active
        display_name: 王良柱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼曾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_35PzL233nqJ85Q2BX1Q5dA | 王良柱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼曾（CBDB 294731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294731&o=json)
