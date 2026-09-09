---
schema: wang-person/v1
id: p_mP4MjxsCNrm5HQTVieMvjq
status: active
merged_into: null
display_name: 王廷璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sTCQ7fFFBKDTE72ajjstQA
        subject_person_id: p_mP4MjxsCNrm5HQTVieMvjq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WFrGb6VDkxD58MLKEwqr8v
          claim_id: c_sTCQ7fFFBKDTE72ajjstQA
          source_id: s_kL98ELQ77edAHc4EjU9KUJ
          stance: supports
          locator: CBDB:71572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71572）
          source: &a1
            id: s_kL98ELQ77edAHc4EjU9KUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷璧（CBDB 71572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71572&o=json
            external_identifier: CBDB:71572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kr1Ewqax6RH5cFNXVUy98q
        subject_person_id: p_mP4MjxsCNrm5HQTVieMvjq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YA48cDWuyg3aMNAhH8qtAY
          claim_id: c_kr1Ewqax6RH5cFNXVUy98q
          source_id: s_kL98ELQ77edAHc4EjU9KUJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pN8NQMfB6XZB2RTeGigYxN
        subject_person_id: p_mP4MjxsCNrm5HQTVieMvjq
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
        - id: cs_xrwPWfxkv2hLJpEQ6xnXCC
          claim_id: c_pN8NQMfB6XZB2RTeGigYxN
          source_id: s_kL98ELQ77edAHc4EjU9KUJ
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

# 王廷璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷璧 | accepted |
| birth.date | 1628年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷璧（CBDB 71572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71572&o=json)
