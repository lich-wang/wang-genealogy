---
schema: wang-person/v1
id: p_zYEEzL4c31fH19xaeBKUuU
status: active
merged_into: null
display_name: 蘇氏
revision: 1
cbdb_id: 253055
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h00kKWQYRfHTdXkBmUA_Li
        subject_person_id: p_zYEEzL4c31fH19xaeBKUuU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MDQDKcjZeAiLjILDg_HjaJ
          claim_id: c_h00kKWQYRfHTdXkBmUA_Li
          source_id: s_o0frtG0I8X7NLhWJ4HUXzd
          stance: supports
          locator: CBDB:253055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o0frtG0I8X7NLhWJ4HUXzd
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王進妻)（CBDB 253055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253055&o=json
            external_identifier: CBDB:253055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_USwqhOluA3PK4w-jtzcbMI
        subject_person_id: p_zYEEzL4c31fH19xaeBKUuU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蘇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRg2xTYs_t9cQPsUKvEWdt
          claim_id: c_USwqhOluA3PK4w-jtzcbMI
          source_id: s_o0frtG0I8X7NLhWJ4HUXzd
          stance: supports
          locator: CBDB:253055
          quotation: null
          interpretation_note: CBDB 明确记录的王進配偶
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
        id: c_qHB_b1q9SnvhX_q9mgB6Xc
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zYEEzL4c31fH19xaeBKUuU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQgB8Isop7MFlTEHx6gi-I
          claim_id: c_qHB_b1q9SnvhX_q9mgB6Xc
          source_id: s_o0frtG0I8X7NLhWJ4HUXzd
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dGT7XJPTzH43E2nwtnh2aH
        status: active
        display_name: 王進
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蘇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蘇氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253055） | accepted |
| name.primary | 蘇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dGT7XJPTzH43E2nwtnh2aH | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王進妻)（CBDB 253055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253055&o=json)
