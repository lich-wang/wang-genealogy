---
schema: wang-person/v1
id: p_jsrzPr1s6SghQRg87icvHZ
status: active
merged_into: null
display_name: 王翮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmMciaZCoxwV8GsMd54cYo
        subject_person_id: p_jsrzPr1s6SghQRg87icvHZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_63NvfmwzZo2TzaTjf359tC
          claim_id: c_BmMciaZCoxwV8GsMd54cYo
          source_id: s_1qE4nyPDVdkPDj17RgmEMu
          stance: supports
          locator: CBDB:492606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492606）
          source: &a1
            id: s_1qE4nyPDVdkPDj17RgmEMu
            source_type: api_record
            title: 中国历代人物传记资料库：王翮（CBDB 492606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492606&o=json
            external_identifier: CBDB:492606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1tVTMgSyeH1KuL7GKGsxjD
        subject_person_id: p_jsrzPr1s6SghQRg87icvHZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翮，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVm931Zc02dKYHnfudPD3R
          claim_id: c_1tVTMgSyeH1KuL7GKGsxjD
          source_id: s_1qE4nyPDVdkPDj17RgmEMu
          stance: supports
          locator: CBDB:492606
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

# 王翮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翮 | accepted |
| bio.summary | 王翮，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翮（CBDB 492606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492606&o=json)
