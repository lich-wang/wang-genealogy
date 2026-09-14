---
schema: wang-person/v1
id: p_bLj13qjFdTAK8aLLhZB8U1
status: active
merged_into: null
display_name: 王鑑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cRjBa7fhBaNUhAhAgiC4CA
        subject_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RqiHvCm6q8Wu6h33zDyiEP
          claim_id: c_cRjBa7fhBaNUhAhAgiC4CA
          source_id: s_QaiuvYMUbNyT44kQwJ1JbU
          stance: supports
          locator: CBDB:317096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317096）
          source: &a1
            id: s_QaiuvYMUbNyT44kQwJ1JbU
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 317096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json
            external_identifier: CBDB:317096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPJFSWAvpF65HoLqKEQFT8
        subject_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tL2gXDfuf33XkpoNUXH_da
          claim_id: c_GPJFSWAvpF65HoLqKEQFT8
          source_id: s_QaiuvYMUbNyT44kQwJ1JbU
          stance: supports
          locator: CBDB:317096
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_706OX04TKmx_axUymWjqOh
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PXoZYebHzszAov63MHWcG
          claim_id: c_706OX04TKmx_axUymWjqOh
          source_id: s_pSD5Z58eDbpWHZr25H6wBf
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王鑑 之父／母。
          source:
            id: s_pSD5Z58eDbpWHZr25H6wBf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 317096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json
            external_identifier: CBDB:317096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vv43N2CuZqbv1NMT55dzSf
        status: active
        display_name: 王琴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AegRuqTfUdshw9CBCrQRyF
        subject_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAhKb1Vk3Qt0Gfhrd8F2_p
          claim_id: c_AegRuqTfUdshw9CBCrQRyF
          source_id: s_pSD5Z58eDbpWHZr25H6wBf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pSD5Z58eDbpWHZr25H6wBf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 317096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json
            external_identifier: CBDB:317096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vv43N2CuZqbv1NMT55dzSf | 王琴 | accepted |
| other | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 317096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json)
