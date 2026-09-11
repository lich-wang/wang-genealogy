---
schema: wang-person/v1
id: p_FwhDkJMvrGrUqCj5BGdq2J
status: active
merged_into: null
display_name: 王逢壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_scARVaehkG76pYiGeUSVm8
        subject_person_id: p_FwhDkJMvrGrUqCj5BGdq2J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bkf6xBRzDqHD8vBZXSmNSL
          claim_id: c_scARVaehkG76pYiGeUSVm8
          source_id: s_pAxWEubyH8PxfFBaNoob12
          stance: supports
          locator: CBDB:640405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640405）
          source: &a1
            id: s_pAxWEubyH8PxfFBaNoob12
            source_type: api_record
            title: 中国历代人物传记资料库：王逢壽（CBDB 640405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640405&o=json
            external_identifier: CBDB:640405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v4G4q7977w5wsbemUNC51T
        subject_person_id: p_FwhDkJMvrGrUqCj5BGdq2J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王逢壽，清人物。籍贯華州，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 640405）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qVNzjm_o2NCl-Dk43SFerp
          claim_id: c_v4G4q7977w5wsbemUNC51T
          source_id: s_pAxWEubyH8PxfFBaNoob12
          stance: supports
          locator: CBDB:640405
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

# 王逢壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢壽 | accepted |
| bio.summary | 王逢壽，清人物。籍贯華州，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 640405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢壽（CBDB 640405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640405&o=json)
