---
schema: wang-person/v1
id: p_iu5CaCsZnkm6eqkDzztcwK
status: active
merged_into: null
display_name: 王宗道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txBhC8EVdKHC9kbK3PCXMo
        subject_person_id: p_iu5CaCsZnkm6eqkDzztcwK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PKTEcDqxuJqPWLrZNCPHES
          claim_id: c_txBhC8EVdKHC9kbK3PCXMo
          source_id: s_uwWeMv82YvH5HLD7Qthaxp
          stance: supports
          locator: CBDB:267885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267885）
          source: &a1
            id: s_uwWeMv82YvH5HLD7Qthaxp
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 267885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267885&o=json
            external_identifier: CBDB:267885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZmUfkJx2X4i9QutJgHvUEU
        subject_person_id: p_iu5CaCsZnkm6eqkDzztcwK
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
        - id: cs_xMUiyBb2jPgzpFkLW6LyQs
          claim_id: c_ZmUfkJx2X4i9QutJgHvUEU
          source_id: s_uwWeMv82YvH5HLD7Qthaxp
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
        id: c_dHyr5aRY8NxDFLiNgiwAQv
        subject_person_id: p_iu5CaCsZnkm6eqkDzztcwK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i9nRToZAtcBIneztTxCOUq
          claim_id: c_dHyr5aRY8NxDFLiNgiwAQv
          source_id: s_uwWeMv82YvH5HLD7Qthaxp
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
  other: []
---

# 王宗道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗道（CBDB 267885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267885&o=json)
