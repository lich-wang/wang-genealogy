---
schema: wang-person/v1
id: p_hsYNnVtrkMQLjStCa9Eq2b
status: active
merged_into: null
display_name: 王建太
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y7Ub9iyiqB5wgh5q5vpwXH
        subject_person_id: p_hsYNnVtrkMQLjStCa9Eq2b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建太
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6TZdRFB8MNr5CpuqbkMjT
          claim_id: c_Y7Ub9iyiqB5wgh5q5vpwXH
          source_id: s_47zef97XLrWG39wefH4Evy
          stance: supports
          locator: CBDB:555097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555097）
          source: &a1
            id: s_47zef97XLrWG39wefH4Evy
            source_type: api_record
            title: 中国历代人物传记资料库：王建太（CBDB 555097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555097&o=json
            external_identifier: CBDB:555097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WTGXKfUCzM3GdNXhGkZTEG
        subject_person_id: p_hsYNnVtrkMQLjStCa9Eq2b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建太，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pDeUWthKye76d_FGuS-cRN
          claim_id: c_WTGXKfUCzM3GdNXhGkZTEG
          source_id: s_47zef97XLrWG39wefH4Evy
          stance: supports
          locator: CBDB:555097
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
        id: c_fi_-s0NLGio6_1bBzrLtHr
        subject_person_id: p_hsYNnVtrkMQLjStCa9Eq2b
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AyoDV7hQJ1E9JYkEHM1v1k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTDQZ0ve6lscdS9aqWQoaR
          claim_id: c_fi_-s0NLGio6_1bBzrLtHr
          source_id: s_AynOFoRkmMKz22EmJkOs64
          stance: supports
          locator: 南陽府志，lgid=878687：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AynOFoRkmMKz22EmJkOs64
            source_type: api_record
            title: 中国历代人物传记资料库：姚氏(王建太妻)（CBDB 555098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555098&o=json
            external_identifier: CBDB:555098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AyoDV7hQJ1E9JYkEHM1v1k
        status: active
        display_name: 姚氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王建太

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建太 | accepted |
| bio.summary | 王建太，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AyoDV7hQJ1E9JYkEHM1v1k | 姚氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建太（CBDB 555097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555097&o=json)
- [中国历代人物传记资料库：姚氏(王建太妻)（CBDB 555098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555098&o=json)
