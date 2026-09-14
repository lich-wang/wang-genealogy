---
schema: wang-person/v1
id: p_qoah7FrZ6mu7Xy35XdosAz
status: active
merged_into: null
display_name: 王三錫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HM3Me2jdfejaRnJiE1Kv6v
        subject_person_id: p_qoah7FrZ6mu7Xy35XdosAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3otbokrtnVRnFS8K8JeM9L
          claim_id: c_HM3Me2jdfejaRnJiE1Kv6v
          source_id: s_euoQEgMTmtMHMfaDCRkh7h
          stance: supports
          locator: CBDB:214233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214233）
          source: &a1
            id: s_euoQEgMTmtMHMfaDCRkh7h
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 214233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json
            external_identifier: CBDB:214233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pjyuzYHQZDUc33DAGq5CoZ
        subject_person_id: p_qoah7FrZ6mu7Xy35XdosAz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214233）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_as5M5V7hpswdrjAYXlyN7l
          claim_id: c_pjyuzYHQZDUc33DAGq5CoZ
          source_id: s_euoQEgMTmtMHMfaDCRkh7h
          stance: supports
          locator: CBDB:214233
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bQp7LOsgY4KGrC7ALruoEG
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qoah7FrZ6mu7Xy35XdosAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nD5KZgGBn6h0DhbJtDKM35
          claim_id: c_bQp7LOsgY4KGrC7ALruoEG
          source_id: s_F79AB6XWZnOv2eMD_5Af6y
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三錫 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三錫 之父／母。
          source:
            id: s_F79AB6XWZnOv2eMD_5Af6y
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 214233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json
            external_identifier: CBDB:214233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FBPum8LTBdeJMCSbLMi71
        status: active
        display_name: 王曰可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PtwvsPyZOll02OJfDGHHlf
        subject_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qoah7FrZ6mu7Xy35XdosAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MhSzGNF-NlLoOhA_yUiPnK
          claim_id: c_PtwvsPyZOll02OJfDGHHlf
          source_id: s_F79AB6XWZnOv2eMD_5Af6y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126449 王三宅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F79AB6XWZnOv2eMD_5Af6y
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 214233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json
            external_identifier: CBDB:214233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQ7de4k3fPsZaTDKaE81D5
        status: active
        display_name: 王三宅
        merged_into_person_id: null
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1FBPum8LTBdeJMCSbLMi71 | 王曰可 | accepted |
| other | p_gQ7de4k3fPsZaTDKaE81D5 | 王三宅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 214233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json)
