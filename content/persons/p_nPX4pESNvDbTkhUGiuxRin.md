---
schema: wang-person/v1
id: p_nPX4pESNvDbTkhUGiuxRin
status: active
merged_into: null
display_name: 王瑀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_stk4iNKrC7L9BFr8DAuTpt
        subject_person_id: p_nPX4pESNvDbTkhUGiuxRin
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H4T2AzYPEVj6qqPiPGVySy
          claim_id: c_stk4iNKrC7L9BFr8DAuTpt
          source_id: s_Z4KUHYid5sUNCu6teBKbje
          stance: supports
          locator: CBDB:256031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256031）
          source: &a1
            id: s_Z4KUHYid5sUNCu6teBKbje
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 256031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json
            external_identifier: CBDB:256031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLkFmeLFhEGdWntnDAoqDg
        subject_person_id: p_nPX4pESNvDbTkhUGiuxRin
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。成化十七年進士，籍贯長垣，曾任承事郎。（中国历代人物传记资料库 CBDB 256031）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XZmElh5LmfCKKgNH2Fdr-K
          claim_id: c_rLkFmeLFhEGdWntnDAoqDg
          source_id: s_Z4KUHYid5sUNCu6teBKbje
          stance: supports
          locator: CBDB:256031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uDGNerbYuLNK_D5GJT1FEw
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nPX4pESNvDbTkhUGiuxRin
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rCixTJBLT6xgl4JqvOYx72
          claim_id: c_uDGNerbYuLNK_D5GJT1FEw
          source_id: s_kzpBCBsq-gw2bkmslcSb4N
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王璇 为同胞（CBDB 记「弟」），王璇 之父／母即 王瑀 之父／母。
          source:
            id: s_kzpBCBsq-gw2bkmslcSb4N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 256031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json
            external_identifier: CBDB:256031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A3heW27H9g2mVn1UvcsyD4
        status: active
        display_name: 王時佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zhm_roFgQ9q6sVt6QjBj02
        subject_person_id: p_Q746PBZNycHf9YN5GVT1MS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nPX4pESNvDbTkhUGiuxRin
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V2LZQBMHOen7xcP5eDCpZY
          claim_id: c_zhm_roFgQ9q6sVt6QjBj02
          source_id: s_kzpBCBsq-gw2bkmslcSb4N
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200297 王璇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kzpBCBsq-gw2bkmslcSb4N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 256031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json
            external_identifier: CBDB:256031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q746PBZNycHf9YN5GVT1MS
        status: active
        display_name: 王璇
        merged_into_person_id: null
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。成化十七年進士，籍贯長垣，曾任承事郎。（中国历代人物传记资料库 CBDB 256031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3heW27H9g2mVn1UvcsyD4 | 王時佐 | accepted |
| other | p_Q746PBZNycHf9YN5GVT1MS | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 256031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json)
