---
schema: wang-person/v1
id: p_zvDLLjsaBbAAQZrQMfa4Dg
status: active
merged_into: null
display_name: 王曉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P9w2Kv9DPuyJHXfEzapbtd
        subject_person_id: p_zvDLLjsaBbAAQZrQMfa4Dg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_btbLETyh4U3zs6nkrgnDZo
          claim_id: c_P9w2Kv9DPuyJHXfEzapbtd
          source_id: s_gKqK9zooenw3H4HXLwUpwM
          stance: supports
          locator: CBDB:280923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280923）
          source: &a1
            id: s_gKqK9zooenw3H4HXLwUpwM
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 280923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json
            external_identifier: CBDB:280923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCPS4gzR8rmaZMU8mS1aKi
        subject_person_id: p_zvDLLjsaBbAAQZrQMfa4Dg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曉，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pUK3mXe5t4VVCi-JumPFod
          claim_id: c_oCPS4gzR8rmaZMU8mS1aKi
          source_id: s_gKqK9zooenw3H4HXLwUpwM
          stance: supports
          locator: CBDB:280923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MulWyGgwKMN3mOFPuowbFv
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zvDLLjsaBbAAQZrQMfa4Dg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CaI7owG5qN7QsXrtwBBxD
          claim_id: c_MulWyGgwKMN3mOFPuowbFv
          source_id: s_AgbFp1w0NMidMiFi1UZIhm
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王曉 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王曉 之父／母。
          source:
            id: s_AgbFp1w0NMidMiFi1UZIhm
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 280923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json
            external_identifier: CBDB:280923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGQsVR5gzeQy8Y9aNmPG9C
        status: active
        display_name: 王槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Yb6Ohxc1KAtQzkWsHI_qh-
        subject_person_id: p_qC31C42hD4UK4m3NDzMPZB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zvDLLjsaBbAAQZrQMfa4Dg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Yp8n0qMk4rg5RlwFNIskp
          claim_id: c_Yb6Ohxc1KAtQzkWsHI_qh-
          source_id: s_AgbFp1w0NMidMiFi1UZIhm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68343 王暐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AgbFp1w0NMidMiFi1UZIhm
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 280923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json
            external_identifier: CBDB:280923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
---

# 王曉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曉 | accepted |
| bio.summary | 王曉，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qGQsVR5gzeQy8Y9aNmPG9C | 王槐 | accepted |
| other | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曉（CBDB 280923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280923&o=json)
