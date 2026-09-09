---
schema: wang-person/v1
id: p_M4WmCUiPsHDBstfh4JLGAe
status: active
merged_into: null
display_name: 王偘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sJTRBny3jsFng4UUWzj6h3
        subject_person_id: p_M4WmCUiPsHDBstfh4JLGAe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WEztu2FmDqzwfdzKZEE8Dj
          claim_id: c_sJTRBny3jsFng4UUWzj6h3
          source_id: s_tbJqDfuHjrFAF96NQCQZLZ
          stance: supports
          locator: CBDB:10709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10709）
          source: &a1
            id: s_tbJqDfuHjrFAF96NQCQZLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王偘（CBDB 10709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10709&o=json
            external_identifier: CBDB:10709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tB1vdwtPKt7bGwYa2AJMm4
        subject_person_id: p_M4WmCUiPsHDBstfh4JLGAe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1208年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyUGB9GPvhkE7w8aqieAze
          claim_id: c_tB1vdwtPKt7bGwYa2AJMm4
          source_id: s_tbJqDfuHjrFAF96NQCQZLZ
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
        id: c_1dK14bKi33XHtMQ9w6fFjK
        subject_person_id: p_M4WmCUiPsHDBstfh4JLGAe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1267年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EuREfDKV6birkGYEarRTsF
          claim_id: c_1dK14bKi33XHtMQ9w6fFjK
          source_id: s_tbJqDfuHjrFAF96NQCQZLZ
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
        id: c_Pq5NdFWJEop4HsSRWB4yLQ
        subject_person_id: p_M4WmCUiPsHDBstfh4JLGAe
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
        - id: cs_r7bS5TVX4eRMdiqzHytDJV
          claim_id: c_Pq5NdFWJEop4HsSRWB4yLQ
          source_id: s_tbJqDfuHjrFAF96NQCQZLZ
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

# 王偘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偘 | accepted |
| birth.date | 1208年 | accepted |
| death.date | 1267年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偘（CBDB 10709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10709&o=json)
