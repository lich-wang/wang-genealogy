---
schema: wang-person/v1
id: p_LFt8Rsde3gMfwwAy7NB9xn
status: active
merged_into: null
display_name: 王棟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9WjKxDBz2ZEN9FCbE89iF
        subject_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tYj2VPt7doxasP9u1RHMRB
          claim_id: c_c9WjKxDBz2ZEN9FCbE89iF
          source_id: s_oZqv8Si6nLCDuHCuL7eNsr
          stance: supports
          locator: CBDB:294445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294445）
          source: &a1
            id: s_oZqv8Si6nLCDuHCuL7eNsr
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 294445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json
            external_identifier: CBDB:294445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uGxufW4E72F17M64RPk9Mo
        subject_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。嘉靖十一年進士，籍贯象山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 294445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NZfS9z38YdbR6dPc2zASta
          claim_id: c_uGxufW4E72F17M64RPk9Mo
          source_id: s_oZqv8Si6nLCDuHCuL7eNsr
          stance: supports
          locator: CBDB:294445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lHuWdS0pjSPmBEngIk6htY
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4OCo4DyQctMmHAR3iJC3p
          claim_id: c_lHuWdS0pjSPmBEngIk6htY
          source_id: s_tRSIuMhN6gXMoreLKB6bCs
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王棟 之父／母。
          source:
            id: s_tRSIuMhN6gXMoreLKB6bCs
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 294445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json
            external_identifier: CBDB:294445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4gGXajVIgqNuKhrTgcXcwE
        subject_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUcaNoqQZTbkUavLWch5Xi
          claim_id: c_4gGXajVIgqNuKhrTgcXcwE
          source_id: s_tRSIuMhN6gXMoreLKB6bCs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tRSIuMhN6gXMoreLKB6bCs
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 294445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json
            external_identifier: CBDB:294445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。嘉靖十一年進士，籍贯象山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 294445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| other | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 294445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json)
