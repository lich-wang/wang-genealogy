---
schema: wang-person/v1
id: p_1coFu8NvA3X5y8iSrc3XXg
status: active
merged_into: null
display_name: 王孚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAQ9Ev8bp5cFfaqBtgDq9Z
        subject_person_id: p_1coFu8NvA3X5y8iSrc3XXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MdgHmFvGKXHycTYdaUkC8d
          claim_id: c_LAQ9Ev8bp5cFfaqBtgDq9Z
          source_id: s_U3duEfDSEtesguAp6Y1C8v
          stance: supports
          locator: CBDB:27289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27289）
          source: &a1
            id: s_U3duEfDSEtesguAp6Y1C8v
            source_type: api_record
            title: 中国历代人物传记资料库：王孚（CBDB 27289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27289&o=json
            external_identifier: CBDB:27289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8KLd5PC7wcrjfYBSsFzhY8
        subject_person_id: p_1coFu8NvA3X5y8iSrc3XXg
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
        - id: cs_A7J1cSTtJJ12UpSVqp4tEF
          claim_id: c_8KLd5PC7wcrjfYBSsFzhY8
          source_id: s_U3duEfDSEtesguAp6Y1C8v
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
        id: c_57d5Amb8ZYCq_dPnQFehQn
        subject_person_id: p_TsLL2qcHwWXimZfdLUPRQw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1coFu8NvA3X5y8iSrc3XXg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVGZy8B20iKS_V1CNByFDm
          claim_id: c_57d5Amb8ZYCq_dPnQFehQn
          source_id: s_U3duEfDSEtesguAp6Y1C8v
          stance: supports
          locator: PersonKinshipInfo：父（王季安）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TsLL2qcHwWXimZfdLUPRQw
        status: active
        display_name: 王季安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孚 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TsLL2qcHwWXimZfdLUPRQw | 王季安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孚（CBDB 27289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27289&o=json)
