---
schema: wang-person/v1
id: p_WF5S4dEAwfDhNjHftdHMEH
status: active
merged_into: null
display_name: 王聊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bB8awBfEFPWvRAcd8qnaEn
        subject_person_id: p_WF5S4dEAwfDhNjHftdHMEH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ji6WUcA6t6a7zi3G5C6QEJ
          claim_id: c_bB8awBfEFPWvRAcd8qnaEn
          source_id: s_fjAwGuaABz1yr9zN8JYMDn
          stance: supports
          locator: CBDB:71182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71182）
          source: &a1
            id: s_fjAwGuaABz1yr9zN8JYMDn
            source_type: api_record
            title: 中国历代人物传记资料库：王聊（CBDB 71182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71182&o=json
            external_identifier: CBDB:71182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qEnDAtwQwjCPTbBX5SVWtw
        subject_person_id: p_WF5S4dEAwfDhNjHftdHMEH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdGQqJdmxczmoAVN46qBYe
          claim_id: c_qEnDAtwQwjCPTbBX5SVWtw
          source_id: s_fjAwGuaABz1yr9zN8JYMDn
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
        id: c_RcYvWcHme3Pa9XfK8SKrWf
        subject_person_id: p_WF5S4dEAwfDhNjHftdHMEH
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
        - id: cs_VzeNx7b7jrRMdr3XUPEdhR
          claim_id: c_RcYvWcHme3Pa9XfK8SKrWf
          source_id: s_fjAwGuaABz1yr9zN8JYMDn
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

# 王聊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聊 | accepted |
| death.date | 1784年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聊（CBDB 71182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71182&o=json)
