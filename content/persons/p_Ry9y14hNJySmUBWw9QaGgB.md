---
schema: wang-person/v1
id: p_Ry9y14hNJySmUBWw9QaGgB
status: active
merged_into: null
display_name: 王逸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duDbnTb3XASQeoFzbQP8Qb
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q8rdsYwk1yE7rGGs7kN5PC
          claim_id: c_duDbnTb3XASQeoFzbQP8Qb
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: CBDB:139632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139632）
          source: &a1
            id: s_ecjSPPmUZed9C1r86B6Q55
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 139632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139632&o=json
            external_identifier: CBDB:139632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CqZrVqtkpyKG5ZK39nWTGj
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 549年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nCjTB5ueDyTVH6sQeK9NU
          claim_id: c_CqZrVqtkpyKG5ZK39nWTGj
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pz3SQh9X2aC3JyQoH1BPtT
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 618年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxC2wXWYBMZ8w6Q1wbd519
          claim_id: c_Pz3SQh9X2aC3JyQoH1BPtT
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdtEWVVV3FnwoUMAXevbbh
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸（549年—618年），隋人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 139632）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7kJWRsCYWKQaO9dGkS-h8P
          claim_id: c_DdtEWVVV3FnwoUMAXevbbh
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: CBDB:139632
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CcXMXDDuUg6siWJCWYilC2
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SjJ6uECtRN6PTDsLu344uv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8uzNmr9CFRyZwczm9o2vx7
          claim_id: c_CcXMXDDuUg6siWJCWYilC2
          source_id: s_Be4_EkQVWCNs6FK2VsZMCW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 53：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Be4_EkQVWCNs6FK2VsZMCW
            source_type: api_record
            title: 中国历代人物传记资料库：和氏(王逸妻)（CBDB 148568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148568&o=json
            external_identifier: CBDB:148568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SjJ6uECtRN6PTDsLu344uv
        status: active
        display_name: 和氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_y7c77QSEIS8hL0JzMVMiUm
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6jHSeBLmTJFKAdLmgdoTBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McPybCwH04ALqarJ38DH0o
          claim_id: c_y7c77QSEIS8hL0JzMVMiUm
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 53：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6jHSeBLmTJFKAdLmgdoTBB
        status: active
        display_name: 王行表
        merged_into_person_id: null
  other: []
---

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸 | accepted |
| birth.date | 549年 | accepted |
| death.date | 618年 | accepted |
| bio.summary | 王逸（549年—618年），隋人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 139632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SjJ6uECtRN6PTDsLu344uv | 和氏 | accepted |
| descendants | p_6jHSeBLmTJFKAdLmgdoTBB | 王行表 | accepted |

## 外部来源

- [中国历代人物传记资料库：和氏(王逸妻)（CBDB 148568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148568&o=json)
- [中国历代人物传记资料库：王逸（CBDB 139632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139632&o=json)
