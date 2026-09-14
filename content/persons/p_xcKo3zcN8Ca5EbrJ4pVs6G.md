---
schema: wang-person/v1
id: p_xcKo3zcN8Ca5EbrJ4pVs6G
status: active
merged_into: null
display_name: 王烜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmKuqRmYHrVi7JmwEgUnBX
        subject_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xzxB1kWdzMV3rBGK97WwG
          claim_id: c_gmKuqRmYHrVi7JmwEgUnBX
          source_id: s_VdVFNKTHn82iJRxSj7K8R1
          stance: supports
          locator: CBDB:283529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283529）
          source: &a1
            id: s_VdVFNKTHn82iJRxSj7K8R1
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 283529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json
            external_identifier: CBDB:283529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qx8GCHC5LQMjD4mX44dxxK
        subject_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SoOTtAOZQrw2BqaCViEmd2
          claim_id: c_qx8GCHC5LQMjD4mX44dxxK
          source_id: s_VdVFNKTHn82iJRxSj7K8R1
          stance: supports
          locator: CBDB:283529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_97R12IZGuPPfdVH4vhKGQP
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iUQ2_pLQJnm9uad2ySvO7
          claim_id: c_97R12IZGuPPfdVH4vhKGQP
          source_id: s_Q7zEm1Uk08LDYx99YEzw1F
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王烜 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王烜 之父／母。
          source:
            id: s_Q7zEm1Uk08LDYx99YEzw1F
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 283529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json
            external_identifier: CBDB:283529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T-OsCR4J-pu2-v84kIwttu
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNxsULDVlC0nD-57HBLU0b
          claim_id: c_T-OsCR4J-pu2-v84kIwttu
          source_id: s_Q7zEm1Uk08LDYx99YEzw1F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q7zEm1Uk08LDYx99YEzw1F
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 283529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json
            external_identifier: CBDB:283529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
---

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | 王烜，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| other | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 283529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json)
