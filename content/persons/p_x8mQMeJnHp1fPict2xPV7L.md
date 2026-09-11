---
schema: wang-person/v1
id: p_x8mQMeJnHp1fPict2xPV7L
status: active
merged_into: null
display_name: 王中
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxgdaexiPEEdurZmjkUE7A
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4sjR7vv6g3AJ9nzSHTxHUj
          claim_id: c_uxgdaexiPEEdurZmjkUE7A
          source_id: s_8QTQSnfdxP8A23vs42VSsj
          stance: supports
          locator: CBDB:200448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200448）
          source: &a1
            id: s_8QTQSnfdxP8A23vs42VSsj
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 200448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json
            external_identifier: CBDB:200448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4TDYKsz9Ht6U5fH8wHTLwQ
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1i5WCztiXPwA9GKgpwabei
          claim_id: c_4TDYKsz9Ht6U5fH8wHTLwQ
          source_id: s_8QTQSnfdxP8A23vs42VSsj
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
        id: c_MLDT3zwGXRqCfHb588JUWr
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中（生于1443年），明人物。明清進士進士，籍贯寧海，入仕進士。（中国历代人物传记资料库 CBDB 200448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6ZCYJGf29aMEiO5UTP3n0
          claim_id: c_MLDT3zwGXRqCfHb588JUWr
          source_id: s_8QTQSnfdxP8A23vs42VSsj
          stance: supports
          locator: CBDB:200448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Op5FC_jf765rWXpgKy6gq0
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKjVL3f5VqnIjQB-_WPe9z
          claim_id: c_Op5FC_jf765rWXpgKy6gq0
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        status: active
        display_name: 王宗曜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__sZqA190UtAwXUTzCyGvty
        subject_person_id: p_Cj6vGAMv5ZbiFFJLZpuwPf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1lKINrcmd8k_LT2uZunGj
          claim_id: c__sZqA190UtAwXUTzCyGvty
          source_id: s_Z7Cg1BCURR1JT9LcZb5siE
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z7Cg1BCURR1JT9LcZb5siE
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 258049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258049&o=json
            external_identifier: CBDB:258049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cj6vGAMv5ZbiFFJLZpuwPf
        status: active
        display_name: 王文奎
        merged_into_person_id: null
    - claim:
        id: c_uk1o9W6CHjCeS-CzUsKbOI
        subject_person_id: p_9NbEpLfAQRZh3XBJbRK4xk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P51cVcPI0TdWyaiMX8mqWM
          claim_id: c_uk1o9W6CHjCeS-CzUsKbOI
          source_id: s_c6ECLnk2zr9w6SJK4PX5WU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c6ECLnk2zr9w6SJK4PX5WU
            source_type: api_record
            title: 中国历代人物传记资料库：王公蒙（CBDB 258048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json
            external_identifier: CBDB:258048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9NbEpLfAQRZh3XBJbRK4xk
        status: active
        display_name: 王公蒙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | 王中（生于1443年），明人物。明清進士進士，籍贯寧海，入仕進士。（中国历代人物传记资料库 CBDB 200448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XAZFGAYeQkDJ8m4Kt7zkQf | 王宗曜 | accepted |
| ancestors | p_Cj6vGAMv5ZbiFFJLZpuwPf | 王文奎 | accepted |
| ancestors | p_9NbEpLfAQRZh3XBJbRK4xk | 王公蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公蒙（CBDB 258048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 258049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258049&o=json)
- [中国历代人物传记资料库：王中（CBDB 200448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json)
- [中国历代人物传记资料库：王宗曜（CBDB 258050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json)
