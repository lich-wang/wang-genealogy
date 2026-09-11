---
schema: wang-person/v1
id: p_R7SPf811FGqPr9qLkoAwQb
status: active
merged_into: null
display_name: 王戩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7UMyLCCfwWFs2bCV6ZTXN
        subject_person_id: p_R7SPf811FGqPr9qLkoAwQb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UXMop1YQ6B9XrQzffJAiuK
          claim_id: c_J7UMyLCCfwWFs2bCV6ZTXN
          source_id: s_LwSU6MWEPSJ1HWgukgML57
          stance: supports
          locator: CBDB:69400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69400）
          source: &a1
            id: s_LwSU6MWEPSJ1HWgukgML57
            source_type: api_record
            title: 中国历代人物传记资料库：王戩（CBDB 69400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69400&o=json
            external_identifier: CBDB:69400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ikHCMphLCcQEsaSbGagHnd
        subject_person_id: p_R7SPf811FGqPr9qLkoAwQb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGKDiadB7peWsLh4fd4cmy
          claim_id: c_ikHCMphLCcQEsaSbGagHnd
          source_id: s_LwSU6MWEPSJ1HWgukgML57
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
        id: c_FxBFxPoMKq4jSk8TK31k8u
        subject_person_id: p_R7SPf811FGqPr9qLkoAwQb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mZqAK6WKWqixiHXnwaeWB8
          claim_id: c_FxBFxPoMKq4jSk8TK31k8u
          source_id: s_LwSU6MWEPSJ1HWgukgML57
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LcPY0BdgI-uMknukiCsNgg
        subject_person_id: p_KUnrDSsS8o5AUzHY75X74G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R7SPf811FGqPr9qLkoAwQb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m28de8NdSPy6gE4r5FWD_O
          claim_id: c_LcPY0BdgI-uMknukiCsNgg
          source_id: s_jvHLn5jm2wjXbqbET813FV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jvHLn5jm2wjXbqbET813FV
            source_type: api_record
            title: 中国历代人物传记资料库：王士乾（CBDB 526938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526938&o=json
            external_identifier: CBDB:526938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KUnrDSsS8o5AUzHY75X74G
        status: active
        display_name: 王士乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王戩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王戩 | accepted |
| death.date | 1708年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KUnrDSsS8o5AUzHY75X74G | 王士乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王戩（CBDB 69400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69400&o=json)
- [中国历代人物传记资料库：王士乾（CBDB 526938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526938&o=json)
