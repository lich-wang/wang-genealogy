---
schema: wang-person/v1
id: p_j2iruMugSZPepsD4KQYC8f
status: active
merged_into: null
display_name: 王林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6EYYKHmapod6GCPT3JUZXb
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U2ZmAPHTAYYQWLruXbCmFD
          claim_id: c_6EYYKHmapod6GCPT3JUZXb
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: CBDB:273790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273790）
          source: &a1
            id: s_PUXA73Lg59Kk5Lk53X9HYh
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 273790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json
            external_identifier: CBDB:273790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q58JbZ3EqodquCeaAGSdoi
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZaZm1v8n2-D5m3BoAVYmJi
          claim_id: c_Q58JbZ3EqodquCeaAGSdoi
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: CBDB:273790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vPRQqc_wHiBK8ibxIv2ECk
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q64bGcgGwXR6qtHrStbMTc
          claim_id: c_vPRQqc_wHiBK8ibxIv2ECk
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oUoF6dRdhe6WLHeR9E6Mai
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | 王林，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oUoF6dRdhe6WLHeR9E6Mai | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 273790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json)
