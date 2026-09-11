---
schema: wang-person/v1
id: p_XNnEJW93RJQ51JNrQsQRTJ
status: active
merged_into: null
display_name: 王彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GPMFkHg2sWjPBfhmD6mep9
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCU224TTG7Nq738hTcQeoR
          claim_id: c_GPMFkHg2sWjPBfhmD6mep9
          source_id: s_MtohSRd52v22Y41rG1fyFf
          stance: supports
          locator: CBDB:23474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23474）
          source: &a1
            id: s_MtohSRd52v22Y41rG1fyFf
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 23474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23474&o=json
            external_identifier: CBDB:23474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6dFiMYqxD2BDqYCAMF2fJV
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2QjrG3xemjgJ9aY1Y46R1
          claim_id: c_6dFiMYqxD2BDqYCAMF2fJV
          source_id: s_MtohSRd52v22Y41rG1fyFf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_Xb3vZWf4sV8tg8bXGLmeNW
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnB1AGY8VlutAVVmctRTX-
          claim_id: c_Xb3vZWf4sV8tg8bXGLmeNW
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 紹興十八年同年小錄，136：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oc1QNAEk7i97afFuxniTAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 23477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json
            external_identifier: CBDB:23477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jUfc5vCsBkQrPPCvwGCB11
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
  other: []
---

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jUfc5vCsBkQrPPCvwGCB11 | 王堯臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 23474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23474&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 23477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json)
