---
schema: wang-person/v1
id: p_BWsq8QANchL7g2spfZKYP9
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 314779
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yJ_iqo4u7CLHkY2-I3cH8c
        subject_person_id: p_BWsq8QANchL7g2spfZKYP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztlDMDcm_tWiKl-EMTVPqz
          claim_id: c_yJ_iqo4u7CLHkY2-I3cH8c
          source_id: s_fwXCLiy5SaMqqXbJaIuJkw
          stance: supports
          locator: CBDB:314779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fwXCLiy5SaMqqXbJaIuJkw
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王好問妻)（CBDB 314779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314779&o=json
            external_identifier: CBDB:314779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RNQ77xf359nTLNpn6snTVY
        subject_person_id: p_BWsq8QANchL7g2spfZKYP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sC3XMohfeUoFGnHn-oHeI2
          claim_id: c_RNQ77xf359nTLNpn6snTVY
          source_id: s_fwXCLiy5SaMqqXbJaIuJkw
          stance: supports
          locator: CBDB:314779
          quotation: null
          interpretation_note: CBDB 明确记录的王好問配偶
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
        id: c_swZxrkObMGBC9v0-6jm_V8
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BWsq8QANchL7g2spfZKYP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WCWfa6Wmub3Xs1ygd2ZQoq
          claim_id: c_swZxrkObMGBC9v0-6jm_V8
          source_id: s_fwXCLiy5SaMqqXbJaIuJkw
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9qD8oY8HFNMMPkFU7baFfu
        status: active
        display_name: 王好問
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314779） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9qD8oY8HFNMMPkFU7baFfu | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王好問妻)（CBDB 314779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314779&o=json)
