---
schema: wang-person/v1
id: p_VH94HvSK9LNwKLm3oKwP41
status: active
merged_into: null
display_name: 王茂華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BVmXNzEcnZuyLQcq2SF7jX
        subject_person_id: p_VH94HvSK9LNwKLm3oKwP41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUDw2pPZZE9JnrrD2Zuqss
          claim_id: c_BVmXNzEcnZuyLQcq2SF7jX
          source_id: s_GKuhZhFz34mHFSPU6tMZgD
          stance: supports
          locator: CBDB:240765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240765）
          source: &a1
            id: s_GKuhZhFz34mHFSPU6tMZgD
            source_type: api_record
            title: 中国历代人物传记资料库：王茂華（CBDB 240765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240765&o=json
            external_identifier: CBDB:240765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iQgXVTebTmqzKNLRP29sHn
        subject_person_id: p_VH94HvSK9LNwKLm3oKwP41
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂華，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9LMXktksHZZl1db2lbjCHt
          claim_id: c_iQgXVTebTmqzKNLRP29sHn
          source_id: s_GKuhZhFz34mHFSPU6tMZgD
          stance: supports
          locator: CBDB:240765
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
  descendants:
    - claim:
        id: c__r6cXDLceIwCrtM1KCEUjb
        subject_person_id: p_VH94HvSK9LNwKLm3oKwP41
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2FtChk1xSouaHotUbP87sY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rqfY544Ung9s43PMm30Rd
          claim_id: c__r6cXDLceIwCrtM1KCEUjb
          source_id: s_tQWMLNK9NgsqJftPjPjV32
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tQWMLNK9NgsqJftPjPjV32
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 208122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208122&o=json
            external_identifier: CBDB:208122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2FtChk1xSouaHotUbP87sY
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王茂華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂華 | accepted |
| bio.summary | 王茂華，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2FtChk1xSouaHotUbP87sY | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 208122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208122&o=json)
- [中国历代人物传记资料库：王茂華（CBDB 240765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240765&o=json)
