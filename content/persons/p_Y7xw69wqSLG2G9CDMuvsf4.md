---
schema: wang-person/v1
id: p_Y7xw69wqSLG2G9CDMuvsf4
status: active
merged_into: null
display_name: 王延
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QiFBb3HS5PjCZCr2SapPVp
        subject_person_id: p_Y7xw69wqSLG2G9CDMuvsf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RTekTzN3gQU2e5nofNCb7t
          claim_id: c_QiFBb3HS5PjCZCr2SapPVp
          source_id: s_6oFGyBGH6oCWm8hKx7X3Kz
          stance: supports
          locator: CBDB:138041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138041）
          source: &a1
            id: s_6oFGyBGH6oCWm8hKx7X3Kz
            source_type: api_record
            title: 中国历代人物传记资料库：王延（CBDB 138041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138041&o=json
            external_identifier: CBDB:138041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NtuVKD4Q21CFAH2CcZnXXe
        subject_person_id: p_Y7xw69wqSLG2G9CDMuvsf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延，宋人物。寶祐進士，籍贯寧海。（中国历代人物传记资料库 CBDB 138041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ho7uFoTsA3BWJ8YAn1NHv4
          claim_id: c_NtuVKD4Q21CFAH2CcZnXXe
          source_id: s_6oFGyBGH6oCWm8hKx7X3Kz
          stance: supports
          locator: CBDB:138041
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
        id: c_bD60VQtOu8axQPSgU_yX7b
        subject_person_id: p_Y7xw69wqSLG2G9CDMuvsf4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kcQYXAtAdx71RQEhXoKNPK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTOCYckC0PZaCy7cdBNIG0
          claim_id: c_bD60VQtOu8axQPSgU_yX7b
          source_id: s_QU6wNA5nA6pBKS62D28qrg
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QU6wNA5nA6pBKS62D28qrg
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 38015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json
            external_identifier: CBDB:38015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kcQYXAtAdx71RQEhXoKNPK
        status: active
        display_name: 王剛中
        merged_into_person_id: null
    - claim:
        id: c_LZQTxdmkHwECsUnsEpUuO-
        subject_person_id: p_Y7xw69wqSLG2G9CDMuvsf4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WgNmx4b4KuLP378oSihf2n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hmgYwfFijbwaCOdqsZ_h1O
          claim_id: c_LZQTxdmkHwECsUnsEpUuO-
          source_id: s_6oFGyBGH6oCWm8hKx7X3Kz
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WgNmx4b4KuLP378oSihf2n
        status: active
        display_name: 王堅叔
        merged_into_person_id: null
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延 | accepted |
| bio.summary | 王延，宋人物。寶祐進士，籍贯寧海。（中国历代人物传记资料库 CBDB 138041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kcQYXAtAdx71RQEhXoKNPK | 王剛中 | accepted |
| descendants | p_WgNmx4b4KuLP378oSihf2n | 王堅叔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 38015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json)
- [中国历代人物传记资料库：王延（CBDB 138041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138041&o=json)
