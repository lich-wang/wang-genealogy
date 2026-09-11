---
schema: wang-person/v1
id: p_kbAnGaMFEmFpN1i2WgXWPG
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KFg8H3RfnNZAYosF1aXQFj
        subject_person_id: p_kbAnGaMFEmFpN1i2WgXWPG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ixygxKdQLDgb3jGKfQwMnH
          claim_id: c_KFg8H3RfnNZAYosF1aXQFj
          source_id: s_vGj6C95mmQjpFXirZgE1iD
          stance: supports
          locator: CBDB:70437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70437）
          source: &a1
            id: s_vGj6C95mmQjpFXirZgE1iD
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 70437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70437&o=json
            external_identifier: CBDB:70437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NrmxZnETYVyMqRv2Ec2n7Z
        subject_person_id: p_kbAnGaMFEmFpN1i2WgXWPG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，明人物。籍贯桂林府，入仕進士，曾任參知政事、右參議。（中国历代人物传记资料库 CBDB 70437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_if5tlpW77G13hPly8H-Uxl
          claim_id: c_NrmxZnETYVyMqRv2Ec2n7Z
          source_id: s_vGj6C95mmQjpFXirZgE1iD
          stance: supports
          locator: CBDB:70437
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，明人物。籍贯桂林府，入仕進士，曾任參知政事、右參議。（中国历代人物传记资料库 CBDB 70437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 70437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70437&o=json)
