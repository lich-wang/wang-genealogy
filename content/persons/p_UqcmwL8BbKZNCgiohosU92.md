---
schema: wang-person/v1
id: p_UqcmwL8BbKZNCgiohosU92
status: active
merged_into: null
display_name: 姚瑤琴
revision: 1
cbdb_id: 100072
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJHMSYK3wMNWYSTjmgYvZk
        subject_person_id: p_UqcmwL8BbKZNCgiohosU92
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚瑤琴，史料所见人物。本项目依据《中国历代人物传记资料库：姚瑤琴（CBDB 100072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrnIO4Dh4qvs1dxzjS75GZ
          claim_id: c_cJHMSYK3wMNWYSTjmgYvZk
          source_id: s_vQVGJl1lthAANPvI1zEkKv
          stance: supports
          locator: CBDB:100072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vQVGJl1lthAANPvI1zEkKv
            source_type: api_record
            title: 中国历代人物传记资料库：姚瑤琴（CBDB 100072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100072&o=json
            external_identifier: CBDB:100072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ug_H3bA_txZUGt_eDXkOIM
        subject_person_id: p_UqcmwL8BbKZNCgiohosU92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚瑤琴
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHUnhNxSMNFOSXYpCiHhEd
          claim_id: c_Ug_H3bA_txZUGt_eDXkOIM
          source_id: s_vQVGJl1lthAANPvI1zEkKv
          stance: supports
          locator: CBDB:100072
          quotation: null
          interpretation_note: CBDB 明确记录的王朱配偶
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
        id: c_fhzjjkaACxOBdPkfRNcw-D
        subject_person_id: p_7qDnXg97kk3BoAN7PqdMLT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UqcmwL8BbKZNCgiohosU92
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__LaLPT2Wz30PrcBnBeBpEA
          claim_id: c_fhzjjkaACxOBdPkfRNcw-D
          source_id: s_vQVGJl1lthAANPvI1zEkKv
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1787, HuWenKai #420：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7qDnXg97kk3BoAN7PqdMLT
        status: active
        display_name: 王朱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姚瑤琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姚瑤琴，史料所见人物。本项目依据《中国历代人物传记资料库：姚瑤琴（CBDB 100072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 姚瑤琴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7qDnXg97kk3BoAN7PqdMLT | 王朱 | accepted |

## 外部来源

- [中国历代人物传记资料库：姚瑤琴（CBDB 100072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100072&o=json)
