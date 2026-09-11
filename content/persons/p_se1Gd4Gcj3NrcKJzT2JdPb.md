---
schema: wang-person/v1
id: p_se1Gd4Gcj3NrcKJzT2JdPb
status: active
merged_into: null
display_name: 王國寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HGxh5DnPgvwEhx9EvXq1Wx
        subject_person_id: p_se1Gd4Gcj3NrcKJzT2JdPb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XeK9TRvBSDJ4tJ1RNL3WTq
          claim_id: c_HGxh5DnPgvwEhx9EvXq1Wx
          source_id: s_4LHAz46ZaVe5fRZQBG8UzR
          stance: supports
          locator: CBDB:221764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221764）
          source: &a1
            id: s_4LHAz46ZaVe5fRZQBG8UzR
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 221764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221764&o=json
            external_identifier: CBDB:221764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LZCZvmGZQkfZ5KnVrYWWhX
        subject_person_id: p_se1Gd4Gcj3NrcKJzT2JdPb
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
        - id: cs_LPJZ1vh5pLrgDxcJAKXYzM
          claim_id: c_LZCZvmGZQkfZ5KnVrYWWhX
          source_id: s_4LHAz46ZaVe5fRZQBG8UzR
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
        id: c_KWKuGekZ0aS0eHXXK2f1X6
        subject_person_id: p_se1Gd4Gcj3NrcKJzT2JdPb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GbS1nAgLS0u_74zTD653Me
          claim_id: c_KWKuGekZ0aS0eHXXK2f1X6
          source_id: s_4LHAz46ZaVe5fRZQBG8UzR
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
  other: []
---

# 王國寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 221764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221764&o=json)
