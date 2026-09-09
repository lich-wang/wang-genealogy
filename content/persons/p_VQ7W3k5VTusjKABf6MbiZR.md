---
schema: wang-person/v1
id: p_VQ7W3k5VTusjKABf6MbiZR
status: active
merged_into: null
display_name: 王煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vKSj5mVxuAMNL8jxWFV7FY
        subject_person_id: p_VQ7W3k5VTusjKABf6MbiZR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WcySuPMCF2PE41kt8BVb1x
          claim_id: c_vKSj5mVxuAMNL8jxWFV7FY
          source_id: s_GYuz4qa4Xws4tVoJw3GQWu
          stance: supports
          locator: CBDB:283526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283526）
          source: &a1
            id: s_GYuz4qa4Xws4tVoJw3GQWu
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 283526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283526&o=json
            external_identifier: CBDB:283526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyPw6B1L2Dx7sTxuuT3Tvg
        subject_person_id: p_VQ7W3k5VTusjKABf6MbiZR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QaDgHP3CNMotWYoVPg1up7
          claim_id: c_GyPw6B1L2Dx7sTxuuT3Tvg
          source_id: s_GYuz4qa4Xws4tVoJw3GQWu
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

# 王煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 283526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283526&o=json)
