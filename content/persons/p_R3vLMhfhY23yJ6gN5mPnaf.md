---
schema: wang-person/v1
id: p_R3vLMhfhY23yJ6gN5mPnaf
status: active
merged_into: null
display_name: 王待問
cbdb_id: 13954
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PeqFj5ucjyCdY5XHnpA6m
        subject_person_id: p_R3vLMhfhY23yJ6gN5mPnaf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待問，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 13954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2S5vyY8hf6DbmLX9AocHMN
          claim_id: c_3PeqFj5ucjyCdY5XHnpA6m
          source_id: s_kfSP44zT6L7u1kCotmXfAc
          stance: supports
          locator: CBDB:13954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kfSP44zT6L7u1kCotmXfAc
            source_type: api_record
            title: 中国历代人物传记资料库：王待問（CBDB 13954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13954&o=json
            external_identifier: CBDB:13954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gwcMoZUnPWnNx6JJdJ9CvP
        subject_person_id: p_R3vLMhfhY23yJ6gN5mPnaf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WC44tSibDGnZrtexZPZHeH
          claim_id: c_gwcMoZUnPWnNx6JJdJ9CvP
          source_id: s_kfSP44zT6L7u1kCotmXfAc
          stance: supports
          locator: CBDB:13954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Hm5I8oY0sjXrI1_a-fogIF
        subject_person_id: p_R3vLMhfhY23yJ6gN5mPnaf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RmgFFh97gya29hK9EKmvJu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBDPb45L8mnQQ4yz6w6e8I
          claim_id: c_Hm5I8oY0sjXrI1_a-fogIF
          source_id: s_uhr80HWeMCQFnc1F5jawB_
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 13955 王待舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uhr80HWeMCQFnc1F5jawB_
            source_type: api_record
            title: 中国历代人物传记资料库：王待問（CBDB 13954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13954&o=json
            external_identifier: CBDB:13954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RmgFFh97gya29hK9EKmvJu
        status: active
        display_name: 王待舉
        merged_into_person_id: null
---

# 王待問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王待問，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 13954） | accepted |
| name.primary | 王待問 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_RmgFFh97gya29hK9EKmvJu | 王待舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王待問（CBDB 13954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13954&o=json)
