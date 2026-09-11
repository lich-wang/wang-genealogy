---
schema: wang-person/v1
id: p_sq5G8zDRgzGWpRT8ybQcQS
status: active
merged_into: null
display_name: 林氏
revision: 1
cbdb_id: 135279
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mr8umseet17yUjN6IooO6w
        subject_person_id: p_sq5G8zDRgzGWpRT8ybQcQS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7EIkLNzTVHzLBAy9BBeOQR
          claim_id: c_mr8umseet17yUjN6IooO6w
          source_id: s___9ZENazfJO3wJ6qKxvKip
          stance: supports
          locator: CBDB:135279
          quotation: null
          interpretation_note: CBDB 明确记录的王堯臣配偶
          source: &a1
            id: s___9ZENazfJO3wJ6qKxvKip
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王堯臣妻)（CBDB 135279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135279&o=json
            external_identifier: CBDB:135279
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
        id: c_I_i5NGEAvgG_X2noA5GqB7
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sq5G8zDRgzGWpRT8ybQcQS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HTftLdYXH9CrrZ4QpgzI3R
          claim_id: c_I_i5NGEAvgG_X2noA5GqB7
          source_id: s___9ZENazfJO3wJ6qKxvKip
          stance: supports
          locator: 紹興十八年同年小錄，136：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jUfc5vCsBkQrPPCvwGCB11
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 林氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jUfc5vCsBkQrPPCvwGCB11 | 王堯臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王堯臣妻)（CBDB 135279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135279&o=json)
