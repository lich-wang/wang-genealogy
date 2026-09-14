---
schema: wang-person/v1
id: p_YgE7ftdaAKz2Mh9mzMz4BN
status: active
merged_into: null
display_name: 王井
cbdb_id: 261846
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3XXGDQL8UPwu6MwCPnc1L7
        subject_person_id: p_YgE7ftdaAKz2Mh9mzMz4BN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王井，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ft0y_3LBSeG2AoC5UvVrRX
          claim_id: c_3XXGDQL8UPwu6MwCPnc1L7
          source_id: s_VmqJeY9KX4uQm5LAJxRbPL
          stance: supports
          locator: CBDB:261846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VmqJeY9KX4uQm5LAJxRbPL
            source_type: api_record
            title: 中国历代人物传记资料库：王井（CBDB 261846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261846&o=json
            external_identifier: CBDB:261846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8QjDrWokmDgPgdfKBdTYA
        subject_person_id: p_YgE7ftdaAKz2Mh9mzMz4BN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王井
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A4DtxJsH69RQNchnrBW85J
          claim_id: c_d8QjDrWokmDgPgdfKBdTYA
          source_id: s_VmqJeY9KX4uQm5LAJxRbPL
          stance: supports
          locator: CBDB:261846
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fscWMmttsDlHqLLY4HN6S9
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YgE7ftdaAKz2Mh9mzMz4BN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zdTvpsvft5a_ExmPRIgWng
          claim_id: c_fscWMmttsDlHqLLY4HN6S9
          source_id: s__eWt6CRC4XEjXOuOYXgLtY
          stance: supports
          locator: CBDB：兄弟 王奎（200714）之父／母 王乾溥
          quotation: null
          interpretation_note: 由兄弟关系推断：王井 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王井 之父／母。
          source:
            id: s__eWt6CRC4XEjXOuOYXgLtY
            source_type: api_record
            title: 中国历代人物传记资料库：王井（CBDB 261846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261846&o=json
            external_identifier: CBDB:261846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g6tTV8xspEG83C3EPVzpm7
        status: active
        display_name: 王乾溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tHcaGGkNJ73HpM_Byo2Bts
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YgE7ftdaAKz2Mh9mzMz4BN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rzU5zAFDBTcP6Ujrcq3TCG
          claim_id: c_tHcaGGkNJ73HpM_Byo2Bts
          source_id: s__eWt6CRC4XEjXOuOYXgLtY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200714 王奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__eWt6CRC4XEjXOuOYXgLtY
            source_type: api_record
            title: 中国历代人物传记资料库：王井（CBDB 261846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261846&o=json
            external_identifier: CBDB:261846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
---

# 王井

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王井，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261846） | accepted |
| name.primary | 王井 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g6tTV8xspEG83C3EPVzpm7 | 王乾溥 | accepted |
| other | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王井（CBDB 261846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261846&o=json)
