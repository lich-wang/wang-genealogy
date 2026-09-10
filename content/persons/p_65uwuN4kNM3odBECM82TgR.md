---
schema: wang-person/v1
id: p_65uwuN4kNM3odBECM82TgR
status: active
merged_into: null
display_name: 王光宗
cbdb_id: 524330
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KJQmR1USW7K3MBviimrD5X
        subject_person_id: p_65uwuN4kNM3odBECM82TgR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宗，清人物。中国历代人物传记资料库（CBDB）以人物编号 524330 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mkJhP9Yf2zLEAO8uRyVNFB
          claim_id: c_KJQmR1USW7K3MBviimrD5X
          source_id: s_jtUG8wTXLXaFW38QtZ9N5m
          stance: supports
          locator: CBDB:524330
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_jtUG8wTXLXaFW38QtZ9N5m
            source_type: api_record
            title: 中国历代人物传记资料库：王光宗（CBDB 524330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524330&o=json
            external_identifier: CBDB:524330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fanLMFe6tDcqRJYHCHSSc5
        subject_person_id: p_65uwuN4kNM3odBECM82TgR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_psj8AhRu18zuUGmYiUb5aX
          claim_id: c_fanLMFe6tDcqRJYHCHSSc5
          source_id: s_jtUG8wTXLXaFW38QtZ9N5m
          stance: supports
          locator: CBDB:524330
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_jtUG8wTXLXaFW38QtZ9N5m
            source_type: api_record
            title: 中国历代人物传记资料库：王光宗（CBDB 524330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524330&o=json
            external_identifier: CBDB:524330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
        id: p_V79sffhr8EsGA7KMPhMvfm
        status: active
        display_name: 王景聖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光宗，清人物。中国历代人物传记资料库（CBDB）以人物编号 524330 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王光宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V79sffhr8EsGA7KMPhMvfm | 王景聖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光宗（CBDB 524330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524330&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 67236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67236&o=json)
