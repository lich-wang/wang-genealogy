---
schema: wang-person/v1
id: p_8dWztfUudwJZAxK2m2NEME
status: active
merged_into: null
display_name: 王遘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foTEeKewYLhyu9LjYifuPd
        subject_person_id: p_8dWztfUudwJZAxK2m2NEME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RCk1BsxQQjT1YGMuTJakJ5
          claim_id: c_foTEeKewYLhyu9LjYifuPd
          source_id: s_Tg6VfPnXd1VN4SVyQbkpjn
          stance: supports
          locator: CBDB:157635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157635）
          source: &a1
            id: s_Tg6VfPnXd1VN4SVyQbkpjn
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 157635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157635&o=json
            external_identifier: CBDB:157635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYsziG7peCVfsPAw81mfRN
        subject_person_id: p_8dWztfUudwJZAxK2m2NEME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPbrLLySPGziQP5Bt5P1ca
          claim_id: c_LYsziG7peCVfsPAw81mfRN
          source_id: s_Tg6VfPnXd1VN4SVyQbkpjn
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

# 王遘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遘 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遘（CBDB 157635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157635&o=json)
