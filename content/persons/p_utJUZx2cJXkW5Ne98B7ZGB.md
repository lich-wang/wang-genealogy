---
schema: wang-person/v1
id: p_utJUZx2cJXkW5Ne98B7ZGB
status: active
merged_into: null
display_name: 沈氏
revision: 1
cbdb_id: 306149
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_itgAglAgTkvU6yHtKlBbw9
        subject_person_id: p_utJUZx2cJXkW5Ne98B7ZGB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nv-Zkw-S6p8kbLA8Getih_
          claim_id: c_itgAglAgTkvU6yHtKlBbw9
          source_id: s_OZYpPPNTessCr6H_LAR6hp
          stance: supports
          locator: CBDB:306149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_OZYpPPNTessCr6H_LAR6hp
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王一陽妻)（CBDB 306149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306149&o=json
            external_identifier: CBDB:306149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PS7ATuD4iNPYZMmKT9x8JP
        subject_person_id: p_utJUZx2cJXkW5Ne98B7ZGB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehONQghaO7F0U65518vGR2
          claim_id: c_PS7ATuD4iNPYZMmKT9x8JP
          source_id: s_OZYpPPNTessCr6H_LAR6hp
          stance: supports
          locator: CBDB:306149
          quotation: null
          interpretation_note: CBDB 明确记录的王一陽配偶
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
        id: c_wm6QwWjeSZmkvZ0PzIrCqr
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_utJUZx2cJXkW5Ne98B7ZGB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I0M0RaU3t0IHHQ2---xa10
          claim_id: c_wm6QwWjeSZmkvZ0PzIrCqr
          source_id: s_OZYpPPNTessCr6H_LAR6hp
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306149） | accepted |
| name.primary | 沈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王一陽妻)（CBDB 306149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306149&o=json)
