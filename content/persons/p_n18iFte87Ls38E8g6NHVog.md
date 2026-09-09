---
schema: wang-person/v1
id: p_n18iFte87Ls38E8g6NHVog
status: active
merged_into: null
display_name: 王延德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DkrLq6DMgv8NZxSCE1eEJ
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7p4W8HUEj6jhao3GJ9Gt77
          claim_id: c_6DkrLq6DMgv8NZxSCE1eEJ
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
          stance: supports
          locator: CBDB:39400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39400）
          source: &a1
            id: s_5mjjLAZ2p4uzm8At9YJQKc
            source_type: api_record
            title: 中国历代人物传记资料库：王延德（CBDB 39400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39400&o=json
            external_identifier: CBDB:39400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A4zXyaWX5E5Q6MAoSoffiU
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 936年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ApeGgDttQfMpoBEmgtD574
          claim_id: c_A4zXyaWX5E5Q6MAoSoffiU
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
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
        id: c_r623R4jW8mYzsKna2fT12K
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsFMaM37ZVNTZxn7oQineA
          claim_id: c_r623R4jW8mYzsKna2fT12K
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
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
        id: c_a9Und5Vz5BKoYaktguAHyj
        subject_person_id: p_n18iFte87Ls38E8g6NHVog
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bcVioqYL2myu51vu4g8Ng2
          claim_id: c_a9Und5Vz5BKoYaktguAHyj
          source_id: s_5mjjLAZ2p4uzm8At9YJQKc
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

# 王延德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延德 | accepted |
| birth.date | 936年 | accepted |
| death.date | 999年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延德（CBDB 39400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39400&o=json)
