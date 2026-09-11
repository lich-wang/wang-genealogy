---
schema: wang-person/v1
id: p_hJs7Qvo7BVHkNfA4qF2GpU
status: active
merged_into: null
display_name: 王佖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5HKmtQvfD7ViS5PqDCxbk8
        subject_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GSFyWD2syQ51AAR6t4siex
          claim_id: c_5HKmtQvfD7ViS5PqDCxbk8
          source_id: s_95i5Te7uwSzC2L5Ks8gJJK
          stance: supports
          locator: CBDB:10700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10700）
          source: &a1
            id: s_95i5Te7uwSzC2L5Ks8gJJK
            source_type: api_record
            title: 中国历代人物传记资料库：王佖（CBDB 10700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json
            external_identifier: CBDB:10700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e3RnAKtxdTJJAcU1eJTse7
        subject_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvYD5oLvJDTusZ3DfeMpRj
          claim_id: c_e3RnAKtxdTJJAcU1eJTse7
          source_id: s_95i5Te7uwSzC2L5Ks8gJJK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_p0Z4yQx-VmYg-cKS3fpqcQ
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5v1UdgRF4McMMRCMCQ6vU4
          claim_id: c_p0Z4yQx-VmYg-cKS3fpqcQ
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: 宋人傳記資料索引(電子版)，668：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jH1N5zKcYCmDMDNPzpwQ7F
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 10697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json
            external_identifier: CBDB:10697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佖（CBDB 10700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json)
- [中国历代人物传记资料库：王淮（CBDB 10697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json)
