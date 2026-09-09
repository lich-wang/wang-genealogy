---
schema: wang-person/v1
id: p_PuUiGdtpzWdsK7wcEt3S7p
status: active
merged_into: null
display_name: 王以旂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63SwC9inhimfyAmfwLmj8b
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以旂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jWjhN9uxMBgC4QnnL5JgoK
          claim_id: c_63SwC9inhimfyAmfwLmj8b
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
          stance: supports
          locator: CBDB:68257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68257）
          source: &a1
            id: s_oN1JN1VYWv8n9Ndz7YmWhF
            source_type: api_record
            title: 中国历代人物传记资料库：王以旂（CBDB 68257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json
            external_identifier: CBDB:68257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KPueUMpFpVaybM4junKKC5
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9j59NsPbnyC3mYtuzVEAD
          claim_id: c_KPueUMpFpVaybM4junKKC5
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RHbFeFGyk8eT6odtXj1r8B
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CgNzvkwiJXsB7pbN9WKpDw
          claim_id: c_RHbFeFGyk8eT6odtXj1r8B
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g42VZTQLLQVVtvQ1Q5gGRp
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
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
        - id: cs_RBPEhLw5YDax6qYsZXFkv1
          claim_id: c_g42VZTQLLQVVtvQ1Q5gGRp
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
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

# 王以旂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以旂 | accepted |
| birth.date | 1486年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以旂（CBDB 68257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json)
