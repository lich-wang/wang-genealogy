---
schema: wang-person/v1
id: p_HT1byH8rxSEHoPMAFQo6uz
status: active
merged_into: null
display_name: 王翬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_siTq8Z3ZciZ5RMcPfuNfvR
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qsfYwTZ3ap83jc2grQzQ1x
          claim_id: c_siTq8Z3ZciZ5RMcPfuNfvR
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: CBDB:65886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65886）
          source: &a1
            id: s_JsaeHJVJrAG3MBSN1CqeX7
            source_type: api_record
            title: 中国历代人物传记资料库：王翬（CBDB 65886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json
            external_identifier: CBDB:65886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RbLgknHpNcs4qevEBamkVj
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVdwada7iaeym5NoGDTbJG
          claim_id: c_RbLgknHpNcs4qevEBamkVj
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
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
        id: c_TuTMhjnDKtm5TSqBTj5CcS
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1717年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ozAc8V9xWgKnGmRSwUxkmC
          claim_id: c_TuTMhjnDKtm5TSqBTj5CcS
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
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
        id: c_t2B1rfQWMzBnGxwkWoGumm
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬（1632年—1717年），清人物。籍贯常熟，身份为畫家。（中国历代人物传记资料库 CBDB 65886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CXC4uiDh8i0Rg4YgmoilPc
          claim_id: c_t2B1rfQWMzBnGxwkWoGumm
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: CBDB:65886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xEEjrhw-vLGmpwiIUS3r3l
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZ16kT7mX4LFMhdZ6WcEBh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSoh2Dri_-1xGwEGYTuSqf
          claim_id: c_xEEjrhw-vLGmpwiIUS3r3l
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PZ16kT7mX4LFMhdZ6WcEBh
        status: active
        display_name: 王有譽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3VvPh0tvH7iFd4kvRn_u7K
        subject_person_id: p_YUAD9MocBpJZQr1eq6ETV4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A60uxdwhPEMnq3x092Jq-y
          claim_id: c_3VvPh0tvH7iFd4kvRn_u7K
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YUAD9MocBpJZQr1eq6ETV4
        status: active
        display_name: 王伯臣
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_z8x47C28FN7YiaoOIHxReB
        subject_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EteJc9sjHozpp9cf6nJZD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7ucW_isvFaXmJP5MoGQOM
          claim_id: c_z8x47C28FN7YiaoOIHxReB
          source_id: s_GVq5q9SEGa86VL8ZiZYYXu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GVq5q9SEGa86VL8ZiZYYXu
            source_type: api_record
            title: 中国历代人物传记资料库：王玖（CBDB 522574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522574&o=json
            external_identifier: CBDB:522574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EteJc9sjHozpp9cf6nJZD
        status: active
        display_name: 王玖
        merged_into_person_id: null
  other: []
---

# 王翬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翬 | accepted |
| birth.date | 1632年 | accepted |
| death.date | 1717年 | accepted |
| bio.summary | 王翬（1632年—1717年），清人物。籍贯常熟，身份为畫家。（中国历代人物传记资料库 CBDB 65886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PZ16kT7mX4LFMhdZ6WcEBh | 王有譽 | accepted |
| ancestors | p_YUAD9MocBpJZQr1eq6ETV4 | 王伯臣 | accepted |
| descendants | p_9EteJc9sjHozpp9cf6nJZD | 王玖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翬（CBDB 65886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json)
- [中国历代人物传记资料库：王玖（CBDB 522574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522574&o=json)
