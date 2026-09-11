---
schema: wang-person/v1
id: p_LD9T2m59wN1VqE2MK1e1Tt
status: active
merged_into: null
display_name: 王重潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbEzBJ1ck8wqXSsKwTywwA
        subject_person_id: p_LD9T2m59wN1VqE2MK1e1Tt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W57Et4L8iAaCnNa5xiMiXt
          claim_id: c_hbEzBJ1ck8wqXSsKwTywwA
          source_id: s_G3VyZxmZ69EvhYZ4giW2TM
          stance: supports
          locator: CBDB:640498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640498）
          source: &a1
            id: s_G3VyZxmZ69EvhYZ4giW2TM
            source_type: api_record
            title: 中国历代人物传记资料库：王重潤（CBDB 640498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640498&o=json
            external_identifier: CBDB:640498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3nP257XLtwQgV4QwM163zg
        subject_person_id: p_LD9T2m59wN1VqE2MK1e1Tt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重潤，清人物。籍贯嘉興，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IfD6IC8hWIgzxeqhDadUo7
          claim_id: c_3nP257XLtwQgV4QwM163zg
          source_id: s_G3VyZxmZ69EvhYZ4giW2TM
          stance: supports
          locator: CBDB:640498
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

# 王重潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重潤 | accepted |
| bio.summary | 王重潤，清人物。籍贯嘉興，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重潤（CBDB 640498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640498&o=json)
