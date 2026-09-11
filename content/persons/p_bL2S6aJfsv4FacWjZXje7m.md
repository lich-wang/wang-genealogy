---
schema: wang-person/v1
id: p_bL2S6aJfsv4FacWjZXje7m
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L22mEGJjMPB9abU71dQPFC
        subject_person_id: p_bL2S6aJfsv4FacWjZXje7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xKPRqVeMTnEyf81hM6cujL
          claim_id: c_L22mEGJjMPB9abU71dQPFC
          source_id: s_hsK92qRe7ZUq12SLVwBakR
          stance: supports
          locator: CBDB:698590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698590）
          source: &a1
            id: s_hsK92qRe7ZUq12SLVwBakR
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 698590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698590&o=json
            external_identifier: CBDB:698590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ay229kqu3keGSXkxE6ydFs
        subject_person_id: p_bL2S6aJfsv4FacWjZXje7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。籍贯婺源，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UWIMYIjwOyvGpu5y5INscM
          claim_id: c_Ay229kqu3keGSXkxE6ydFs
          source_id: s_hsK92qRe7ZUq12SLVwBakR
          stance: supports
          locator: CBDB:698590
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。籍贯婺源，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 698590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698590&o=json)
