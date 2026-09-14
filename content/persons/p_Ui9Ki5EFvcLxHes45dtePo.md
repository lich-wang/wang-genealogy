---
schema: wang-person/v1
id: p_Ui9Ki5EFvcLxHes45dtePo
status: active
merged_into: null
display_name: 王宗瑾
cbdb_id: 30554
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j24YGqhKUAWKEvHFpbV5CE
        subject_person_id: p_Ui9Ki5EFvcLxHes45dtePo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑾，宋人物。籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 30554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MgT9ICb7FCNOxMYWiCEs6i
          claim_id: c_j24YGqhKUAWKEvHFpbV5CE
          source_id: s_oV9gr2W45ufSnEEDxg2J7Z
          stance: supports
          locator: CBDB:30554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oV9gr2W45ufSnEEDxg2J7Z
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑾（CBDB 30554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30554&o=json
            external_identifier: CBDB:30554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i7Ze6gRTUNcB4jJSBQmKVf
        subject_person_id: p_Ui9Ki5EFvcLxHes45dtePo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wSyHsF7rnPQsu7uF5xLqUz
          claim_id: c_i7Ze6gRTUNcB4jJSBQmKVf
          source_id: s_oV9gr2W45ufSnEEDxg2J7Z
          stance: supports
          locator: CBDB:30554
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jIDRjA_rkaQ-GDpUrWSy9F
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ui9Ki5EFvcLxHes45dtePo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YTrp3OeZGKqG3dy1_qWA_U
          claim_id: c_jIDRjA_rkaQ-GDpUrWSy9F
          source_id: s_bPnUkvQgrNzRl69uH1vj7B
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_bPnUkvQgrNzRl69uH1vj7B
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑾（CBDB 30554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30554&o=json
            external_identifier: CBDB:30554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j7iPUKCmtFNavh7UEFUMUs
        status: active
        display_name: 王正中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗瑾，宋人物。籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 30554） | accepted |
| name.primary | 王宗瑾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j7iPUKCmtFNavh7UEFUMUs | 王正中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗瑾（CBDB 30554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30554&o=json)
