---
schema: wang-person/v1
id: p_HcfsKA3FvSxgK9qhNB5oxH
status: active
merged_into: null
display_name: 王時中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fTLNdmk2uKoYsSWaNLmQQs
        subject_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gs7pm1jW5hatrXDACpWmCb
          claim_id: c_fTLNdmk2uKoYsSWaNLmQQs
          source_id: s_FQ7H49co1k5arYLrB3hK9e
          stance: supports
          locator: CBDB:327990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327990）
          source: &a1
            id: s_FQ7H49co1k5arYLrB3hK9e
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 327990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json
            external_identifier: CBDB:327990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4gWJ5uyHEqf1WdFQK9HcY9
        subject_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時中，明人物。嘉靖四十一年進士，籍贯通州。（中国历代人物传记资料库 CBDB 327990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UwTaj4rjBwZAL38N4WtREk
          claim_id: c_4gWJ5uyHEqf1WdFQK9HcY9
          source_id: s_FQ7H49co1k5arYLrB3hK9e
          stance: supports
          locator: CBDB:327990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SyeNaueBheTY3WWjpYuD3J
        subject_person_id: p_xJuShEWwU75pnqgfG1d4gu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZEGpQGT9q_PeUgpScOREq2
          claim_id: c_SyeNaueBheTY3WWjpYuD3J
          source_id: s_9xGFEmrxAsakoN0v3l2evo
          stance: supports
          locator: CBDB：兄弟 王時舉（68472）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王時中 与 王時舉 为同胞（CBDB 记「兄」），王時舉 之父／母即 王時中 之父／母。
          source:
            id: s_9xGFEmrxAsakoN0v3l2evo
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 327990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json
            external_identifier: CBDB:327990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xJuShEWwU75pnqgfG1d4gu
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__vxNiYM4aYPoSZFmeSopNu
        subject_person_id: p_26qvS1eCyosKLR6T6UCexR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yl94T3D6dJPYJQY53idxh
          claim_id: c__vxNiYM4aYPoSZFmeSopNu
          source_id: s_9xGFEmrxAsakoN0v3l2evo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68472 王時舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9xGFEmrxAsakoN0v3l2evo
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 327990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json
            external_identifier: CBDB:327990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_26qvS1eCyosKLR6T6UCexR
        status: active
        display_name: 王時舉
        merged_into_person_id: null
---

# 王時中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時中 | accepted |
| bio.summary | 王時中，明人物。嘉靖四十一年進士，籍贯通州。（中国历代人物传记资料库 CBDB 327990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJuShEWwU75pnqgfG1d4gu | 王儀 | accepted |
| other | p_26qvS1eCyosKLR6T6UCexR | 王時舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時中（CBDB 327990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json)
