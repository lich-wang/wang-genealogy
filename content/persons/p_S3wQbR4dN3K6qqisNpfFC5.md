---
schema: wang-person/v1
id: p_S3wQbR4dN3K6qqisNpfFC5
status: active
merged_into: null
display_name: 王宏顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WqdpY1zeJKcnSaoT8Pzw2V
        subject_person_id: p_S3wQbR4dN3K6qqisNpfFC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMaf9PEP6vF7f18VN8hFJ7
          claim_id: c_WqdpY1zeJKcnSaoT8Pzw2V
          source_id: s_QGV9Aq1vH94HPFHQrnU5KA
          stance: supports
          locator: CBDB:637088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637088）
          source: &a1
            id: s_QGV9Aq1vH94HPFHQrnU5KA
            source_type: api_record
            title: 中国历代人物传记资料库：王宏顯（CBDB 637088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637088&o=json
            external_identifier: CBDB:637088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yytp2FSm7jJ1Lj96XTen8j
        subject_person_id: p_S3wQbR4dN3K6qqisNpfFC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nxUMadcmRjpLWHXSGmexVK
          claim_id: c_yytp2FSm7jJ1Lj96XTen8j
          source_id: s_QGV9Aq1vH94HPFHQrnU5KA
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
  descendants: []
  other: []
---

# 王宏顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏顯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏顯（CBDB 637088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637088&o=json)
