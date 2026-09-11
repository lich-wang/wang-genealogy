---
schema: wang-person/v1
id: p_RcohMEe4gfY6Nzm7nKZ8NH
status: active
merged_into: null
display_name: 葉氏
revision: 1
cbdb_id: 247366
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qxAzHskljahEunl2xnMlKv
        subject_person_id: p_RcohMEe4gfY6Nzm7nKZ8NH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z-nkyYR8i72R15Lo32DIiD
          claim_id: c_qxAzHskljahEunl2xnMlKv
          source_id: s_Dq-FsmqGyX4rDdZ4JEGvFU
          stance: supports
          locator: CBDB:247366
          quotation: null
          interpretation_note: CBDB 明确记录的王暄配偶
          source: &a1
            id: s_Dq-FsmqGyX4rDdZ4JEGvFU
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json
            external_identifier: CBDB:247366
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
        id: c_grqJeDJ99YaK64EeO8dn3x
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RcohMEe4gfY6Nzm7nKZ8NH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTESa9G8KSZplSpZaXbVvr
          claim_id: c_grqJeDJ99YaK64EeO8dn3x
          source_id: s_Dq-FsmqGyX4rDdZ4JEGvFU
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 葉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json)
