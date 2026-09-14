---
schema: wang-person/v1
id: p_kv4sjC5VXhvz3Tw97ERrL6
status: active
merged_into: null
display_name: 王岫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AmrfBdrmsyhexjvfcQiMAe
        subject_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BmUnjXr7QgMBC5s65oWmn9
          claim_id: c_AmrfBdrmsyhexjvfcQiMAe
          source_id: s_7z6qT4LRoyxJEerZZR67Ck
          stance: supports
          locator: CBDB:332900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332900）
          source: &a1
            id: s_7z6qT4LRoyxJEerZZR67Ck
            source_type: api_record
            title: 中国历代人物传记资料库：王岫（CBDB 332900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json
            external_identifier: CBDB:332900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qaqf7BwVv1dw7uYHZPoySR
        subject_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岫，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GJzk552a4YhIbs4HCfXgNE
          claim_id: c_qaqf7BwVv1dw7uYHZPoySR
          source_id: s_7z6qT4LRoyxJEerZZR67Ck
          stance: supports
          locator: CBDB:332900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VKBrhWzWJDJYao1AXz27sy
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy7yOgbPuU8IPiTREp2nRL
          claim_id: c_VKBrhWzWJDJYao1AXz27sy
          source_id: s_lQfjOL2tqGKES3mCWMXVaw
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王岫 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王岫 之父／母。
          source:
            id: s_lQfjOL2tqGKES3mCWMXVaw
            source_type: api_record
            title: 中国历代人物传记资料库：王岫（CBDB 332900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json
            external_identifier: CBDB:332900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1bhXJAXaVpf689XsatKT86
        status: active
        display_name: 王公冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ei9fZx8SF2LCYwcQNmuW_Q
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DdK_vzjsuwh9YMq19dj45Z
          claim_id: c_ei9fZx8SF2LCYwcQNmuW_Q
          source_id: s_lQfjOL2tqGKES3mCWMXVaw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lQfjOL2tqGKES3mCWMXVaw
            source_type: api_record
            title: 中国历代人物传记资料库：王岫（CBDB 332900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json
            external_identifier: CBDB:332900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3mAauYa8M61LZB5CiRWcsN
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王岫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岫 | accepted |
| bio.summary | 王岫，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1bhXJAXaVpf689XsatKT86 | 王公冕 | accepted |
| other | p_3mAauYa8M61LZB5CiRWcsN | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岫（CBDB 332900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json)
