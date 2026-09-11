---
schema: wang-person/v1
id: p_8Td548HU47JmYxQJhR3A4Q
status: active
merged_into: null
display_name: 王學淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yURiSSQ9MH2shsmQF59iGN
        subject_person_id: p_8Td548HU47JmYxQJhR3A4Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RBBwHQDkAVa1vyxr5jp3Bq
          claim_id: c_yURiSSQ9MH2shsmQF59iGN
          source_id: s_E8cRSheD9K8zrMQmE1EtLK
          stance: supports
          locator: CBDB:637047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637047）
          source: &a1
            id: s_E8cRSheD9K8zrMQmE1EtLK
            source_type: api_record
            title: 中国历代人物传记资料库：王學淳（CBDB 637047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637047&o=json
            external_identifier: CBDB:637047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XaMo4FJaTTBfn63Dbs6Erq
        subject_person_id: p_8Td548HU47JmYxQJhR3A4Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學淳，清人物。籍贯大竹，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637047）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RSD5cOgacte8r8Ye7tGTuz
          claim_id: c_XaMo4FJaTTBfn63Dbs6Erq
          source_id: s_E8cRSheD9K8zrMQmE1EtLK
          stance: supports
          locator: CBDB:637047
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

# 王學淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學淳 | accepted |
| bio.summary | 王學淳，清人物。籍贯大竹，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學淳（CBDB 637047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637047&o=json)
