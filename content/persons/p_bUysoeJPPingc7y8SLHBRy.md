---
schema: wang-person/v1
id: p_bUysoeJPPingc7y8SLHBRy
status: active
merged_into: null
display_name: 王雲瑞
cbdb_id: 291949
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5pUb5ndvgeyeV98sLzuq6
        subject_person_id: p_bUysoeJPPingc7y8SLHBRy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲瑞，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_81-iRTC6izaQ1TAisjoplN
          claim_id: c_T5pUb5ndvgeyeV98sLzuq6
          source_id: s_vRhs3qN3tpfuSRuWgUMTxE
          stance: supports
          locator: CBDB:291949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vRhs3qN3tpfuSRuWgUMTxE
            source_type: api_record
            title: 中国历代人物传记资料库：王雲瑞（CBDB 291949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json
            external_identifier: CBDB:291949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZrKJqLYEyK1wdkfmoXp37
        subject_person_id: p_bUysoeJPPingc7y8SLHBRy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ws1zjs5hxDdCyf7zxyMTgP
          claim_id: c_kZrKJqLYEyK1wdkfmoXp37
          source_id: s_vRhs3qN3tpfuSRuWgUMTxE
          stance: supports
          locator: CBDB:291949
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QaT-4pt5OmpiXve2XlrbL9
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bUysoeJPPingc7y8SLHBRy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iFMFikv9RwIARP1g9MI9e1
          claim_id: c_QaT-4pt5OmpiXve2XlrbL9
          source_id: s_uqU37Mo2aUo1xXXAx6AjZU
          stance: supports
          locator: CBDB：兄弟 王京（202664）之父／母 王民
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲瑞 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王雲瑞 之父／母。
          source:
            id: s_uqU37Mo2aUo1xXXAx6AjZU
            source_type: api_record
            title: 中国历代人物传记资料库：王雲瑞（CBDB 291949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json
            external_identifier: CBDB:291949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ni93rzedW8HywjRcLfPSGG
        status: active
        display_name: 王民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Lo6IQUKddq7U-f98HhOG1D
        subject_person_id: p_bUysoeJPPingc7y8SLHBRy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zl4kKTNjrRpSQM_WVYfRS0
          claim_id: c_Lo6IQUKddq7U-f98HhOG1D
          source_id: s_uqU37Mo2aUo1xXXAx6AjZU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202664 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uqU37Mo2aUo1xXXAx6AjZU
            source_type: api_record
            title: 中国历代人物传记资料库：王雲瑞（CBDB 291949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json
            external_identifier: CBDB:291949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ufRLVRWc7tv4zcxsauhE29
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王雲瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲瑞，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291949） | accepted |
| name.primary | 王雲瑞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ni93rzedW8HywjRcLfPSGG | 王民 | accepted |
| other | p_ufRLVRWc7tv4zcxsauhE29 | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲瑞（CBDB 291949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291949&o=json)
