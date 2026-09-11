---
schema: wang-person/v1
id: p_9Tg7daAiUZ2BdsvJDHE1n7
status: active
merged_into: null
display_name: 王家軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5y3tb7pr6EPKhQT7dSAm9T
        subject_person_id: p_9Tg7daAiUZ2BdsvJDHE1n7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6HAUaREvFBVsKCNNAFJkp
          claim_id: c_5y3tb7pr6EPKhQT7dSAm9T
          source_id: s_zdpy7WX9kcNor84d66Ju35
          stance: supports
          locator: CBDB:576110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576110）
          source: &a1
            id: s_zdpy7WX9kcNor84d66Ju35
            source_type: api_record
            title: 中国历代人物传记资料库：王家軾（CBDB 576110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576110&o=json
            external_identifier: CBDB:576110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zy1vBWH8o6JoEWykndHVME
        subject_person_id: p_9Tg7daAiUZ2BdsvJDHE1n7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家軾，清人物。籍贯建水，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Dnu4YmVi9Z2Zq6JjB0TGK
          claim_id: c_zy1vBWH8o6JoEWykndHVME
          source_id: s_zdpy7WX9kcNor84d66Ju35
          stance: supports
          locator: CBDB:576110
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

# 王家軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家軾 | accepted |
| bio.summary | 王家軾，清人物。籍贯建水，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家軾（CBDB 576110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576110&o=json)
