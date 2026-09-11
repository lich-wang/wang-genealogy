---
schema: wang-person/v1
id: p_sG9E1HACdHSmnTAaiVYjNR
status: active
merged_into: null
display_name: 王菁華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijVk335Yf8S4oeiFs7zfL5
        subject_person_id: p_sG9E1HACdHSmnTAaiVYjNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王菁華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VV48P7hQ1tcnQAku4PqeuH
          claim_id: c_ijVk335Yf8S4oeiFs7zfL5
          source_id: s_gAB2J2dkeXanifK57Asm8D
          stance: supports
          locator: CBDB:640096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640096）
          source: &a1
            id: s_gAB2J2dkeXanifK57Asm8D
            source_type: api_record
            title: 中国历代人物传记资料库：王菁華（CBDB 640096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640096&o=json
            external_identifier: CBDB:640096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADJvtdSzmz3d4FNEPB9nDo
        subject_person_id: p_sG9E1HACdHSmnTAaiVYjNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王菁華，清人物。籍贯汀州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 640096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sMEzjP9aZ3ua5I3a-_mb7T
          claim_id: c_ADJvtdSzmz3d4FNEPB9nDo
          source_id: s_gAB2J2dkeXanifK57Asm8D
          stance: supports
          locator: CBDB:640096
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

# 王菁華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王菁華 | accepted |
| bio.summary | 王菁華，清人物。籍贯汀州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 640096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王菁華（CBDB 640096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640096&o=json)
