---
schema: wang-person/v1
id: p_NGHFT8W3h8WaBq7fkVhjck
status: active
merged_into: null
display_name: 王立賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hqk4DXGjP8Qx4KvVEHPqA5
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CSC9wrfEaR59J7HfCMUGNu
          claim_id: c_Hqk4DXGjP8Qx4KvVEHPqA5
          source_id: s_Y9EJUnxmqhJyhxMvzsvdJn
          stance: supports
          locator: CBDB:207055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207055）
          source: &a1
            id: s_Y9EJUnxmqhJyhxMvzsvdJn
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 207055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207055&o=json
            external_identifier: CBDB:207055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uj4EZRZKUAJsF5Ygz9WGac
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSAsNtERMDsy42NhjGiQhh
          claim_id: c_uj4EZRZKUAJsF5Ygz9WGac
          source_id: s_Y9EJUnxmqhJyhxMvzsvdJn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qQwpPSx31FsRuXvX5XYUBA
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F68vB86EjrgF86ku334KQJ
          claim_id: c_qQwpPSx31FsRuXvX5XYUBA
          source_id: s_Y9EJUnxmqhJyhxMvzsvdJn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ASwtXDNvK8_-S4dbOcEVG7
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5jLfyqAscNGY6naDxfodG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bT2Ex8EGdvxLORYjevc5wJ
          claim_id: c_ASwtXDNvK8_-S4dbOcEVG7
          source_id: s_sQ5p3QJvkVFm3MBGZMEcex
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sQ5p3QJvkVFm3MBGZMEcex
            source_type: api_record
            title: 中国历代人物传记资料库：王元灝（CBDB 226932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226932&o=json
            external_identifier: CBDB:226932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5jLfyqAscNGY6naDxfodG6
        status: active
        display_name: 王元灝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7PTXJh8BUpM77Rnff6XMe9
        subject_person_id: p_11fTNqG9anHNZWcmN5xUv7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mLyvdUwRmNxCnq1di-csR
          claim_id: c_7PTXJh8BUpM77Rnff6XMe9
          source_id: s_VLz8DpneYpM2gLsytFNFvP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百一十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VLz8DpneYpM2gLsytFNFvP
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 226917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226917&o=json
            external_identifier: CBDB:226917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11fTNqG9anHNZWcmN5xUv7
        status: active
        display_name: 王相
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王立賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立賢 | accepted |
| birth.date | 1555年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5jLfyqAscNGY6naDxfodG6 | 王元灝 | accepted |
| ancestors | p_11fTNqG9anHNZWcmN5xUv7 | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立賢（CBDB 207055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207055&o=json)
- [中国历代人物传记资料库：王相（CBDB 226917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226917&o=json)
- [中国历代人物传记资料库：王元灝（CBDB 226932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226932&o=json)
