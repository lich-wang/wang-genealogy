---
schema: wang-person/v1
id: p_HxVPhw9dL6ewA5NrNhk92M
status: active
merged_into: null
display_name: 王簪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s1hjDWazG8qPQCeewQKPwm
        subject_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GsHw1K1KdW7jdx1JM2qop
          claim_id: c_s1hjDWazG8qPQCeewQKPwm
          source_id: s_PLfZfc8EWEwW4LSKWV3nYg
          stance: supports
          locator: CBDB:328173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328173）
          source: &a1
            id: s_PLfZfc8EWEwW4LSKWV3nYg
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 328173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json
            external_identifier: CBDB:328173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ejvqzsSPhK3mLpAKFHE3R
        subject_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簪，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_puPnAk0oDTjbE8TzddrPQi
          claim_id: c_1ejvqzsSPhK3mLpAKFHE3R
          source_id: s_PLfZfc8EWEwW4LSKWV3nYg
          stance: supports
          locator: CBDB:328173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4bRAfY6i2qpz6Osfp4vIC7
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zO5Q3YVtiH06T5x-we6Kiv
          claim_id: c_4bRAfY6i2qpz6Osfp4vIC7
          source_id: s_n3VQ-IhbrENufASj_oFC8q
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王簪 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王簪 之父／母。
          source:
            id: s_n3VQ-IhbrENufASj_oFC8q
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 328173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json
            external_identifier: CBDB:328173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DlCLJ-j9YLDclaRzLfxTTx
        subject_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmO0VCyv3aRfHCn6hOGVoL
          claim_id: c_DlCLJ-j9YLDclaRzLfxTTx
          source_id: s_n3VQ-IhbrENufASj_oFC8q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n3VQ-IhbrENufASj_oFC8q
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 328173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json
            external_identifier: CBDB:328173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
---

# 王簪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簪 | accepted |
| bio.summary | 王簪，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| other | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王簪（CBDB 328173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json)
