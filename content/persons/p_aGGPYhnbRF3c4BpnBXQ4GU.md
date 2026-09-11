---
schema: wang-person/v1
id: p_aGGPYhnbRF3c4BpnBXQ4GU
status: active
merged_into: null
display_name: 汪氏
revision: 1
cbdb_id: 305352
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W2GBYhygnVir0VofvyXpGV
        subject_person_id: p_aGGPYhnbRF3c4BpnBXQ4GU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xr_JuHgjIdAD130KG6QXFi
          claim_id: c_W2GBYhygnVir0VofvyXpGV
          source_id: s_57XAAm0f6rMkmpIe4-T-4b
          stance: supports
          locator: CBDB:305352
          quotation: null
          interpretation_note: CBDB 明确记录的王之臣配偶
          source: &a1
            id: s_57XAAm0f6rMkmpIe4-T-4b
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王之臣妻)（CBDB 305352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305352&o=json
            external_identifier: CBDB:305352
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
        id: c_LpEMZVO9ZZXXSy4wgWqR8l
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aGGPYhnbRF3c4BpnBXQ4GU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sux-qjg88TNNo2dxdk_lXQ
          claim_id: c_LpEMZVO9ZZXXSy4wgWqR8l
          source_id: s_57XAAm0f6rMkmpIe4-T-4b
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1w2vyLJVVJajHeDaWVG8Nu
        status: active
        display_name: 王之臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 汪氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1w2vyLJVVJajHeDaWVG8Nu | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王之臣妻)（CBDB 305352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305352&o=json)
