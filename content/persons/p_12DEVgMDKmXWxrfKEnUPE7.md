---
schema: wang-person/v1
id: p_12DEVgMDKmXWxrfKEnUPE7
status: active
merged_into: null
display_name: 王琅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Y2X3vFEVDghNrdGWevPZM
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QhGPwCjbXbvMrDw4GSdJ9J
          claim_id: c_4Y2X3vFEVDghNrdGWevPZM
          source_id: s_YsbcJEgoKEkyqrpt9WHH91
          stance: supports
          locator: CBDB:217181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217181）
          source: &a1
            id: s_YsbcJEgoKEkyqrpt9WHH91
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 217181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json
            external_identifier: CBDB:217181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wkpStRgFWCrPNscfrBaQd5
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅，明人物。天順八年進士，籍贯稷山，曾任訓導。（中国历代人物传记资料库 CBDB 217181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m6VBm8fG7xPFu5YurAouBT
          claim_id: c_wkpStRgFWCrPNscfrBaQd5
          source_id: s_YsbcJEgoKEkyqrpt9WHH91
          stance: supports
          locator: CBDB:217181
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R20DjLmvf8UWVQQ4ZE3jQw
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQmnYZz_8f2OjZWlNUKwTr
          claim_id: c_R20DjLmvf8UWVQQ4ZE3jQw
          source_id: s_YsbcJEgoKEkyqrpt9WHH91
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JL51TddY85M5VjjQdk9Dbd
        status: active
        display_name: 王衡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琅 | accepted |
| bio.summary | 王琅，明人物。天順八年進士，籍贯稷山，曾任訓導。（中国历代人物传记资料库 CBDB 217181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JL51TddY85M5VjjQdk9Dbd | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琅（CBDB 217181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json)
