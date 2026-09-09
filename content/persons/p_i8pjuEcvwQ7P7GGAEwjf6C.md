---
schema: wang-person/v1
id: p_i8pjuEcvwQ7P7GGAEwjf6C
status: active
merged_into: null
display_name: 王家勛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QL3dPG4Bssy5FsFevmYS5A
        subject_person_id: p_i8pjuEcvwQ7P7GGAEwjf6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39pJdvnu5khGv8mxvJVLGc
          claim_id: c_QL3dPG4Bssy5FsFevmYS5A
          source_id: s_71BknMCQh379mFUTduxcDx
          stance: supports
          locator: CBDB:71970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71970）
          source: &a1
            id: s_71BknMCQh379mFUTduxcDx
            source_type: api_record
            title: 中国历代人物传记资料库：王家勛（CBDB 71970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71970&o=json
            external_identifier: CBDB:71970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a6d4SZp1oV6pfnnDUakfy2
        subject_person_id: p_i8pjuEcvwQ7P7GGAEwjf6C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ra63TF91txprjB2ZRjpER6
          claim_id: c_a6d4SZp1oV6pfnnDUakfy2
          source_id: s_71BknMCQh379mFUTduxcDx
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
        id: c_Qnyt6BYUAmq9NJNL8pSiys
        subject_person_id: p_i8pjuEcvwQ7P7GGAEwjf6C
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
        - id: cs_RJCgKREMPeL4HL4yw639ZE
          claim_id: c_Qnyt6BYUAmq9NJNL8pSiys
          source_id: s_71BknMCQh379mFUTduxcDx
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

# 王家勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家勛 | accepted |
| birth.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家勛（CBDB 71970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71970&o=json)
