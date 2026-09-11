---
schema: wang-person/v1
id: p_Gr9sdxb5nnwKW1WUsXAP7m
status: active
merged_into: null
display_name: 王權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hg1evJxL83F1ToMaJATD44
        subject_person_id: p_Gr9sdxb5nnwKW1WUsXAP7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xxjMpknAAnaVqQMat2iyrM
          claim_id: c_hg1evJxL83F1ToMaJATD44
          source_id: s_LP74uZZrodN33hNoNtXcqn
          stance: supports
          locator: CBDB:71059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71059）
          source: &a1
            id: s_LP74uZZrodN33hNoNtXcqn
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 71059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71059&o=json
            external_identifier: CBDB:71059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UjBhmzXXzbM5oCiG4MDtB9
        subject_person_id: p_Gr9sdxb5nnwKW1WUsXAP7m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1822年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PvDyrr4z8mMFsenaeJLtiz
          claim_id: c_UjBhmzXXzbM5oCiG4MDtB9
          source_id: s_LP74uZZrodN33hNoNtXcqn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_w7XQr2emVaxs7d1K7HfBj1
        subject_person_id: p_Gr9sdxb5nnwKW1WUsXAP7m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1905年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W6gmJc4HjrbrSpqQR7Fupo
          claim_id: c_w7XQr2emVaxs7d1K7HfBj1
          source_id: s_LP74uZZrodN33hNoNtXcqn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yZvC2bs19ZL2Jwo9rXTCUm
        subject_person_id: p_Gr9sdxb5nnwKW1WUsXAP7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王權（1822年—1905年），清人物。籍贯寧夏，入仕鄉貢舉人，曾任縣教諭、縣知縣、知縣。（中国历代人物传记资料库 CBDB 71059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nGc9pObwr7DfQQCO0ys33g
          claim_id: c_yZvC2bs19ZL2Jwo9rXTCUm
          source_id: s_LP74uZZrodN33hNoNtXcqn
          stance: supports
          locator: CBDB:71059
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

# 王權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王權 | accepted |
| birth.date | 1822年 | accepted |
| death.date | 1905年 | accepted |
| bio.summary | 王權（1822年—1905年），清人物。籍贯寧夏，入仕鄉貢舉人，曾任縣教諭、縣知縣、知縣。（中国历代人物传记资料库 CBDB 71059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王權（CBDB 71059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71059&o=json)
