---
schema: wang-person/v1
id: p_qiz1ADn3UiK3ToTHZEZvss
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 262691
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qzIJBvO3l95z5hZrdrt78l
        subject_person_id: p_qiz1ADn3UiK3ToTHZEZvss
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
        - id: cs_LwuehMMJ81TAYdmprsd47_
          claim_id: c_qzIJBvO3l95z5hZrdrt78l
          source_id: s_FUU6BVcin2z2VyVLNLtSWS
          stance: supports
          locator: CBDB:262691
          quotation: null
          interpretation_note: CBDB 明确记录的王憲配偶
          source: &a1
            id: s_FUU6BVcin2z2VyVLNLtSWS
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王憲妻)（CBDB 262691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262691&o=json
            external_identifier: CBDB:262691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VMm3kGSryeIuNGOd9JgLv6
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qiz1ADn3UiK3ToTHZEZvss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMIMupdRG3l7MkXivKNJT2
          claim_id: c_VMm3kGSryeIuNGOd9JgLv6
          source_id: s_FUU6BVcin2z2VyVLNLtSWS
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
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
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王憲妻)（CBDB 262691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262691&o=json)
