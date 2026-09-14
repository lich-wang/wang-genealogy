---
schema: wang-person/v1
id: p_s3Qm6GtW3M8NzyLSpEdc3p
status: active
merged_into: null
display_name: 王同和
cbdb_id: 237756
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tFF2bm9J51MZHXHWuDvZhE
        subject_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同和，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gRSYVGJLPOsxXJR6PU_ypg
          claim_id: c_tFF2bm9J51MZHXHWuDvZhE
          source_id: s_wvwVyZ6HnCV4TRkzuCrt3t
          stance: supports
          locator: CBDB:237756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wvwVyZ6HnCV4TRkzuCrt3t
            source_type: api_record
            title: 中国历代人物传记资料库：王同和（CBDB 237756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json
            external_identifier: CBDB:237756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3skSWNqLzhELfJbthsFY8D
        subject_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M23mqTFR69K1WVWgGn2XcU
          claim_id: c_3skSWNqLzhELfJbthsFY8D
          source_id: s_wvwVyZ6HnCV4TRkzuCrt3t
          stance: supports
          locator: CBDB:237756
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hBDpV-UcqdIdYLvl8SaD_2
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXCoaT6hZXxopTsrR7ZFAS
          claim_id: c_hBDpV-UcqdIdYLvl8SaD_2
          source_id: s_sHR0m_2Kdo4H3P4cIvIfg7
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同和 与 王槩 为同胞（CBDB 记「兄」），王槩 之父／母即 王同和 之父／母。
          source:
            id: s_sHR0m_2Kdo4H3P4cIvIfg7
            source_type: api_record
            title: 中国历代人物传记资料库：王同和（CBDB 237756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json
            external_identifier: CBDB:237756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H7kYUAXL18KkgnTsd1b4rh
        status: active
        display_name: 王仲起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ze1pcrT50o2KqaDCCYacW0
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHWcyBF9_FWyAMxYiLy6K8
          claim_id: c_ze1pcrT50o2KqaDCCYacW0
          source_id: s_sHR0m_2Kdo4H3P4cIvIfg7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sHR0m_2Kdo4H3P4cIvIfg7
            source_type: api_record
            title: 中国历代人物传记资料库：王同和（CBDB 237756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json
            external_identifier: CBDB:237756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
---

# 王同和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同和，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237756） | accepted |
| name.primary | 王同和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7kYUAXL18KkgnTsd1b4rh | 王仲起 | accepted |
| other | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同和（CBDB 237756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json)
