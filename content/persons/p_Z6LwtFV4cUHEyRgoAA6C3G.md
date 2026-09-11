---
schema: wang-person/v1
id: p_Z6LwtFV4cUHEyRgoAA6C3G
status: active
merged_into: null
display_name: 何氏
revision: 1
cbdb_id: 138350
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZz7951sSRwfViWYjGVM4O
        subject_person_id: p_Z6LwtFV4cUHEyRgoAA6C3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qJhmD-s5GuVQG9JbxIzc6
          claim_id: c_XZz7951sSRwfViWYjGVM4O
          source_id: s_TbmfczavJQKYqMdGAFbt7r
          stance: supports
          locator: CBDB:138350
          quotation: null
          interpretation_note: CBDB 明确记录的王昌辰配偶
          source: &a1
            id: s_TbmfczavJQKYqMdGAFbt7r
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王昌辰妻)（CBDB 138350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138350&o=json
            external_identifier: CBDB:138350
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
        id: c_Kkq7KQF5MZiXyNZYAfFWm9
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z6LwtFV4cUHEyRgoAA6C3G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BftwtJCGfanQre9Ovs3aHP
          claim_id: c_Kkq7KQF5MZiXyNZYAfFWm9
          source_id: s_TbmfczavJQKYqMdGAFbt7r
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv61XtHSxxg2PJ1X8CE9a2
        status: active
        display_name: 王昌辰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 何氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pv61XtHSxxg2PJ1X8CE9a2 | 王昌辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王昌辰妻)（CBDB 138350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138350&o=json)
