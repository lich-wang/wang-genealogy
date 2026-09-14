---
schema: wang-person/v1
id: p_4Kk6qNfSJYpHQHN1WVLqmn
status: active
merged_into: null
display_name: 王檟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEt9yr9epjkY3EPLhLKCE8
        subject_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H9zC19xV3o58rW4dQ51EoH
          claim_id: c_iEt9yr9epjkY3EPLhLKCE8
          source_id: s_Y6xkq12F4V6hPfiQ7jMHU8
          stance: supports
          locator: CBDB:304466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304466）
          source: &a1
            id: s_Y6xkq12F4V6hPfiQ7jMHU8
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 304466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json
            external_identifier: CBDB:304466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHWb96uyuP8K45A3AYdtHc
        subject_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檟，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 304466）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n6Ghbld09kL-cTxz39fZ99
          claim_id: c_DHWb96uyuP8K45A3AYdtHc
          source_id: s_Y6xkq12F4V6hPfiQ7jMHU8
          stance: supports
          locator: CBDB:304466
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_txOfWe3QRJ9kcKZNhHmNNJ
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1YQsNHU-PuMkLXYUzIg7N
          claim_id: c_txOfWe3QRJ9kcKZNhHmNNJ
          source_id: s_9b_nZ2CC4WRiC9I9x_9xgq
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王檟 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王檟 之父／母。
          source:
            id: s_9b_nZ2CC4WRiC9I9x_9xgq
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 304466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json
            external_identifier: CBDB:304466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hGzTEBArhtNBmqP8bhoNhy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wjlqXQUKcltwRad6fSWco8
        subject_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52a506duRlLTPE48MmtMyB
          claim_id: c_wjlqXQUKcltwRad6fSWco8
          source_id: s_9b_nZ2CC4WRiC9I9x_9xgq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9b_nZ2CC4WRiC9I9x_9xgq
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 304466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json
            external_identifier: CBDB:304466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王檟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檟 | accepted |
| bio.summary | 王檟，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 304466） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGzTEBArhtNBmqP8bhoNhy | 王祿 | accepted |
| other | p_H4Uy6ApLcV6Le6pdH8Y4bo | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王檟（CBDB 304466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json)
