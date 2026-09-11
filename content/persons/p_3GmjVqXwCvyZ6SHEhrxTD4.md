---
schema: wang-person/v1
id: p_3GmjVqXwCvyZ6SHEhrxTD4
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QF9wGx1bNFFt4AU1SJjw5W
        subject_person_id: p_3GmjVqXwCvyZ6SHEhrxTD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGhMNPiQo1LpJkxepoUjHX
          claim_id: c_QF9wGx1bNFFt4AU1SJjw5W
          source_id: s_kmxB7yQP5W4XH1r7UyXvG2
          stance: supports
          locator: CBDB:321233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321233）
          source: &a1
            id: s_kmxB7yQP5W4XH1r7UyXvG2
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 321233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321233&o=json
            external_identifier: CBDB:321233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrcM6cXA58CaGY9JjUntLx
        subject_person_id: p_3GmjVqXwCvyZ6SHEhrxTD4
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
        - id: cs_BX2VbkEv9Rz4nu8QJ3Khn2
          claim_id: c_GrcM6cXA58CaGY9JjUntLx
          source_id: s_kmxB7yQP5W4XH1r7UyXvG2
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
        id: c_cy7zouZ2exdd-JXfI78vLZ
        subject_person_id: p_3GmjVqXwCvyZ6SHEhrxTD4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQMFxJA2zt4_sCXcfU369Y
          claim_id: c_cy7zouZ2exdd-JXfI78vLZ
          source_id: s_kmxB7yQP5W4XH1r7UyXvG2
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FZsZBsVgtXYBR7R5He9YWs
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 321233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321233&o=json)
