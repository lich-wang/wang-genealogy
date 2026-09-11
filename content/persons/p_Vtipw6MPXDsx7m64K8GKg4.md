---
schema: wang-person/v1
id: p_Vtipw6MPXDsx7m64K8GKg4
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 37941
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCaI97kJzmFy8d28bjHx-H
        subject_person_id: p_Vtipw6MPXDsx7m64K8GKg4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏（1086—1144），宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 37941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VNQWpLWQDrC3tbueoj4XCA
          claim_id: c_GCaI97kJzmFy8d28bjHx-H
          source_id: s_2ycKAjJjDbaD9hvMgWZYkr
          stance: supports
          locator: CBDB:37941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fQh1ZnT3LR5tTNosV-oyNu
        subject_person_id: p_Vtipw6MPXDsx7m64K8GKg4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TjXzZPaKwPvPZFgXdrVl1x
          claim_id: c_fQh1ZnT3LR5tTNosV-oyNu
          source_id: s_2ycKAjJjDbaD9hvMgWZYkr
          stance: supports
          locator: CBDB:37941
          quotation: null
          interpretation_note: CBDB 明确记录的王庭璋配偶
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
          source: *a1
      object_person:
        id: p_M19oFx28z6UHMwn5fL36T6
        status: active
        display_name: 王庭璋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏（1086—1144），宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 37941） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_M19oFx28z6UHMwn5fL36T6 | 王庭璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王庭璋妻)（CBDB 37941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37941&o=json)
