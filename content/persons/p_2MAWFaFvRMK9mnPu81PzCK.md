---
schema: wang-person/v1
id: p_2MAWFaFvRMK9mnPu81PzCK
status: active
merged_into: null
display_name: 王淦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ6nC9UL8RcfVecbZLk7dn
        subject_person_id: p_2MAWFaFvRMK9mnPu81PzCK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTGE43MELh2L2PVyBsSc5c
          claim_id: c_YQ6nC9UL8RcfVecbZLk7dn
          source_id: s_stU1NJfG9fKJg7B7r9VxaH
          stance: supports
          locator: CBDB:191171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191171）
          source: &a1
            id: s_stU1NJfG9fKJg7B7r9VxaH
            source_type: api_record
            title: 中国历代人物传记资料库：王淦（CBDB 191171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191171&o=json
            external_identifier: CBDB:191171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_m6oANKi8xMeTRGbmTFFg6R
        subject_person_id: p_2MAWFaFvRMK9mnPu81PzCK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 771年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDPAEzozENqeerFDiJYUS3
          claim_id: c_m6oANKi8xMeTRGbmTFFg6R
          source_id: s_stU1NJfG9fKJg7B7r9VxaH
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
        id: c_xzL7PceSgcFkz2wT66b5v2
        subject_person_id: p_2MAWFaFvRMK9mnPu81PzCK
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
        - id: cs_6rUVTSCvCCsDPdPXGdHTHP
          claim_id: c_xzL7PceSgcFkz2wT66b5v2
          source_id: s_stU1NJfG9fKJg7B7r9VxaH
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

# 王淦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淦 | accepted |
| death.date | 771年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淦（CBDB 191171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191171&o=json)
