---
schema: wang-person/v1
id: p_JcxJZbBeiX9ni5uV8DKYRZ
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 317782
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YLB77YONDgyO22NDJ0yOUM
        subject_person_id: p_JcxJZbBeiX9ni5uV8DKYRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHxWnMP0h-PjmwVqKF4FRU
          claim_id: c_YLB77YONDgyO22NDJ0yOUM
          source_id: s_g3s4MWTiPVAwZW5nmB3Z1P
          stance: supports
          locator: CBDB:317782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g3s4MWTiPVAwZW5nmB3Z1P
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王宮用妻)（CBDB 317782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317782&o=json
            external_identifier: CBDB:317782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uOb6Xmo4wRviP0Etut6Ba1
        subject_person_id: p_JcxJZbBeiX9ni5uV8DKYRZ
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
        - id: cs_Bl2_PyiZ_IVMaMbPL-XGxa
          claim_id: c_uOb6Xmo4wRviP0Etut6Ba1
          source_id: s_g3s4MWTiPVAwZW5nmB3Z1P
          stance: supports
          locator: CBDB:317782
          quotation: null
          interpretation_note: CBDB 明确记录的王宮用配偶
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
        id: c_EwzvqpYxXiSf0Xtkipmm1b
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JcxJZbBeiX9ni5uV8DKYRZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFhYWYGqdPyoA2bpO6S-TH
          claim_id: c_EwzvqpYxXiSf0Xtkipmm1b
          source_id: s_g3s4MWTiPVAwZW5nmB3Z1P
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6CiKvYHdk4eY1idbKnmk1W
        status: active
        display_name: 王宮用
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
| bio.summary | 李氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317782） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6CiKvYHdk4eY1idbKnmk1W | 王宮用 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王宮用妻)（CBDB 317782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317782&o=json)
