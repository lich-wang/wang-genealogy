---
schema: wang-person/v1
id: p_7TVGTNu3sbko426HVSAN25
status: active
merged_into: null
display_name: 王昕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQEDJZeDNKoK1K97xMGqvY
        subject_person_id: p_7TVGTNu3sbko426HVSAN25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bUYz4LCgzay271iTezQY2E
          claim_id: c_VQEDJZeDNKoK1K97xMGqvY
          source_id: s_vk7PUv3t4fbXB8kvidptEw
          stance: supports
          locator: CBDB:280921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280921）
          source: &a1
            id: s_vk7PUv3t4fbXB8kvidptEw
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 280921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json
            external_identifier: CBDB:280921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iDicuheDqMt8dQnW6xQh5
        subject_person_id: p_7TVGTNu3sbko426HVSAN25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_se_Z7OwXRRH1cEsutAujkC
          claim_id: c_8iDicuheDqMt8dQnW6xQh5
          source_id: s_vk7PUv3t4fbXB8kvidptEw
          stance: supports
          locator: CBDB:280921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5r3ob48O8iPLq4N16XYwWZ
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7TVGTNu3sbko426HVSAN25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IH6E1wkXvrDJw4ykM6i_HT
          claim_id: c_5r3ob48O8iPLq4N16XYwWZ
          source_id: s_1PfHbcbAuHF5ofTdAEn-Op
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王昕 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王昕 之父／母。
          source:
            id: s_1PfHbcbAuHF5ofTdAEn-Op
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 280921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json
            external_identifier: CBDB:280921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGQsVR5gzeQy8Y9aNmPG9C
        status: active
        display_name: 王槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_X1uRAGxMhUDNE-oWprIGxp
        subject_person_id: p_7TVGTNu3sbko426HVSAN25
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I29koYvsmwsiruOgzglg_q
          claim_id: c_X1uRAGxMhUDNE-oWprIGxp
          source_id: s_1PfHbcbAuHF5ofTdAEn-Op
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68343 王暐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1PfHbcbAuHF5ofTdAEn-Op
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 280921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json
            external_identifier: CBDB:280921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
---

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕 | accepted |
| bio.summary | 王昕，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qGQsVR5gzeQy8Y9aNmPG9C | 王槐 | accepted |
| other | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昕（CBDB 280921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280921&o=json)
