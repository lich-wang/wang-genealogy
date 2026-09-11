---
schema: wang-person/v1
id: p_qTbXB97SFc7HLafkZNoqLg
status: active
merged_into: null
display_name: 王珍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Kyq8xC8mC2FDER1M5bx2Z
        subject_person_id: p_qTbXB97SFc7HLafkZNoqLg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v18pJYCnEJCFCRYRdE9hoX
          claim_id: c_5Kyq8xC8mC2FDER1M5bx2Z
          source_id: s_mNuUDAH5NnsQSGJSRFf9Z4
          stance: supports
          locator: CBDB:253902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253902）
          source: &a1
            id: s_mNuUDAH5NnsQSGJSRFf9Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 253902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253902&o=json
            external_identifier: CBDB:253902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uC9mcgT73dhCzaVbg5AoJ1
        subject_person_id: p_qTbXB97SFc7HLafkZNoqLg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d9ew44B6Taf74dMoVouDWx
          claim_id: c_uC9mcgT73dhCzaVbg5AoJ1
          source_id: s_mNuUDAH5NnsQSGJSRFf9Z4
          stance: supports
          locator: CBDB:253902
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
        id: c_0Wb2NQr7gxEcwpjMDLzoJN
        subject_person_id: p_qTbXB97SFc7HLafkZNoqLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZHbzmru5ME2qchkPPEpE1
          claim_id: c_0Wb2NQr7gxEcwpjMDLzoJN
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_swTACms8KFk1ksLaDU531V
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json
            external_identifier: CBDB:67292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | 王珍，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 253902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253902&o=json)
- [中国历代人物传记资料库：王佐（CBDB 67292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json)
