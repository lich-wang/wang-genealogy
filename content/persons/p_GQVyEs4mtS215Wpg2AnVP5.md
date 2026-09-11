---
schema: wang-person/v1
id: p_GQVyEs4mtS215Wpg2AnVP5
status: active
merged_into: null
display_name: 王定九
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ndG65LB92C8piggsPM9WMT
        subject_person_id: p_GQVyEs4mtS215Wpg2AnVP5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53MgBa9GWf9Dr9H618QgHa
          claim_id: c_ndG65LB92C8piggsPM9WMT
          source_id: s_S7LTRc71mPNKMEG1XkGbBJ
          stance: supports
          locator: CBDB:576098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576098）
          source: &a1
            id: s_S7LTRc71mPNKMEG1XkGbBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王定九（CBDB 576098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576098&o=json
            external_identifier: CBDB:576098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dr8dN4LEaR8e78CKCGfxvp
        subject_person_id: p_GQVyEs4mtS215Wpg2AnVP5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定九，清人物。籍贯海康，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UFAJPbe4l3-pfaHiOrIbHC
          claim_id: c_Dr8dN4LEaR8e78CKCGfxvp
          source_id: s_S7LTRc71mPNKMEG1XkGbBJ
          stance: supports
          locator: CBDB:576098
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

# 王定九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定九 | accepted |
| bio.summary | 王定九，清人物。籍贯海康，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定九（CBDB 576098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576098&o=json)
