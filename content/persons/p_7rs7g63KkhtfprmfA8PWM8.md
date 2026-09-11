---
schema: wang-person/v1
id: p_7rs7g63KkhtfprmfA8PWM8
status: active
merged_into: null
display_name: 王樂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xjVj7DgxAnAh7HENbLnZcW
        subject_person_id: p_7rs7g63KkhtfprmfA8PWM8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3YpCcJtdjsDQ4V4WB6yg4
          claim_id: c_xjVj7DgxAnAh7HENbLnZcW
          source_id: s_CQSBB1rTCYziKE7BcC81XA
          stance: supports
          locator: CBDB:638825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638825）
          source: &a1
            id: s_CQSBB1rTCYziKE7BcC81XA
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 638825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638825&o=json
            external_identifier: CBDB:638825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uKhu7tpEDhJdWbRggXKhA
        subject_person_id: p_7rs7g63KkhtfprmfA8PWM8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂，清人物。籍贯重慶府，曾任訓導。（中国历代人物传记资料库 CBDB 638825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8fDqd7qazi4MknfLA4jXvU
          claim_id: c_2uKhu7tpEDhJdWbRggXKhA
          source_id: s_CQSBB1rTCYziKE7BcC81XA
          stance: supports
          locator: CBDB:638825
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

# 王樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂 | accepted |
| bio.summary | 王樂，清人物。籍贯重慶府，曾任訓導。（中国历代人物传记资料库 CBDB 638825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂（CBDB 638825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638825&o=json)
