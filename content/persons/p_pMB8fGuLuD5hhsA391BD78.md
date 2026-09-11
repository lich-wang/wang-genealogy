---
schema: wang-person/v1
id: p_pMB8fGuLuD5hhsA391BD78
status: active
merged_into: null
display_name: 王鳳儀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pYL2EQuwYhi79fkFv3W8PP
        subject_person_id: p_pMB8fGuLuD5hhsA391BD78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i6yWHv8uPWhjJpgJdx9iqk
          claim_id: c_pYL2EQuwYhi79fkFv3W8PP
          source_id: s_jE9YBjRJPke4T46PQApDBR
          stance: supports
          locator: CBDB:316718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316718）
          source: &a1
            id: s_jE9YBjRJPke4T46PQApDBR
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 316718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316718&o=json
            external_identifier: CBDB:316718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xNndecGnco5ERq7rfBQNEe
        subject_person_id: p_pMB8fGuLuD5hhsA391BD78
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
        - id: cs_Hr4PGvRd2FUx3K52kVEpc3
          claim_id: c_xNndecGnco5ERq7rfBQNEe
          source_id: s_jE9YBjRJPke4T46PQApDBR
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
        id: c_5gvg2o4mKw4a058rAmQg2t
        subject_person_id: p_pMB8fGuLuD5hhsA391BD78
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_KsGu60szu4lOmIYviupy
          claim_id: c_5gvg2o4mKw4a058rAmQg2t
          source_id: s_jE9YBjRJPke4T46PQApDBR
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G9tFhQ1WwsB9Terb7BAL5q
        status: active
        display_name: 王濬
        merged_into_person_id: null
  other: []
---

# 王鳳儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳儀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G9tFhQ1WwsB9Terb7BAL5q | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳儀（CBDB 316718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316718&o=json)
