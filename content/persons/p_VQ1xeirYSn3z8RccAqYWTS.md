---
schema: wang-person/v1
id: p_VQ1xeirYSn3z8RccAqYWTS
status: active
merged_into: null
display_name: 王業偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Peq3wxSx6cURtoVhwtah5W
        subject_person_id: p_VQ1xeirYSn3z8RccAqYWTS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_84uH5rmgpg485pL7GH9Whb
          claim_id: c_Peq3wxSx6cURtoVhwtah5W
          source_id: s_k62TS9BPt66yfZgs8ujNt9
          stance: supports
          locator: CBDB:556672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556672）
          source: &a1
            id: s_k62TS9BPt66yfZgs8ujNt9
            source_type: api_record
            title: 中国历代人物传记资料库：王業偉（CBDB 556672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556672&o=json
            external_identifier: CBDB:556672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3DLkQufm3FPJh2dG9qA1M8
        subject_person_id: p_VQ1xeirYSn3z8RccAqYWTS
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
        - id: cs_rMNYJYuqf2NkY9ABhGCCEt
          claim_id: c_3DLkQufm3FPJh2dG9qA1M8
          source_id: s_k62TS9BPt66yfZgs8ujNt9
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

# 王業偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業偉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業偉（CBDB 556672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556672&o=json)
