---
schema: wang-person/v1
id: p_zdVaFEWko1nUbwGFSwMjAL
status: active
merged_into: null
display_name: 元氏
revision: 1
cbdb_id: 165212
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_lDIVS-SQJcqJdCKB9eCOx3
        subject_person_id: p_zdVaFEWko1nUbwGFSwMjAL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 元氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-P-JFSIY4tzy5hgDLbHNYm
          claim_id: c_lDIVS-SQJcqJdCKB9eCOx3
          source_id: s_dETqcKeMcc6vKCe2bkfVz5
          stance: supports
          locator: CBDB:165212
          quotation: null
          interpretation_note: CBDB 明确记录的王珍配偶
          source: &a1
            id: s_dETqcKeMcc6vKCe2bkfVz5
            source_type: api_record
            title: 中国历代人物传记资料库：元氏(王珍妻)（CBDB 165212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165212&o=json
            external_identifier: CBDB:165212
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
        id: c_HYHB5kbcO9ev9AeKDdKauQ
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zdVaFEWko1nUbwGFSwMjAL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yc08ZFal6xMnhr5BD1v-3e
          claim_id: c_HYHB5kbcO9ev9AeKDdKauQ
          source_id: s_dETqcKeMcc6vKCe2bkfVz5
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali18：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YMs6JZkbstNyaB91cBTq8e
        status: active
        display_name: 王珍
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 元氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 元氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YMs6JZkbstNyaB91cBTq8e | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：元氏(王珍妻)（CBDB 165212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165212&o=json)
