---
schema: wang-person/v1
id: p_QVjFE2QiM6nYiNQ7St51r1
status: active
merged_into: null
display_name: 王仁恪
cbdb_id: 147219
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7NE5Wz96TKoPamqyNVn9K7
        subject_person_id: p_QVjFE2QiM6nYiNQ7St51r1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恪，唐人物。籍贯芒山，曾任招武校尉。（中国历代人物传记资料库 CBDB 147219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4VSI028UzJAepaoht54XTQ
          claim_id: c_7NE5Wz96TKoPamqyNVn9K7
          source_id: s_H8Y22MB37eX4BjnQNmq4Vh
          stance: supports
          locator: CBDB:147219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H8Y22MB37eX4BjnQNmq4Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王仁恪（CBDB 147219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147219&o=json
            external_identifier: CBDB:147219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3DVKEaXBdromBejCoCMbM
        subject_person_id: p_QVjFE2QiM6nYiNQ7St51r1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Wexs2SAdwSaNqwQQ2PswKy
          claim_id: c_c3DVKEaXBdromBejCoCMbM
          source_id: s_H8Y22MB37eX4BjnQNmq4Vh
          stance: supports
          locator: CBDB:147219
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6bV39lZHwyXmFzVeBjvj7f
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QVjFE2QiM6nYiNQ7St51r1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHfahB4s7uEz63EF0vlxjt
          claim_id: c_6bV39lZHwyXmFzVeBjvj7f
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4V8aXpGeJ7MKPqr1cqdPqn
            source_type: api_record
            title: 中国历代人物传记资料库：王孝瑜（CBDB 139046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139046&o=json
            external_identifier: CBDB:139046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A26HPm9ANKeADWDoAHJR4r
        status: active
        display_name: 王孝瑜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁恪，唐人物。籍贯芒山，曾任招武校尉。（中国历代人物传记资料库 CBDB 147219） | accepted |
| name.primary | 王仁恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A26HPm9ANKeADWDoAHJR4r | 王孝瑜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁恪（CBDB 147219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147219&o=json)
- [中国历代人物传记资料库：王孝瑜（CBDB 139046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139046&o=json)
