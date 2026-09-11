---
schema: wang-person/v1
id: p_zHBj6bNChaj1aQDSEWPL3J
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 164569
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oWMfZiB4-ySkYQ23MryuHS
        subject_person_id: p_zHBj6bNChaj1aQDSEWPL3J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTj3YTurJsb10ZUxspPUNU
          claim_id: c_oWMfZiB4-ySkYQ23MryuHS
          source_id: s_lUgyo81JKdLbKdVv5dGWnn
          stance: supports
          locator: CBDB:164569
          quotation: null
          interpretation_note: CBDB 明确记录的王仁行配偶
          source: &a1
            id: s_lUgyo81JKdLbKdVv5dGWnn
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王仁行妻)（CBDB 164569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164569&o=json
            external_identifier: CBDB:164569
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
        id: c_EsxTsgB3uqQt4jSM_ubnLd
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zHBj6bNChaj1aQDSEWPL3J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gqAt4DjkggOUy2SWLkNeVx
          claim_id: c_EsxTsgB3uqQt4jSM_ubnLd
          source_id: s_lUgyo81JKdLbKdVv5dGWnn
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao23：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AfW62F3zMCpUc8bYoHCt8a
        status: active
        display_name: 王仁行
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AfW62F3zMCpUc8bYoHCt8a | 王仁行 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王仁行妻)（CBDB 164569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164569&o=json)
