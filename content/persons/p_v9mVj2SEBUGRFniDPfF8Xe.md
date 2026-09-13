---
schema: wang-person/v1
id: p_v9mVj2SEBUGRFniDPfF8Xe
status: active
merged_into: null
display_name: 王季點
cbdb_id: 526910
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VKbpKbJADhDUwACt3njWVe
        subject_person_id: p_v9mVj2SEBUGRFniDPfF8Xe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季點，史料所见人物。本项目依据《中国历代人物传记资料库：王季點（CBDB 526910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_NOixlqTWv30U2PCyxzwZBr
          claim_id: c_VKbpKbJADhDUwACt3njWVe
          source_id: s_N28kHwGrmoKQBmWQtvZNEq
          stance: supports
          locator: CBDB:526910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_N28kHwGrmoKQBmWQtvZNEq
            source_type: api_record
            title: 中国历代人物传记资料库：王季點（CBDB 526910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526910&o=json
            external_identifier: CBDB:526910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DM9zYX4aBAs3okYeA4zBPb
        subject_person_id: p_v9mVj2SEBUGRFniDPfF8Xe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季點
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aBmsaQpETyhgRM58f9Lknj
          claim_id: c_DM9zYX4aBAs3okYeA4zBPb
          source_id: s_N28kHwGrmoKQBmWQtvZNEq
          stance: supports
          locator: CBDB:526910
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SKH0XKEYvrkHrtvxwSUjs4
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v9mVj2SEBUGRFniDPfF8Xe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvT7ivhumJIXf9nqpvT35y
          claim_id: c_SKH0XKEYvrkHrtvxwSUjs4
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季點

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季點，史料所见人物。本项目依据《中国历代人物传记资料库：王季點（CBDB 526910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王季點 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季點（CBDB 526910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526910&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
