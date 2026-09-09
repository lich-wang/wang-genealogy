---
schema: wang-person/v1
id: p_qADtxjrVEChTrGk5M7bGg2
status: active
merged_into: null
display_name: 王雯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JjQ2eBuVgQU9j6wx6EfR7B
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e2DcvAvG2kDMfA93GvJx97
          claim_id: c_JjQ2eBuVgQU9j6wx6EfR7B
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: CBDB:198731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198731）
          source: &a1
            id: s_zRnrEasJ9KGuHqrF8D8JQK
            source_type: api_record
            title: 中国历代人物传记资料库：王雯（CBDB 198731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json
            external_identifier: CBDB:198731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zQAXPwJmq8efAjHnpSWEYd
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMxHfxk678B3h1LzfkLMPB
          claim_id: c_zQAXPwJmq8efAjHnpSWEYd
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nKCbH54D77ZdMeQLPWbwKE
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_usAkKnz3YNAyqRd5z6k99E
          claim_id: c_nKCbH54D77ZdMeQLPWbwKE
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
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

# 王雯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雯 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雯（CBDB 198731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json)
