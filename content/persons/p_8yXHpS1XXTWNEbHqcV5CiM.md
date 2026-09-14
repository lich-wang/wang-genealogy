---
schema: wang-person/v1
id: p_8yXHpS1XXTWNEbHqcV5CiM
status: active
merged_into: null
display_name: 王瑢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vK4ThC36tU7Mi7Q41dHs2y
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bc3tg27n4QBkNZsnfapp1M
          claim_id: c_vK4ThC36tU7Mi7Q41dHs2y
          source_id: s_ffAox6VEvUocx6P9wMiwSM
          stance: supports
          locator: CBDB:290018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290018）
          source: &a1
            id: s_ffAox6VEvUocx6P9wMiwSM
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TuqwQLhedsBAFJGbB7Ask
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑢，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rwAtaDPCpqp5XRyr2OsBxv
          claim_id: c_5TuqwQLhedsBAFJGbB7Ask
          source_id: s_ffAox6VEvUocx6P9wMiwSM
          stance: supports
          locator: CBDB:290018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w8ce9vxCLsrI1OdGJVgz9B
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i097l4jzh5sg_pv-YDeUPE
          claim_id: c_w8ce9vxCLsrI1OdGJVgz9B
          source_id: s_TAXShRXHGTAn17kvo6i-ns
          stance: supports
          locator: CBDB：兄弟 王璣（126823）之父／母 王文暉
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑢 与 王璣 为同胞（CBDB 记「弟」），王璣 之父／母即 王瑢 之父／母。
          source:
            id: s_TAXShRXHGTAn17kvo6i-ns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oLGH5VdAkbTAKw9xdBWvfS
        status: active
        display_name: 王文暉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iKNnFJAEHwUQWf9wEwIDbm
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTVtzcnneAkmgXRqrBfpVV
          claim_id: c_iKNnFJAEHwUQWf9wEwIDbm
          source_id: s_TAXShRXHGTAn17kvo6i-ns
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126823 王璣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TAXShRXHGTAn17kvo6i-ns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EsRDyFvEK3YaUwwwR2A4xp
        status: active
        display_name: 王璣
        merged_into_person_id: null
---

# 王瑢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑢 | accepted |
| bio.summary | 王瑢，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLGH5VdAkbTAKw9xdBWvfS | 王文暉 | accepted |
| other | p_EsRDyFvEK3YaUwwwR2A4xp | 王璣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑢（CBDB 290018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json)
