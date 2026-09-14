---
schema: wang-person/v1
id: p_dQG6P5Z5ucUGLgZuSEfakq
status: active
merged_into: null
display_name: 王熙政
cbdb_id: 219255
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZoEqGYWF9AHmM9dEH2TXcP
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙政，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219255）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sZUKS2yv5p_CcQ5tICkRm_
          claim_id: c_ZoEqGYWF9AHmM9dEH2TXcP
          source_id: s_5NAFDm3BvLEnNzVsDtwntD
          stance: supports
          locator: CBDB:219255
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5NAFDm3BvLEnNzVsDtwntD
            source_type: api_record
            title: 中国历代人物传记资料库：王熙政（CBDB 219255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219255&o=json
            external_identifier: CBDB:219255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rbTXDFZLQrtV24HKnwBs6F
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RJ9Q4J4ptXYHkYLhsNfjEb
          claim_id: c_rbTXDFZLQrtV24HKnwBs6F
          source_id: s_5NAFDm3BvLEnNzVsDtwntD
          stance: supports
          locator: CBDB:219255
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l9Gphc10PAidXqNqaOWmDS
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VwFx3Ed401LQB7GfsbrXbP
          claim_id: c_l9Gphc10PAidXqNqaOWmDS
          source_id: s_5NAFDm3BvLEnNzVsDtwntD
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5NAFDm3BvLEnNzVsDtwntD
            source_type: api_record
            title: 中国历代人物传记资料库：王熙政（CBDB 219255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219255&o=json
            external_identifier: CBDB:219255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mhrvputkBEQ43wY64CJw5k
        status: active
        display_name: 王乾亨
        merged_into_person_id: null
    - claim:
        id: c_p37hiduarAkHvgd7SVyD2J
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0TrISyC0bR8QLyUBmBV5ok
          claim_id: c_p37hiduarAkHvgd7SVyD2J
          source_id: s_KnFhkch2xUEoZNspO2P82k
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王炌 与 王乾亨 为同胞（CBDB 记「弟」），王乾亨 之父／母即 王炌 之父／母。
          source:
            id: s_KnFhkch2xUEoZNspO2P82k
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 219260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json
            external_identifier: CBDB:219260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DP6mVGy7Bg888mb3e1eb4f
        status: active
        display_name: 王炌
        merged_into_person_id: null
    - claim:
        id: c_MquGUFVlL-tIQhCvlRrWEx
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EqARATPgBBrHMxLZoEz1Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4DtjIYZySsKbjigtPXKdN
          claim_id: c_MquGUFVlL-tIQhCvlRrWEx
          source_id: s_6elau11NqpuOoF9iEfijvF
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王坤亨 与 王乾亨 为同胞（CBDB 记「兄」），王乾亨 之父／母即 王坤亨 之父／母。
          source:
            id: s_6elau11NqpuOoF9iEfijvF
            source_type: api_record
            title: 中国历代人物传记资料库：王坤亨（CBDB 219264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json
            external_identifier: CBDB:219264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EqARATPgBBrHMxLZoEz1Gp
        status: active
        display_name: 王坤亨
        merged_into_person_id: null
    - claim:
        id: c_G2n-V76jZ-CdABHs9YUjle
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mQw3sJYctiAO6D34vL6m8b
          claim_id: c_G2n-V76jZ-CdABHs9YUjle
          source_id: s__h6i8c9CXapMimox3a0Q9M
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰亨 与 王乾亨 为同胞（CBDB 记「弟」），王乾亨 之父／母即 王泰亨 之父／母。
          source:
            id: s__h6i8c9CXapMimox3a0Q9M
            source_type: api_record
            title: 中国历代人物传记资料库：王泰亨（CBDB 219261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json
            external_identifier: CBDB:219261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GE1GZqM7N1sxTxpcYkDEzs
        status: active
        display_name: 王泰亨
        merged_into_person_id: null
    - claim:
        id: c_N9p6C4deumLIZMI5_LBAKz
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KWys6KUvQi6E8Ad6BTffnw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IxyBvczelYRQA_j-cK7VIN
          claim_id: c_N9p6C4deumLIZMI5_LBAKz
          source_id: s_aryTlLELjDnW4pbUhP-NSl
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王有亨 与 王乾亨 为同胞（CBDB 记「兄」），王乾亨 之父／母即 王有亨 之父／母。
          source:
            id: s_aryTlLELjDnW4pbUhP-NSl
            source_type: api_record
            title: 中国历代人物传记资料库：王有亨（CBDB 219263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219263&o=json
            external_identifier: CBDB:219263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KWys6KUvQi6E8Ad6BTffnw
        status: active
        display_name: 王有亨
        merged_into_person_id: null
    - claim:
        id: c_gPuGn0OmkRh7bNTxVm4udQ
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_acTNCG1VMRELJ4C8s9MFwp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1B05Jfo032v_6pQdeA_VgR
          claim_id: c_gPuGn0OmkRh7bNTxVm4udQ
          source_id: s_jQTUqatmmgmN3ImsQbZouC
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王賁亨 与 王乾亨 为同胞（CBDB 记「兄」），王乾亨 之父／母即 王賁亨 之父／母。
          source:
            id: s_jQTUqatmmgmN3ImsQbZouC
            source_type: api_record
            title: 中国历代人物传记资料库：王賁亨（CBDB 219262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219262&o=json
            external_identifier: CBDB:219262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_acTNCG1VMRELJ4C8s9MFwp
        status: active
        display_name: 王賁亨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熙政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王熙政，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219255） | accepted |
| name.primary | 王熙政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mhrvputkBEQ43wY64CJw5k | 王乾亨 | accepted |
| children | p_DP6mVGy7Bg888mb3e1eb4f | 王炌 | accepted |
| children | p_EqARATPgBBrHMxLZoEz1Gp | 王坤亨 | accepted |
| children | p_GE1GZqM7N1sxTxpcYkDEzs | 王泰亨 | accepted |
| children | p_KWys6KUvQi6E8Ad6BTffnw | 王有亨 | accepted |
| children | p_acTNCG1VMRELJ4C8s9MFwp | 王賁亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁亨（CBDB 219262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219262&o=json)
- [中国历代人物传记资料库：王炌（CBDB 219260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json)
- [中国历代人物传记资料库：王坤亨（CBDB 219264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json)
- [中国历代人物传记资料库：王泰亨（CBDB 219261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json)
- [中国历代人物传记资料库：王熙政（CBDB 219255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219255&o=json)
- [中国历代人物传记资料库：王有亨（CBDB 219263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219263&o=json)
