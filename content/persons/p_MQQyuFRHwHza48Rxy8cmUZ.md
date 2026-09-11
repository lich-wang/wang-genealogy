---
schema: wang-person/v1
id: p_MQQyuFRHwHza48Rxy8cmUZ
status: active
merged_into: null
display_name: 王重光
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLuHB2NopwxdYXdSkokoKJ
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2fD8K1SfHcBAjGRF2HRuyK
          claim_id: c_aLuHB2NopwxdYXdSkokoKJ
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
          stance: supports
          locator: CBDB:126622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126622）
          source: &a1
            id: s_TZfCbaZGNCs8bzcMeeqLLY
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 126622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126622&o=json
            external_identifier: CBDB:126622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1wpA1Bji3j61QRsonSsfPH
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJ1o5ws7h7pQjA67pxULgN
          claim_id: c_1wpA1Bji3j61QRsonSsfPH
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
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
        id: c_FiMGKaD8XBFUP1zxkfyLuT
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9AjTBD3j1JGFYKkjqtfhv
          claim_id: c_FiMGKaD8XBFUP1zxkfyLuT
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
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
        id: c_qFh48tmEtC65p4Y9foDJ37
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_goPu9RU97A2WRPCHpADAKK
          claim_id: c_qFh48tmEtC65p4Y9foDJ37
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
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
        id: c_hDoiPfn4Jyme0wT4rZ8vh1
        subject_person_id: p_HsZLwARimgLZK7ZmEpSEFy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BiukDAx8a3qCf6SYkG43_k
          claim_id: c_hDoiPfn4Jyme0wT4rZ8vh1
          source_id: s_ydEZ6b84QcVDHVMxRwv2Xp
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ydEZ6b84QcVDHVMxRwv2Xp
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 302568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302568&o=json
            external_identifier: CBDB:302568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HsZLwARimgLZK7ZmEpSEFy
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__CaclHSql_OfByQExdf2p2
        subject_person_id: p_rj597A434g3oGr3CMXf786
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdS8bHeknsJ1xgQzRdWnm9
          claim_id: c__CaclHSql_OfByQExdf2p2
          source_id: s_RjgKeCqHcGF2Gi7ZP6P4ho
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RjgKeCqHcGF2Gi7ZP6P4ho
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 302567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302567&o=json
            external_identifier: CBDB:302567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rj597A434g3oGr3CMXf786
        status: active
        display_name: 王伍
        merged_into_person_id: null
    - claim:
        id: c__X5KIwEdKwgAD0jvIkkktG
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqaNPZKAO3uEO110zAJl07
          claim_id: c__X5KIwEdKwgAD0jvIkkktG
          source_id: s_NsH2JrA7zFChzTypXUmby7
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NsH2JrA7zFChzTypXUmby7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貴（302566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302566&o=json
            external_identifier: CBDB:302566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_VTPD5ERN4nKpvDScS6wxja
        status: active
        display_name: 王贵
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王重光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重光 | accepted |
| birth.date | 1502年 | accepted |
| death.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HsZLwARimgLZK7ZmEpSEFy | 王麟 | accepted |
| ancestors | p_rj597A434g3oGr3CMXf786 | 王伍 | accepted |
| ancestors | p_VTPD5ERN4nKpvDScS6wxja | 王贵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 302568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302568&o=json)
- [中国历代人物传记资料库：王伍（CBDB 302567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302567&o=json)
- [中国历代人物传记资料库：王重光（CBDB 126622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126622&o=json)
- [CBDB 中国历代人物传记资料库：王貴（302566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302566&o=json)
