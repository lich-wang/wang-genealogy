---
schema: wang-person/v1
id: p_xYgEMDZ5FcUAKj6AucvNLU
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tstmb4H3mHo64wkTMG52Tj
        subject_person_id: p_xYgEMDZ5FcUAKj6AucvNLU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4pxmM6TD3g57ZTsiaNaECY
          claim_id: c_tstmb4H3mHo64wkTMG52Tj
          source_id: s_XXXaMjNQ9JyjDpFFFkzH8r
          stance: supports
          locator: CBDB:164507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164507）
          source: &a1
            id: s_XXXaMjNQ9JyjDpFFFkzH8r
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 164507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164507&o=json
            external_identifier: CBDB:164507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qhQKdDVP6VyahNzeasgTTf
        subject_person_id: p_xYgEMDZ5FcUAKj6AucvNLU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_44VXWKK6A85Q8aSfyAd3Nc
          claim_id: c_qhQKdDVP6VyahNzeasgTTf
          source_id: s_XXXaMjNQ9JyjDpFFFkzH8r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BdrBSbdWeElU47HDMEZFsG
        subject_person_id: p_xYgEMDZ5FcUAKj6AucvNLU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGkjiKdWjUkcef224C6r6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IVPB2vf3xvM7hOyIJrNYQs
          claim_id: c_BdrBSbdWeElU47HDMEZFsG
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao10：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VNQKyEN1JvKSVGa3FWFoiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 142955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json
            external_identifier: CBDB:142955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dGkjiKdWjUkcef224C6r6D
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dGkjiKdWjUkcef224C6r6D | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 142955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json)
- [中国历代人物传记资料库：王訓（CBDB 164507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164507&o=json)
