---
schema: wang-person/v1
id: p_swcbVTDLNjK4ibwNhCz7N9
status: active
merged_into: null
display_name: 王綯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfzFb2ZViYFBS5U47BWyyS
        subject_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZoJtDkchBDzDKahM8Qxgjr
          claim_id: c_rfzFb2ZViYFBS5U47BWyyS
          source_id: s_39QycR8XwGdTzojBJz1dSv
          stance: supports
          locator: CBDB:1883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1883）
          source: &a1
            id: s_39QycR8XwGdTzojBJz1dSv
            source_type: api_record
            title: 中国历代人物传记资料库：王綯（CBDB 1883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1883&o=json
            external_identifier: CBDB:1883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4NyfaEYTybGBhKMaTFbqb5
        subject_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1074年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Px8EugxpT117NjJJNLLV8L
          claim_id: c_4NyfaEYTybGBhKMaTFbqb5
          source_id: s_39QycR8XwGdTzojBJz1dSv
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
        id: c_wbjv4adis2tMc2wNwH5EtG
        subject_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1137年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ooukqWwghC3bXMA7AjmJ7s
          claim_id: c_wbjv4adis2tMc2wNwH5EtG
          source_id: s_39QycR8XwGdTzojBJz1dSv
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
        id: c_FTbBHVFXahrfL4rhDJxWe8
        subject_person_id: p_swcbVTDLNjK4ibwNhCz7N9
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
        - id: cs_VpoPV4LGftgUX5Xebm9RrY
          claim_id: c_FTbBHVFXahrfL4rhDJxWe8
          source_id: s_39QycR8XwGdTzojBJz1dSv
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
        id: c_yzc7wMii2Q8gZ6BgbvjqVE
        subject_person_id: p_BKktkDBxZW36NWWhLLkpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t2TpW-PAkP5XEDzPjB6rhF
          claim_id: c_yzc7wMii2Q8gZ6BgbvjqVE
          source_id: s_K4cAAPq3xBP2LsGZ8g8G9a
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1137;1141：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K4cAAPq3xBP2LsGZ8g8G9a
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 3950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json
            external_identifier: CBDB:3950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BKktkDBxZW36NWWhLLkpwH
        status: active
        display_name: 王發
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_812UM5aI3PEHO4ugXVQZSC
        subject_person_id: p_QJiuZDhn8czZDyp4Vf7JJm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zXGtaQcII-e7nCphr1jmjZ
          claim_id: c_812UM5aI3PEHO4ugXVQZSC
          source_id: s_ZLpchdRCM82sRUMCLMNNwc
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1137;1138：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZLpchdRCM82sRUMCLMNNwc
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 45800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45800&o=json
            external_identifier: CBDB:45800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QJiuZDhn8czZDyp4Vf7JJm
        status: active
        display_name: 王世融
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綯 | accepted |
| birth.date | 1074年 | accepted |
| death.date | 1137年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BKktkDBxZW36NWWhLLkpwH | 王發 | accepted |
| ancestors | p_QJiuZDhn8czZDyp4Vf7JJm | 王世融 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發（CBDB 3950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3950&o=json)
- [中国历代人物传记资料库：王世融（CBDB 45800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45800&o=json)
- [中国历代人物传记资料库：王綯（CBDB 1883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1883&o=json)
