---
schema: wang-person/v1
id: p_VynyhNxLVZm8KKMYzz5BcS
status: active
merged_into: null
display_name: 王汝為
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_heVuZcVsL9LPz9BCu9W8VS
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D61GhdLJ8kfvbV4qDJWZGU
          claim_id: c_heVuZcVsL9LPz9BCu9W8VS
          source_id: s_DWyBSUshYvnSgUtozM153n
          stance: supports
          locator: CBDB:261989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261989）
          source: &a1
            id: s_DWyBSUshYvnSgUtozM153n
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 261989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261989&o=json
            external_identifier: CBDB:261989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75pNkshi6uQ1w9qiDd1r3F
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
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
        - id: cs_USu2bo496QRzn4uH3RxQ4W
          claim_id: c_75pNkshi6uQ1w9qiDd1r3F
          source_id: s_DWyBSUshYvnSgUtozM153n
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
        id: c_Wv8uoBqpnAO2MmKGdhvV9U
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpzTbc5e-5lMgK535_pjPl
          claim_id: c_Wv8uoBqpnAO2MmKGdhvV9U
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_mnwAUmhugda-I33X0cK0Pc
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qD37A7x-s77bx6TPnkDEMm
          claim_id: c_mnwAUmhugda-I33X0cK0Pc
          source_id: s_DWyBSUshYvnSgUtozM153n
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_upmMFAstLHjgZ6eyALiaEs
        status: active
        display_name: 王顯
        merged_into_person_id: null
  other: []
---

# 王汝為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝為 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |
| descendants | p_upmMFAstLHjgZ6eyALiaEs | 王顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝為（CBDB 261989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261989&o=json)
- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
