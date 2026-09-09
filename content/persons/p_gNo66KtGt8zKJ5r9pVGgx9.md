---
schema: wang-person/v1
id: p_gNo66KtGt8zKJ5r9pVGgx9
status: active
merged_into: null
display_name: 王詢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_68SZXKFMbav5kX7yWyrEE5
        subject_person_id: p_gNo66KtGt8zKJ5r9pVGgx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B3cZEgx9NEFtPTHzxvJKkP
          claim_id: c_68SZXKFMbav5kX7yWyrEE5
          source_id: s_iYjJqBcqh7JAz259C5Ng1j
          stance: supports
          locator: CBDB:145697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145697）
          source: &a1
            id: s_iYjJqBcqh7JAz259C5Ng1j
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 145697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145697&o=json
            external_identifier: CBDB:145697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S21GXD4dNj21qA5JEPc1DP
        subject_person_id: p_gNo66KtGt8zKJ5r9pVGgx9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 877年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W56FAzbLpfSbYYQLL4r8KM
          claim_id: c_S21GXD4dNj21qA5JEPc1DP
          source_id: s_iYjJqBcqh7JAz259C5Ng1j
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
        id: c_D1hHF3HTPR2f3vaCWXz95V
        subject_person_id: p_gNo66KtGt8zKJ5r9pVGgx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v3Jk8fFiVv9SNHtWzCVGot
          claim_id: c_D1hHF3HTPR2f3vaCWXz95V
          source_id: s_iYjJqBcqh7JAz259C5Ng1j
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

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| death.date | 877年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詢（CBDB 145697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145697&o=json)
