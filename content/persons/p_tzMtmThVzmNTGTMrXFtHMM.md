---
schema: wang-person/v1
id: p_tzMtmThVzmNTGTMrXFtHMM
status: active
merged_into: null
display_name: 張某
revision: 1
cbdb_id: 135137
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_l2eqF4lq0gkXUH4D3rO9GZ
        subject_person_id: p_tzMtmThVzmNTGTMrXFtHMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張某，史料所见人物。本项目依据《中国历代人物传记资料库：張某(王莊淑夫)（CBDB 135137）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-xR9bguZrnwAHuWrvPvYf
          claim_id: c_l2eqF4lq0gkXUH4D3rO9GZ
          source_id: s_scwAx8HNMtOc9KKNmVYpTH
          stance: supports
          locator: CBDB:135137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_scwAx8HNMtOc9KKNmVYpTH
            source_type: api_record
            title: 中国历代人物传记资料库：張某(王莊淑夫)（CBDB 135137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135137&o=json
            external_identifier: CBDB:135137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_akAGSePQxEFy37xdmXMCmF
        subject_person_id: p_tzMtmThVzmNTGTMrXFtHMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sfb0GDWh7VpbqrOQ6AIhS_
          claim_id: c_akAGSePQxEFy37xdmXMCmF
          source_id: s_scwAx8HNMtOc9KKNmVYpTH
          stance: supports
          locator: CBDB:135137
          quotation: null
          interpretation_note: CBDB 明确记录的王莊淑配偶
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
        id: c_6PvKK6oGcOdyQMCgxI5Beh
        subject_person_id: p_i7CTFBQtNxaVxkvf766h6t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tzMtmThVzmNTGTMrXFtHMM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqpEsAOgQDDspi06FoX-eN
          claim_id: c_6PvKK6oGcOdyQMCgxI5Beh
          source_id: s_scwAx8HNMtOc9KKNmVYpTH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5532：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i7CTFBQtNxaVxkvf766h6t
        status: active
        display_name: 王莊淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張某，史料所见人物。本项目依据《中国历代人物传记资料库：張某(王莊淑夫)（CBDB 135137）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_i7CTFBQtNxaVxkvf766h6t | 王莊淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：張某(王莊淑夫)（CBDB 135137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135137&o=json)
