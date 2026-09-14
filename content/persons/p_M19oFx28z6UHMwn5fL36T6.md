---
schema: wang-person/v1
id: p_M19oFx28z6UHMwn5fL36T6
status: active
merged_into: null
display_name: 王庭璋
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQYzSz9DH6QfgivUtbronk
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBNEYTj84TtRH19HLBu8X6
          claim_id: c_WQYzSz9DH6QfgivUtbronk
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
          stance: supports
          locator: CBDB:12167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12167）
          source: &a1
            id: s_U2qJ5PrKVy2czEsxm3MK6N
            source_type: api_record
            title: 中国历代人物传记资料库：王庭璋（CBDB 12167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12167&o=json
            external_identifier: CBDB:12167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zwqgn9UeLJf16DBZ7qx2UB
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ncrVy4FSkbtcdRFXDFhYp4
          claim_id: c_zwqgn9UeLJf16DBZ7qx2UB
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
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
        id: c_YrySDk2kLph4Ltid8LGwK7
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1141年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxAx3jXE3AMNf2Df1bxs5J
          claim_id: c_YrySDk2kLph4Ltid8LGwK7
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
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
        id: c_6J6RFM3jH9wfzYQ1jzAMxU
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭璋（1086年—1141年），宋人物。籍贯安福，身份为地方士人/鄉紳、精於某種樂器。（中国历代人物传记资料库 CBDB 12167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7-WWXwvR0_I1RLYrSigHMv
          claim_id: c_6J6RFM3jH9wfzYQ1jzAMxU
          source_id: s_U2qJ5PrKVy2czEsxm3MK6N
          stance: supports
          locator: CBDB:12167
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Q_aVARaT1NnUAOSDtPdx6d
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmKuR6QP5HXTQ7tPNudqsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoBbyOEUAjDuToiwIUXjze
          claim_id: c_Q_aVARaT1NnUAOSDtPdx6d
          source_id: s_S_BpGd26BxRrWczB0CwZi7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12167）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_S_BpGd26BxRrWczB0CwZi7
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 20452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json
            external_identifier: CBDB:20452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LmKuR6QP5HXTQ7tPNudqsU
        status: active
        display_name: 王顗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sWdGMZJHMzBIy3112PjSc6
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Vtipw6MPXDsx7m64K8GKg4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3p14ZSSLv_wsGE6kGQqXK
          claim_id: c_sWdGMZJHMzBIy3112PjSc6
          source_id: s_2ycKAjJjDbaD9hvMgWZYkr
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1814;1815：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ycKAjJjDbaD9hvMgWZYkr
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王庭璋妻)（CBDB 37941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37941&o=json
            external_identifier: CBDB:37941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Vtipw6MPXDsx7m64K8GKg4
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SE3DPdIufVA4ZyRFEPzUiX
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcWIUuFyHx8_4UwpyP0n_A
          claim_id: c_SE3DPdIufVA4ZyRFEPzUiX
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12167 王庭璋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NKDBjDH5rA2rPZeJXPzJ9F
        status: active
        display_name: 王庭珍
        merged_into_person_id: null
---

# 王庭璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭璋 | accepted |
| birth.date | 1086年 | accepted |
| death.date | 1141年 | accepted |
| bio.summary | 王庭璋（1086年—1141年），宋人物。籍贯安福，身份为地方士人/鄉紳、精於某種樂器。（中国历代人物传记资料库 CBDB 12167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LmKuR6QP5HXTQ7tPNudqsU | 王顗 | accepted |
| spouses | p_Vtipw6MPXDsx7m64K8GKg4 | 劉氏 | accepted |
| other | p_NKDBjDH5rA2rPZeJXPzJ9F | 王庭珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王庭璋妻)（CBDB 37941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37941&o=json)
- [中国历代人物传记资料库：王庭璋（CBDB 12167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12167&o=json)
- [中国历代人物传记资料库：王庭珍（CBDB 12169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json)
- [中国历代人物传记资料库：王顗（CBDB 20452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json)
