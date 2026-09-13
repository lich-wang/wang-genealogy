---
schema: wang-person/v1
id: p_LXVSMfmUiLLAkLsMQXrEbf
status: active
merged_into: null
display_name: 王隱卿
cbdb_id: 240367
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NND3DxZ8eiF53yPDpnmqmm
        subject_person_id: p_LXVSMfmUiLLAkLsMQXrEbf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隱卿，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UlgZrCtLvFTKQcH0kGLbYI
          claim_id: c_NND3DxZ8eiF53yPDpnmqmm
          source_id: s_NJYFnv81qQpFAYvPP3f3BJ
          stance: supports
          locator: CBDB:240367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NJYFnv81qQpFAYvPP3f3BJ
            source_type: api_record
            title: 中国历代人物传记资料库：王隱卿（CBDB 240367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240367&o=json
            external_identifier: CBDB:240367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EXYs3mPiGd5A5HPZRHUR4t
        subject_person_id: p_LXVSMfmUiLLAkLsMQXrEbf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隱卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fdGawULUouZK3Wf9Hb2eob
          claim_id: c_EXYs3mPiGd5A5HPZRHUR4t
          source_id: s_NJYFnv81qQpFAYvPP3f3BJ
          stance: supports
          locator: CBDB:240367
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
        id: c_DV3-eHYRE9OsTshSyNEKPI
        subject_person_id: p_LXVSMfmUiLLAkLsMQXrEbf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VNVV0X_lps17dcOTaHVsEV
          claim_id: c_DV3-eHYRE9OsTshSyNEKPI
          source_id: s_NJYFnv81qQpFAYvPP3f3BJ
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NJYFnv81qQpFAYvPP3f3BJ
            source_type: api_record
            title: 中国历代人物传记资料库：王隱卿（CBDB 240367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240367&o=json
            external_identifier: CBDB:240367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YPLFCFq4wshZxcCaGTvWhA
        status: active
        display_name: 王常
        merged_into_person_id: null
  other: []
---

# 王隱卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王隱卿，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240367） | accepted |
| name.primary | 王隱卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YPLFCFq4wshZxcCaGTvWhA | 王常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隱卿（CBDB 240367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240367&o=json)
