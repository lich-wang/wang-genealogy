---
schema: wang-person/v1
id: p_MKEkt3Lg84W4AyK4JA3PFs
status: active
merged_into: null
display_name: 王鎮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WdSRDGcvab4j3w9wjnn4sG
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kcHM9DyHA7nuRS4ULc5u4M
          claim_id: c_WdSRDGcvab4j3w9wjnn4sG
          source_id: s_Jk39pzbEZ2c6j87iTvReLx
          stance: supports
          locator: CBDB:260373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260373）
          source: &a1
            id: s_Jk39pzbEZ2c6j87iTvReLx
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 260373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260373&o=json
            external_identifier: CBDB:260373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AzK6mALUf6Lus6JFZc3HU5
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。成化二十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 260373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b1LrLa0K2tDmyYuhMfCTvj
          claim_id: c_AzK6mALUf6Lus6JFZc3HU5
          source_id: s_Jk39pzbEZ2c6j87iTvReLx
          stance: supports
          locator: CBDB:260373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dyeT2s8JU97hj7a8Dkq0Xe
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tk3JfI7hCsAj4VKp5OogoA
          claim_id: c_dyeT2s8JU97hj7a8Dkq0Xe
          source_id: s_Jk39pzbEZ2c6j87iTvReLx
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        status: active
        display_name: 王珀
        merged_into_person_id: null
    - claim:
        id: c_Fy9agG_dTGR3TdX11CI0Yf
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o2VcyhEP6npQDiLACeX238
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hyi_VZMLdLWy3eclf461KO
          claim_id: c_Fy9agG_dTGR3TdX11CI0Yf
          source_id: s_-IamA25zLGiSDmo6mqXsyl
          stance: supports
          locator: CBDB：兄弟 王珀（126601）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王琥 与 王珀 为同胞（CBDB 记「弟」），王珀 之父／母即 王琥 之父／母。
          source:
            id: s_-IamA25zLGiSDmo6mqXsyl
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 260376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json
            external_identifier: CBDB:260376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o2VcyhEP6npQDiLACeX238
        status: active
        display_name: 王琥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。成化二十三年進士，籍贯武進。（中国历代人物传记资料库 CBDB 260373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Qvi4bpPzBmsqf5Y7oUFpd5 | 王珀 | accepted |
| children | p_o2VcyhEP6npQDiLACeX238 | 王琥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琥（CBDB 260376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260376&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 260373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260373&o=json)
