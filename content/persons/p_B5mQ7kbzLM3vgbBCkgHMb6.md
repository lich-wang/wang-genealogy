---
schema: wang-person/v1
id: p_B5mQ7kbzLM3vgbBCkgHMb6
status: active
merged_into: null
display_name: 王家榛
cbdb_id: 69979
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JqZfo3T59WP53ibUAMK6iB
        subject_person_id: p_B5mQ7kbzLM3vgbBCkgHMb6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家榛，史料所见人物。本项目依据《中国历代人物传记资料库：王家榛（CBDB 69979）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fIyiPlJsZ3DlS5-jhmOjPt
          claim_id: c_JqZfo3T59WP53ibUAMK6iB
          source_id: s_k7VAGzBkgs9GQMgFaY5Bkx
          stance: supports
          locator: CBDB:69979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_k7VAGzBkgs9GQMgFaY5Bkx
            source_type: api_record
            title: 中国历代人物传记资料库：王家榛（CBDB 69979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69979&o=json
            external_identifier: CBDB:69979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CKgHCuq7B6z5D8aLoNVzYt
        subject_person_id: p_B5mQ7kbzLM3vgbBCkgHMb6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家榛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_r9Ma3vUHhJ9cu39YRTe9Jk
          claim_id: c_CKgHCuq7B6z5D8aLoNVzYt
          source_id: s_k7VAGzBkgs9GQMgFaY5Bkx
          stance: supports
          locator: CBDB:69979
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
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
        id: c_NMaAdGvNawO9kqlmpG686h
        subject_person_id: p_B5mQ7kbzLM3vgbBCkgHMb6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_geWnKMsTcUqaVsW4685Pnh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CRXNt5AqA5k-ZfYeEbZGbu
          claim_id: c_NMaAdGvNawO9kqlmpG686h
          source_id: s_zWm484WGtUTeTQXzITtAGa
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1437, HuWenKai #689：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zWm484WGtUTeTQXzITtAGa
            source_type: api_record
            title: 中国历代人物传记资料库：董雲鶴（CBDB 69973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69973&o=json
            external_identifier: CBDB:69973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_geWnKMsTcUqaVsW4685Pnh
        status: active
        display_name: 董雲鶴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王家榛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家榛，史料所见人物。本项目依据《中国历代人物传记资料库：王家榛（CBDB 69979）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王家榛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_geWnKMsTcUqaVsW4685Pnh | 董雲鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：董雲鶴（CBDB 69973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69973&o=json)
- [中国历代人物传记资料库：王家榛（CBDB 69979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69979&o=json)
