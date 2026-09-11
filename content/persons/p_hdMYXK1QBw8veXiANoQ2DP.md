---
schema: wang-person/v1
id: p_hdMYXK1QBw8veXiANoQ2DP
status: active
merged_into: null
display_name: 王弗
revision: 2
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
          text: 王弗（1039年—1065年），宋人物。籍贯青神，入仕封贈。（中国历代人物传记资料库 CBDB 5108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r0Q2rrfEHos91nFQLaKS3F
          claim_id: c_ftpgehqPB5Q4nY166AniFp
          source_id: s_VP3JmAxwvwyRdPW2JMkN4U
          stance: supports
          locator: CBDB:5108
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
  spouses:
    - claim:
        id: c_KloH-PkpzclhhCtq61yY__
        subject_person_id: p_hdMYXK1QBw8veXiANoQ2DP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6bzjMpX2xVBeapMBqFLx24
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYeh-BALY6mo7H1CLl_NE-
          claim_id: c_KloH-PkpzclhhCtq61yY__
          source_id: s_VI5DJ_-v1IlqelMh78jIWH
          stance: supports
          locator: 宋人傳記資料索引(電子版)，23552;23554：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VI5DJ_-v1IlqelMh78jIWH
            source_type: api_record
            title: 中国历代人物传记资料库：蘇軾（CBDB 3767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3767&o=json
            external_identifier: CBDB:3767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6bzjMpX2xVBeapMBqFLx24
        status: active
        display_name: 蘇軾
        merged_into_person_id: null
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
| bio.summary | 王弗（1039年—1065年），宋人物。籍贯青神，入仕封贈。（中国历代人物传记资料库 CBDB 5108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6bzjMpX2xVBeapMBqFLx24 | 蘇軾 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇軾（CBDB 3767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3767&o=json)
- [中国历代人物传记资料库：王弗（CBDB 5108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5108&o=json)
