---
schema: wang-person/v1
id: p_ck5AXM5Fx2KaAGeW6x29ur
status: active
merged_into: null
display_name: 王闐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1S649TbWFN3bs5UMDTsSpZ
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCRBKcCg1wUNazK85fbiHu
          claim_id: c_1S649TbWFN3bs5UMDTsSpZ
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
          stance: supports
          locator: CBDB:204766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204766）
          source: &a1
            id: s_UAF9bwtY6LRGzyASYuQF8D
            source_type: api_record
            title: 中国历代人物传记资料库：王闐（CBDB 204766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204766&o=json
            external_identifier: CBDB:204766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GtEoZS7SxVPrqSRNDzPWhA
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCiAAcDFmt9Eg2bAMY3xNd
          claim_id: c_GtEoZS7SxVPrqSRNDzPWhA
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
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
        id: c_eQU29UhNrL72Dp74GFzfe1
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
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
        - id: cs_Z5yq1AUXMTjTgCJmGhW27n
          claim_id: c_eQU29UhNrL72Dp74GFzfe1
          source_id: s_UAF9bwtY6LRGzyASYuQF8D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vab8uOvRywmp23WiJ0gOMH
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ei7eg6CfhQzNBCUMYZdXN
          claim_id: c_Vab8uOvRywmp23WiJ0gOMH
          source_id: s_rcdfHky1Q4AUJutcJkZsRY
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rcdfHky1Q4AUJutcJkZsRY
            source_type: api_record
            title: 中国历代人物传记资料库：王德純（CBDB 323748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json
            external_identifier: CBDB:323748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_czJSJilUcdRIU3OJcwS22T
        subject_person_id: p_dHDE8CHXuP6VtSC9J5FReU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HWTYVCSVzaP1WMvvlxAACi
          claim_id: c_czJSJilUcdRIU3OJcwS22T
          source_id: s_cNVnqrB19Mv4EJBAUqx157
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cNVnqrB19Mv4EJBAUqx157
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 323747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323747&o=json
            external_identifier: CBDB:323747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHDE8CHXuP6VtSC9J5FReU
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_Y3Z7xclVvPAYhTnbWK5idI
        subject_person_id: p_DmMVJMmz6V9do4ASjEo6Zz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3d_uiRfx6nuWwpZOPeQOrr
          claim_id: c_Y3Z7xclVvPAYhTnbWK5idI
          source_id: s_jKNB8k4dr4vhHgJ9GuUH16
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jKNB8k4dr4vhHgJ9GuUH16
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 323746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323746&o=json
            external_identifier: CBDB:323746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DmMVJMmz6V9do4ASjEo6Zz
        status: active
        display_name: 王浩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王闐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闐 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| ancestors | p_dHDE8CHXuP6VtSC9J5FReU | 王恩 | accepted |
| ancestors | p_DmMVJMmz6V9do4ASjEo6Zz | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 323748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json)
- [中国历代人物传记资料库：王恩（CBDB 323747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323747&o=json)
- [中国历代人物传记资料库：王浩（CBDB 323746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323746&o=json)
- [中国历代人物传记资料库：王闐（CBDB 204766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204766&o=json)
