---
schema: wang-person/v1
id: p_GE1GZqM7N1sxTxpcYkDEzs
status: active
merged_into: null
display_name: 王泰亨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDCiNhA9z8VY3ebJeXbo2S
        subject_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZiKxTwDb8nTzD2okqLLcb8
          claim_id: c_BDCiNhA9z8VY3ebJeXbo2S
          source_id: s_3QMN9nfb4LxCrc79Y6WJMt
          stance: supports
          locator: CBDB:219261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219261）
          source: &a1
            id: s_3QMN9nfb4LxCrc79Y6WJMt
            source_type: api_record
            title: 中国历代人物传记资料库：王泰亨（CBDB 219261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json
            external_identifier: CBDB:219261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bc7QNdCB5ZW1PfPvH2pDEB
        subject_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰亨，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219261）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b05vRNlxH9MPOdtJQrvm5n
          claim_id: c_Bc7QNdCB5ZW1PfPvH2pDEB
          source_id: s_3QMN9nfb4LxCrc79Y6WJMt
          stance: supports
          locator: CBDB:219261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_dQG6P5Z5ucUGLgZuSEfakq
        status: active
        display_name: 王熙政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r4uXaa6c3YisKLIjx4AJ6i
        subject_person_id: p_GE1GZqM7N1sxTxpcYkDEzs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zDUIJkMZHv_qs-DJ2nqI1
          claim_id: c_r4uXaa6c3YisKLIjx4AJ6i
          source_id: s__h6i8c9CXapMimox3a0Q9M
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206520 王乾亨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_mhrvputkBEQ43wY64CJw5k
        status: active
        display_name: 王乾亨
        merged_into_person_id: null
---

# 王泰亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰亨 | accepted |
| bio.summary | 王泰亨，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dQG6P5Z5ucUGLgZuSEfakq | 王熙政 | accepted |
| other | p_mhrvputkBEQ43wY64CJw5k | 王乾亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰亨（CBDB 219261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219261&o=json)
