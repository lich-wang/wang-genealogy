---
schema: wang-person/v1
id: p_fhGLq1GVtXqSnULUHt98dB
status: active
merged_into: null
display_name: 王宗立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQzYwG42s15rQJAdudNjPu
        subject_person_id: p_fhGLq1GVtXqSnULUHt98dB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkEntwDk7rKfCSRTjdCzLD
          claim_id: c_mQzYwG42s15rQJAdudNjPu
          source_id: s_Gnh7jB9vKAvP2oCADQ2iM4
          stance: supports
          locator: CBDB:573294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573294）
          source: &a1
            id: s_Gnh7jB9vKAvP2oCADQ2iM4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗立（CBDB 573294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573294&o=json
            external_identifier: CBDB:573294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rmH1NyjaGJqCK8LE8x35XW
        subject_person_id: p_fhGLq1GVtXqSnULUHt98dB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗立，宋人物。曾任觀察推官、尚書省兵部職方司郎中。（中国历代人物传记资料库 CBDB 573294）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VUT8UljDLegoh6I6ra5Uhz
          claim_id: c_rmH1NyjaGJqCK8LE8x35XW
          source_id: s_Gnh7jB9vKAvP2oCADQ2iM4
          stance: supports
          locator: CBDB:573294
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
  spouses:
    - claim:
        id: c_MlgonphidZMzNwlkwnLTgF
        subject_person_id: p_fhGLq1GVtXqSnULUHt98dB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_R2tNp7PJWUC77GAzkoCf81
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3I9_3zEr-x1w2c0eeFR8C9
          claim_id: c_MlgonphidZMzNwlkwnLTgF
          source_id: s_Dwr5k7PebBIvW0pF8LL8By
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dwr5k7PebBIvW0pF8LL8By
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王宗立妻)（CBDB 573295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573295&o=json
            external_identifier: CBDB:573295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R2tNp7PJWUC77GAzkoCf81
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_0DXZi1pNcaSd2ARWn-GJnd
        subject_person_id: p_fhGLq1GVtXqSnULUHt98dB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_FQdByu7UsfyXiidZaJvi
          claim_id: c_0DXZi1pNcaSd2ARWn-GJnd
          source_id: s_Gnh7jB9vKAvP2oCADQ2iM4
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oBg2fph2HQeUi63Z2hsgrx
        status: active
        display_name: 王壽卿
        merged_into_person_id: null
  other: []
---

# 王宗立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗立 | accepted |
| bio.summary | 王宗立，宋人物。曾任觀察推官、尚書省兵部職方司郎中。（中国历代人物传记资料库 CBDB 573294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_R2tNp7PJWUC77GAzkoCf81 | 陳氏 | accepted |
| descendants | p_oBg2fph2HQeUi63Z2hsgrx | 王壽卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王宗立妻)（CBDB 573295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573295&o=json)
- [中国历代人物传记资料库：王宗立（CBDB 573294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573294&o=json)
