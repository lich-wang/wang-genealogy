---
schema: wang-person/v1
id: p_3ZBFnXj6nK21XoEDDtCLMn
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 247212
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CUVAyNbgkERDDM59D6SKhY
        subject_person_id: p_3ZBFnXj6nK21XoEDDtCLMn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cYo5MtWU4SzAzUd5F14WGq
          claim_id: c_CUVAyNbgkERDDM59D6SKhY
          source_id: s_1xZDuj4vcm8UuDZ5S8_jid
          stance: supports
          locator: CBDB:247212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1xZDuj4vcm8UuDZ5S8_jid
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王弁妻)（CBDB 247212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247212&o=json
            external_identifier: CBDB:247212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XHIRhKIPPHLYOz6zO0FYJa
        subject_person_id: p_3ZBFnXj6nK21XoEDDtCLMn
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
        - id: cs_8EOXUVVXxEY26dZdyVvIsF
          claim_id: c_XHIRhKIPPHLYOz6zO0FYJa
          source_id: s_1xZDuj4vcm8UuDZ5S8_jid
          stance: supports
          locator: CBDB:247212
          quotation: null
          interpretation_note: CBDB 明确记录的王弁配偶
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
        id: c_R0SDWSa7AKvNfWH9hrClE6
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3ZBFnXj6nK21XoEDDtCLMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wj-r0W34SU1G_DECz2uhEm
          claim_id: c_R0SDWSa7AKvNfWH9hrClE6
          source_id: s_1xZDuj4vcm8UuDZ5S8_jid
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
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
| bio.summary | 劉氏，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247212） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王弁妻)（CBDB 247212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247212&o=json)
