---
schema: wang-person/v1
id: p_C9DyFVcXTK7Zf1N7YEHdCK
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 237226
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kPKS17XRPBvob4SaRXQZl_
        subject_person_id: p_C9DyFVcXTK7Zf1N7YEHdCK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uq7CeD89Ao76dPvvC_RqhH
          claim_id: c_kPKS17XRPBvob4SaRXQZl_
          source_id: s_oiyUdWS4pttE6hcKMJuuuS
          stance: supports
          locator: CBDB:237226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oiyUdWS4pttE6hcKMJuuuS
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王晏妻)（CBDB 237226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237226&o=json
            external_identifier: CBDB:237226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_0nC8_P7zx9iftt_Hx_GSvj
        subject_person_id: p_C9DyFVcXTK7Zf1N7YEHdCK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b9yE2VS6ezp0dyySqMAeQa
          claim_id: c_0nC8_P7zx9iftt_Hx_GSvj
          source_id: s_oiyUdWS4pttE6hcKMJuuuS
          stance: supports
          locator: CBDB:237226
          quotation: null
          interpretation_note: CBDB 明确记录的王晏配偶
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
        id: c_w87njq1dbBwHqbMGjjAN2u
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_C9DyFVcXTK7Zf1N7YEHdCK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ktNEAR6RiF1umL_-q4AC-
          claim_id: c_w87njq1dbBwHqbMGjjAN2u
          source_id: s_oiyUdWS4pttE6hcKMJuuuS
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3c99mAbtCMe882FKM3LMji
        status: active
        display_name: 王晏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237226） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3c99mAbtCMe882FKM3LMji | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王晏妻)（CBDB 237226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237226&o=json)
