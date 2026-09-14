---
schema: wang-person/v1
id: p_FwLUw3WrXjg5xLjoaFQBBj
status: active
merged_into: null
display_name: 王文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aMTvqN5RVC3RPtYhMuDbWY
        subject_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ybE2WC1Eh49nLC3GqkWdM6
          claim_id: c_aMTvqN5RVC3RPtYhMuDbWY
          source_id: s_bkhdEYQnyAGDQf2MtrEMh2
          stance: supports
          locator: CBDB:266734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266734）
          source: &a1
            id: s_bkhdEYQnyAGDQf2MtrEMh2
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 266734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json
            external_identifier: CBDB:266734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8kLZDgCTcZ25Epuu2LTe8b
        subject_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266734）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A653HotghVZawzYvpL0ei0
          claim_id: c_8kLZDgCTcZ25Epuu2LTe8b
          source_id: s_bkhdEYQnyAGDQf2MtrEMh2
          stance: supports
          locator: CBDB:266734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J3Mq8dCvJprhxBvsJi-Lcl
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBYrCdwwwoZssZQMj6Oh0K
          claim_id: c_J3Mq8dCvJprhxBvsJi-Lcl
          source_id: s_6s8tdOKbXvhb9gxUgD8J5I
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王文 与 王震 为同胞（CBDB 记「弟」），王震 之父／母即 王文 之父／母。
          source:
            id: s_6s8tdOKbXvhb9gxUgD8J5I
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 266734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json
            external_identifier: CBDB:266734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fQRM5daE8Wp7q6E4q4CiyU
        status: active
        display_name: 王整
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2UAdQQUVUqf0a6aDxV9N57
        subject_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_468scsMi23PIF4kIkjQ7BX
          claim_id: c_2UAdQQUVUqf0a6aDxV9N57
          source_id: s_6s8tdOKbXvhb9gxUgD8J5I
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6s8tdOKbXvhb9gxUgD8J5I
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 266734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json
            external_identifier: CBDB:266734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xF6zkmGrf6YvrKuUEphBZ1
        status: active
        display_name: 王震
        merged_into_person_id: null
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fQRM5daE8Wp7q6E4q4CiyU | 王整 | accepted |
| other | p_xF6zkmGrf6YvrKuUEphBZ1 | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 266734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json)
