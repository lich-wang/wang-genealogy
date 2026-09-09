---
schema: wang-person/v1
id: p_5sGq3fMCKQCFC1ia4efd12
status: active
merged_into: null
display_name: 王表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4fEeHxGLnHncPPxzF4svg
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cCVhG9Lei8DrNoXP6vLKt7
          claim_id: c_Y4fEeHxGLnHncPPxzF4svg
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
          stance: supports
          locator: CBDB:200280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200280）
          source: &a1
            id: s_gK3ZaJnmrj275AKBo1WwhC
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 200280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200280&o=json
            external_identifier: CBDB:200280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t9VXSprkpbJVneiNYbzUqs
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oh1qm8kpzSaxK8xXkTjpxm
          claim_id: c_t9VXSprkpbJVneiNYbzUqs
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
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
        id: c_zb2KbPEdkKXpYsPoEL1h2E
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
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
        - id: cs_swWxjGdiiCKQBJPXVmrjZB
          claim_id: c_zb2KbPEdkKXpYsPoEL1h2E
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
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

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| birth.date | 1440年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 200280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200280&o=json)
