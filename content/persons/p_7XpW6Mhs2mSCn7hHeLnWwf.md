---
schema: wang-person/v1
id: p_7XpW6Mhs2mSCn7hHeLnWwf
status: active
merged_into: null
display_name: 王秉新
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4da9i91M7JciWaft3qQM47
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q96BwcaJ4vYPyPNfBdSuS5
          claim_id: c_4da9i91M7JciWaft3qQM47
          source_id: s_4DW59uY7TnV8ucER98VTyk
          stance: supports
          locator: CBDB:327256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327256）
          source: &a1
            id: s_4DW59uY7TnV8ucER98VTyk
            source_type: api_record
            title: 中国历代人物传记资料库：王秉新（CBDB 327256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327256&o=json
            external_identifier: CBDB:327256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4xnXN9TF5B7J6v8PLffQ7
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉新，明人物。嘉靖四十一年進士，籍贯南昌。（中国历代人物传记资料库 CBDB 327256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_abVGhw3Z3AWNxkIxEcQ3D1
          claim_id: c_F4xnXN9TF5B7J6v8PLffQ7
          source_id: s_4DW59uY7TnV8ucER98VTyk
          stance: supports
          locator: CBDB:327256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2CISb8iQa7aSFb3tK2-T88
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tdH923W47W8dKqdDiYNAZ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vf67gHXHx-Fx_6SwPyQNe_
          claim_id: c_2CISb8iQa7aSFb3tK2-T88
          source_id: s_4DW59uY7TnV8ucER98VTyk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tdH923W47W8dKqdDiYNAZ8
        status: active
        display_name: 王楨
        merged_into_person_id: null
    - claim:
        id: c_DtCgAzeS1deCHegy5J8g2R
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AMUPZkCxAGFdWhHmNvoBtB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3RQSshYncQv409pZrDPfR7
          claim_id: c_DtCgAzeS1deCHegy5J8g2R
          source_id: s_wuMB2Yi7H67skQ00W_H6Qa
          stance: supports
          locator: CBDB：兄弟 王楨（205021）之父／母 王秉新
          quotation: null
          interpretation_note: 由兄弟关系推断：王梅 与 王楨 为同胞（CBDB 记「兄」），王楨 之父／母即 王梅 之父／母。
          source:
            id: s_wuMB2Yi7H67skQ00W_H6Qa
            source_type: api_record
            title: 中国历代人物传记资料库：王梅（CBDB 327260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327260&o=json
            external_identifier: CBDB:327260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AMUPZkCxAGFdWhHmNvoBtB
        status: active
        display_name: 王梅
        merged_into_person_id: null
    - claim:
        id: c_Gnw8esSeEzm6z8Zi9UXRrp
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PotURH2SHbNA8zcQD9J9V9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_eq71pRwzVD_S3C5CB9ph
          claim_id: c_Gnw8esSeEzm6z8Zi9UXRrp
          source_id: s_wm0DTgle_jVxb2I4F0XtnY
          stance: supports
          locator: CBDB：兄弟 王楨（205021）之父／母 王秉新
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王楨 为同胞（CBDB 记「弟」），王楨 之父／母即 王相 之父／母。
          source:
            id: s_wm0DTgle_jVxb2I4F0XtnY
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 327259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json
            external_identifier: CBDB:327259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PotURH2SHbNA8zcQD9J9V9
        status: active
        display_name: 王相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秉新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉新 | accepted |
| bio.summary | 王秉新，明人物。嘉靖四十一年進士，籍贯南昌。（中国历代人物传记资料库 CBDB 327256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tdH923W47W8dKqdDiYNAZ8 | 王楨 | accepted |
| children | p_AMUPZkCxAGFdWhHmNvoBtB | 王梅 | accepted |
| children | p_PotURH2SHbNA8zcQD9J9V9 | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉新（CBDB 327256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327256&o=json)
- [中国历代人物传记资料库：王梅（CBDB 327260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327260&o=json)
- [中国历代人物传记资料库：王相（CBDB 327259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json)
