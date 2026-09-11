---
schema: wang-person/v1
id: p_UX1A3rLPJJWoYT4KUFhVhZ
status: active
merged_into: null
display_name: 段氏
revision: 1
cbdb_id: 309129
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8fwYFrQiEv1c5s-wbZ_JoC
        subject_person_id: p_UX1A3rLPJJWoYT4KUFhVhZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oXYWn4XqTNGyEK5ArrLsyz
          claim_id: c_8fwYFrQiEv1c5s-wbZ_JoC
          source_id: s_xSiEMb5rMaJjWW_uBO9Nf6
          stance: supports
          locator: CBDB:309129
          quotation: null
          interpretation_note: CBDB 明确记录的王雯配偶
          source: &a1
            id: s_xSiEMb5rMaJjWW_uBO9Nf6
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王雯妻)（CBDB 309129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309129&o=json
            external_identifier: CBDB:309129
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
        id: c_KBwP_9YoPlbkUyCPT8taCQ
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UX1A3rLPJJWoYT4KUFhVhZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCTl2JIR6J_aI2wwgDRsyh
          claim_id: c_KBwP_9YoPlbkUyCPT8taCQ
          source_id: s_xSiEMb5rMaJjWW_uBO9Nf6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qADtxjrVEChTrGk5M7bGg2
        status: active
        display_name: 王雯
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 段氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 段氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qADtxjrVEChTrGk5M7bGg2 | 王雯 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王雯妻)（CBDB 309129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309129&o=json)
