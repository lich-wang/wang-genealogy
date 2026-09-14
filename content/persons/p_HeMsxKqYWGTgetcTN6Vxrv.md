---
schema: wang-person/v1
id: p_HeMsxKqYWGTgetcTN6Vxrv
status: active
merged_into: null
display_name: 王懷節
cbdb_id: 21977
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NUP15EePX9Qg3jA4zFvm3Y
        subject_person_id: p_HeMsxKqYWGTgetcTN6Vxrv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷節，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21977）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lyd2iiV2tndzWrewsOWgrU
          claim_id: c_NUP15EePX9Qg3jA4zFvm3Y
          source_id: s_Xz7GcmAP3XSVfzr1MCNbo8
          stance: supports
          locator: CBDB:21977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Xz7GcmAP3XSVfzr1MCNbo8
            source_type: api_record
            title: 中国历代人物传记资料库：王懷節（CBDB 21977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21977&o=json
            external_identifier: CBDB:21977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDCpQVQ6PPFpF7eFb8yEKr
        subject_person_id: p_HeMsxKqYWGTgetcTN6Vxrv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cNY8M7shgL8kzzcYBNHF51
          claim_id: c_JDCpQVQ6PPFpF7eFb8yEKr
          source_id: s_Xz7GcmAP3XSVfzr1MCNbo8
          stance: supports
          locator: CBDB:21977
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DmdGBsxYULx0tQGu3YP32d
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HeMsxKqYWGTgetcTN6Vxrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EF6gnWuth_WyRp1PQE20JV
          claim_id: c_DmdGBsxYULx0tQGu3YP32d
          source_id: s_kshhQpAHc1VB8I3ipV_Mih
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kshhQpAHc1VB8I3ipV_Mih
            source_type: api_record
            title: 中国历代人物传记资料库：王懷節（CBDB 21977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21977&o=json
            external_identifier: CBDB:21977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvEsXMQ6J7PST7ecUX2ULA
        status: active
        display_name: 王繼忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷節，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21977） | accepted |
| name.primary | 王懷節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvEsXMQ6J7PST7ecUX2ULA | 王繼忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷節（CBDB 21977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21977&o=json)
