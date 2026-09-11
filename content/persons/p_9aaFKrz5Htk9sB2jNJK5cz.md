---
schema: wang-person/v1
id: p_9aaFKrz5Htk9sB2jNJK5cz
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7RNVEFMY69GNr9sCZZN98b
        subject_person_id: p_9aaFKrz5Htk9sB2jNJK5cz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k9S9d7Cvp76oGh497cu1XM
          claim_id: c_7RNVEFMY69GNr9sCZZN98b
          source_id: s_AkZ2Co29uFG5ssBSfiFG6n
          stance: supports
          locator: CBDB:71174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71174）
          source: &a1
            id: s_AkZ2Co29uFG5ssBSfiFG6n
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 71174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71174&o=json
            external_identifier: CBDB:71174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NqojTkXkrhKvkF58VrQFKh
        subject_person_id: p_9aaFKrz5Htk9sB2jNJK5cz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fRFJKg55HE6BydhkmkzbFi
          claim_id: c_NqojTkXkrhKvkF58VrQFKh
          source_id: s_AkZ2Co29uFG5ssBSfiFG6n
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
        id: c_cQWNaE6aQHuyJYBWGkrzCn
        subject_person_id: p_9aaFKrz5Htk9sB2jNJK5cz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGvVBq9U1pTTn5myWGfSw1
          claim_id: c_cQWNaE6aQHuyJYBWGkrzCn
          source_id: s_AkZ2Co29uFG5ssBSfiFG6n
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
        id: c_S5QCuoaBEtGUY5dN24FUH3
        subject_person_id: p_9aaFKrz5Htk9sB2jNJK5cz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤（1756年—1832年），清人物。籍贯嘉興。（中国历代人物传记资料库 CBDB 71174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OdyIu2-qm34VrJHu8mAotL
          claim_id: c_S5QCuoaBEtGUY5dN24FUH3
          source_id: s_AkZ2Co29uFG5ssBSfiFG6n
          stance: supports
          locator: CBDB:71174
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| birth.date | 1756年 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | 王潤（1756年—1832年），清人物。籍贯嘉興。（中国历代人物传记资料库 CBDB 71174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 71174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71174&o=json)
