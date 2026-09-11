---
schema: wang-person/v1
id: p_k9FArXTiujZfoUKEvkSstm
status: active
merged_into: null
display_name: 王潔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zpymdAupE323QmJxhmzgW1
        subject_person_id: p_k9FArXTiujZfoUKEvkSstm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zT3wS3oR6hwCWD5CHhTTtN
          claim_id: c_zpymdAupE323QmJxhmzgW1
          source_id: s_L3sSGGG4cMC2KNmKozoztE
          stance: supports
          locator: CBDB:71144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71144）
          source: &a1
            id: s_L3sSGGG4cMC2KNmKozoztE
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 71144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71144&o=json
            external_identifier: CBDB:71144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_agzX25VTURLURjhRbGqy8P
        subject_person_id: p_k9FArXTiujZfoUKEvkSstm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1637年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kEtBpCt1YBH1GmtzVkP8Cy
          claim_id: c_agzX25VTURLURjhRbGqy8P
          source_id: s_L3sSGGG4cMC2KNmKozoztE
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
        id: c_XFeHCCe3MaAmX4HQzsRQ8L
        subject_person_id: p_k9FArXTiujZfoUKEvkSstm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1691年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oBae9eu45vA8Gr3M7cmywA
          claim_id: c_XFeHCCe3MaAmX4HQzsRQ8L
          source_id: s_L3sSGGG4cMC2KNmKozoztE
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
        id: c_2tX1HeoKqYgzGqmkQsAbGe
        subject_person_id: p_k9FArXTiujZfoUKEvkSstm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔（1637年—1691年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lfpH5xndWZdfvwuB5OdbkA
          claim_id: c_2tX1HeoKqYgzGqmkQsAbGe
          source_id: s_L3sSGGG4cMC2KNmKozoztE
          stance: supports
          locator: CBDB:71144
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

# 王潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潔 | accepted |
| birth.date | 1637年 | accepted |
| death.date | 1691年 | accepted |
| bio.summary | 王潔（1637年—1691年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潔（CBDB 71144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71144&o=json)
