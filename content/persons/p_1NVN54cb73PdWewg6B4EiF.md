---
schema: wang-person/v1
id: p_1NVN54cb73PdWewg6B4EiF
status: active
merged_into: null
display_name: 王世則
cbdb_id: 38429
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7Ch362nD3itxAi7taiQAB
        subject_person_id: p_1NVN54cb73PdWewg6B4EiF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世則，宋人物。中国历代人物传记资料库（CBDB）以人物编号 38429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_r_bPim59hZD8WMUWSvQTGd
          claim_id: c_B7Ch362nD3itxAi7taiQAB
          source_id: s_6GRJpP3W4Be27WCiTT5jHS
          stance: supports
          locator: CBDB:38429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6GRJpP3W4Be27WCiTT5jHS
            source_type: api_record
            title: 中国历代人物传记资料库：王世則（CBDB 38429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38429&o=json
            external_identifier: CBDB:38429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_siywPVtFoaSyX9TdbpZjZ9
        subject_person_id: p_1NVN54cb73PdWewg6B4EiF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KNzSabf1s8wzCuT1u4zZ2V
          claim_id: c_siywPVtFoaSyX9TdbpZjZ9
          source_id: s_6GRJpP3W4Be27WCiTT5jHS
          stance: supports
          locator: CBDB:38429
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_6GRJpP3W4Be27WCiTT5jHS
            source_type: api_record
            title: 中国历代人物传记资料库：王世則（CBDB 38429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38429&o=json
            external_identifier: CBDB:38429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Qr56hOd14I1uM_J45dSWwB
        subject_person_id: p_1NVN54cb73PdWewg6B4EiF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yGpoAgiZMPF1sDB4aDTQDi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRZ7r771FduiePfINQQYyl
          claim_id: c_Qr56hOd14I1uM_J45dSWwB
          source_id: s_QcBCtjiB91PUEymT7KfZ8b
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QcBCtjiB91PUEymT7KfZ8b
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王世則妻)（CBDB 573293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573293&o=json
            external_identifier: CBDB:573293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yGpoAgiZMPF1sDB4aDTQDi
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_UoNXAtiYfDL18f1JUwx15s
        subject_person_id: p_1NVN54cb73PdWewg6B4EiF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zNLV_oLBlBv80uzDTFNNgM
          claim_id: c_UoNXAtiYfDL18f1JUwx15s
          source_id: s_6GRJpP3W4Be27WCiTT5jHS
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：曾孫; 重孫
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

# 王世則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世則，宋人物。中国历代人物传记资料库（CBDB）以人物编号 38429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世則 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yGpoAgiZMPF1sDB4aDTQDi | 張氏 | accepted |
| descendants | p_oBg2fph2HQeUi63Z2hsgrx | 王壽卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世則（CBDB 38429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38429&o=json)
- [中国历代人物传记资料库：張氏(王世則妻)（CBDB 573293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573293&o=json)
