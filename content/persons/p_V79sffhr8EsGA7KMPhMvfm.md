---
schema: wang-person/v1
id: p_V79sffhr8EsGA7KMPhMvfm
status: active
merged_into: null
display_name: 王景聖
cbdb_id: 524331
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MiAxHXEUPocVDPU3x74kqo
        subject_person_id: p_V79sffhr8EsGA7KMPhMvfm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聖，清人物。中国历代人物传记资料库（CBDB）以人物编号 524331 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pdTCNjW-2_Obj1n9h2wQsv
          claim_id: c_MiAxHXEUPocVDPU3x74kqo
          source_id: s_JjtHUgnidJuafZ7C2MPq62
          stance: supports
          locator: CBDB:524331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JjtHUgnidJuafZ7C2MPq62
            source_type: api_record
            title: 中国历代人物传记资料库：王景聖（CBDB 524331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524331&o=json
            external_identifier: CBDB:524331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PYpggn2s84BnioqauMkRFz
        subject_person_id: p_V79sffhr8EsGA7KMPhMvfm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aZBqCkQicxoQ9x4wW4QyFE
          claim_id: c_PYpggn2s84BnioqauMkRFz
          source_id: s_JjtHUgnidJuafZ7C2MPq62
          stance: supports
          locator: CBDB:524331
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_JjtHUgnidJuafZ7C2MPq62
            source_type: api_record
            title: 中国历代人物传记资料库：王景聖（CBDB 524331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524331&o=json
            external_identifier: CBDB:524331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LjvtOz5Cuva1jSROAqGMVD
        subject_person_id: p_65uwuN4kNM3odBECM82TgR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V79sffhr8EsGA7KMPhMvfm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oLERKW6xY5gz75R99jmH7g
          claim_id: c_LjvtOz5Cuva1jSROAqGMVD
          source_id: s_PaZFEvqn3Ui7QLvfYuYAk1
          stance: supports
          locator: IHP 人名權威資料 10840：祖父王光宗、父王景聖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a1
            id: s_PaZFEvqn3Ui7QLvfYuYAk1
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 67236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67236&o=json
            external_identifier: CBDB:67236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65uwuN4kNM3odBECM82TgR
        status: active
        display_name: 王光宗
        merged_into_person_id: null
  children:
    - claim:
        id: c_GRS9R693EZqYL1s8I2wp_c
        subject_person_id: p_V79sffhr8EsGA7KMPhMvfm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_16ha2YtS6eGhgo4wdoM39V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LbZFaq27wJ_GSt427L3TW
          claim_id: c_GRS9R693EZqYL1s8I2wp_c
          source_id: s_PaZFEvqn3Ui7QLvfYuYAk1
          stance: supports
          locator: IHP 人名權威資料 10840：父王景聖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_16ha2YtS6eGhgo4wdoM39V
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景聖，清人物。中国历代人物传记资料库（CBDB）以人物编号 524331 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王景聖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_65uwuN4kNM3odBECM82TgR | 王光宗 | accepted |
| children | p_16ha2YtS6eGhgo4wdoM39V | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景聖（CBDB 524331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524331&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 67236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67236&o=json)
