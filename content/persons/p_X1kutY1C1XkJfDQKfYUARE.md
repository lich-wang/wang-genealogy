---
schema: wang-person/v1
id: p_X1kutY1C1XkJfDQKfYUARE
status: active
merged_into: null
display_name: 易氏
revision: 1
cbdb_id: 266793
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QoP86BzSmgf2dnmNu9L_dR
        subject_person_id: p_X1kutY1C1XkJfDQKfYUARE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 易氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 266793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHyl5CHayUSB81in9590EA
          claim_id: c_QoP86BzSmgf2dnmNu9L_dR
          source_id: s_5CvKK00Tld51ReiCUPq3MN
          stance: supports
          locator: CBDB:266793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5CvKK00Tld51ReiCUPq3MN
            source_type: api_record
            title: 中国历代人物传记资料库：易氏(王用妻)（CBDB 266793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266793&o=json
            external_identifier: CBDB:266793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q85nhcXu45faD0RGbZYba3
        subject_person_id: p_X1kutY1C1XkJfDQKfYUARE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 易氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YIVKY6ql1T7Mn4evrsz1y8
          claim_id: c_Q85nhcXu45faD0RGbZYba3
          source_id: s_5CvKK00Tld51ReiCUPq3MN
          stance: supports
          locator: CBDB:266793
          quotation: null
          interpretation_note: CBDB 明确记录的王用配偶
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
        id: c_2QIpeXwBHHK-wle35XfMG2
        subject_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_X1kutY1C1XkJfDQKfYUARE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oI1gykELMoyuteJWU0qfZC
          claim_id: c_2QIpeXwBHHK-wle35XfMG2
          source_id: s_5CvKK00Tld51ReiCUPq3MN
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kgFLtz3kAG28D2HWS4JLXe
        status: active
        display_name: 王用
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 易氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 易氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 266793） | accepted |
| name.primary | 易氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kgFLtz3kAG28D2HWS4JLXe | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：易氏(王用妻)（CBDB 266793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266793&o=json)
