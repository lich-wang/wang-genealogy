---
schema: wang-person/v1
id: p_NhKpLdQq12fLo7PXnhALiH
status: active
merged_into: null
display_name: 王鉞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eghS1Nth1o5i4FByBkJ8mj
        subject_person_id: p_NhKpLdQq12fLo7PXnhALiH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CdxcfmRo4fV4pWTVSj9V72
          claim_id: c_eghS1Nth1o5i4FByBkJ8mj
          source_id: s_9fSEUnJ5P4ELEHB2GR8Xzn
          stance: supports
          locator: CBDB:69445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69445）
          source: &a1
            id: s_9fSEUnJ5P4ELEHB2GR8Xzn
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 69445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69445&o=json
            external_identifier: CBDB:69445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9DeL2x1C6AQC3rAEMMcSNX
        subject_person_id: p_NhKpLdQq12fLo7PXnhALiH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjZAbR88oLdYzj1ckA6uxc
          claim_id: c_9DeL2x1C6AQC3rAEMMcSNX
          source_id: s_9fSEUnJ5P4ELEHB2GR8Xzn
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
        id: c_3CUjoTGXZMRTMwqL8Ln3z5
        subject_person_id: p_NhKpLdQq12fLo7PXnhALiH
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
        - id: cs_pA3tjdkVZrNQ9fdMeQeDSn
          claim_id: c_3CUjoTGXZMRTMwqL8Ln3z5
          source_id: s_9fSEUnJ5P4ELEHB2GR8Xzn
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

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| death.date | 1678年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 69445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69445&o=json)
