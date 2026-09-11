---
schema: wang-person/v1
id: p_HJ3wsmqgAjiXeZYuaSpD4x
status: active
merged_into: null
display_name: 王愈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WjY7QWbh6xXaSDWj8GscSC
        subject_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYCDXi3KRHbAyujLCN9zE1
          claim_id: c_WjY7QWbh6xXaSDWj8GscSC
          source_id: s_q8JRCYseg3wBsdEsA2hBBi
          stance: supports
          locator: CBDB:16689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16689）
          source: &a1
            id: s_q8JRCYseg3wBsdEsA2hBBi
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 16689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16689&o=json
            external_identifier: CBDB:16689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u9VZE433DtMGmU3JNbHyqj
        subject_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
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
        - id: cs_rGGPsu17qDJp5WQjALru8T
          claim_id: c_u9VZE433DtMGmU3JNbHyqj
          source_id: s_q8JRCYseg3wBsdEsA2hBBi
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
        id: c_0pQ3QvmITuv7UEMSjX8fra
        subject_person_id: p_NMWVKSGm6E2DsVJoSMaM6W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TxlBEcfIVh2TtsMSHz33m2
          claim_id: c_0pQ3QvmITuv7UEMSjX8fra
          source_id: s_q8JRCYseg3wBsdEsA2hBBi
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1079;1080：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NMWVKSGm6E2DsVJoSMaM6W
        status: active
        display_name: 王汝平
        merged_into_person_id: null
  children:
    - claim:
        id: c_3w3seqf6oB-IGwgLyiBLW7
        subject_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wv1yLC4dBTzNwodXFcqeM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DblWjirtG2RmMisMHf4fyx
          claim_id: c_3w3seqf6oB-IGwgLyiBLW7
          source_id: s_bphoKM2R8QJhHNVWG6zCFC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1079;1081：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bphoKM2R8QJhHNVWG6zCFC
            source_type: api_record
            title: 中国历代人物传记资料库：王詔德（CBDB 16693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16693&o=json
            external_identifier: CBDB:16693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4wv1yLC4dBTzNwodXFcqeM
        status: active
        display_name: 王詔德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愈 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMWVKSGm6E2DsVJoSMaM6W | 王汝平 | accepted |
| children | p_4wv1yLC4dBTzNwodXFcqeM | 王詔德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愈（CBDB 16689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16689&o=json)
- [中国历代人物传记资料库：王詔德（CBDB 16693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16693&o=json)
