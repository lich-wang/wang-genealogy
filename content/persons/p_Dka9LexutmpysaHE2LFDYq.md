---
schema: wang-person/v1
id: p_Dka9LexutmpysaHE2LFDYq
status: active
merged_into: null
display_name: 王本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PA76rW4ahC355cjqB2BKGa
        subject_person_id: p_Dka9LexutmpysaHE2LFDYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZiQ7zV4Ccu4BCQZPfw81Ym
          claim_id: c_PA76rW4ahC355cjqB2BKGa
          source_id: s_hQF63mDKVn7Wa75HrAAjKf
          stance: supports
          locator: CBDB:461715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461715）
          source: &a1
            id: s_hQF63mDKVn7Wa75HrAAjKf
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 461715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461715&o=json
            external_identifier: CBDB:461715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ozyoQqdzfCWXe6AaJSJsL7
        subject_person_id: p_Dka9LexutmpysaHE2LFDYq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 461715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mT5UhDDSCHq6Lj5EZscMvF
          claim_id: c_ozyoQqdzfCWXe6AaJSJsL7
          source_id: s_hQF63mDKVn7Wa75HrAAjKf
          stance: supports
          locator: CBDB:461715
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

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | 王本，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 461715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 461715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461715&o=json)
