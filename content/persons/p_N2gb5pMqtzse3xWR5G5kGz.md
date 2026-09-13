---
schema: wang-person/v1
id: p_N2gb5pMqtzse3xWR5G5kGz
status: active
merged_into: null
display_name: 王希名
cbdb_id: 247517
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R3ueRH4Xc3r37oGKAj2DdY
        subject_person_id: p_N2gb5pMqtzse3xWR5G5kGz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希名，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r-1p9fXqPY33Q90OGMMiQ7
          claim_id: c_R3ueRH4Xc3r37oGKAj2DdY
          source_id: s_Y4VQF1QHrGXFPFxPaJZX5L
          stance: supports
          locator: CBDB:247517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Y4VQF1QHrGXFPFxPaJZX5L
            source_type: api_record
            title: 中国历代人物传记资料库：王希名（CBDB 247517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247517&o=json
            external_identifier: CBDB:247517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BQEzWAocfuiua4Je7F6DyT
        subject_person_id: p_N2gb5pMqtzse3xWR5G5kGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yvGgEVQp4wcr5Fd2GsboZ4
          claim_id: c_BQEzWAocfuiua4Je7F6DyT
          source_id: s_Y4VQF1QHrGXFPFxPaJZX5L
          stance: supports
          locator: CBDB:247517
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_oSIwmw3wW8IwoyIioV6lm2
        subject_person_id: p_N2gb5pMqtzse3xWR5G5kGz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VUBpMzfYH8LCVFm8M3HgXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFyCKT3lS7bEjtOw9CYCki
          claim_id: c_oSIwmw3wW8IwoyIioV6lm2
          source_id: s_dTUXRMkxqmhmdy9hU3p8N8
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百六十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dTUXRMkxqmhmdy9hU3p8N8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 199633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json
            external_identifier: CBDB:199633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VUBpMzfYH8LCVFm8M3HgXc
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王希名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希名，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247517） | accepted |
| name.primary | 王希名 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VUBpMzfYH8LCVFm8M3HgXc | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希名（CBDB 247517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247517&o=json)
- [中国历代人物传记资料库：王佐（CBDB 199633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199633&o=json)
