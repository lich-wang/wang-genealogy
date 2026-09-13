---
schema: wang-person/v1
id: p_WHh5Qo24zT1qqTRoyyXi8E
status: active
merged_into: null
display_name: 王光頡
cbdb_id: 526873
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ESXsi58X7FEXY1wVCBTwEQ
        subject_person_id: p_WHh5Qo24zT1qqTRoyyXi8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光頡，史料所见人物。本项目依据《中国历代人物传记资料库：王光頡（CBDB 526873）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fzbF7wcfXwuV4sXljCX6Kh
          claim_id: c_ESXsi58X7FEXY1wVCBTwEQ
          source_id: s_stHfupNiszH1Qg8q5mH3iK
          stance: supports
          locator: CBDB:526873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_stHfupNiszH1Qg8q5mH3iK
            source_type: api_record
            title: 中国历代人物传记资料库：王光頡（CBDB 526873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526873&o=json
            external_identifier: CBDB:526873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPcw1mC9PWQte8DjBVHBHk
        subject_person_id: p_WHh5Qo24zT1qqTRoyyXi8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光頡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w5J2H7J1kD8SNrcRStPRkb
          claim_id: c_wPcw1mC9PWQte8DjBVHBHk
          source_id: s_stHfupNiszH1Qg8q5mH3iK
          stance: supports
          locator: CBDB:526873
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FI4QxnPCFNBrVtt6OYZ0Vn
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WHh5Qo24zT1qqTRoyyXi8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c6O7ohD4bgQtEEoQA5cXHv
          claim_id: c_FI4QxnPCFNBrVtt6OYZ0Vn
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13042：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TWBPCw7DtsUsnMc4AfUyfS
            source_type: api_record
            title: 中国历代人物传记资料库：王淑元（CBDB 69338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69338&o=json
            external_identifier: CBDB:69338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1SPkxqhyY4ATtBYqQzF4ka
        status: active
        display_name: 王淑元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光頡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光頡，史料所见人物。本项目依据《中国历代人物传记资料库：王光頡（CBDB 526873）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王光頡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1SPkxqhyY4ATtBYqQzF4ka | 王淑元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光頡（CBDB 526873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526873&o=json)
- [中国历代人物传记资料库：王淑元（CBDB 69338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69338&o=json)
