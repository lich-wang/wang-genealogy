---
schema: wang-person/v1
id: p_P3Br8FZLaznPzknGcLswmP
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 138570
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r25YXTuptnVajnxftL1WX3
        subject_person_id: p_P3Br8FZLaznPzknGcLswmP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王平妻)（CBDB 138570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCWJf_e4d3PS-IkqFIsMDg
          claim_id: c_r25YXTuptnVajnxftL1WX3
          source_id: s_UuKSjlBzQZOhaHqwWABsY9
          stance: supports
          locator: CBDB:138570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UuKSjlBzQZOhaHqwWABsY9
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王平妻)（CBDB 138570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138570&o=json
            external_identifier: CBDB:138570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__uXkjaQUZ42TESrfS7xZ0O
        subject_person_id: p_P3Br8FZLaznPzknGcLswmP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ODeh6DBd6SnJDVweGS2A37
          claim_id: c__uXkjaQUZ42TESrfS7xZ0O
          source_id: s_UuKSjlBzQZOhaHqwWABsY9
          stance: supports
          locator: CBDB:138570
          quotation: null
          interpretation_note: CBDB 明确记录的王平配偶
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
        id: c_bIo9Ii29ISkxtKPtQ6R6Q2
        subject_person_id: p_4Z8oBTJamRmm8c5d9wkYUe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_P3Br8FZLaznPzknGcLswmP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KhVARxI8XxoIAtGDi-84O
          claim_id: c_bIo9Ii29ISkxtKPtQ6R6Q2
          source_id: s_UuKSjlBzQZOhaHqwWABsY9
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4Z8oBTJamRmm8c5d9wkYUe
        status: active
        display_name: 王平
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王平妻)（CBDB 138570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4Z8oBTJamRmm8c5d9wkYUe | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王平妻)（CBDB 138570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138570&o=json)
