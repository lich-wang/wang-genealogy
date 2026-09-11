---
schema: wang-person/v1
id: p_hNocUfmi2fcu8ZuRLW8Mi3
status: active
merged_into: null
display_name: 王縡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MK4cYHMvKugcSy1LbQbVDn
        subject_person_id: p_hNocUfmi2fcu8ZuRLW8Mi3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ycfnZcQ2GquZ21qxdk2huN
          claim_id: c_MK4cYHMvKugcSy1LbQbVDn
          source_id: s_JNLMCi8A7kpJji8bQJ8nCR
          stance: supports
          locator: CBDB:119721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119721）
          source: &a1
            id: s_JNLMCi8A7kpJji8bQJ8nCR
            source_type: api_record
            title: 中国历代人物传记资料库：王縡（CBDB 119721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119721&o=json
            external_identifier: CBDB:119721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2YvFDd3hCiwGjddCJfPjU
        subject_person_id: p_hNocUfmi2fcu8ZuRLW8Mi3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sb6ewa6m2728VJiz2wTLmh
          claim_id: c_r2YvFDd3hCiwGjddCJfPjU
          source_id: s_JNLMCi8A7kpJji8bQJ8nCR
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
        id: c_9gBbh-bcs8wtvEQM1ZjfxX
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNocUfmi2fcu8ZuRLW8Mi3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arrrOkbfK6RvcTJKi6ot0K
          claim_id: c_9gBbh-bcs8wtvEQM1ZjfxX
          source_id: s_JNLMCi8A7kpJji8bQJ8nCR
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uEBsw62GZpP7Jv5oaHffEz
        status: active
        display_name: 王曾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王縡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uEBsw62GZpP7Jv5oaHffEz | 王曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縡（CBDB 119721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119721&o=json)
