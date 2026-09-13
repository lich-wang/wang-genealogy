---
schema: wang-person/v1
id: p_X6xXCJDA9N7eA65k67tuWt
status: active
merged_into: null
display_name: 王德感
cbdb_id: 150703
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9kDuA1sE3bBm4A4zh2CSpZ
        subject_person_id: p_X6xXCJDA9N7eA65k67tuWt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德感，唐人物。籍贯中山。（中国历代人物传记资料库 CBDB 150703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dSMvIua3kQxdx8eYSr-8wN
          claim_id: c_9kDuA1sE3bBm4A4zh2CSpZ
          source_id: s_cDVeNy4Jm23DkYH93FLAVs
          stance: supports
          locator: CBDB:150703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cDVeNy4Jm23DkYH93FLAVs
            source_type: api_record
            title: 中国历代人物传记资料库：王德感（CBDB 150703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150703&o=json
            external_identifier: CBDB:150703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4TGy2PU7YckRis7diUoUC
        subject_person_id: p_X6xXCJDA9N7eA65k67tuWt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L4RDjobBbDwQ8J8aY66uMW
          claim_id: c_N4TGy2PU7YckRis7diUoUC
          source_id: s_cDVeNy4Jm23DkYH93FLAVs
          stance: supports
          locator: CBDB:150703
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2hUqZywolZeasA3OF32Ms8
        subject_person_id: p_X6xXCJDA9N7eA65k67tuWt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VyuFPCRymCLEm1hnvORvMO
          claim_id: c_2hUqZywolZeasA3OF32Ms8
          source_id: s_ho952LSp6FCu3XPRScF388
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ho952LSp6FCu3XPRScF388
            source_type: api_record
            title: 中国历代人物传记资料库：王素臣（CBDB 140232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json
            external_identifier: CBDB:140232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bewqQm7i6ZaUyZ1bMYLsJi
        status: active
        display_name: 王素臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德感，唐人物。籍贯中山。（中国历代人物传记资料库 CBDB 150703） | accepted |
| name.primary | 王德感 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bewqQm7i6ZaUyZ1bMYLsJi | 王素臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德感（CBDB 150703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150703&o=json)
- [中国历代人物传记资料库：王素臣（CBDB 140232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json)
