---
schema: wang-person/v1
id: p_8cVjN2F6e4z4TDW3w4YdEg
status: active
merged_into: null
display_name: 王伍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EPTe6oMX11w7hq7qtzeMCH
        subject_person_id: p_8cVjN2F6e4z4TDW3w4YdEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vMezxaBeRn7HqoBLeSKDpN
          claim_id: c_EPTe6oMX11w7hq7qtzeMCH
          source_id: s_Db2VAuKCA2JEw8Kq16SF4s
          stance: supports
          locator: CBDB:270639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270639）
          source: &a1
            id: s_Db2VAuKCA2JEw8Kq16SF4s
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 270639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270639&o=json
            external_identifier: CBDB:270639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8BQwvb5PWYeNo9M896kEH3
        subject_person_id: p_8cVjN2F6e4z4TDW3w4YdEg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 270639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L6lU48mrEIMsY5FDFaUXwg
          claim_id: c_8BQwvb5PWYeNo9M896kEH3
          source_id: s_Db2VAuKCA2JEw8Kq16SF4s
          stance: supports
          locator: CBDB:270639
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
        id: c_wXReHPcTuwSeOlKdcUydv5
        subject_person_id: p_8cVjN2F6e4z4TDW3w4YdEg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpuV1F8FRVs_mJOiNz6Iid
          claim_id: c_wXReHPcTuwSeOlKdcUydv5
          source_id: s_Db2VAuKCA2JEw8Kq16SF4s
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvioAH4pK1gg7UWTM6DCMS
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王伍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伍 | accepted |
| bio.summary | 王伍，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 270639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CvioAH4pK1gg7UWTM6DCMS | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伍（CBDB 270639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270639&o=json)
