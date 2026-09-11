---
schema: wang-person/v1
id: p_uqFWMhK4tWJJMSM5h8iUyX
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 557659
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WAqkRh3T5WGQZxsP0Ythi6
        subject_person_id: p_uqFWMhK4tWJJMSM5h8iUyX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uY_qs_U9Vvw8adP2R6YbVJ
          claim_id: c_WAqkRh3T5WGQZxsP0Ythi6
          source_id: s_XgorZCT-aNuB38IjfoxHPE
          stance: supports
          locator: CBDB:557659
          quotation: null
          interpretation_note: CBDB 明确记录的王文運配偶
          source: &a1
            id: s_XgorZCT-aNuB38IjfoxHPE
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王文運妻)（CBDB 557659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557659&o=json
            external_identifier: CBDB:557659
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
        id: c_TgSz_XtotedNx2R4_Di92s
        subject_person_id: p_FpQKFr1KFEMUJY3pw9XhzH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uqFWMhK4tWJJMSM5h8iUyX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FB5FXAypn6hxrOgFnpTeLk
          claim_id: c_TgSz_XtotedNx2R4_Di92s
          source_id: s_XgorZCT-aNuB38IjfoxHPE
          stance: supports
          locator: 南陽府志，lgid=878788：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FpQKFr1KFEMUJY3pw9XhzH
        status: active
        display_name: 王文運
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FpQKFr1KFEMUJY3pw9XhzH | 王文運 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王文運妻)（CBDB 557659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557659&o=json)
