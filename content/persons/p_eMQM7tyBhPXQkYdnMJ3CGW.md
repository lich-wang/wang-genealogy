---
schema: wang-person/v1
id: p_eMQM7tyBhPXQkYdnMJ3CGW
status: active
merged_into: null
display_name: 王長澐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JMqxyRM6yzyq7SL4mSjBK9
        subject_person_id: p_eMQM7tyBhPXQkYdnMJ3CGW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長澐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P36DqY6YNx8q91LCiFLCXg
          claim_id: c_JMqxyRM6yzyq7SL4mSjBK9
          source_id: s_JGGmUabeGLFQx3NkMN9UG2
          stance: supports
          locator: CBDB:640733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640733）
          source: &a1
            id: s_JGGmUabeGLFQx3NkMN9UG2
            source_type: api_record
            title: 中国历代人物传记资料库：王長澐（CBDB 640733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640733&o=json
            external_identifier: CBDB:640733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s2yQGZ6rsnFE2W9NxfSE1P
        subject_person_id: p_eMQM7tyBhPXQkYdnMJ3CGW
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
        - id: cs_Jd4W5hrtTGmLDBT7GeyREP
          claim_id: c_s2yQGZ6rsnFE2W9NxfSE1P
          source_id: s_JGGmUabeGLFQx3NkMN9UG2
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

# 王長澐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長澐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長澐（CBDB 640733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640733&o=json)
