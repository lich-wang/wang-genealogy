---
schema: wang-person/v1
id: p_eJ2p8jByLja8epc6npZaLy
status: active
merged_into: null
display_name: 王守正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKF8uB7egfLpfTTJdY82Dt
        subject_person_id: p_eJ2p8jByLja8epc6npZaLy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kw44f5zf5iJxeNd7dQvNrf
          claim_id: c_fKF8uB7egfLpfTTJdY82Dt
          source_id: s_NU4E6zF78g9aTGCLk9m7mF
          stance: supports
          locator: CBDB:267253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267253）
          source: &a1
            id: s_NU4E6zF78g9aTGCLk9m7mF
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 267253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267253&o=json
            external_identifier: CBDB:267253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5KYVkfWJR2Lkh1ZBXFK3o
        subject_person_id: p_eJ2p8jByLja8epc6npZaLy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 267253）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1warXjgpZmXVKYsjA5l1pA
          claim_id: c_J5KYVkfWJR2Lkh1ZBXFK3o
          source_id: s_NU4E6zF78g9aTGCLk9m7mF
          stance: supports
          locator: CBDB:267253
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
  descendants:
    - claim:
        id: c_0D3L_BiJDFQFX_MBHYivLX
        subject_person_id: p_eJ2p8jByLja8epc6npZaLy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9jJUbTwwEqmIVR9kRHokug
          claim_id: c_0D3L_BiJDFQFX_MBHYivLX
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dRUGmqCaBFkV5AhXHe7EWi
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 201113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json
            external_identifier: CBDB:201113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C41sWozjac1HZPEX2SGUgJ
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
  other: []
---

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| bio.summary | 王守正，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 267253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_C41sWozjac1HZPEX2SGUgJ | 王朝佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝佐（CBDB 201113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json)
- [中国历代人物传记资料库：王守正（CBDB 267253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267253&o=json)
