---
schema: wang-person/v1
id: p_i47UsMhA15jMqEZ7iDqoa7
status: active
merged_into: null
display_name: 王韋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EZ22ntBY1aHTevBsZ55uXv
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p5YSav36muKsePAFAx2L11
          claim_id: c_EZ22ntBY1aHTevBsZ55uXv
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
          stance: supports
          locator: CBDB:142621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142621）
          source: &a1
            id: s_ukzzWZC3hbEtGgUGotV5TV
            source_type: api_record
            title: 中国历代人物传记资料库：王韋（CBDB 142621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json
            external_identifier: CBDB:142621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oEYNp3BrzWpMG3QXuxjGvp
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 584年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fiVMhD6ABrNu6JRbk4F4uB
          claim_id: c_oEYNp3BrzWpMG3QXuxjGvp
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nooEXCduGiu5qfA9gdDkDQ
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGFmVQ6FswXa3955WU8tNb
          claim_id: c_nooEXCduGiu5qfA9gdDkDQ
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
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
        id: c_zxknneyj7KDf3443PFYD31
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
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
        - id: cs_7SMU5SiGKU4LLQaPyLiNFA
          claim_id: c_zxknneyj7KDf3443PFYD31
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
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

# 王韋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韋 | accepted |
| birth.date | 584年 | accepted |
| death.date | 645年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韋（CBDB 142621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json)
