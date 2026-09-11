---
schema: wang-person/v1
id: p_ieJbmJ3owdteJaLMYug5AF
status: active
merged_into: null
display_name: 王伊嵐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RvfNZVLT6vU76pyhjAbpJ6
        subject_person_id: p_ieJbmJ3owdteJaLMYug5AF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊嵐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EhdbtSSRW6b7HEG776fuBS
          claim_id: c_RvfNZVLT6vU76pyhjAbpJ6
          source_id: s_4BA9FQ5esS4RwA9QX9PQvA
          stance: supports
          locator: CBDB:635966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635966）
          source: &a1
            id: s_4BA9FQ5esS4RwA9QX9PQvA
            source_type: api_record
            title: 中国历代人物传记资料库：王伊嵐（CBDB 635966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635966&o=json
            external_identifier: CBDB:635966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbWH7c14138PHPHtLkxRSh
        subject_person_id: p_ieJbmJ3owdteJaLMYug5AF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王伊嵐，清人物。籍贯曹州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635966）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oexWmzIRd1umQE84QRZ0m5
          claim_id: c_DbWH7c14138PHPHtLkxRSh
          source_id: s_4BA9FQ5esS4RwA9QX9PQvA
          stance: supports
          locator: CBDB:635966
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

# 王伊嵐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伊嵐 | accepted |
| bio.summary | 王伊嵐，清人物。籍贯曹州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伊嵐（CBDB 635966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635966&o=json)
