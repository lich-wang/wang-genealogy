---
schema: wang-person/v1
id: p_kmpABikpWftaJACcFD3yJ1
status: active
merged_into: null
display_name: 王繼德
cbdb_id: 327528
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BPB59oE8E45dUx7cEzi4g
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼德，史料所见人物。本项目依据《中国历代人物传记资料库：王繼德（CBDB 327528）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_hrGuIIdrqcwwrjiY8zqYc5
          claim_id: c_4BPB59oE8E45dUx7cEzi4g
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: CBDB:327528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vkd7AEwfWrQDLC88pSas2j
            source_type: api_record
            title: 中国历代人物传记资料库：王繼德（CBDB 327528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json
            external_identifier: CBDB:327528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpqNy9kFfvG5V1U1rDLGEZ
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3shZTPt7o7bnJ9XLZAMD7c
          claim_id: c_cpqNy9kFfvG5V1U1rDLGEZ
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: CBDB:327528
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_izKiuPL40dgywPDd9sMR5W
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ohSU0hJbjf1lFLZE9JKQmL
          claim_id: c_izKiuPL40dgywPDd9sMR5W
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vkd7AEwfWrQDLC88pSas2j
            source_type: api_record
            title: 中国历代人物传记资料库：王繼德（CBDB 327528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json
            external_identifier: CBDB:327528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼德，史料所见人物。本项目依据《中国历代人物传记资料库：王繼德（CBDB 327528）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王繼德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼德（CBDB 327528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json)
