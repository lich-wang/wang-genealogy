---
schema: wang-person/v1
id: p_BM9rBC9C1cVxEoCYSovd5K
status: active
merged_into: null
display_name: 王永忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3AYexpZYq8M6LF4EADEJ6
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c3nmSp6Zu2MUiGNskkJ16x
          claim_id: c_E3AYexpZYq8M6LF4EADEJ6
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: CBDB:282869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282869）
          source: &a1
            id: s_gFs7Rbg8JK9bR2DMJuiwkv
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 282869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json
            external_identifier: CBDB:282869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KcQqxN51fFNs8LTi3vZswQ
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hQ9RfVwPrR2DsU6wDPTKGV
          claim_id: c_KcQqxN51fFNs8LTi3vZswQ
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: CBDB:282869
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
        id: c_8K1dGvFuRSTwYig59L-uOR
        subject_person_id: p_BM9rBC9C1cVxEoCYSovd5K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZDaEkQ32_zmcVV2AYLVQp
          claim_id: c_8K1dGvFuRSTwYig59L-uOR
          source_id: s_gFs7Rbg8JK9bR2DMJuiwkv
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x6tYqQFJHDF8Lt8wgXM9MU
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
  other: []
---

# 王永忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永忠 | accepted |
| bio.summary | 王永忠，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_x6tYqQFJHDF8Lt8wgXM9MU | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永忠（CBDB 282869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282869&o=json)
