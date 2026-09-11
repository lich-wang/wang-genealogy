---
schema: wang-person/v1
id: p_d9QrNwuRoU7z7WjDwXbPD8
status: active
merged_into: null
display_name: 王惟忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_baRQqdriNef6e5QVLTkMXp
        subject_person_id: p_d9QrNwuRoU7z7WjDwXbPD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8sX5pNA8hMVXmbMw2Hzz9U
          claim_id: c_baRQqdriNef6e5QVLTkMXp
          source_id: s_CkkefQx1R6oWtde75cG3nM
          stance: supports
          locator: CBDB:152748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152748）
          source: &a1
            id: s_CkkefQx1R6oWtde75cG3nM
            source_type: api_record
            title: 中国历代人物传记资料库：王惟忠（CBDB 152748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152748&o=json
            external_identifier: CBDB:152748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJUg6FerX2AK6Awsafg84R
        subject_person_id: p_d9QrNwuRoU7z7WjDwXbPD8
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
        - id: cs_VRxXEgcy8Pj8Vup4GmB7RW
          claim_id: c_GJUg6FerX2AK6Awsafg84R
          source_id: s_CkkefQx1R6oWtde75cG3nM
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
        id: c_E0Xkh_k5Ao0gGuFz0umFuk
        subject_person_id: p_bbA2A1GrfUE3UHbSpwtEYz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d9QrNwuRoU7z7WjDwXbPD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sn3QQ19JrM2_1g0th4lGcj
          claim_id: c_E0Xkh_k5Ao0gGuFz0umFuk
          source_id: s_CkkefQx1R6oWtde75cG3nM
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 418：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbA2A1GrfUE3UHbSpwtEYz
        status: active
        display_name: 王羊仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟忠 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bbA2A1GrfUE3UHbSpwtEYz | 王羊仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟忠（CBDB 152748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152748&o=json)
