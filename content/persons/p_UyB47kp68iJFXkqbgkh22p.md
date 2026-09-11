---
schema: wang-person/v1
id: p_UyB47kp68iJFXkqbgkh22p
status: active
merged_into: null
display_name: 王鎮典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PyAZ6nN5FZ9GontoTMPynC
        subject_person_id: p_UyB47kp68iJFXkqbgkh22p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVziJUpJF856ndU2gC5BZ7
          claim_id: c_PyAZ6nN5FZ9GontoTMPynC
          source_id: s_oXAFbkqW7d2phWHELJqgeM
          stance: supports
          locator: CBDB:640688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640688）
          source: &a1
            id: s_oXAFbkqW7d2phWHELJqgeM
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮典（CBDB 640688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640688&o=json
            external_identifier: CBDB:640688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BHkAb9LZJLF69Hn8WD8dLi
        subject_person_id: p_UyB47kp68iJFXkqbgkh22p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮典，清人物。籍贯眉州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h09q5PAG3C0U5gLL5-SXci
          claim_id: c_BHkAb9LZJLF69Hn8WD8dLi
          source_id: s_oXAFbkqW7d2phWHELJqgeM
          stance: supports
          locator: CBDB:640688
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

# 王鎮典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮典 | accepted |
| bio.summary | 王鎮典，清人物。籍贯眉州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮典（CBDB 640688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640688&o=json)
