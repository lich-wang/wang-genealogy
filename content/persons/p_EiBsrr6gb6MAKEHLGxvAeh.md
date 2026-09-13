---
schema: wang-person/v1
id: p_EiBsrr6gb6MAKEHLGxvAeh
status: active
merged_into: null
display_name: 王永玉
cbdb_id: 288602
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDchnzsd42XDXx4uZCjpEA
        subject_person_id: p_EiBsrr6gb6MAKEHLGxvAeh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永玉，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-aE4mBnNtUP81aBIV5r7j6
          claim_id: c_GDchnzsd42XDXx4uZCjpEA
          source_id: s_swoq6vNGbxa9B53NJPJX8A
          stance: supports
          locator: CBDB:288602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_swoq6vNGbxa9B53NJPJX8A
            source_type: api_record
            title: 中国历代人物传记资料库：王永玉（CBDB 288602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288602&o=json
            external_identifier: CBDB:288602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_u6BNeQL42s8yKbEJndv5NE
        subject_person_id: p_EiBsrr6gb6MAKEHLGxvAeh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TP8U1QvyC8Y1najLan4M9E
          claim_id: c_u6BNeQL42s8yKbEJndv5NE
          source_id: s_swoq6vNGbxa9B53NJPJX8A
          stance: supports
          locator: CBDB:288602
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_XnZj5jurAIWoP2N6Juy6cl
        subject_person_id: p_EiBsrr6gb6MAKEHLGxvAeh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1kStAQx0OBg9QvVecNENdR
          claim_id: c_XnZj5jurAIWoP2N6Juy6cl
          source_id: s_swoq6vNGbxa9B53NJPJX8A
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_swoq6vNGbxa9B53NJPJX8A
            source_type: api_record
            title: 中国历代人物传记资料库：王永玉（CBDB 288602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288602&o=json
            external_identifier: CBDB:288602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wrYjpDvL8MtRavfwnm1dKh
        status: active
        display_name: 王滋
        merged_into_person_id: null
  other: []
---

# 王永玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永玉，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288602） | accepted |
| name.primary | 王永玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wrYjpDvL8MtRavfwnm1dKh | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永玉（CBDB 288602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288602&o=json)
