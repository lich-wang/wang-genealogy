---
schema: wang-person/v1
id: p_Y3Qp9sye7MzF1mRBRgHk1u
status: active
merged_into: null
display_name: 王彥弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GsrpavY5SBjJLvu2qLoUvQ
        subject_person_id: p_Y3Qp9sye7MzF1mRBRgHk1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fva1ikzjoJwm8DaU19GUto
          claim_id: c_GsrpavY5SBjJLvu2qLoUvQ
          source_id: s_8y5oiFbzbC5seBQQtEYqr3
          stance: supports
          locator: CBDB:37638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37638）
          source: &a1
            id: s_8y5oiFbzbC5seBQQtEYqr3
            source_type: api_record
            title: 中国历代人物传记资料库：王彥弼（CBDB 37638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37638&o=json
            external_identifier: CBDB:37638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iCcGoLkKBrzF3YM4fpYhV
        subject_person_id: p_Y3Qp9sye7MzF1mRBRgHk1u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥弼，宋人物。籍贯博野。（中国历代人物传记资料库 CBDB 37638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wyfRpwIEe2W73cr3JZzOnz
          claim_id: c_8iCcGoLkKBrzF3YM4fpYhV
          source_id: s_8y5oiFbzbC5seBQQtEYqr3
          stance: supports
          locator: CBDB:37638
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

# 王彥弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥弼 | accepted |
| bio.summary | 王彥弼，宋人物。籍贯博野。（中国历代人物传记资料库 CBDB 37638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥弼（CBDB 37638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37638&o=json)
