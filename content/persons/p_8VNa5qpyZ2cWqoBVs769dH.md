---
schema: wang-person/v1
id: p_8VNa5qpyZ2cWqoBVs769dH
status: active
merged_into: null
display_name: 王邁入
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ifNPsxMeK8vnLSBTQyktAe
        subject_person_id: p_8VNa5qpyZ2cWqoBVs769dH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁入
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4k4fgMj3EBJgw8QTuFPugW
          claim_id: c_ifNPsxMeK8vnLSBTQyktAe
          source_id: s_VDY5sGF6NY7XdHqVTJv78J
          stance: supports
          locator: CBDB:640477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640477）
          source: &a1
            id: s_VDY5sGF6NY7XdHqVTJv78J
            source_type: api_record
            title: 中国历代人物传记资料库：王邁入（CBDB 640477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640477&o=json
            external_identifier: CBDB:640477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VAjpTEtqjB9zfbDzcJFLn5
        subject_person_id: p_8VNa5qpyZ2cWqoBVs769dH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁入，清人物。籍贯廣信府，曾任訓導。（中国历代人物传记资料库 CBDB 640477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NAQgxSg00-L0pnhnmsCxwd
          claim_id: c_VAjpTEtqjB9zfbDzcJFLn5
          source_id: s_VDY5sGF6NY7XdHqVTJv78J
          stance: supports
          locator: CBDB:640477
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

# 王邁入

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁入 | accepted |
| bio.summary | 王邁入，清人物。籍贯廣信府，曾任訓導。（中国历代人物传记资料库 CBDB 640477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邁入（CBDB 640477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640477&o=json)
