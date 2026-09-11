---
schema: wang-person/v1
id: p_iQPwYS12BZQqiVHVNikDDA
status: active
merged_into: null
display_name: 王大義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e26NzqD289G1pcAgsDFmjk
        subject_person_id: p_iQPwYS12BZQqiVHVNikDDA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvtWugaTFnezNCRYcecL3V
          claim_id: c_e26NzqD289G1pcAgsDFmjk
          source_id: s_HKcySqNPiSdWDx5ox8QepH
          stance: supports
          locator: CBDB:140394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140394）
          source: &a1
            id: s_HKcySqNPiSdWDx5ox8QepH
            source_type: api_record
            title: 中国历代人物传记资料库：王大義（CBDB 140394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140394&o=json
            external_identifier: CBDB:140394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o7QEPN8w8Mt33K9EKLwEfo
        subject_person_id: p_iQPwYS12BZQqiVHVNikDDA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHsBVVMTCBgTRK8zGE3719
          claim_id: c_o7QEPN8w8Mt33K9EKLwEfo
          source_id: s_HKcySqNPiSdWDx5ox8QepH
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
        id: c_VmZzuHLMxcmGsS2CZ2FpBz
        subject_person_id: p_iQPwYS12BZQqiVHVNikDDA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U4wq7FmqqW9VFK1qGLzJ1F
          claim_id: c_VmZzuHLMxcmGsS2CZ2FpBz
          source_id: s_HKcySqNPiSdWDx5ox8QepH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qllslfvyKhHdWzk2Z2HY4M
        subject_person_id: p_EmZLYkQnFoNGPNvMH5GQs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iQPwYS12BZQqiVHVNikDDA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cL1auzLnse_yXOvD14fHUJ
          claim_id: c_qllslfvyKhHdWzk2Z2HY4M
          source_id: s_oCQCgA7GKsbLv7Kw1Z8boN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 120：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oCQCgA7GKsbLv7Kw1Z8boN
            source_type: api_record
            title: 中国历代人物传记资料库：王淹（CBDB 151538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151538&o=json
            external_identifier: CBDB:151538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EmZLYkQnFoNGPNvMH5GQs2
        status: active
        display_name: 王淹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大義 | accepted |
| death.date | 681年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EmZLYkQnFoNGPNvMH5GQs2 | 王淹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大義（CBDB 140394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140394&o=json)
- [中国历代人物传记资料库：王淹（CBDB 151538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151538&o=json)
