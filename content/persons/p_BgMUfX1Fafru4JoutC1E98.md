---
schema: wang-person/v1
id: p_BgMUfX1Fafru4JoutC1E98
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 301178
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EPR2lE26hfc12l1IwZlBbe
        subject_person_id: p_BgMUfX1Fafru4JoutC1E98
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_glS77xKCnu1vXuboRD6Cig
          claim_id: c_EPR2lE26hfc12l1IwZlBbe
          source_id: s_1UhQyYwnV0fk6mXCQmvRp8
          stance: supports
          locator: CBDB:301178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1UhQyYwnV0fk6mXCQmvRp8
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王尚學妻)（CBDB 301178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301178&o=json
            external_identifier: CBDB:301178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kU6NEXWa9ZqxXTz8PmHkCh
        subject_person_id: p_BgMUfX1Fafru4JoutC1E98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9QfA30L6laa0tWFBq61bV4
          claim_id: c_kU6NEXWa9ZqxXTz8PmHkCh
          source_id: s_1UhQyYwnV0fk6mXCQmvRp8
          stance: supports
          locator: CBDB:301178
          quotation: null
          interpretation_note: CBDB 明确记录的王尚學配偶
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
        id: c_9MC2DvUv_jiF0rnedGvZxa
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BgMUfX1Fafru4JoutC1E98
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DOsrSHa4UZ7QAikJN4zjQQ
          claim_id: c_9MC2DvUv_jiF0rnedGvZxa
          source_id: s_1UhQyYwnV0fk6mXCQmvRp8
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4Zy974Lzqz8TpZW2QVpmsw
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301178） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4Zy974Lzqz8TpZW2QVpmsw | 王尚學 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王尚學妻)（CBDB 301178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301178&o=json)
