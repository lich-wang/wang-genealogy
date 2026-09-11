---
schema: wang-person/v1
id: p_kd5mwJgrRxqfoj3UJ4W1Ao
status: active
merged_into: null
display_name: 王無瑖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bv8QvYtHiSLPpxPsWfHJKH
        subject_person_id: p_kd5mwJgrRxqfoj3UJ4W1Ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無瑖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6sMoi7gGZ4ATfG4LuZ8BAz
          claim_id: c_Bv8QvYtHiSLPpxPsWfHJKH
          source_id: s_sv57LHJ5CtS9P1Kjz3AuVL
          stance: supports
          locator: CBDB:639304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639304）
          source: &a1
            id: s_sv57LHJ5CtS9P1Kjz3AuVL
            source_type: api_record
            title: 中国历代人物传记资料库：王無瑖（CBDB 639304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639304&o=json
            external_identifier: CBDB:639304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CWsDNBBtMB1GQFBTWj78oN
        subject_person_id: p_kd5mwJgrRxqfoj3UJ4W1Ao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無瑖，清人物。籍贯萬全，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639304）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NvsmWLbrqIB6-KwkyVGju7
          claim_id: c_CWsDNBBtMB1GQFBTWj78oN
          source_id: s_sv57LHJ5CtS9P1Kjz3AuVL
          stance: supports
          locator: CBDB:639304
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

# 王無瑖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王無瑖 | accepted |
| bio.summary | 王無瑖，清人物。籍贯萬全，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王無瑖（CBDB 639304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639304&o=json)
