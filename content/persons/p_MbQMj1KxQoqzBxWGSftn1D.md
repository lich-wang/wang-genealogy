---
schema: wang-person/v1
id: p_MbQMj1KxQoqzBxWGSftn1D
status: active
merged_into: null
display_name: 王貽桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCkXEWxpnE1SLCipfNCDuu
        subject_person_id: p_MbQMj1KxQoqzBxWGSftn1D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_14RXHCvn34m9nStE11rvRs
          claim_id: c_iCkXEWxpnE1SLCipfNCDuu
          source_id: s_tBMci4887WL16RmyZdG5P3
          stance: supports
          locator: CBDB:61617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61617）
          source: &a1
            id: s_tBMci4887WL16RmyZdG5P3
            source_type: api_record
            title: 中国历代人物传记资料库：王貽桂（CBDB 61617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61617&o=json
            external_identifier: CBDB:61617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jzBT2auZC7YP1FGKBGuTM3
        subject_person_id: p_MbQMj1KxQoqzBxWGSftn1D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjwHRSr2vqZQWDHWhx2WDc
          claim_id: c_jzBT2auZC7YP1FGKBGuTM3
          source_id: s_tBMci4887WL16RmyZdG5P3
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
        id: c_1K4oFZ8oLMDuQHzBjBKD46
        subject_person_id: p_MbQMj1KxQoqzBxWGSftn1D
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
        - id: cs_q3RzhtKHMjton8W47L42Tm
          claim_id: c_1K4oFZ8oLMDuQHzBjBKD46
          source_id: s_tBMci4887WL16RmyZdG5P3
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

# 王貽桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽桂 | accepted |
| birth.date | 1751年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽桂（CBDB 61617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61617&o=json)
