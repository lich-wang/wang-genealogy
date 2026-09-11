---
schema: wang-person/v1
id: p_9zMW97J7BAC3TDNz5VbWCT
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKtnk136UVAbvHK9e5CFc2
        subject_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fJ4trFktKS1Z4DqJrQqCCB
          claim_id: c_GKtnk136UVAbvHK9e5CFc2
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
          stance: supports
          locator: CBDB:37796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37796）
          source: &a1
            id: s_Rvhkg7HeRM8H4DfqFM8DBt
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 37796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json
            external_identifier: CBDB:37796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMWoNjyZ5F24pgqKJ8tdTw
        subject_person_id: p_9zMW97J7BAC3TDNz5VbWCT
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
        - id: cs_9hsRU2VDdJVCAAxagVAQi6
          claim_id: c_UMWoNjyZ5F24pgqKJ8tdTw
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
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
        id: c_vv2qwRSioS6XbklfTfP2yt
        subject_person_id: p_jzoHdkm3G8KBKVV3oWtFDE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VdoTjiqfkhScm7BQn5KzG-
          claim_id: c_vv2qwRSioS6XbklfTfP2yt
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jzoHdkm3G8KBKVV3oWtFDE
        status: active
        display_name: 王忠立
        merged_into_person_id: null
  children:
    - claim:
        id: c_iBJiZwRcybO-F_v9xFcFKP
        subject_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OJM1c7iHOQABWVj5_Bu8bp
          claim_id: c_iBJiZwRcybO-F_v9xFcFKP
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1197：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jzoHdkm3G8KBKVV3oWtFDE | 王忠立 | accepted |
| children | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 37796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json)
