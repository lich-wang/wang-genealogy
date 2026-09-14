---
schema: wang-person/v1
id: p_6mc9uEBTKomUX9exaBo2tW
status: active
merged_into: null
display_name: 王欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBRG5Xc6qPKZwWtk14MUfG
        subject_person_id: p_6mc9uEBTKomUX9exaBo2tW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2V3C64C9KGRLTgdQ4HpqCE
          claim_id: c_kBRG5Xc6qPKZwWtk14MUfG
          source_id: s_ABohP5adT3jqwRHyXPpe7o
          stance: supports
          locator: CBDB:329596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329596）
          source: &a1
            id: s_ABohP5adT3jqwRHyXPpe7o
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 329596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json
            external_identifier: CBDB:329596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EU8M2Z8f6LXmVv4zhy73Qz
        subject_person_id: p_6mc9uEBTKomUX9exaBo2tW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。嘉靖四十四年進士，籍贯無錫，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 329596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gIH5M8XaanfFUjC5yeTlI5
          claim_id: c_EU8M2Z8f6LXmVv4zhy73Qz
          source_id: s_ABohP5adT3jqwRHyXPpe7o
          stance: supports
          locator: CBDB:329596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KdfXi9OY07oxcFw8YqyGSs
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6mc9uEBTKomUX9exaBo2tW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAqQ76qkWlzvbR7-BHecs1
          claim_id: c_KdfXi9OY07oxcFw8YqyGSs
          source_id: s_uHiSFxwEt6WBs3fzLeHxq5
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王欽 之父／母。
          source:
            id: s_uHiSFxwEt6WBs3fzLeHxq5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 329596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json
            external_identifier: CBDB:329596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e_5jOo7GCZg2-SFultVPvv
        subject_person_id: p_6mc9uEBTKomUX9exaBo2tW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aYP_JhjXsY65oZoGfLsdq
          claim_id: c_e_5jOo7GCZg2-SFultVPvv
          source_id: s_uHiSFxwEt6WBs3fzLeHxq5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126886 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uHiSFxwEt6WBs3fzLeHxq5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 329596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json
            external_identifier: CBDB:329596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。嘉靖四十四年進士，籍贯無錫，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 329596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |
| other | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 329596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329596&o=json)
