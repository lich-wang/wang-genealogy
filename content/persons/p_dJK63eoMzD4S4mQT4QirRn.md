---
schema: wang-person/v1
id: p_dJK63eoMzD4S4mQT4QirRn
status: active
merged_into: null
display_name: 王曔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bB35rtcidywfXy2296diKm
        subject_person_id: p_dJK63eoMzD4S4mQT4QirRn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_odABvxnFFGaFbSG43yR1ZQ
          claim_id: c_bB35rtcidywfXy2296diKm
          source_id: s_7P8DXeDAoHQoR6YZ75KXNd
          stance: supports
          locator: CBDB:638524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638524）
          source: &a1
            id: s_7P8DXeDAoHQoR6YZ75KXNd
            source_type: api_record
            title: 中国历代人物传记资料库：王曔（CBDB 638524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638524&o=json
            external_identifier: CBDB:638524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vVMMJafHWoWMV5F7QAsUkk
        subject_person_id: p_dJK63eoMzD4S4mQT4QirRn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曔，清人物。籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1rrMfCJeZ9g4wzy72egbgg
          claim_id: c_vVMMJafHWoWMV5F7QAsUkk
          source_id: s_7P8DXeDAoHQoR6YZ75KXNd
          stance: supports
          locator: CBDB:638524
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

# 王曔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曔 | accepted |
| bio.summary | 王曔，清人物。籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曔（CBDB 638524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638524&o=json)
