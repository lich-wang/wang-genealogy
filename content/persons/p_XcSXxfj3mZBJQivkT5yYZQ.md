---
schema: wang-person/v1
id: p_XcSXxfj3mZBJQivkT5yYZQ
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 329593
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_IfcbwZxt3Sm6lQRB1zvjZ6
        subject_person_id: p_XcSXxfj3mZBJQivkT5yYZQ
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
        - id: cs_88ovII8XZI38VCAeq1SIjc
          claim_id: c_IfcbwZxt3Sm6lQRB1zvjZ6
          source_id: s_-6DkGuAa8byyLAm-MyfaKu
          stance: supports
          locator: CBDB:329593
          quotation: null
          interpretation_note: CBDB 明确记录的王鑑配偶
          source: &a1
            id: s_-6DkGuAa8byyLAm-MyfaKu
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王鑑妻)（CBDB 329593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329593&o=json
            external_identifier: CBDB:329593
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
        id: c_Z8yAYi9kojZHK3Af6ei6kr
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XcSXxfj3mZBJQivkT5yYZQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5TBvhQLB7nb3wZpbTOi2S
          claim_id: c_Z8yAYi9kojZHK3Af6ei6kr
          source_id: s_-6DkGuAa8byyLAm-MyfaKu
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
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
| spouses | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王鑑妻)（CBDB 329593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329593&o=json)
