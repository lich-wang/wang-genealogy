---
schema: wang-person/v1
id: p_tw61HT9Wx44xQHcUgscH2r
status: active
merged_into: null
display_name: 王諤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ELv9CbSjSMq5ZFBQWqZR9
        subject_person_id: p_tw61HT9Wx44xQHcUgscH2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7NqcVYR5RyezRuQEhHxFEP
          claim_id: c_8ELv9CbSjSMq5ZFBQWqZR9
          source_id: s_RCt55kmAjHSfQiyTHC3p2C
          stance: supports
          locator: CBDB:312614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312614）
          source: &a1
            id: s_RCt55kmAjHSfQiyTHC3p2C
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 312614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312614&o=json
            external_identifier: CBDB:312614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GM36cTb8XzFcYR6NPLap9C
        subject_person_id: p_tw61HT9Wx44xQHcUgscH2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ALBy1etLHijR2tCUnL7Ygt
          claim_id: c_GM36cTb8XzFcYR6NPLap9C
          source_id: s_RCt55kmAjHSfQiyTHC3p2C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_8KGC30IGlmmG81uuWBT279
        subject_person_id: p_tw61HT9Wx44xQHcUgscH2r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYtiHRDmxEIsK4gQZRjn3s
          claim_id: c_8KGC30IGlmmG81uuWBT279
          source_id: s_RCt55kmAjHSfQiyTHC3p2C
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
  other: []
---

# 王諤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 312614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312614&o=json)
