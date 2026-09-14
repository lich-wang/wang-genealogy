---
schema: wang-person/v1
id: p_DeseNKP4g7aPjG5h7Y8YRM
status: active
merged_into: null
display_name: 王英
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2UGax46X4wMhjfYesvYkY
        subject_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H3Pu36K961QC2UWz4VnHNg
          claim_id: c_o2UGax46X4wMhjfYesvYkY
          source_id: s_DWzygZL1WZcHGCN3cs7hAK
          stance: supports
          locator: CBDB:246424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246424）
          source: &a1
            id: s_DWzygZL1WZcHGCN3cs7hAK
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_984H2YNGUFJf3VPp9Y9M7a
        subject_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。成化八年進士，籍贯夏津，曾任百戶。（中国历代人物传记资料库 CBDB 246424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5KruwUHUY02cOXnZ-H7srA
          claim_id: c_984H2YNGUFJf3VPp9Y9M7a
          source_id: s_DWzygZL1WZcHGCN3cs7hAK
          stance: supports
          locator: CBDB:246424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0Y4kinSl-jce3YTLFKS8PJ
        subject_person_id: p_vLt7CbNRRVMBtGsA8iSfNw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D29EmSfgTyVPohTFlrfL9O
          claim_id: c_0Y4kinSl-jce3YTLFKS8PJ
          source_id: s_CK2TPPgwWmYFXWgJPcqLSZ
          stance: supports
          locator: CBDB：兄弟 王雄（199540）之父／母 王恕
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王雄 为同胞（CBDB 记「弟」），王雄 之父／母即 王英 之父／母。
          source:
            id: s_CK2TPPgwWmYFXWgJPcqLSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vLt7CbNRRVMBtGsA8iSfNw
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_9kzH2OEg1YJsT96oCfpSQ4
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y_8rD4gbT7ENI0dbeajqMf
          claim_id: c_9kzH2OEg1YJsT96oCfpSQ4
          source_id: s_CK2TPPgwWmYFXWgJPcqLSZ
          stance: supports
          locator: CBDB：兄弟 王雄（201736）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王雄 为同胞（CBDB 记「弟」），王雄 之父／母即 王英 之父／母。
          source:
            id: s_CK2TPPgwWmYFXWgJPcqLSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sr256MBGaAqYqzJEV6SSHK
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8Yt1gAwEzOaEByG5Y9zAsp
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4XZNB3r8gdKrYKPowazhg
          claim_id: c_8Yt1gAwEzOaEByG5Y9zAsp
          source_id: s_CK2TPPgwWmYFXWgJPcqLSZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199540 王雄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CK2TPPgwWmYFXWgJPcqLSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_46qxZEY1wVCATMP4bSgASc
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_xo4SQK8TmOddNqgeuQMxG_
        subject_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7wmBjhoG6Pi-Zx43J3ryA
          claim_id: c_xo4SQK8TmOddNqgeuQMxG_
          source_id: s_CK2TPPgwWmYFXWgJPcqLSZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201736 王雄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CK2TPPgwWmYFXWgJPcqLSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDsTSNKuQNDdLuyN146sBf
        status: active
        display_name: 王雄
        merged_into_person_id: null
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。成化八年進士，籍贯夏津，曾任百戶。（中国历代人物传记资料库 CBDB 246424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vLt7CbNRRVMBtGsA8iSfNw | 王恕 | accepted |
| parents | p_sr256MBGaAqYqzJEV6SSHK | 王綱 | accepted |
| other | p_46qxZEY1wVCATMP4bSgASc | 王雄 | accepted |
| other | p_dDsTSNKuQNDdLuyN146sBf | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 246424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json)
