---
schema: wang-person/v1
id: p_b3no6xB4KP7FfBPDkS7J6d
status: active
merged_into: null
display_name: 王應灝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ooAbVtBJE84uusboipLKN8
        subject_person_id: p_b3no6xB4KP7FfBPDkS7J6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XFy2E3ghvH9fkZtjzGrx1D
          claim_id: c_ooAbVtBJE84uusboipLKN8
          source_id: s_3ZmnE66Up52i44jU6TpPMi
          stance: supports
          locator: CBDB:692158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692158）
          source: &a1
            id: s_3ZmnE66Up52i44jU6TpPMi
            source_type: api_record
            title: 中国历代人物传记资料库：王應灝（CBDB 692158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692158&o=json
            external_identifier: CBDB:692158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vjg7vRo8ZvDPrB3F2fYsk6
        subject_person_id: p_b3no6xB4KP7FfBPDkS7J6d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應灝，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 692158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MDCHlw6QuOIFrosRQCV9X6
          claim_id: c_Vjg7vRo8ZvDPrB3F2fYsk6
          source_id: s_3ZmnE66Up52i44jU6TpPMi
          stance: supports
          locator: CBDB:692158
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
  other:
    - claim:
        id: c_gOlskNyxjEXIJhDe_y_4jR
        subject_person_id: p_aGpmco9tD9XrB5EjuLVL4K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b3no6xB4KP7FfBPDkS7J6d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ge8Sx1BBLCKUDTMCnbUydH
          claim_id: c_gOlskNyxjEXIJhDe_y_4jR
          source_id: s_CtkOHzarVkP6UwKowH-eO8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 692157 王應超）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CtkOHzarVkP6UwKowH-eO8
            source_type: api_record
            title: 中国历代人物传记资料库：王應灝（CBDB 692158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692158&o=json
            external_identifier: CBDB:692158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aGpmco9tD9XrB5EjuLVL4K
        status: active
        display_name: 王應超
        merged_into_person_id: null
---

# 王應灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應灝 | accepted |
| bio.summary | 王應灝，清人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 692158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_aGpmco9tD9XrB5EjuLVL4K | 王應超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應灝（CBDB 692158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692158&o=json)
