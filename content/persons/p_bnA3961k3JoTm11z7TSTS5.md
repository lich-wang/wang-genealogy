---
schema: wang-person/v1
id: p_bnA3961k3JoTm11z7TSTS5
status: active
merged_into: null
display_name: 王泰來
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7GBKKMMrZyXz71AguSvki
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰來
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n1bxEpPUDhb6DS7jMchpNq
          claim_id: c_b7GBKKMMrZyXz71AguSvki
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: CBDB:22241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22241）
          source: &a1
            id: s_VsD9ktYiW3BBpq7VUSucRs
            source_type: api_record
            title: 中国历代人物传记资料库：王泰來（CBDB 22241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json
            external_identifier: CBDB:22241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FM32V8avJY4ehHhsJrHYqg
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rRqLsNWC1ZSrgLF5nbi7n2
          claim_id: c_FM32V8avJY4ehHhsJrHYqg
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CnbtefjS3Q3Rf2t65x8zUy
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1308年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4y2sBYnXqyEU7C1rTzeaT
          claim_id: c_CnbtefjS3Q3Rf2t65x8zUy
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMw5t5sssKCsAKyjjR8Rvj
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰來（1236年—1308年），宋人物。籍贯華亭，身份为拒絕出仕、徵至京師。（中国历代人物传记资料库 CBDB 22241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7eVVVl5ySCr5F66rL5jbf
          claim_id: c_MMw5t5sssKCsAKyjjR8Rvj
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: CBDB:22241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7thLgZtaQJlzx-jLYN2K02
        subject_person_id: p_kiqfR3ebLRfZwsFStCJHnu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bnA3961k3JoTm11z7TSTS5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmKmglsHAWuhBrzfcyFfAe
          claim_id: c_7thLgZtaQJlzx-jLYN2K02
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: CBDB 双向互证（父 王奎 ⇄ 子 王泰來）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kiqfR3ebLRfZwsFStCJHnu
        status: active
        display_name: 王奎
        merged_into_person_id: null
  children:
    - claim:
        id: c_eiSydMmB2rD2CQQaBfIXjr
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3G6EYiKzzFYDRCt1Ch6Ta
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_PR2gOqY4tUYOdFJM-81L
          claim_id: c_eiSydMmB2rD2CQQaBfIXjr
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: 元人傳記資料索引，809：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q3G6EYiKzzFYDRCt1Ch6Ta
        status: active
        display_name: 王謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王泰來

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰來 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1308年 | accepted |
| bio.summary | 王泰來（1236年—1308年），宋人物。籍贯華亭，身份为拒絕出仕、徵至京師。（中国历代人物传记资料库 CBDB 22241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kiqfR3ebLRfZwsFStCJHnu | 王奎 | accepted |
| children | p_q3G6EYiKzzFYDRCt1Ch6Ta | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰來（CBDB 22241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json)
