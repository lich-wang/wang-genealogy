---
schema: wang-person/v1
id: p_YcoQnXMUnzzfy9UPvZZV5g
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 255800
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_igSsIRr2JS6nEqVbXyUO31
        subject_person_id: p_YcoQnXMUnzzfy9UPvZZV5g
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
        - id: cs_NO87C1xdU0PHESvdyPYyoP
          claim_id: c_igSsIRr2JS6nEqVbXyUO31
          source_id: s_wytu5XXGNvkhPz-F0SqRmx
          stance: supports
          locator: CBDB:255800
          quotation: null
          interpretation_note: CBDB 明确记录的王表配偶
          source: &a1
            id: s_wytu5XXGNvkhPz-F0SqRmx
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王表妻)（CBDB 255800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255800&o=json
            external_identifier: CBDB:255800
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
        id: c_bxqhQ3uGteJ1FjK9n3ep29
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YcoQnXMUnzzfy9UPvZZV5g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MkCX93WZ9ZZWE02boFWT4
          claim_id: c_bxqhQ3uGteJ1FjK9n3ep29
          source_id: s_wytu5XXGNvkhPz-F0SqRmx
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5sGq3fMCKQCFC1ia4efd12
        status: active
        display_name: 王表
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
| spouses | p_5sGq3fMCKQCFC1ia4efd12 | 王表 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王表妻)（CBDB 255800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255800&o=json)
