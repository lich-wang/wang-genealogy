---
schema: wang-person/v1
id: p_Peaoc2Q1ixzgiJjT7a4DGX
status: active
merged_into: null
display_name: 王玢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qM1PWkW8EYDNLaDpnAP9jw
        subject_person_id: p_Peaoc2Q1ixzgiJjT7a4DGX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8uGjdpPxUgFNGD6NZDAg3
          claim_id: c_qM1PWkW8EYDNLaDpnAP9jw
          source_id: s_qycTw1tFJtoXRMz1HtH71v
          stance: supports
          locator: CBDB:255911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255911）
          source: &a1
            id: s_qycTw1tFJtoXRMz1HtH71v
            source_type: api_record
            title: 中国历代人物传记资料库：王玢（CBDB 255911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255911&o=json
            external_identifier: CBDB:255911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YVtPPcDfAsZRZ1xwbiCZPn
        subject_person_id: p_Peaoc2Q1ixzgiJjT7a4DGX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玢，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255911）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uw2J1biILuWS6XIJz9oCBK
          claim_id: c_YVtPPcDfAsZRZ1xwbiCZPn
          source_id: s_qycTw1tFJtoXRMz1HtH71v
          stance: supports
          locator: CBDB:255911
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玢 | accepted |
| bio.summary | 王玢，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255911） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玢（CBDB 255911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255911&o=json)
