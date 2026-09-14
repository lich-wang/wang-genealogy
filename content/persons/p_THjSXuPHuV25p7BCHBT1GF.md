---
schema: wang-person/v1
id: p_THjSXuPHuV25p7BCHBT1GF
status: active
merged_into: null
display_name: 王遵道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C5BZgDdSj2n7RVCg8RzaKN
        subject_person_id: p_THjSXuPHuV25p7BCHBT1GF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wPL5WfZDmk3hpEhy8m7m2k
          claim_id: c_C5BZgDdSj2n7RVCg8RzaKN
          source_id: s_KMiPrDV3uTWxDqJNDzDhoC
          stance: supports
          locator: CBDB:224059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224059）
          source: &a1
            id: s_KMiPrDV3uTWxDqJNDzDhoC
            source_type: api_record
            title: 中国历代人物传记资料库：王遵道（CBDB 224059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json
            external_identifier: CBDB:224059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9pYcPd2BEgsiJqyGoBquoL
        subject_person_id: p_THjSXuPHuV25p7BCHBT1GF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵道，明人物。萬曆十一年進士，籍贯杞縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 224059）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DjIXUjFvq5rq9UaJp0tFPm
          claim_id: c_9pYcPd2BEgsiJqyGoBquoL
          source_id: s_KMiPrDV3uTWxDqJNDzDhoC
          stance: supports
          locator: CBDB:224059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HKK-AZYXe0TE8WGJ5J-5FD
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_THjSXuPHuV25p7BCHBT1GF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGEIpniIoe-ZiBIQeWqaln
          claim_id: c_HKK-AZYXe0TE8WGJ5J-5FD
          source_id: s_nHAqBbWCPisOE6BQD8FOzB
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵道 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵道 之父／母。
          source:
            id: s_nHAqBbWCPisOE6BQD8FOzB
            source_type: api_record
            title: 中国历代人物传记资料库：王遵道（CBDB 224059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json
            external_identifier: CBDB:224059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SW2vBS5Q2Gs57G32UxYrWC
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gRHaZEEMnOzRUos2pUJNkh
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_THjSXuPHuV25p7BCHBT1GF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U9cSFaqtX0NRsq3dImX0YN
          claim_id: c_gRHaZEEMnOzRUos2pUJNkh
          source_id: s_nHAqBbWCPisOE6BQD8FOzB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206844 王遵訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nHAqBbWCPisOE6BQD8FOzB
            source_type: api_record
            title: 中国历代人物传记资料库：王遵道（CBDB 224059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json
            external_identifier: CBDB:224059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
---

# 王遵道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵道 | accepted |
| bio.summary | 王遵道，明人物。萬曆十一年進士，籍贯杞縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 224059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SW2vBS5Q2Gs57G32UxYrWC | 王倫 | accepted |
| other | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵道（CBDB 224059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224059&o=json)
