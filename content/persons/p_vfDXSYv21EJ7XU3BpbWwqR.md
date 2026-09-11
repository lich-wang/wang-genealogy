---
schema: wang-person/v1
id: p_vfDXSYv21EJ7XU3BpbWwqR
status: active
merged_into: null
display_name: 王佇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJQJ8HXqVG9Mc8GiCB4Zes
        subject_person_id: p_vfDXSYv21EJ7XU3BpbWwqR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KdATvERRYPFvYNEUFtbCVE
          claim_id: c_cJQJ8HXqVG9Mc8GiCB4Zes
          source_id: s_L6wJqM3XH1Q5RFBJ6KXqNB
          stance: supports
          locator: CBDB:175754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175754）
          source: &a1
            id: s_L6wJqM3XH1Q5RFBJ6KXqNB
            source_type: api_record
            title: 中国历代人物传记资料库：王佇（CBDB 175754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175754&o=json
            external_identifier: CBDB:175754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2ofPT1pSAQxQF53B5pdJVD
        subject_person_id: p_vfDXSYv21EJ7XU3BpbWwqR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gw25LBKRB9zKDHmv8dUAyp
          claim_id: c_2ofPT1pSAQxQF53B5pdJVD
          source_id: s_L6wJqM3XH1Q5RFBJ6KXqNB
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
        id: c_Kd4uM9yRxx1Hu76FRr7vPW
        subject_person_id: p_vfDXSYv21EJ7XU3BpbWwqR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佇（卒于780年），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 175754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPp4lnVSRevU1tx7Q2a95w
          claim_id: c_Kd4uM9yRxx1Hu76FRr7vPW
          source_id: s_L6wJqM3XH1Q5RFBJ6KXqNB
          stance: supports
          locator: CBDB:175754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fUvAjdrd91qxnSoKMTt_z1
        subject_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfDXSYv21EJ7XU3BpbWwqR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PAud7eKykRZkm3_SR8AnH
          claim_id: c_fUvAjdrd91qxnSoKMTt_z1
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N6fdUC1wQvY1MF4eo2RbmL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲璋（CBDB 175753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json
            external_identifier: CBDB:175753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EYZbMdgB89m9nTMAVEYZW1
        status: active
        display_name: 王仲璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佇 | accepted |
| death.date | 780年 | accepted |
| bio.summary | 王佇（卒于780年），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 175754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EYZbMdgB89m9nTMAVEYZW1 | 王仲璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲璋（CBDB 175753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json)
- [中国历代人物传记资料库：王佇（CBDB 175754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175754&o=json)
