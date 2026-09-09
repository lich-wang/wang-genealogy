---
schema: wang-person/v1
id: p_AUsuX89VqqqJmuxd4qHfrt
status: active
merged_into: null
display_name: 王丹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Liev8yuYBQGiCmaSZNSJGk
        subject_person_id: p_AUsuX89VqqqJmuxd4qHfrt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ZjafhGF2Qvm9uhjJiFtPL
          claim_id: c_Liev8yuYBQGiCmaSZNSJGk
          source_id: s_nF3uJcQBrfnLv8PJpX5YvJ
          stance: supports
          locator: CBDB:635751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635751）
          source: &a1
            id: s_nF3uJcQBrfnLv8PJpX5YvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王丹（CBDB 635751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635751&o=json
            external_identifier: CBDB:635751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYNeM1MNkztUMKL15UcABR
        subject_person_id: p_AUsuX89VqqqJmuxd4qHfrt
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
        - id: cs_oFGbF9D4XVzsBWJ1jN2kLa
          claim_id: c_BYNeM1MNkztUMKL15UcABR
          source_id: s_nF3uJcQBrfnLv8PJpX5YvJ
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

# 王丹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丹（CBDB 635751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635751&o=json)
