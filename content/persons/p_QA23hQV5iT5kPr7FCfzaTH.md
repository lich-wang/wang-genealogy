---
schema: wang-person/v1
id: p_QA23hQV5iT5kPr7FCfzaTH
status: active
merged_into: null
display_name: 王來泰
cbdb_id: 520426
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKvEHk8w2L9E5po8fPAquZ
        subject_person_id: p_QA23hQV5iT5kPr7FCfzaTH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來泰，史料所见人物。本项目依据《中国历代人物传记资料库：王來泰（CBDB 520426）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TQdKJtzSdUf81NY43Ek6nS
          claim_id: c_uKvEHk8w2L9E5po8fPAquZ
          source_id: s_bd12RWM2tYTDF1y8MYXp78
          stance: supports
          locator: CBDB:520426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bd12RWM2tYTDF1y8MYXp78
            source_type: api_record
            title: 中国历代人物传记资料库：王來泰（CBDB 520426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520426&o=json
            external_identifier: CBDB:520426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMx6c4eNs3Le56iSMkSPLW
        subject_person_id: p_QA23hQV5iT5kPr7FCfzaTH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YRbWxpqKz1o17WZL3bJqP4
          claim_id: c_eMx6c4eNs3Le56iSMkSPLW
          source_id: s_bd12RWM2tYTDF1y8MYXp78
          stance: supports
          locator: CBDB:520426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TaQgPuRiuz04_G9Cdshtc3
        subject_person_id: p_wNMrpxUtRti8bzP7hKZHR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QA23hQV5iT5kPr7FCfzaTH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIQyAjox59p5YLmzYWWzHL
          claim_id: c_TaQgPuRiuz04_G9Cdshtc3
          source_id: s_hTL2namEXvYfqznz1ZA7HD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），5267：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hTL2namEXvYfqznz1ZA7HD
            source_type: api_record
            title: 中国历代人物传记资料库：王廣蔭（CBDB 61921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61921&o=json
            external_identifier: CBDB:61921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wNMrpxUtRti8bzP7hKZHR4
        status: active
        display_name: 王廣蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王來泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來泰，史料所见人物。本项目依据《中国历代人物传记资料库：王來泰（CBDB 520426）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王來泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wNMrpxUtRti8bzP7hKZHR4 | 王廣蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣蔭（CBDB 61921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61921&o=json)
- [中国历代人物传记资料库：王來泰（CBDB 520426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520426&o=json)
