---
schema: wang-person/v1
id: p_gX4GGz8AVWcWAUz4K38wbr
status: active
merged_into: null
display_name: 王縉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZxH8eaH8Z6sKngoTgdYcZ
        subject_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1GXsJDCRKEju45b7ESC8V5
          claim_id: c_1ZxH8eaH8Z6sKngoTgdYcZ
          source_id: s_AAEtHjDREphVpNCrFRQa6r
          stance: supports
          locator: CBDB:288738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288738）
          source: &a1
            id: s_AAEtHjDREphVpNCrFRQa6r
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 288738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json
            external_identifier: CBDB:288738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qk8nKmCzt3MLi9iucGP3Su
        subject_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ihPJlFnY23HAEx79ZI7p_1
          claim_id: c_Qk8nKmCzt3MLi9iucGP3Su
          source_id: s_AAEtHjDREphVpNCrFRQa6r
          stance: supports
          locator: CBDB:288738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qCYYVNRr7BzmQ1pzuIK9K4
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-mW_T1ObE9qZvmG4s8QTi
          claim_id: c_qCYYVNRr7BzmQ1pzuIK9K4
          source_id: s_rsVm2qlzoTa_bm0YhbNMa6
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王紳 为同胞（CBDB 记「弟」），王紳 之父／母即 王縉 之父／母。
          source:
            id: s_rsVm2qlzoTa_bm0YhbNMa6
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 288738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json
            external_identifier: CBDB:288738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQX7wZ6kGeHGXVBXr7RepL
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_u7dCKZRoCLxTG5ig1dRTE_
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RBVivYbzRT5ZYMCigir0Fh
          claim_id: c_u7dCKZRoCLxTG5ig1dRTE_
          source_id: s_rsVm2qlzoTa_bm0YhbNMa6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rsVm2qlzoTa_bm0YhbNMa6
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 288738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json
            external_identifier: CBDB:288738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQX7wZ6kGeHGXVBXr7RepL | 王國寧 | accepted |
| other | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 288738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json)
