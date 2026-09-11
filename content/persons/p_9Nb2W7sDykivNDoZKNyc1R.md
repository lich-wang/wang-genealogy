---
schema: wang-person/v1
id: p_9Nb2W7sDykivNDoZKNyc1R
status: active
merged_into: null
display_name: 王奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x3L6DwszMZWCy9YVtKkoBD
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z4LK7awDf7pQFQAJ1AVnLk
          claim_id: c_x3L6DwszMZWCy9YVtKkoBD
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
          stance: supports
          locator: CBDB:209897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209897）
          source: &a1
            id: s_hRRFPYwhsj9xKUj4cyrrjd
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 209897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json
            external_identifier: CBDB:209897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RF59ByVJsW59rJdenMBANY
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tuxy6xFrCar6UqBpxJuJY3
          claim_id: c_RF59ByVJsW59rJdenMBANY
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
          stance: supports
          locator: CBDB:209897
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
        id: c_niSK6Po4tqJATWz6h1ZuyM
        subject_person_id: p_9Nb2W7sDykivNDoZKNyc1R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1vqv-IvE0SPoNprUwU0UI
          claim_id: c_niSK6Po4tqJATWz6h1ZuyM
          source_id: s_hRRFPYwhsj9xKUj4cyrrjd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cakXozT1Ed1TLgH5Avqt9N
        status: active
        display_name: 王汝訓
        merged_into_person_id: null
  other: []
---

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| bio.summary | 王奎，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cakXozT1Ed1TLgH5Avqt9N | 王汝訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 209897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209897&o=json)
