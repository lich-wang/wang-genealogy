---
schema: wang-person/v1
id: p_4r434FXidoHPAJv6kFC7qF
status: active
merged_into: null
display_name: 王惟賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XRE3WjFzUNHk7ciQbqRUu5
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AqVuCxWhpwLcWGXxiMEXjS
          claim_id: c_XRE3WjFzUNHk7ciQbqRUu5
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: CBDB:29408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29408）
          source: &a1
            id: s_9dpj8y6yZ7KzHr5sLYBc8V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 29408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json
            external_identifier: CBDB:29408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hKTm3MtKJLEgsGCN4DpLxb
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1270年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpcuWrPyCm1Q7UJQnwz1Ar
          claim_id: c_hKTm3MtKJLEgsGCN4DpLxb
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
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
        id: c_TUPWPZFZkwnvJGhZYiUPJ9
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1340年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LA7xaoZiaRnXyp5vKMcRFP
          claim_id: c_TUPWPZFZkwnvJGhZYiUPJ9
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
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
        id: c_mhmL2WsFXFxEk5Rxeziph8
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢（1270年—1340年），元人物。籍贯安喜，曾任戶部尚書、戶部侍郎、諸路總管府總管。（中国历代人物传记资料库 CBDB 29408）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AEqfJl29DhOdcoRTtwEPxA
          claim_id: c_mhmL2WsFXFxEk5Rxeziph8
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: CBDB:29408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UVYAxMtMsrlv52HkuH7Tv9
        subject_person_id: p_iWAZbKiNvDPj54EBw5wr61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4r434FXidoHPAJv6kFC7qF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SfguNewRoQuC_sW6QiAyy
          claim_id: c_UVYAxMtMsrlv52HkuH7Tv9
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: CBDB 双向互证（父 王玉 ⇄ 子 王惟賢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iWAZbKiNvDPj54EBw5wr61
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| birth.date | 1270年 | accepted |
| death.date | 1340年 | accepted |
| bio.summary | 王惟賢（1270年—1340年），元人物。籍贯安喜，曾任戶部尚書、戶部侍郎、諸路總管府總管。（中国历代人物传记资料库 CBDB 29408） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iWAZbKiNvDPj54EBw5wr61 | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟賢（CBDB 29408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json)
