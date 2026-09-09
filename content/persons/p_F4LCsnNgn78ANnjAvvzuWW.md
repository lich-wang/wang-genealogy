---
schema: wang-person/v1
id: p_F4LCsnNgn78ANnjAvvzuWW
status: active
merged_into: null
display_name: 王琪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qSDnKdPtUWQ6en3HEYb6No
        subject_person_id: p_F4LCsnNgn78ANnjAvvzuWW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jEqpzzY2UaidybAPqizWcv
          claim_id: c_qSDnKdPtUWQ6en3HEYb6No
          source_id: s_z8mru9pipiHPtECF13P1QP
          stance: supports
          locator: CBDB:44456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（44456）
          source: &a1
            id: s_z8mru9pipiHPtECF13P1QP
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 44456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44456&o=json
            external_identifier: CBDB:44456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3HJUaTRq67BkVK9jRHJhZY
        subject_person_id: p_F4LCsnNgn78ANnjAvvzuWW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAc4QRpjLVH5VDrB6nwyij
          claim_id: c_3HJUaTRq67BkVK9jRHJhZY
          source_id: s_z8mru9pipiHPtECF13P1QP
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
        id: c_JdHQ9j5SPH9cLGbiXF8yPE
        subject_person_id: p_F4LCsnNgn78ANnjAvvzuWW
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
        - id: cs_EB5EnbKwWTBJL5uZTkSRB1
          claim_id: c_JdHQ9j5SPH9cLGbiXF8yPE
          source_id: s_z8mru9pipiHPtECF13P1QP
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

# 王琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琪 | accepted |
| birth.date | 1138年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琪（CBDB 44456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44456&o=json)
