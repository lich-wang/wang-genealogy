---
schema: wang-person/v1
id: p_VhFRY8PhFa7xR5Z4eRm3Jo
status: active
merged_into: null
display_name: 王得福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJSt7Y3A843HhVD7RrfzdC
        subject_person_id: p_VhFRY8PhFa7xR5Z4eRm3Jo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HHmjG6VytLxCxYKkGPQmF3
          claim_id: c_EJSt7Y3A843HhVD7RrfzdC
          source_id: s_yJ6iLMpGpbE9DEFUkQQrYw
          stance: supports
          locator: CBDB:690545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690545）
          source: &a1
            id: s_yJ6iLMpGpbE9DEFUkQQrYw
            source_type: api_record
            title: 中国历代人物传记资料库：王得福（CBDB 690545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690545&o=json
            external_identifier: CBDB:690545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ChnrLuFdLGYw29RsKJfGjy
        subject_person_id: p_VhFRY8PhFa7xR5Z4eRm3Jo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJuM95yRvaUvHcVSMfNDWG
          claim_id: c_ChnrLuFdLGYw29RsKJfGjy
          source_id: s_yJ6iLMpGpbE9DEFUkQQrYw
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
        id: c_ocfLxbp5YLgMxwoJ74MNEp
        subject_person_id: p_VhFRY8PhFa7xR5Z4eRm3Jo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1315年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_74QHNwWjtBCdH9HYJCjrnE
          claim_id: c_ocfLxbp5YLgMxwoJ74MNEp
          source_id: s_yJ6iLMpGpbE9DEFUkQQrYw
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
        id: c_o3aJfK93T2jx4hvw8EQLQ7
        subject_person_id: p_VhFRY8PhFa7xR5Z4eRm3Jo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得福（1236年—1315年），元人物。籍贯太原路。（中国历代人物传记资料库 CBDB 690545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bszN1Aw7kAq9tyO8M58Erx
          claim_id: c_o3aJfK93T2jx4hvw8EQLQ7
          source_id: s_yJ6iLMpGpbE9DEFUkQQrYw
          stance: supports
          locator: CBDB:690545
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

# 王得福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得福 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1315年 | accepted |
| bio.summary | 王得福（1236年—1315年），元人物。籍贯太原路。（中国历代人物传记资料库 CBDB 690545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得福（CBDB 690545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690545&o=json)
