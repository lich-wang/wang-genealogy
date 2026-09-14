---
schema: wang-person/v1
id: p_4H3CFz5B9C5wCxTWKJ4ugX
status: active
merged_into: null
display_name: 王元功
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQqC4dfJY3dqS9KL3cEJWn
        subject_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EaR95x7YM8jxHXwX9YWvtG
          claim_id: c_FQqC4dfJY3dqS9KL3cEJWn
          source_id: s_GXEMcEz9GD9erCjiFbzye5
          stance: supports
          locator: CBDB:386697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386697）
          source: &a1
            id: s_GXEMcEz9GD9erCjiFbzye5
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iDJWN3bECU7YKbETGL6UpG
        subject_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元功，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zh57upCKpcOD4VJAafs1qv
          claim_id: c_iDJWN3bECU7YKbETGL6UpG
          source_id: s_GXEMcEz9GD9erCjiFbzye5
          stance: supports
          locator: CBDB:386697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OEsIXaEVYjVmtrMTwaSPdn
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs__geuIrBYmZ_7nET70PliEn
          claim_id: c_OEsIXaEVYjVmtrMTwaSPdn
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 386691）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q1HXQkSMAFHi7fYuKS8duv
        status: active
        display_name: 王蕙
        merged_into_person_id: null
    - claim:
        id: c_StFBw5l6D9bfMtwmIvQjOi
        subject_person_id: p_sn42C8p7CP4y7NuAFEWEFM
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_032_iQDhSokldiJsmIfS7o
          claim_id: c_StFBw5l6D9bfMtwmIvQjOi
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386695）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sn42C8p7CP4y7NuAFEWEFM
        status: active
        display_name: 戴氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_86LgFht_QDVviIsIEo2Hk7
        subject_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7UaV74eMdSsLXp87H2nucC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBswpZfAdpd9ZwvH4Y7i5h
          claim_id: c_86LgFht_QDVviIsIEo2Hk7
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 386696 王浩存）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UaV74eMdSsLXp87H2nucC
        status: active
        display_name: 王浩存
        merged_into_person_id: null
    - claim:
        id: c_lwSXKJeoVy5kVmvWAs2Nhn
        subject_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z3KNTFacsxd7Senrh39qhH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0T99NAPrmgnU62e9OjlJ-Q
          claim_id: c_lwSXKJeoVy5kVmvWAs2Nhn
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 386698 王漢章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z3KNTFacsxd7Senrh39qhH
        status: active
        display_name: 王漢章
        merged_into_person_id: null
---

# 王元功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元功 | accepted |
| bio.summary | 王元功，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q1HXQkSMAFHi7fYuKS8duv | 王蕙 | accepted |
| parents | p_sn42C8p7CP4y7NuAFEWEFM | 戴氏 | accepted |
| other | p_7UaV74eMdSsLXp87H2nucC | 王浩存 | accepted |
| other | p_Z3KNTFacsxd7Senrh39qhH | 王漢章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元功（CBDB 386697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json)
