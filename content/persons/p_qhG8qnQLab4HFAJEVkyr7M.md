---
schema: wang-person/v1
id: p_qhG8qnQLab4HFAJEVkyr7M
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PQQ66saQ98k2r9W6ViiPJn
        subject_person_id: p_qhG8qnQLab4HFAJEVkyr7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SHYD9UBhGNTAvbhVWgBStK
          claim_id: c_PQQ66saQ98k2r9W6ViiPJn
          source_id: s_Bc6rk6p5z75N5uHZEQfAY6
          stance: supports
          locator: CBDB:192014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192014）
          source: &a1
            id: s_Bc6rk6p5z75N5uHZEQfAY6
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 192014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192014&o=json
            external_identifier: CBDB:192014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_a19y4w41NQjiziS9ZD8NtK
        subject_person_id: p_qhG8qnQLab4HFAJEVkyr7M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 597年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7auPMgU5JCQ9jXbAdjJeY
          claim_id: c_a19y4w41NQjiziS9ZD8NtK
          source_id: s_Bc6rk6p5z75N5uHZEQfAY6
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
        id: c_8B81GBXR9PdWtHGJ6LuPZ3
        subject_person_id: p_qhG8qnQLab4HFAJEVkyr7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊（卒于597年），南北朝人物。籍贯江都，曾任僕射。（中国历代人物传记资料库 CBDB 192014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_16jd1tk0VYwWSLBnv1wEzL
          claim_id: c_8B81GBXR9PdWtHGJ6LuPZ3
          source_id: s_Bc6rk6p5z75N5uHZEQfAY6
          stance: supports
          locator: CBDB:192014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| death.date | 597年 | accepted |
| bio.summary | 王瓊（卒于597年），南北朝人物。籍贯江都，曾任僕射。（中国历代人物传记资料库 CBDB 192014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 192014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192014&o=json)
