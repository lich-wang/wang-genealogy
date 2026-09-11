---
schema: wang-person/v1
id: p_r73PM3MHzmFoos2r4CioJo
status: active
merged_into: null
display_name: 王開第
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Mo1T2ZHKWDw34MyAGHnQh
        subject_person_id: p_r73PM3MHzmFoos2r4CioJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MvofmSus49QRWUajf7Vt52
          claim_id: c_2Mo1T2ZHKWDw34MyAGHnQh
          source_id: s_59j7V4QbLeQYHnxDtxAb2g
          stance: supports
          locator: CBDB:640754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640754）
          source: &a1
            id: s_59j7V4QbLeQYHnxDtxAb2g
            source_type: api_record
            title: 中国历代人物传记资料库：王開第（CBDB 640754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640754&o=json
            external_identifier: CBDB:640754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AxqmjCafKKM7fbhABxqFoF
        subject_person_id: p_r73PM3MHzmFoos2r4CioJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開第，清人物。籍贯武昌，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640754）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTfTqblMSEoWpSCzZfsDIR
          claim_id: c_AxqmjCafKKM7fbhABxqFoF
          source_id: s_59j7V4QbLeQYHnxDtxAb2g
          stance: supports
          locator: CBDB:640754
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

# 王開第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開第 | accepted |
| bio.summary | 王開第，清人物。籍贯武昌，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開第（CBDB 640754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640754&o=json)
