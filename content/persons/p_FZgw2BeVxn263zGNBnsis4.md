---
schema: wang-person/v1
id: p_FZgw2BeVxn263zGNBnsis4
status: active
merged_into: null
display_name: 王新豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cTm7j2zscAvW7rK6HDjpB
        subject_person_id: p_FZgw2BeVxn263zGNBnsis4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L29cvKeMs8Pt1t7Ytt53ar
          claim_id: c_8cTm7j2zscAvW7rK6HDjpB
          source_id: s_Qr8dBKEwe7L9hLBV1m1Cu9
          stance: supports
          locator: CBDB:383199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383199）
          source: &a1
            id: s_Qr8dBKEwe7L9hLBV1m1Cu9
            source_type: api_record
            title: 中国历代人物传记资料库：王新豐（CBDB 383199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383199&o=json
            external_identifier: CBDB:383199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pbgjN4888Kp8SCJv5XFsEX
        subject_person_id: p_FZgw2BeVxn263zGNBnsis4
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
        - id: cs_XRX421m5eysYvMRC16MtZ1
          claim_id: c_pbgjN4888Kp8SCJv5XFsEX
          source_id: s_Qr8dBKEwe7L9hLBV1m1Cu9
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

# 王新豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新豐 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新豐（CBDB 383199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383199&o=json)
