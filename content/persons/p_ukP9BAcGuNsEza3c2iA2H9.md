---
schema: wang-person/v1
id: p_ukP9BAcGuNsEza3c2iA2H9
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uLR36Xx4fCVKS3NpY2Mk2Z
        subject_person_id: p_ukP9BAcGuNsEza3c2iA2H9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_inMRXfjBcHKPrpPUABrWTi
          claim_id: c_uLR36Xx4fCVKS3NpY2Mk2Z
          source_id: s_eVU82GFzk7rRRVG69CPv6D
          stance: supports
          locator: CBDB:34099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34099）
          source: &a1
            id: s_eVU82GFzk7rRRVG69CPv6D
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 34099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34099&o=json
            external_identifier: CBDB:34099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94EyL1BQYtJLkqzFW7n7Rf
        subject_person_id: p_ukP9BAcGuNsEza3c2iA2H9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖，宋人物。籍贯梁縣。（中国历代人物传记资料库 CBDB 34099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CbvrYYb_H9dqeLr8QvuZtR
          claim_id: c_94EyL1BQYtJLkqzFW7n7Rf
          source_id: s_eVU82GFzk7rRRVG69CPv6D
          stance: supports
          locator: CBDB:34099
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | 王霖，宋人物。籍贯梁縣。（中国历代人物传记资料库 CBDB 34099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 34099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34099&o=json)
