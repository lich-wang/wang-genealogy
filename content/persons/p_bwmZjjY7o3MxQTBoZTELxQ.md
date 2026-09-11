---
schema: wang-person/v1
id: p_bwmZjjY7o3MxQTBoZTELxQ
status: active
merged_into: null
display_name: 王偉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1UmP1poaNcbNrHaNqCC125
        subject_person_id: p_bwmZjjY7o3MxQTBoZTELxQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vctd5qaRmLGENhGB5qja84
          claim_id: c_1UmP1poaNcbNrHaNqCC125
          source_id: s_CWFGLJCSgFxfYETazhv7We
          stance: supports
          locator: CBDB:242760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242760）
          source: &a1
            id: s_CWFGLJCSgFxfYETazhv7We
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 242760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242760&o=json
            external_identifier: CBDB:242760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xCbDrTz2vNG2z8k6JBh3sM
        subject_person_id: p_bwmZjjY7o3MxQTBoZTELxQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 242760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tbtdANl_kzjV7VDgpyj5Zv
          claim_id: c_xCbDrTz2vNG2z8k6JBh3sM
          source_id: s_CWFGLJCSgFxfYETazhv7We
          stance: supports
          locator: CBDB:242760
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
        id: c_EGeg2z6DWBSxPnQYwwVDKk
        subject_person_id: p_bwmZjjY7o3MxQTBoZTELxQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6K_YR0xC1HKJI_-x8Eupd
          claim_id: c_EGeg2z6DWBSxPnQYwwVDKk
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gLTowmCEC7vGFGymkruUKP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 67734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json
            external_identifier: CBDB:67734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
  other: []
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 242760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 67734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json)
- [中国历代人物传记资料库：王偉（CBDB 242760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242760&o=json)
