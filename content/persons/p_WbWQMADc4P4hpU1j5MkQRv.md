---
schema: wang-person/v1
id: p_WbWQMADc4P4hpU1j5MkQRv
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rXhcN3dYd6mBj6M3jfAKE9
        subject_person_id: p_WbWQMADc4P4hpU1j5MkQRv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CeHAS9mHVfXA1X7Y1QE2pg
          claim_id: c_rXhcN3dYd6mBj6M3jfAKE9
          source_id: s_C7neE5ALPcbge55LkS3kjH
          stance: supports
          locator: CBDB:318100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318100）
          source: &a1
            id: s_C7neE5ALPcbge55LkS3kjH
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 318100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318100&o=json
            external_identifier: CBDB:318100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QsMriAdUR2nMQUVvS3oCQ6
        subject_person_id: p_WbWQMADc4P4hpU1j5MkQRv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bwyvsc-86rY1efDbCoCuN6
          claim_id: c_QsMriAdUR2nMQUVvS3oCQ6
          source_id: s_C7neE5ALPcbge55LkS3kjH
          stance: supports
          locator: CBDB:318100
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
        id: c_oiSgSxvjCPYSWDErN57bD-
        subject_person_id: p_WbWQMADc4P4hpU1j5MkQRv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1jQSYCL5pg5DV42qMtxwe
          claim_id: c_oiSgSxvjCPYSWDErN57bD-
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sqFzrQfGDUhoV1ycTDWczt
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 204365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json
            external_identifier: CBDB:204365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GY2aGzgx7a1G29Cw6N2Jv
        status: active
        display_name: 王漸
        merged_into_person_id: null
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | 王能，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318100） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6GY2aGzgx7a1G29Cw6N2Jv | 王漸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸（CBDB 204365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json)
- [中国历代人物传记资料库：王能（CBDB 318100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318100&o=json)
