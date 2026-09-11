---
schema: wang-person/v1
id: p_CzB136ZqViu6iAHuA2i6LV
status: active
merged_into: null
display_name: 王時
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XVy5PKddb8HGHoqJYJR1Fv
        subject_person_id: p_CzB136ZqViu6iAHuA2i6LV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MBhNB3DYX23xU2Y96vXJ8q
          claim_id: c_XVy5PKddb8HGHoqJYJR1Fv
          source_id: s_1KDHXN94tMMVaPkeXhT3Ex
          stance: supports
          locator: CBDB:318541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318541）
          source: &a1
            id: s_1KDHXN94tMMVaPkeXhT3Ex
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 318541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318541&o=json
            external_identifier: CBDB:318541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zM578xm169AhxTqN9T9MKb
        subject_person_id: p_CzB136ZqViu6iAHuA2i6LV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUQVN65cMaB6uPwrvmHFUt
          claim_id: c_zM578xm169AhxTqN9T9MKb
          source_id: s_1KDHXN94tMMVaPkeXhT3Ex
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_mP35ydqllptb4x9zqgQgGA
        subject_person_id: p_CzB136ZqViu6iAHuA2i6LV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qw3e91Q9f7u3SKikYg5LD7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oLf4Fo_sOHIqUIhMZvyEeU
          claim_id: c_mP35ydqllptb4x9zqgQgGA
          source_id: s_1KDHXN94tMMVaPkeXhT3Ex
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qw3e91Q9f7u3SKikYg5LD7
        status: active
        display_name: 王詠
        merged_into_person_id: null
  other: []
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Qw3e91Q9f7u3SKikYg5LD7 | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 318541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318541&o=json)
