---
schema: wang-person/v1
id: p_JjoQAGTzHNCyvCTMEUaPR1
status: active
merged_into: null
display_name: 王渙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jePGAoxmZMJGBQ6FEGZUti
        subject_person_id: p_JjoQAGTzHNCyvCTMEUaPR1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8SQYq7116fErCWf8o2o2E
          claim_id: c_jePGAoxmZMJGBQ6FEGZUti
          source_id: s_ANVU7FvT6qM4MfBLyySAyd
          stance: supports
          locator: CBDB:215750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215750）
          source: &a1
            id: s_ANVU7FvT6qM4MfBLyySAyd
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 215750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json
            external_identifier: CBDB:215750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9jjgBXPtAcsKp8SyNsaVA
        subject_person_id: p_JjoQAGTzHNCyvCTMEUaPR1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215750）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qie57Yo9cFT0r7gcP7PR3H
          claim_id: c_N9jjgBXPtAcsKp8SyNsaVA
          source_id: s_ANVU7FvT6qM4MfBLyySAyd
          stance: supports
          locator: CBDB:215750
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

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | 王渙，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 215750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json)
