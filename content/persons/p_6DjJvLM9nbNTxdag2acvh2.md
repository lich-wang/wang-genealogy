---
schema: wang-person/v1
id: p_6DjJvLM9nbNTxdag2acvh2
status: active
merged_into: null
display_name: 王大中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wNqyw3VnNfZbDnjqKDwHSF
        subject_person_id: p_6DjJvLM9nbNTxdag2acvh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XECWs29Ft1M1MdCq8eBLf9
          claim_id: c_wNqyw3VnNfZbDnjqKDwHSF
          source_id: s_BxNXTCKsPVfF7GtiqwzyeJ
          stance: supports
          locator: CBDB:10339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10339）
          source: &a1
            id: s_BxNXTCKsPVfF7GtiqwzyeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王大中（CBDB 10339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json
            external_identifier: CBDB:10339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gryKKqJyNNUbKkHZLQmhPp
        subject_person_id: p_6DjJvLM9nbNTxdag2acvh2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大中，宋人物。籍贯吳江，曾任吏部侍郎左右選。（中国历代人物传记资料库 CBDB 10339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J1lmjw1ymC_b_m0hAG3Kzk
          claim_id: c_gryKKqJyNNUbKkHZLQmhPp
          source_id: s_BxNXTCKsPVfF7GtiqwzyeJ
          stance: supports
          locator: CBDB:10339
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dVruGjC6XFwTdKbpUV5NE4
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6DjJvLM9nbNTxdag2acvh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGgU010CcGyBoWbeBbpRP2
          claim_id: c_dVruGjC6XFwTdKbpUV5NE4
          source_id: s_JRZOGbL3vARFDBWgO6p1MU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7381）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
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
        id: p_bZcZfxCHimqNMGao1LQfLN
        status: active
        display_name: 王蘋
        merged_into_person_id: null
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
        id: p_R3pJeHFLDV6smetKu1ATnr
        status: active
        display_name: 王大本
        merged_into_person_id: null
---

# 王大中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大中 | accepted |
| bio.summary | 王大中，宋人物。籍贯吳江，曾任吏部侍郎左右選。（中国历代人物传记资料库 CBDB 10339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bZcZfxCHimqNMGao1LQfLN | 王蘋 | accepted |
| other | p_R3pJeHFLDV6smetKu1ATnr | 王大本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大中（CBDB 10339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json)
