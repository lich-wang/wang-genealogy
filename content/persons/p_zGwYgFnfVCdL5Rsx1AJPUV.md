---
schema: wang-person/v1
id: p_zGwYgFnfVCdL5Rsx1AJPUV
status: active
merged_into: null
display_name: 王宗圭
cbdb_id: 240083
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEZ9JU7q4H8AAAn6Sj5V3Y
        subject_person_id: p_zGwYgFnfVCdL5Rsx1AJPUV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗圭，明人物。正统十年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 240083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hj0GVqout9GmDKAgP0Xt06
          claim_id: c_BEZ9JU7q4H8AAAn6Sj5V3Y
          source_id: s_1UzEunU2pGPX1cj2SQXUxB
          stance: supports
          locator: CBDB:240083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1UzEunU2pGPX1cj2SQXUxB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗圭（CBDB 240083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240083&o=json
            external_identifier: CBDB:240083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCemzDHL4qcKyTv6g1Hitx
        subject_person_id: p_zGwYgFnfVCdL5Rsx1AJPUV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3yrSGrG2Pp4NzbAEhbSpZP
          claim_id: c_uCemzDHL4qcKyTv6g1Hitx
          source_id: s_1UzEunU2pGPX1cj2SQXUxB
          stance: supports
          locator: CBDB:240083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sYxgnrrgdTrM16W0m6KLVT
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zGwYgFnfVCdL5Rsx1AJPUV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8L2Lcdz56arHahViMrT6W
          claim_id: c_sYxgnrrgdTrM16W0m6KLVT
          source_id: s_0tLCuc3TajP22vGm-7dap9
          stance: supports
          locator: CBDB：兄弟 王瓖（338696）之父／母 王警道
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗圭 与 王瓖 为同胞（CBDB 记「兄」），王瓖 之父／母即 王宗圭 之父／母。
          source:
            id: s_0tLCuc3TajP22vGm-7dap9
            source_type: api_record
            title: 中国历代人物传记资料库：王宗圭（CBDB 240083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240083&o=json
            external_identifier: CBDB:240083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w9i3DxK5tYZ48zzRUjm6Xn
        status: active
        display_name: 王警道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ndkynkFD_zGpWYQAZgdoyP
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zGwYgFnfVCdL5Rsx1AJPUV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tORQ3eCHsDXRHQgUpXjNuD
          claim_id: c_ndkynkFD_zGpWYQAZgdoyP
          source_id: s_0tLCuc3TajP22vGm-7dap9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338696 王瓖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0tLCuc3TajP22vGm-7dap9
            source_type: api_record
            title: 中国历代人物传记资料库：王宗圭（CBDB 240083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240083&o=json
            external_identifier: CBDB:240083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGoCNoVNHxmsGgT4y3whCN
        status: active
        display_name: 王瓖
        merged_into_person_id: null
---

# 王宗圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗圭，明人物。正统十年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 240083） | accepted |
| name.primary | 王宗圭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w9i3DxK5tYZ48zzRUjm6Xn | 王警道 | accepted |
| other | p_GGoCNoVNHxmsGgT4y3whCN | 王瓖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗圭（CBDB 240083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240083&o=json)
