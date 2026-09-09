---
schema: wang-person/v1
id: p_w6XjBFEDhAD3HXH3PtCzob
status: active
merged_into: null
display_name: 王維光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vXqb5khsmtSP1A9YYa6Fi4
        subject_person_id: p_w6XjBFEDhAD3HXH3PtCzob
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDkpanL6YPhN8xn74ykMPX
          claim_id: c_vXqb5khsmtSP1A9YYa6Fi4
          source_id: s_aBg25QFUTUBtAUfczBYhsX
          stance: supports
          locator: CBDB:69397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69397）
          source: &a1
            id: s_aBg25QFUTUBtAUfczBYhsX
            source_type: api_record
            title: 中国历代人物传记资料库：王維光（CBDB 69397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69397&o=json
            external_identifier: CBDB:69397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fkYqBYZGzRY5BR1k6s3uha
        subject_person_id: p_w6XjBFEDhAD3HXH3PtCzob
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3z6MEWqD1JkFpgmVNDiieM
          claim_id: c_fkYqBYZGzRY5BR1k6s3uha
          source_id: s_aBg25QFUTUBtAUfczBYhsX
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
        id: c_zi5JCmdLyTaXJzzwXEDA7r
        subject_person_id: p_w6XjBFEDhAD3HXH3PtCzob
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
        - id: cs_DaH5yVh18ykAza2u1oPqWf
          claim_id: c_zi5JCmdLyTaXJzzwXEDA7r
          source_id: s_aBg25QFUTUBtAUfczBYhsX
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

# 王維光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維光 | accepted |
| death.date | 1804年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維光（CBDB 69397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69397&o=json)
