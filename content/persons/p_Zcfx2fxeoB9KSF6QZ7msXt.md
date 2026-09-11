---
schema: wang-person/v1
id: p_Zcfx2fxeoB9KSF6QZ7msXt
status: active
merged_into: null
display_name: 王鳳文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_18WYNZLiKt7hKMG7XrqDYv
        subject_person_id: p_Zcfx2fxeoB9KSF6QZ7msXt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rUVBmCQ9cV1peM23bVqqGJ
          claim_id: c_18WYNZLiKt7hKMG7XrqDYv
          source_id: s_VQrFDMgAz2Z2SRcR76tasg
          stance: supports
          locator: CBDB:640932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640932）
          source: &a1
            id: s_VQrFDMgAz2Z2SRcR76tasg
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳文（CBDB 640932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640932&o=json
            external_identifier: CBDB:640932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X9y5b1z6U5qTypy4NeKqqF
        subject_person_id: p_Zcfx2fxeoB9KSF6QZ7msXt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳文，清人物。籍贯諸城，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 640932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jHliTB2ZTzx26YSdwJqfpu
          claim_id: c_X9y5b1z6U5qTypy4NeKqqF
          source_id: s_VQrFDMgAz2Z2SRcR76tasg
          stance: supports
          locator: CBDB:640932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王鳳文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳文 | accepted |
| bio.summary | 王鳳文，清人物。籍贯諸城，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 640932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳文（CBDB 640932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640932&o=json)
