---
schema: wang-person/v1
id: p_gZqpYySn8B8YqqwunRXDYC
status: active
merged_into: null
display_name: 王袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SjzFC9NJTC2ufui9gjuP23
        subject_person_id: p_gZqpYySn8B8YqqwunRXDYC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ezu1H3hiQqrMgF9GwkAKyR
          claim_id: c_SjzFC9NJTC2ufui9gjuP23
          source_id: s_sfgPJnPctA52UrDZ3No5CA
          stance: supports
          locator: CBDB:161388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161388）
          source: &a1
            id: s_sfgPJnPctA52UrDZ3No5CA
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 161388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161388&o=json
            external_identifier: CBDB:161388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94ZRQCsFEEoub9MGjWZv9i
        subject_person_id: p_gZqpYySn8B8YqqwunRXDYC
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
        - id: cs_64EkBZ9D4x2QCFj2c5Mihr
          claim_id: c_94ZRQCsFEEoub9MGjWZv9i
          source_id: s_sfgPJnPctA52UrDZ3No5CA
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

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王袞（CBDB 161388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161388&o=json)
