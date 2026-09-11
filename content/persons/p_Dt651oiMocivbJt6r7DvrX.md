---
schema: wang-person/v1
id: p_Dt651oiMocivbJt6r7DvrX
status: active
merged_into: null
display_name: 王茂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HB15ZbarxMPu6odDpttfSw
        subject_person_id: p_Dt651oiMocivbJt6r7DvrX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YTZyaGx7CR4SFV8MchXFS4
          claim_id: c_HB15ZbarxMPu6odDpttfSw
          source_id: s_Gj2biriQVKENoMYPNEPWYu
          stance: supports
          locator: CBDB:239470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239470）
          source: &a1
            id: s_Gj2biriQVKENoMYPNEPWYu
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 239470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239470&o=json
            external_identifier: CBDB:239470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cvQD3XrhUqTokBUUpiNkmQ
        subject_person_id: p_Dt651oiMocivbJt6r7DvrX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239470）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T8R9gwfiPPJJpFtQHEHYjj
          claim_id: c_cvQD3XrhUqTokBUUpiNkmQ
          source_id: s_Gj2biriQVKENoMYPNEPWYu
          stance: supports
          locator: CBDB:239470
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
        id: c_kNOWUdYVwp9uJRk0wR4XUj
        subject_person_id: p_Dt651oiMocivbJt6r7DvrX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qc7okRXID0TZj_GVIP2kO3
          claim_id: c_kNOWUdYVwp9uJRk0wR4XUj
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7jwQZDGBhmgWHqs6bzeeYj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 126766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json
            external_identifier: CBDB:126766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a2MgxrEcSzhbMSTAx75fb8
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  other: []
---

# 王茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂 | accepted |
| bio.summary | 王茂，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239470） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_a2MgxrEcSzhbMSTAx75fb8 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂（CBDB 239470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239470&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 126766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json)
