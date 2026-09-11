---
schema: wang-person/v1
id: p_HsXZiVC5cACnAa2snywDdb
status: active
merged_into: null
display_name: 王泌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YFJ9GA41Wwg17teCRG4R4g
        subject_person_id: p_HsXZiVC5cACnAa2snywDdb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cFFKtM8AANKCF8ojRTLAAJ
          claim_id: c_YFJ9GA41Wwg17teCRG4R4g
          source_id: s_PAur1JbYfF5MNQK1MMZGYQ
          stance: supports
          locator: CBDB:284250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284250）
          source: &a1
            id: s_PAur1JbYfF5MNQK1MMZGYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 284250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json
            external_identifier: CBDB:284250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yfb8r9KZ9FC2KRy8CFuGvp
        subject_person_id: p_HsXZiVC5cACnAa2snywDdb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pwmykLbkdBX0yR_31BAP9c
          claim_id: c_yfb8r9KZ9FC2KRy8CFuGvp
          source_id: s_PAur1JbYfF5MNQK1MMZGYQ
          stance: supports
          locator: CBDB:284250
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

# 王泌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泌 | accepted |
| bio.summary | 王泌，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泌（CBDB 284250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json)
