---
schema: wang-person/v1
id: p_sBg3cskAEC4VP4zx8fzJFq
status: active
merged_into: null
display_name: 王六
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZGKYNgmS9agrFC18dy7v81
        subject_person_id: p_sBg3cskAEC4VP4zx8fzJFq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vQYy8ZA71iqrpi7yeNg53W
          claim_id: c_ZGKYNgmS9agrFC18dy7v81
          source_id: s_r744nw9fMLvCXKQJavt4qE
          stance: supports
          locator: CBDB:324096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324096）
          source: &a1
            id: s_r744nw9fMLvCXKQJavt4qE
            source_type: api_record
            title: 中国历代人物传记资料库：王六（CBDB 324096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324096&o=json
            external_identifier: CBDB:324096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ynsyaPDxvC5AvkbNGZaQ6x
        subject_person_id: p_sBg3cskAEC4VP4zx8fzJFq
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
        - id: cs_2yn5tkmR9yYX1RwdfTpcGa
          claim_id: c_ynsyaPDxvC5AvkbNGZaQ6x
          source_id: s_r744nw9fMLvCXKQJavt4qE
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
        id: c_KZWR-Fyg4HIGxLc2AY9RN4
        subject_person_id: p_sBg3cskAEC4VP4zx8fzJFq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7A6DgOGmvo5mDXTdGie1a
          claim_id: c_KZWR-Fyg4HIGxLc2AY9RN4
          source_id: s_r744nw9fMLvCXKQJavt4qE
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HvKxCmK79R4YwoS4fwu3e3
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王六

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HvKxCmK79R4YwoS4fwu3e3 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王六（CBDB 324096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324096&o=json)
