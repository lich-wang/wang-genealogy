---
schema: wang-person/v1
id: p_x1FTUwitbrYDetsnBCa1jT
status: active
merged_into: null
display_name: 王卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwWdLKDRBubLcX5hdDwjQD
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YsdvQBxzkQFzc7smNNRTA6
          claim_id: c_EwWdLKDRBubLcX5hdDwjQD
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: CBDB:139092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139092）
          source: &a1
            id: s_6A6Txntxc2o5RwFdvA17Ue
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 139092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139092&o=json
            external_identifier: CBDB:139092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jErrMeAPMBnTXUwMJFovFM
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4pDv28ra5rbe8QEMBr29Z
          claim_id: c_jErrMeAPMBnTXUwMJFovFM
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
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
        id: c_98UFeLQ6Nt7GzBUUxh6aie
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 607年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WiD5Lz6p3owT9PxASpUYUG
          claim_id: c_98UFeLQ6Nt7GzBUUxh6aie
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
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
        id: c_iFMhYHtZLcRStq3NQG4hKM
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿（559年—607年），隋人物。籍贯太原，曾任縣丞。（中国历代人物传记资料库 CBDB 139092）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BtQAkGaTPIy0CWpOd_6Y3X
          claim_id: c_iFMhYHtZLcRStq3NQG4hKM
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: CBDB:139092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bTbHwMxAJJixIKNqViZdvZ
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9bP83bEuxM2nLAo2RFHdMz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79_4WX-ktlAsSYBOs6SnbF
          claim_id: c_bTbHwMxAJJixIKNqViZdvZ
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 26：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9bP83bEuxM2nLAo2RFHdMz
        status: active
        display_name: 王叔孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_frQLpUCCFbyEPTXE4yBCb5
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8oeqEXVj5H5yLqMJqCa4fg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7b9ZqjrF3JPs1jsks0Mjnw
          claim_id: c_frQLpUCCFbyEPTXE4yBCb5
          source_id: s_e3fe8Nr-yJrgMJp0SxGFh0
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 26：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e3fe8Nr-yJrgMJp0SxGFh0
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王卿妻)（CBDB 147343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147343&o=json
            external_identifier: CBDB:147343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8oeqEXVj5H5yLqMJqCa4fg
        status: active
        display_name: 任氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| birth.date | 559年 | accepted |
| death.date | 607年 | accepted |
| bio.summary | 王卿（559年—607年），隋人物。籍贯太原，曾任縣丞。（中国历代人物传记资料库 CBDB 139092） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9bP83bEuxM2nLAo2RFHdMz | 王叔孫 | accepted |
| spouses | p_8oeqEXVj5H5yLqMJqCa4fg | 任氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王卿妻)（CBDB 147343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147343&o=json)
- [中国历代人物传记资料库：王卿（CBDB 139092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139092&o=json)
