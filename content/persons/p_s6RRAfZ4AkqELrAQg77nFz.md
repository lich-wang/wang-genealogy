---
schema: wang-person/v1
id: p_s6RRAfZ4AkqELrAQg77nFz
status: active
merged_into: null
display_name: 酒氏
revision: 1
cbdb_id: 699446
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cgS0GWHsELyvUgJOt7-_oH
        subject_person_id: p_s6RRAfZ4AkqELrAQg77nFz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 酒氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wePSaUCViEFWYDnmrpjdsg
          claim_id: c_cgS0GWHsELyvUgJOt7-_oH
          source_id: s_fNu1KQG6uIk_DCxU46aSoL
          stance: supports
          locator: CBDB:699446
          quotation: null
          interpretation_note: CBDB 明确记录的王信配偶
          source: &a1
            id: s_fNu1KQG6uIk_DCxU46aSoL
            source_type: api_record
            title: 中国历代人物传记资料库：酒氏(王信妻)（CBDB 699446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699446&o=json
            external_identifier: CBDB:699446
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
        id: c_u30OF1aCp9E-IYLGgwTvP7
        subject_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s6RRAfZ4AkqELrAQg77nFz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmli5E2IB1eJ3rKub19Kzk
          claim_id: c_u30OF1aCp9E-IYLGgwTvP7
          source_id: s_fNu1KQG6uIk_DCxU46aSoL
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FpqHn8pwLrMWfy1VHw9FJa
        status: active
        display_name: 王信
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 酒氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 酒氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FpqHn8pwLrMWfy1VHw9FJa | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：酒氏(王信妻)（CBDB 699446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699446&o=json)
