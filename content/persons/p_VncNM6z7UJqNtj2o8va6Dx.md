---
schema: wang-person/v1
id: p_VncNM6z7UJqNtj2o8va6Dx
status: active
merged_into: null
display_name: 王緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9cHXzX69wgHvzRaLKMZgo9
        subject_person_id: p_VncNM6z7UJqNtj2o8va6Dx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vXFsursneyS6YQyZ345zpi
          claim_id: c_9cHXzX69wgHvzRaLKMZgo9
          source_id: s_6tGHN2SggLJi8UqE4wj2nv
          stance: supports
          locator: CBDB:260401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260401）
          source: &a1
            id: s_6tGHN2SggLJi8UqE4wj2nv
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 260401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260401&o=json
            external_identifier: CBDB:260401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u8kT4K4Ee28jRKJpB7Pu6m
        subject_person_id: p_VncNM6z7UJqNtj2o8va6Dx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒，明人物。成化二十三年進士，籍贯臨川，曾任知縣。（中国历代人物传记资料库 CBDB 260401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HwVgFe5uzeEgkl-T4YtZC_
          claim_id: c_u8kT4K4Ee28jRKJpB7Pu6m
          source_id: s_6tGHN2SggLJi8UqE4wj2nv
          stance: supports
          locator: CBDB:260401
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

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | 王緒，明人物。成化二十三年進士，籍贯臨川，曾任知縣。（中国历代人物传记资料库 CBDB 260401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緒（CBDB 260401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260401&o=json)
