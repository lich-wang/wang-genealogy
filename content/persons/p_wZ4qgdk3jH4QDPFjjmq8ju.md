---
schema: wang-person/v1
id: p_wZ4qgdk3jH4QDPFjjmq8ju
status: active
merged_into: null
display_name: 王澣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SvorkVqE8FUrXBAHUqrjTK
        subject_person_id: p_wZ4qgdk3jH4QDPFjjmq8ju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvZU5jeW1MZ5d3FRcqU9ji
          claim_id: c_SvorkVqE8FUrXBAHUqrjTK
          source_id: s_k3kNQ284cSzgmcoMShvGGK
          stance: supports
          locator: CBDB:2131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（2131）
          source: &a1
            id: s_k3kNQ284cSzgmcoMShvGGK
            source_type: api_record
            title: 中国历代人物传记资料库：王澣（CBDB 2131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2131&o=json
            external_identifier: CBDB:2131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZHdn2xYyXyMUsb6Zey76bE
        subject_person_id: p_wZ4qgdk3jH4QDPFjjmq8ju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p4i4ZdJUw341Y7NPmkvahx
          claim_id: c_ZHdn2xYyXyMUsb6Zey76bE
          source_id: s_k3kNQ284cSzgmcoMShvGGK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fUnx0_1v5bzbhC7Nx5dcGp
        subject_person_id: p_wZ4qgdk3jH4QDPFjjmq8ju
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMC5NfN2C2NZZbTjCYCkPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXgJyL4CUt1shv7LW5rOmY
          claim_id: c_fUnx0_1v5bzbhC7Nx5dcGp
          source_id: s_4h4tLn3u7RWDw4edAEAyHK
          stance: supports
          locator: CBDB 双向互证（父 王澣 ⇄ 子 王仲卿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4h4tLn3u7RWDw4edAEAyHK
            source_type: api_record
            title: 中国历代人物传记资料库：王仲卿（CBDB 18287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18287&o=json
            external_identifier: CBDB:18287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NMC5NfN2C2NZZbTjCYCkPx
        status: active
        display_name: 王仲卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NMC5NfN2C2NZZbTjCYCkPx | 王仲卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澣（CBDB 2131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2131&o=json)
- [中国历代人物传记资料库：王仲卿（CBDB 18287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18287&o=json)
