---
schema: wang-person/v1
id: p_DWE6S4xteL8yk7eB9AqbYc
status: active
merged_into: null
display_name: 王敏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pAqi8F2USNq6LSRXpbin4
        subject_person_id: p_DWE6S4xteL8yk7eB9AqbYc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X8AGFkT3UYUo1d96pP3r3x
          claim_id: c_7pAqi8F2USNq6LSRXpbin4
          source_id: s_BGyy5djCjAFmRKqJUj5XEK
          stance: supports
          locator: CBDB:287787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287787）
          source: &a1
            id: s_BGyy5djCjAFmRKqJUj5XEK
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 287787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287787&o=json
            external_identifier: CBDB:287787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9abHDY71GsEoEQyFJ21XZR
        subject_person_id: p_DWE6S4xteL8yk7eB9AqbYc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 287787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9rOyQV52X0pNwSabc_hFZ
          claim_id: c_9abHDY71GsEoEQyFJ21XZR
          source_id: s_BGyy5djCjAFmRKqJUj5XEK
          stance: supports
          locator: CBDB:287787
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
        id: c_cR-0Xxf__ShUxQtUgAvdaY
        subject_person_id: p_DWE6S4xteL8yk7eB9AqbYc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JX2kojoi67e76MdeNUyP8W
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzSMJVOlKt1Wqbjs558ree
          claim_id: c_cR-0Xxf__ShUxQtUgAvdaY
          source_id: s_BGyy5djCjAFmRKqJUj5XEK
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JX2kojoi67e76MdeNUyP8W
        status: active
        display_name: 王穀祥
        merged_into_person_id: null
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 287787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JX2kojoi67e76MdeNUyP8W | 王穀祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 287787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287787&o=json)
