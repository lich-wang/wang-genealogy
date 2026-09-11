---
schema: wang-person/v1
id: p_QJVDTAzEGF414bUNYrGmGc
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 558094
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4hoOjFNuJx977c0aydP6_K
        subject_person_id: p_QJVDTAzEGF414bUNYrGmGc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nMVwzLvDn8xdZNk8ZXm_Qp
          claim_id: c_4hoOjFNuJx977c0aydP6_K
          source_id: s_sT2AzbXj0e0RDK_8HEyo7K
          stance: supports
          locator: CBDB:558094
          quotation: null
          interpretation_note: CBDB 明确记录的王文鬱配偶
          source: &a1
            id: s_sT2AzbXj0e0RDK_8HEyo7K
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王文鬱妻)（CBDB 558094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558094&o=json
            external_identifier: CBDB:558094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RUm-hnzZe3CvcVlHd7K3MH
        subject_person_id: p_38H315f8bXwvuH1dLJj2RP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QJVDTAzEGF414bUNYrGmGc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_co_iBynfb2BJ2KQFDol_jB
          claim_id: c_RUm-hnzZe3CvcVlHd7K3MH
          source_id: s_sT2AzbXj0e0RDK_8HEyo7K
          stance: supports
          locator: 南陽府志，lgid=878822：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_38H315f8bXwvuH1dLJj2RP
        status: active
        display_name: 王文鬱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_38H315f8bXwvuH1dLJj2RP | 王文鬱 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王文鬱妻)（CBDB 558094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558094&o=json)
