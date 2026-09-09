---
schema: wang-person/v1
id: p_FXZ6Y2en615FfGax5vg5pH
status: active
merged_into: null
display_name: 王正璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B23jxsrMhrmzHMJqSS3VM5
        subject_person_id: p_FXZ6Y2en615FfGax5vg5pH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5RD19AEKeysqNJuxkJ77Ya
          claim_id: c_B23jxsrMhrmzHMJqSS3VM5
          source_id: s_nKw9CLULN49LLSmdPCmDky
          stance: supports
          locator: CBDB:71454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71454）
          source: &a1
            id: s_nKw9CLULN49LLSmdPCmDky
            source_type: api_record
            title: 中国历代人物传记资料库：王正璽（CBDB 71454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71454&o=json
            external_identifier: CBDB:71454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4PJWL85CVAyjWS72DG24bU
        subject_person_id: p_FXZ6Y2en615FfGax5vg5pH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHpui86AuAb1Ei7vDF52QD
          claim_id: c_4PJWL85CVAyjWS72DG24bU
          source_id: s_nKw9CLULN49LLSmdPCmDky
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
        id: c_1RGKMRcTQ4L19FsRZcLY9y
        subject_person_id: p_FXZ6Y2en615FfGax5vg5pH
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
        - id: cs_ZU7nYruYzzKuZHuCXLppB8
          claim_id: c_1RGKMRcTQ4L19FsRZcLY9y
          source_id: s_nKw9CLULN49LLSmdPCmDky
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

# 王正璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正璽 | accepted |
| birth.date | 1825年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正璽（CBDB 71454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71454&o=json)
