---
schema: wang-person/v1
id: p_C3qbUqK8r4tdCLJC1H25mH
status: active
merged_into: null
display_name: 王民卿
cbdb_id: 210119
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h6o4i1wFAYAPypksqV2fay
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民卿，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5eMLenvRKzfSl4n4O3c3SP
          claim_id: c_h6o4i1wFAYAPypksqV2fay
          source_id: s_xnwGLq1qA48iXx6d1DtUCy
          stance: supports
          locator: CBDB:210119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xnwGLq1qA48iXx6d1DtUCy
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_joxkRA6ZPgEjPHzxCUk5yd
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WADszPmKk62XH9X6JVza7P
          claim_id: c_joxkRA6ZPgEjPHzxCUk5yd
          source_id: s_xnwGLq1qA48iXx6d1DtUCy
          stance: supports
          locator: CBDB:210119
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IkOygDxPlgRb7whV_slpyW
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3zOrkp7dwDQss80QDBza2
          claim_id: c_IkOygDxPlgRb7whV_slpyW
          source_id: s_sZgCxXiNIMbsMHUzRwQbHu
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民卿 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民卿 之父／母。
          source:
            id: s_sZgCxXiNIMbsMHUzRwQbHu
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mIzv7tbxL1xQxrAfcKxw6G
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AdfFkwugk79zxtoV7yL-mc
          claim_id: c_mIzv7tbxL1xQxrAfcKxw6G
          source_id: s_sZgCxXiNIMbsMHUzRwQbHu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sZgCxXiNIMbsMHUzRwQbHu
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
---

# 王民卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民卿，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210119） | accepted |
| name.primary | 王民卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| other | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民卿（CBDB 210119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json)
