---
schema: wang-person/v1
id: p_GH1UAsMZ3t5NiLjXepVXFy
status: active
merged_into: null
display_name: 毛氏
revision: 1
cbdb_id: 323258
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_833tvcuRBTB72LKf2W3MLt
        subject_person_id: p_GH1UAsMZ3t5NiLjXepVXFy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毛氏，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 323258）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s-9fb1P2kjItpaqYMRyCWS
          claim_id: c_833tvcuRBTB72LKf2W3MLt
          source_id: s_T3xvmNA6NOBqTyNw5d7pnz
          stance: supports
          locator: CBDB:323258
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T3xvmNA6NOBqTyNw5d7pnz
            source_type: api_record
            title: 中国历代人物传记资料库：毛氏(王元敬妻)（CBDB 323258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323258&o=json
            external_identifier: CBDB:323258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qLrJkX6N5qwlHKqnOMIeL1
        subject_person_id: p_GH1UAsMZ3t5NiLjXepVXFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毛氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZVRmhAJ9dVK2beGMytu_7W
          claim_id: c_qLrJkX6N5qwlHKqnOMIeL1
          source_id: s_T3xvmNA6NOBqTyNw5d7pnz
          stance: supports
          locator: CBDB:323258
          quotation: null
          interpretation_note: CBDB 明确记录的王元敬配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VytHWp_AM7yKowoXEJFXmb
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GH1UAsMZ3t5NiLjXepVXFy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4xt6cS1Fr-Gq8hhbXrEHe
          claim_id: c_VytHWp_AM7yKowoXEJFXmb
          source_id: s_T3xvmNA6NOBqTyNw5d7pnz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_466nsxZ3JM344kFn5S3u9k
        status: active
        display_name: 王元敬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 毛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 毛氏，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 323258） | accepted |
| name.primary | 毛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_466nsxZ3JM344kFn5S3u9k | 王元敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：毛氏(王元敬妻)（CBDB 323258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323258&o=json)
