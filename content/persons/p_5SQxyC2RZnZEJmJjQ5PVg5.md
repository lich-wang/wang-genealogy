---
schema: wang-person/v1
id: p_5SQxyC2RZnZEJmJjQ5PVg5
status: active
merged_into: null
display_name: 王文信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FhxDTdHg6pCZyUfKMjdQCy
        subject_person_id: p_5SQxyC2RZnZEJmJjQ5PVg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J61GmQ9XZNGvtSb1gY2dkL
          claim_id: c_FhxDTdHg6pCZyUfKMjdQCy
          source_id: s_HZbJwm8hG8TCyt6Gkantay
          stance: supports
          locator: CBDB:27721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27721）
          source: &a1
            id: s_HZbJwm8hG8TCyt6Gkantay
            source_type: api_record
            title: 中国历代人物传记资料库：王文信（CBDB 27721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27721&o=json
            external_identifier: CBDB:27721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K87i3DeJkhq23bF3LrHT4X
        subject_person_id: p_5SQxyC2RZnZEJmJjQ5PVg5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文信，宋人物。身份为叛臣。（中国历代人物传记资料库 CBDB 27721）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pph3_tOK_YN71Cil1mgWG1
          claim_id: c_K87i3DeJkhq23bF3LrHT4X
          source_id: s_HZbJwm8hG8TCyt6Gkantay
          stance: supports
          locator: CBDB:27721
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

# 王文信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文信 | accepted |
| bio.summary | 王文信，宋人物。身份为叛臣。（中国历代人物传记资料库 CBDB 27721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文信（CBDB 27721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27721&o=json)
