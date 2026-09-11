---
schema: wang-person/v1
id: p_MsDyTP1S6D1UQXnBkedUZb
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 146692
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__YOEYJnJa1lE4KqCLvtWRQ
        subject_person_id: p_MsDyTP1S6D1UQXnBkedUZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M41YBjUQRoy79kuBAVtSzq
          claim_id: c__YOEYJnJa1lE4KqCLvtWRQ
          source_id: s_CgxwsgeRN6LP0D33vRbYl3
          stance: supports
          locator: CBDB:146692
          quotation: null
          interpretation_note: CBDB 明确记录的王通配偶
          source: &a1
            id: s_CgxwsgeRN6LP0D33vRbYl3
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王通妻)（CBDB 146692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146692&o=json
            external_identifier: CBDB:146692
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
        id: c_BjrKKLhkTCtUZS4NOexB0M
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MsDyTP1S6D1UQXnBkedUZb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoIwTzHVReDsfSA0RbSeJY
          claim_id: c_BjrKKLhkTCtUZS4NOexB0M
          source_id: s_CgxwsgeRN6LP0D33vRbYl3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 103：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wuzUhSPfe87KKSdKFYjFUQ
        status: active
        display_name: 王通
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wuzUhSPfe87KKSdKFYjFUQ | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王通妻)（CBDB 146692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146692&o=json)
