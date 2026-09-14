---
schema: wang-person/v1
id: p_R3pJeHFLDV6smetKu1ATnr
status: active
merged_into: null
display_name: 王大本
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rukE3rzWxEpnhC2kdsSqh6
        subject_person_id: p_R3pJeHFLDV6smetKu1ATnr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r8vhKsW4KGzMQsfAoBKVCG
          claim_id: c_rukE3rzWxEpnhC2kdsSqh6
          source_id: s_A6jf4A3CDHgKZbr9Sm369B
          stance: supports
          locator: CBDB:10338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10338）
          source: &a1
            id: s_A6jf4A3CDHgKZbr9Sm369B
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 10338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10338&o=json
            external_identifier: CBDB:10338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RcfPxVzn1M1GQaiWG1wUxP
        subject_person_id: p_R3pJeHFLDV6smetKu1ATnr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本，宋人物。籍贯吳江，曾任朝請郎、安撫使司(大使司)參議官。（中国历代人物传记资料库 CBDB 10338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c-0VKmSWBJik-B9vHkvTTy
          claim_id: c_RcfPxVzn1M1GQaiWG1wUxP
          source_id: s_A6jf4A3CDHgKZbr9Sm369B
          stance: supports
          locator: CBDB:10338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_dAKS6TzXeSgZM0hJCaidf9
        subject_person_id: p_6DjJvLM9nbNTxdag2acvh2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R3pJeHFLDV6smetKu1ATnr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cgJYAefHTH8EBe1_a5oFjn
          claim_id: c_dAKS6TzXeSgZM0hJCaidf9
          source_id: s_JRZOGbL3vARFDBWgO6p1MU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10338 王大本）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JRZOGbL3vARFDBWgO6p1MU
            source_type: api_record
            title: 中国历代人物传记资料库：王大中（CBDB 10339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json
            external_identifier: CBDB:10339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6DjJvLM9nbNTxdag2acvh2
        status: active
        display_name: 王大中
        merged_into_person_id: null
---

# 王大本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大本 | accepted |
| bio.summary | 王大本，宋人物。籍贯吳江，曾任朝請郎、安撫使司(大使司)參議官。（中国历代人物传记资料库 CBDB 10338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_6DjJvLM9nbNTxdag2acvh2 | 王大中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大本（CBDB 10338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10338&o=json)
- [中国历代人物传记资料库：王大中（CBDB 10339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json)
