---
schema: wang-person/v1
id: p_hNu3dxf53AXqHMNKTHYTAW
status: active
merged_into: null
display_name: 王昱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UWiDTDQi3AKkmCAVCZmKSs
        subject_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TL9uMCxkPN9HMx82YfsUhe
          claim_id: c_UWiDTDQi3AKkmCAVCZmKSs
          source_id: s_Pvm4FekxaGEfK5CmyYyFwW
          stance: supports
          locator: CBDB:266965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266965）
          source: &a1
            id: s_Pvm4FekxaGEfK5CmyYyFwW
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 266965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json
            external_identifier: CBDB:266965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2FPvg8puHktgL9EuJcLDd
        subject_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v-pLx0ND66nF9g8GNTVJFM
          claim_id: c_o2FPvg8puHktgL9EuJcLDd
          source_id: s_Pvm4FekxaGEfK5CmyYyFwW
          stance: supports
          locator: CBDB:266965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d3vTI71xCMVcK0VB1C6rW6
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T-GXA7yKrdVjkGf4dE5V__
          claim_id: c_d3vTI71xCMVcK0VB1C6rW6
          source_id: s_uWp0l0BDO1BH4seF20MWpT
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王昱 之父／母。
          source:
            id: s_uWp0l0BDO1BH4seF20MWpT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 266965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json
            external_identifier: CBDB:266965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        status: active
        display_name: 王久壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ja6AW1zpkdgEJpj74ROs3m
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UiqGjkCkhD62aTvM_iyBI
          claim_id: c_ja6AW1zpkdgEJpj74ROs3m
          source_id: s_uWp0l0BDO1BH4seF20MWpT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uWp0l0BDO1BH4seF20MWpT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 266965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json
            external_identifier: CBDB:266965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fG2ZSSsFcXdaZWCtjXUkRA
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | 王昱，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ax72Y4zqcv4L6DYQUb7Eu1 | 王久壽 | accepted |
| other | p_fG2ZSSsFcXdaZWCtjXUkRA | 王朝卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 266965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json)
