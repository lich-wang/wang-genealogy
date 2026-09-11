---
schema: wang-person/v1
id: p_RA5Q1hFsD4bFpuPrR9y5n3
status: active
merged_into: null
display_name: 王哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFK8QtjAnvKPU5FBkTN6ay
        subject_person_id: p_RA5Q1hFsD4bFpuPrR9y5n3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2jYBEihb3XnLv2QNHtfrL
          claim_id: c_fFK8QtjAnvKPU5FBkTN6ay
          source_id: s_z2o7UQNxSXmqxVyPd15yb7
          stance: supports
          locator: CBDB:151429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151429）
          source: &a1
            id: s_z2o7UQNxSXmqxVyPd15yb7
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 151429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151429&o=json
            external_identifier: CBDB:151429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84HXzrntKLHereAeocjJFP
        subject_person_id: p_RA5Q1hFsD4bFpuPrR9y5n3
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
        - id: cs_HS56W9hsw9wFyCMvBpbHCK
          claim_id: c_84HXzrntKLHereAeocjJFP
          source_id: s_z2o7UQNxSXmqxVyPd15yb7
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
        id: c_imq9fZNr_uVhFBnDNNp_eg
        subject_person_id: p_RA5Q1hFsD4bFpuPrR9y5n3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQOFibhL9n_kaRbSDvt2MF
          claim_id: c_imq9fZNr_uVhFBnDNNp_eg
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 91：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DjECFUtiuZf73kK6pGREps
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芝（CBDB 140365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json
            external_identifier: CBDB:140365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qju67ahEiuJqKQGrjA4w6B
        status: active
        display_name: 王庭芝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Qju67ahEiuJqKQGrjA4w6B | 王庭芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭芝（CBDB 140365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json)
- [中国历代人物传记资料库：王哲（CBDB 151429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151429&o=json)
