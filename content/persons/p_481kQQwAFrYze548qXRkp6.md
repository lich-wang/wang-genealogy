---
schema: wang-person/v1
id: p_481kQQwAFrYze548qXRkp6
status: active
merged_into: null
display_name: 王章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAE95x9TJBrAUiw8xS1CPF
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKB6pPiCS8vxWQQ1KJyq3P
          claim_id: c_jAE95x9TJBrAUiw8xS1CPF
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: CBDB:683877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683877）
          source: &a1
            id: s_coq7t4H45PM4tE5hKEgEQY
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 683877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json
            external_identifier: CBDB:683877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suuLWTNcpKmJLZvkEPZLRa
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，史料所见人物。本项目依据《中国历代人物传记资料库：王章（CBDB 683877）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h6Yc_CshHYK8UacqKmzn3G
          claim_id: c_suuLWTNcpKmJLZvkEPZLRa
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: CBDB:683877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_W8E3RoqQMPm5Gr4k9kjV8-
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RV2Sqgm1uXEGoW8rEAG3gK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uKUcfhmchTG5ydhL-wHpP
          claim_id: c_W8E3RoqQMPm5Gr4k9kjV8-
          source_id: s_UYB4zagTxQTgUz7jpmbPvI
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UYB4zagTxQTgUz7jpmbPvI
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王章妻)（CBDB 683880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683880&o=json
            external_identifier: CBDB:683880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RV2Sqgm1uXEGoW8rEAG3gK
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_JlggYeY5aqn8AW1snvJxNw
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-Zmho65zbECAKTwtWSbQb
          claim_id: c_JlggYeY5aqn8AW1snvJxNw
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_baPx7xrKQVVrCaN9KsE9x5
        status: active
        display_name: 王虔
        merged_into_person_id: null
    - claim:
        id: c_HBxlWVXq0vllmcR82dLfT1
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5aSsEU9814DJHEv44h4j5R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_atgvdQEwJgiSsRQjPvzG2e
          claim_id: c_HBxlWVXq0vllmcR82dLfT1
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5aSsEU9814DJHEv44h4j5R
        status: active
        display_name: 王珣
        merged_into_person_id: null
  other: []
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，史料所见人物。本项目依据《中国历代人物传记资料库：王章（CBDB 683877）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RV2Sqgm1uXEGoW8rEAG3gK | 李氏 | accepted |
| descendants | p_baPx7xrKQVVrCaN9KsE9x5 | 王虔 | accepted |
| descendants | p_5aSsEU9814DJHEv44h4j5R | 王珣 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王章妻)（CBDB 683880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683880&o=json)
- [中国历代人物传记资料库：王章（CBDB 683877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json)
