---
schema: wang-person/v1
id: p_6a7N8sTJtEC3LEsE7YcT52
status: active
merged_into: null
display_name: 王永祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7sqhnNeNMMHWN7LWNq8d2o
        subject_person_id: p_6a7N8sTJtEC3LEsE7YcT52
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtzkKwASGFzh67LnXmQzWX
          claim_id: c_7sqhnNeNMMHWN7LWNq8d2o
          source_id: s_64MvunJC2pYFNNF5WBv7QF
          stance: supports
          locator: CBDB:555196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555196）
          source: &a1
            id: s_64MvunJC2pYFNNF5WBv7QF
            source_type: api_record
            title: 中国历代人物传记资料库：王永祥（CBDB 555196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555196&o=json
            external_identifier: CBDB:555196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gW7hq92Lgh1pRz23mHt7Qt
        subject_person_id: p_6a7N8sTJtEC3LEsE7YcT52
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
        - id: cs_dKCcZvQ5WM1GE2H2E8A9rh
          claim_id: c_gW7hq92Lgh1pRz23mHt7Qt
          source_id: s_64MvunJC2pYFNNF5WBv7QF
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
  spouses:
    - claim:
        id: c_cQ-ikdh22ST-ySqEQZF7B8
        subject_person_id: p_6a7N8sTJtEC3LEsE7YcT52
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CujNgTNvRvtrE99hAKTybZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agn_ZWZ0iAU-5i9fH_jOdj
          claim_id: c_cQ-ikdh22ST-ySqEQZF7B8
          source_id: s_tMdZyYFkAObQoeawUkoEfn
          stance: supports
          locator: 南陽府志，lgid=878688：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tMdZyYFkAObQoeawUkoEfn
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王永祥妻)（CBDB 555197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555197&o=json
            external_identifier: CBDB:555197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CujNgTNvRvtrE99hAKTybZ
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王永祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CujNgTNvRvtrE99hAKTybZ | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王永祥妻)（CBDB 555197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555197&o=json)
- [中国历代人物传记资料库：王永祥（CBDB 555196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555196&o=json)
