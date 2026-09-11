---
schema: wang-person/v1
id: p_Gq24SpR1JwxAtM1Y4bPKFh
status: active
merged_into: null
display_name: 王繼之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Q5jNMYBYgczTUPGosxtkE
        subject_person_id: p_Gq24SpR1JwxAtM1Y4bPKFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCaTH9Erb3DhiJYZ8sVeKf
          claim_id: c_5Q5jNMYBYgczTUPGosxtkE
          source_id: s_cSaQKEBPtqnM6TA1H5wCvx
          stance: supports
          locator: CBDB:290828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290828）
          source: &a1
            id: s_cSaQKEBPtqnM6TA1H5wCvx
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 290828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290828&o=json
            external_identifier: CBDB:290828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8YhWbx1VnGS83gAux937hE
        subject_person_id: p_Gq24SpR1JwxAtM1Y4bPKFh
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
        - id: cs_KtBU54cVUB5F4gf7AMcCsJ
          claim_id: c_8YhWbx1VnGS83gAux937hE
          source_id: s_cSaQKEBPtqnM6TA1H5wCvx
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
        id: c_vPfTpQQ8naXBUC-ckCgnQ7
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gq24SpR1JwxAtM1Y4bPKFh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHCRiX6TkizL4An2OuSayK
          claim_id: c_vPfTpQQ8naXBUC-ckCgnQ7
          source_id: s_cSaQKEBPtqnM6TA1H5wCvx
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼之 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼之（CBDB 290828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290828&o=json)
