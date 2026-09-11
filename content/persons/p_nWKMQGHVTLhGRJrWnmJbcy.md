---
schema: wang-person/v1
id: p_nWKMQGHVTLhGRJrWnmJbcy
status: active
merged_into: null
display_name: 王一元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NyQyjQFtHUbWRmW2Db1Z84
        subject_person_id: p_nWKMQGHVTLhGRJrWnmJbcy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGv9PMT426HGzcrhgcmJeb
          claim_id: c_NyQyjQFtHUbWRmW2Db1Z84
          source_id: s_ZJDrS1LWv7FNG16EMnMAT7
          stance: supports
          locator: CBDB:337562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337562）
          source: &a1
            id: s_ZJDrS1LWv7FNG16EMnMAT7
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 337562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337562&o=json
            external_identifier: CBDB:337562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o9xVZF9AB5x4Y49etzptDv
        subject_person_id: p_nWKMQGHVTLhGRJrWnmJbcy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元，明人物。隆慶二年進士，籍贯太倉州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 337562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EuBx9CP9jBm6FH68a84VGD
          claim_id: c_o9xVZF9AB5x4Y49etzptDv
          source_id: s_ZJDrS1LWv7FNG16EMnMAT7
          stance: supports
          locator: CBDB:337562
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

# 王一元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一元 | accepted |
| bio.summary | 王一元，明人物。隆慶二年進士，籍贯太倉州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 337562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一元（CBDB 337562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337562&o=json)
