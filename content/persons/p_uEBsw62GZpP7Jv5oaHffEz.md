---
schema: wang-person/v1
id: p_uEBsw62GZpP7Jv5oaHffEz
status: active
merged_into: null
display_name: 王曾
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujdPmhchYwp9UspA9qfBXs
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tMKmM3S6vh1eWGHcvoubVS
          claim_id: c_ujdPmhchYwp9UspA9qfBXs
          source_id: s_ALMNzYXANCKK1erRJwiTib
          stance: supports
          locator: CBDB:1901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1901）
          source: &a1
            id: s_ALMNzYXANCKK1erRJwiTib
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 1901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1901&o=json
            external_identifier: CBDB:1901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xo98HuVmCZ7QxYcnNrvZKJ
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 978年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1JZ7mZY44p3UGZhM7qiFkz
          claim_id: c_xo98HuVmCZ7QxYcnNrvZKJ
          source_id: s_ALMNzYXANCKK1erRJwiTib
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
        id: c_au3GwS7hB6wSE24CMxymWZ
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6L31BCrQ6e4WnV1EGhWaY
          claim_id: c_au3GwS7hB6wSE24CMxymWZ
          source_id: s_ALMNzYXANCKK1erRJwiTib
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
        id: c_dN6kMMFJoDZkeEYgdY1KNM
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
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
        - id: cs_53AEjbWw3S5afBYUknAGN9
          claim_id: c_dN6kMMFJoDZkeEYgdY1KNM
          source_id: s_ALMNzYXANCKK1erRJwiTib
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jkfsPxv1Y2zUSql6GqUpkP
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDW_uI1L7zuUS4mt8xRG9Q
          claim_id: c_jkfsPxv1Y2zUSql6GqUpkP
          source_id: s_ALMNzYXANCKK1erRJwiTib
          stance: supports
          locator: CBDB 双向互证（父 王兼皇 ⇄ 子 王曾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        status: active
        display_name: 王兼皇
        merged_into_person_id: null
  children:
    - claim:
        id: c_LAUzvIsRChsvxzTtC8ghY-
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AL68DmCpuacJ2nw7znarWd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WzTgzMHeJlao-7kFZ747bM
          claim_id: c_LAUzvIsRChsvxzTtC8ghY-
          source_id: s_gjJQFr6zz286b7For9mEcF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，944;946：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gjJQFr6zz286b7For9mEcF
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 38331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38331&o=json
            external_identifier: CBDB:38331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AL68DmCpuacJ2nw7znarWd
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_9gBbh-bcs8wtvEQM1ZjfxX
        subject_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNocUfmi2fcu8ZuRLW8Mi3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arrrOkbfK6RvcTJKi6ot0K
          claim_id: c_9gBbh-bcs8wtvEQM1ZjfxX
          source_id: s_JNLMCi8A7kpJji8bQJ8nCR
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JNLMCi8A7kpJji8bQJ8nCR
            source_type: api_record
            title: 中国历代人物传记资料库：王縡（CBDB 119721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119721&o=json
            external_identifier: CBDB:119721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hNocUfmi2fcu8ZuRLW8Mi3
        status: active
        display_name: 王縡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| birth.date | 978年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pp7M9RgnjpKf6F2mKVs4Gk | 王兼皇 | accepted |
| children | p_AL68DmCpuacJ2nw7znarWd | 王紹 | accepted |
| children | p_hNocUfmi2fcu8ZuRLW8Mi3 | 王縡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 1901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1901&o=json)
- [中国历代人物传记资料库：王紹（CBDB 38331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38331&o=json)
- [中国历代人物传记资料库：王縡（CBDB 119721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119721&o=json)
