---
schema: wang-person/v1
id: p_dzQWcKffGVTMEta4AQwW5C
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 295382
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rei2iw9BKOzKmgapI1-YQd
        subject_person_id: p_dzQWcKffGVTMEta4AQwW5C
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
        - id: cs_hD0jgc4yVv202xyjx68PcR
          claim_id: c_rei2iw9BKOzKmgapI1-YQd
          source_id: s_P4bjF6pEL0D9laOyXS0o5e
          stance: supports
          locator: CBDB:295382
          quotation: null
          interpretation_note: CBDB 明确记录的王崇配偶
          source: &a1
            id: s_P4bjF6pEL0D9laOyXS0o5e
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json
            external_identifier: CBDB:295382
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
        id: c_QT0gnU3P_hVEwFdFLn1sT7
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dzQWcKffGVTMEta4AQwW5C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2MvL92xPasIcUeG8n-BLE
          claim_id: c_QT0gnU3P_hVEwFdFLn1sT7
          source_id: s_P4bjF6pEL0D9laOyXS0o5e
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
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
| spouses | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json)
