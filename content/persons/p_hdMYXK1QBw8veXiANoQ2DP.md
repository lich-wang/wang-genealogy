---
schema: wang-person/v1
id: p_hdMYXK1QBw8veXiANoQ2DP
status: active
merged_into: null
display_name: 王弗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_58BKQvwp4q9QSn6ftBE4d4
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z6xA233pLv8BDTo7QJKCRt
          claim_id: c_58BKQvwp4q9QSn6ftBE4d4
          source_id: s_VP3JmAxwvwyRdPW2JMkN4U
          stance: supports
          locator: CBDB:5108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（5108）
          source: &a1
            id: s_VP3JmAxwvwyRdPW2JMkN4U
            source_type: api_record
            title: 中国历代人物传记资料库：王弗（CBDB 5108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5108&o=json
            external_identifier: CBDB:5108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xwKsbkXaWYe2dsJ81LSxL7
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1039年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_biYeAcTd82AYStLmDeS7fw
          claim_id: c_xwKsbkXaWYe2dsJ81LSxL7
          source_id: s_VP3JmAxwvwyRdPW2JMkN4U
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
        id: c_s2ERb3afCJm229yrTgdEMe
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpz7rHKfY6MYgTPesMQT9c
          claim_id: c_s2ERb3afCJm229yrTgdEMe
          source_id: s_VP3JmAxwvwyRdPW2JMkN4U
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
        id: c_ftpgehqPB5Q4nY166AniFp
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
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
        - id: cs_w7dt1tAis18bGuBzC7oY2U
          claim_id: c_ftpgehqPB5Q4nY166AniFp
          source_id: s_VP3JmAxwvwyRdPW2JMkN4U
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

# 王弗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弗 | accepted |
| birth.date | 1039年 | accepted |
| death.date | 1065年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弗（CBDB 5108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5108&o=json)
