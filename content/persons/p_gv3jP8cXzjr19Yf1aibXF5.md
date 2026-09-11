---
schema: wang-person/v1
id: p_gv3jP8cXzjr19Yf1aibXF5
status: active
merged_into: null
display_name: 王隆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3RpqcYgwDBNGGsDwyTXqU
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ghiQy93ve2s6xEMB6mE98r
          claim_id: c_V3RpqcYgwDBNGGsDwyTXqU
          source_id: s_UVKim7HyGjeH4C3vtijZ7S
          stance: supports
          locator: CBDB:317780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317780）
          source: &a1
            id: s_UVKim7HyGjeH4C3vtijZ7S
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 317780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317780&o=json
            external_identifier: CBDB:317780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2BP9Q6M26meY7BQnYq33sb
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y9qucoe9rYBFAw4mglatQw
          claim_id: c_2BP9Q6M26meY7BQnYq33sb
          source_id: s_UVKim7HyGjeH4C3vtijZ7S
          stance: supports
          locator: CBDB:317780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rclhUSLzTACbOSvN9LBga-
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ECxf_iqfnD7_ZZtqgy33Q
          claim_id: c_rclhUSLzTACbOSvN9LBga-
          source_id: s_5p74c5e9HKF4RB5G96u7s4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5p74c5e9HKF4RB5G96u7s4
            source_type: api_record
            title: 中国历代人物传记资料库：王宮用（CBDB 204347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204347&o=json
            external_identifier: CBDB:204347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6CiKvYHdk4eY1idbKnmk1W
        status: active
        display_name: 王宮用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6CiKvYHdk4eY1idbKnmk1W | 王宮用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宮用（CBDB 204347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204347&o=json)
- [中国历代人物传记资料库：王隆（CBDB 317780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317780&o=json)
