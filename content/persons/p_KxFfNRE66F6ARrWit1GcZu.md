---
schema: wang-person/v1
id: p_KxFfNRE66F6ARrWit1GcZu
status: active
merged_into: null
display_name: 王宸儁
cbdb_id: 414356
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rRqx5CwbMEBQx6V1JHyB1r
        subject_person_id: p_KxFfNRE66F6ARrWit1GcZu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸儁，史料所见人物。本项目依据《中国历代人物传记资料库：王宸儁（CBDB 414356）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_50F7cW8_eVMFxnWWiHRlj4
          claim_id: c_rRqx5CwbMEBQx6V1JHyB1r
          source_id: s_5LUxB2Y893mHW489dQkvAk
          stance: supports
          locator: CBDB:414356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5LUxB2Y893mHW489dQkvAk
            source_type: api_record
            title: 中国历代人物传记资料库：王宸儁（CBDB 414356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414356&o=json
            external_identifier: CBDB:414356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:32.727Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8sejqTfLeC6Ru6E8iKg7bB
        subject_person_id: p_KxFfNRE66F6ARrWit1GcZu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸儁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QzNVUhfCqgfgCyPPPcGcES
          claim_id: c_8sejqTfLeC6Ru6E8iKg7bB
          source_id: s_5LUxB2Y893mHW489dQkvAk
          stance: supports
          locator: CBDB:414356
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5401-5500）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cgr8q2Jq40cyReTRTdQVp1
        subject_person_id: p_d52qyhT8bfhqUVWj5DVXR3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KxFfNRE66F6ARrWit1GcZu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmkA2Rj7HZ0ny4rNx2T3nY
          claim_id: c_cgr8q2Jq40cyReTRTdQVp1
          source_id: s_JuZuKRm5m6e22SdugkxDaN
          stance: supports
          locator: 錢塘縣志，lgid=219775：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JuZuKRm5m6e22SdugkxDaN
            source_type: api_record
            title: 中国历代人物传记资料库：王丹林（CBDB 700977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700977&o=json
            external_identifier: CBDB:700977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d52qyhT8bfhqUVWj5DVXR3
        status: active
        display_name: 王丹林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宸儁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宸儁，史料所见人物。本项目依据《中国历代人物传记资料库：王宸儁（CBDB 414356）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王宸儁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d52qyhT8bfhqUVWj5DVXR3 | 王丹林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸儁（CBDB 414356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414356&o=json)
- [中国历代人物传记资料库：王丹林（CBDB 700977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700977&o=json)
