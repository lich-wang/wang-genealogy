---
schema: wang-person/v1
id: p_8XtTa11MPaSMjuGbv1Ed9Y
status: active
merged_into: null
display_name: 王守訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7UszxvFaPbFteciqZxBiY
        subject_person_id: p_8XtTa11MPaSMjuGbv1Ed9Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZLMAC2P1R328FNGy92wxhi
          claim_id: c_C7UszxvFaPbFteciqZxBiY
          source_id: s_aA3AMhLpb4TLLv4CsBnddQ
          stance: supports
          locator: CBDB:209208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209208）
          source: &a1
            id: s_aA3AMhLpb4TLLv4CsBnddQ
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 209208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json
            external_identifier: CBDB:209208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LhfMW5ngE5qMb5TpJ6NTXd
        subject_person_id: p_8XtTa11MPaSMjuGbv1Ed9Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訓，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VAy8ulVK1lrzU9TnYNJfbq
          claim_id: c_LhfMW5ngE5qMb5TpJ6NTXd
          source_id: s_aA3AMhLpb4TLLv4CsBnddQ
          stance: supports
          locator: CBDB:209208
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

# 王守訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守訓 | accepted |
| bio.summary | 王守訓，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守訓（CBDB 209208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json)
