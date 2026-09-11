---
schema: wang-person/v1
id: p_AVMJo9PKsBpCg5KUfRwzbu
status: active
merged_into: null
display_name: 王岱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DTv1hx2GE4LdG7PwUAJ2gb
        subject_person_id: p_AVMJo9PKsBpCg5KUfRwzbu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hkj5uM7waGaGi98NdVaJfw
          claim_id: c_DTv1hx2GE4LdG7PwUAJ2gb
          source_id: s_TCNDDBdrjJF4NkFKJG8dFo
          stance: supports
          locator: CBDB:321234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321234）
          source: &a1
            id: s_TCNDDBdrjJF4NkFKJG8dFo
            source_type: api_record
            title: 中国历代人物传记资料库：王岱（CBDB 321234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321234&o=json
            external_identifier: CBDB:321234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ckSj14ziU1mH1H7foW8Qh
        subject_person_id: p_AVMJo9PKsBpCg5KUfRwzbu
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
        - id: cs_MdYwACzdYML1mmWVqjBdr2
          claim_id: c_6ckSj14ziU1mH1H7foW8Qh
          source_id: s_TCNDDBdrjJF4NkFKJG8dFo
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
        id: c_BGinsr6MHvvqPXwzbR08A6
        subject_person_id: p_AVMJo9PKsBpCg5KUfRwzbu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z5zAMAp8D3CHr5j9pYLsS
          claim_id: c_BGinsr6MHvvqPXwzbR08A6
          source_id: s_TCNDDBdrjJF4NkFKJG8dFo
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：孫
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

# 王岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岱（CBDB 321234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321234&o=json)
