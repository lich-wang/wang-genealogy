---
schema: wang-person/v1
id: p_F39Q7SQgdoYApUKzJf32to
status: active
merged_into: null
display_name: 王振
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrG6Dy8H7BHWEQchMkc6mM
        subject_person_id: p_F39Q7SQgdoYApUKzJf32to
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_giCqstuPTv5UxBbPn1jdz9
          claim_id: c_LrG6Dy8H7BHWEQchMkc6mM
          source_id: s_w6aW3x2Wcm6h57vANHEu3S
          stance: supports
          locator: CBDB:208866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208866）
          source: &a1
            id: s_w6aW3x2Wcm6h57vANHEu3S
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 208866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json
            external_identifier: CBDB:208866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4j4xtJ6epvN2Jeg3n9BJ95
        subject_person_id: p_F39Q7SQgdoYApUKzJf32to
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
        - id: cs_D9mY9jUjncAGxBqRnne2FB
          claim_id: c_4j4xtJ6epvN2Jeg3n9BJ95
          source_id: s_w6aW3x2Wcm6h57vANHEu3S
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
        id: c_rTQkJcCMLQ49JOqGGJbGFX
        subject_person_id: p_F39Q7SQgdoYApUKzJf32to
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q1El9iRW_cMW5w7rK2NA8
          claim_id: c_rTQkJcCMLQ49JOqGGJbGFX
          source_id: s_w6aW3x2Wcm6h57vANHEu3S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
  other: []
---

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 208866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json)
