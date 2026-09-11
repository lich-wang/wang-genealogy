---
schema: wang-person/v1
id: p_kjPSoZR76QsUF99CdurwiQ
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 321410
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3UxDzwlO0cfI9D4FPxdyH
        subject_person_id: p_kjPSoZR76QsUF99CdurwiQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mtUQHrpqTybNn3MpgK8wJj
          claim_id: c_V3UxDzwlO0cfI9D4FPxdyH
          source_id: s_7oKKzDlWNKW3Qop3up64Rb
          stance: supports
          locator: CBDB:321410
          quotation: null
          interpretation_note: CBDB 明确记录的王同倫配偶
          source: &a1
            id: s_7oKKzDlWNKW3Qop3up64Rb
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王同倫妻)（CBDB 321410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321410&o=json
            external_identifier: CBDB:321410
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
        id: c_E3tywPGcWSlenKtGb4DeFx
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kjPSoZR76QsUF99CdurwiQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYc192mpINZQS4LIKxsiCY
          claim_id: c_E3tywPGcWSlenKtGb4DeFx
          source_id: s_7oKKzDlWNKW3Qop3up64Rb
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王同倫妻)（CBDB 321410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321410&o=json)
