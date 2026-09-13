---
schema: wang-person/v1
id: p_QLLV1TJdVbUvB6k8ixrrBp
status: active
merged_into: null
display_name: 王延聚
cbdb_id: 333665
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AetrC42w417CbAezJJfGZg
        subject_person_id: p_QLLV1TJdVbUvB6k8ixrrBp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延聚，明人物。洪武四年進士，籍贯鄧州。（中国历代人物传记资料库 CBDB 333665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_M1W9nJwe-aT6UxzVpr9xto
          claim_id: c_AetrC42w417CbAezJJfGZg
          source_id: s_JNb68MMDb8J7PybK87qapF
          stance: supports
          locator: CBDB:333665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JNb68MMDb8J7PybK87qapF
            source_type: api_record
            title: 中国历代人物传记资料库：王延聚（CBDB 333665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333665&o=json
            external_identifier: CBDB:333665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZFcQZGd39QhxKVPHdmpDD
        subject_person_id: p_QLLV1TJdVbUvB6k8ixrrBp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ADG6CccW9Wkn3u98XqNQze
          claim_id: c_UZFcQZGd39QhxKVPHdmpDD
          source_id: s_JNb68MMDb8J7PybK87qapF
          stance: supports
          locator: CBDB:333665
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_m-zCnav98NFdenD7EqgfRw
        subject_person_id: p_QLLV1TJdVbUvB6k8ixrrBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rErhcWeWVpgg2_FGcmZbUk
          claim_id: c_m-zCnav98NFdenD7EqgfRw
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5uu71pxW5w8mKk3gRJU4Cp
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 198040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json
            external_identifier: CBDB:198040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        status: active
        display_name: 王誼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延聚，明人物。洪武四年進士，籍贯鄧州。（中国历代人物传记资料库 CBDB 333665） | accepted |
| name.primary | 王延聚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Ron7BDzFq6b4FwKnZ8W1Z | 王誼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延聚（CBDB 333665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333665&o=json)
- [中国历代人物传记资料库：王誼（CBDB 198040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json)
