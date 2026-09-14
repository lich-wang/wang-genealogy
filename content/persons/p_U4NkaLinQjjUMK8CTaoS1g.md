---
schema: wang-person/v1
id: p_U4NkaLinQjjUMK8CTaoS1g
status: active
merged_into: null
display_name: 王鏸
cbdb_id: 248842
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CQEx6G5D9Wb1MzUMn5853E
        subject_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏸，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G5JaNNIsDbkGYBpMUwR2a-
          claim_id: c_CQEx6G5D9Wb1MzUMn5853E
          source_id: s_tFyMyycyRnYidHLw7v4cgt
          stance: supports
          locator: CBDB:248842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tFyMyycyRnYidHLw7v4cgt
            source_type: api_record
            title: 中国历代人物传记资料库：王鏸（CBDB 248842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json
            external_identifier: CBDB:248842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXzQrkLkBJTvyHGBpATS9n
        subject_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6tUcp72Bm8WSmr6uQUKqyW
          claim_id: c_DXzQrkLkBJTvyHGBpATS9n
          source_id: s_tFyMyycyRnYidHLw7v4cgt
          stance: supports
          locator: CBDB:248842
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gkSHG1cmy0Wr5OCcYtKZ5_
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89IEtYlXgdNO0vACRInOvf
          claim_id: c_gkSHG1cmy0Wr5OCcYtKZ5_
          source_id: s_AbjyCGOIKj0sOgCcfx3DVE
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏸 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鏸 之父／母。
          source:
            id: s_AbjyCGOIKj0sOgCcfx3DVE
            source_type: api_record
            title: 中国历代人物传记资料库：王鏸（CBDB 248842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json
            external_identifier: CBDB:248842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DE5MixoNSLiG1c6ccSaisR
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qAdjWMhpUqYtTrvXQW_mjt
        subject_person_id: p_U4NkaLinQjjUMK8CTaoS1g
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2opD6TzuaCdMzOgHWweSJ3
          claim_id: c_qAdjWMhpUqYtTrvXQW_mjt
          source_id: s_AbjyCGOIKj0sOgCcfx3DVE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AbjyCGOIKj0sOgCcfx3DVE
            source_type: api_record
            title: 中国历代人物传记资料库：王鏸（CBDB 248842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json
            external_identifier: CBDB:248842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wk8JVk2gzRitAVsdJ59hd5
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王鏸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鏸，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248842） | accepted |
| name.primary | 王鏸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DE5MixoNSLiG1c6ccSaisR | 王瑾 | accepted |
| other | p_Wk8JVk2gzRitAVsdJ59hd5 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏸（CBDB 248842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248842&o=json)
