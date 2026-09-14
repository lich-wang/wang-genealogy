---
schema: wang-person/v1
id: p_cVXAZf35EZ1jSuNPUED9jR
status: active
merged_into: null
display_name: 王世用
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYKNMMWeCR1HSywYJH2Ljv
        subject_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ApbvWmzq8b3ApWJCn8vLYJ
          claim_id: c_FYKNMMWeCR1HSywYJH2Ljv
          source_id: s_fVygMvuDrb49JyjTrL9HAJ
          stance: supports
          locator: CBDB:243246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243246）
          source: &a1
            id: s_fVygMvuDrb49JyjTrL9HAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 243246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json
            external_identifier: CBDB:243246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_szw47Pt62Ur8LHmemZzVHR
        subject_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世用，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7hgYRD4cR-8x00RLJPozZC
          claim_id: c_szw47Pt62Ur8LHmemZzVHR
          source_id: s_fVygMvuDrb49JyjTrL9HAJ
          stance: supports
          locator: CBDB:243246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eLBIvNafGS6f_jQzep2JGA
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoiPUtC4qGt8JIjS5cEWmQ
          claim_id: c_eLBIvNafGS6f_jQzep2JGA
          source_id: s_K48UECCDA-0lItLwDGxw2k
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世用 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世用 之父／母。
          source:
            id: s_K48UECCDA-0lItLwDGxw2k
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 243246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json
            external_identifier: CBDB:243246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WMUHySsXQ9VMTQlkB5Z9ZB
        subject_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRJOrLQr4UyR834k2jpghw
          claim_id: c_WMUHySsXQ9VMTQlkB5Z9ZB
          source_id: s_K48UECCDA-0lItLwDGxw2k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K48UECCDA-0lItLwDGxw2k
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 243246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json
            external_identifier: CBDB:243246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王世用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世用 | accepted |
| bio.summary | 王世用，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |
| other | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世用（CBDB 243246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json)
