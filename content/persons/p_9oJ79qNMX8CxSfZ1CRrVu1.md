---
schema: wang-person/v1
id: p_9oJ79qNMX8CxSfZ1CRrVu1
status: active
merged_into: null
display_name: 王廷用
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tKkMMt11wtZP1mzTATVsZu
        subject_person_id: p_9oJ79qNMX8CxSfZ1CRrVu1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EC8TZZ2mvcAkoPdEWaXoD3
          claim_id: c_tKkMMt11wtZP1mzTATVsZu
          source_id: s_M9UdDhSg178T6kce29xTfh
          stance: supports
          locator: CBDB:317786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317786）
          source: &a1
            id: s_M9UdDhSg178T6kce29xTfh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷用（CBDB 317786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json
            external_identifier: CBDB:317786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1BfKXmyi7CCeiieUYDrcD
        subject_person_id: p_9oJ79qNMX8CxSfZ1CRrVu1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷用，明人物。嘉靖三十二年進士，籍贯成安，入仕監生，曾任知州、主簿、巡檢。（中国历代人物传记资料库 CBDB 317786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iSDvUZ_36apijc3FcByE6d
          claim_id: c_i1BfKXmyi7CCeiieUYDrcD
          source_id: s_M9UdDhSg178T6kce29xTfh
          stance: supports
          locator: CBDB:317786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RX3tQ2lEhKg0Fvh031xfr-
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9oJ79qNMX8CxSfZ1CRrVu1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rVDcsWg_NbdJ2CmzlfrxPR
          claim_id: c_RX3tQ2lEhKg0Fvh031xfr-
          source_id: s_I7URrZkwsfZVANEjLUjPeq
          stance: supports
          locator: CBDB：兄弟 王宮用（204347）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷用 与 王宮用 为同胞（CBDB 记「弟」），王宮用 之父／母即 王廷用 之父／母。
          source:
            id: s_I7URrZkwsfZVANEjLUjPeq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷用（CBDB 317786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json
            external_identifier: CBDB:317786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gv3jP8cXzjr19Yf1aibXF5
        status: active
        display_name: 王隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FOXTEne_B8yIVYisVcKz4E
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9oJ79qNMX8CxSfZ1CRrVu1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXrA220dJft2AyHTLvOCbu
          claim_id: c_FOXTEne_B8yIVYisVcKz4E
          source_id: s_I7URrZkwsfZVANEjLUjPeq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204347 王宮用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I7URrZkwsfZVANEjLUjPeq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷用（CBDB 317786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json
            external_identifier: CBDB:317786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6CiKvYHdk4eY1idbKnmk1W
        status: active
        display_name: 王宮用
        merged_into_person_id: null
---

# 王廷用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷用 | accepted |
| bio.summary | 王廷用，明人物。嘉靖三十二年進士，籍贯成安，入仕監生，曾任知州、主簿、巡檢。（中国历代人物传记资料库 CBDB 317786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gv3jP8cXzjr19Yf1aibXF5 | 王隆 | accepted |
| other | p_6CiKvYHdk4eY1idbKnmk1W | 王宮用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷用（CBDB 317786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json)
