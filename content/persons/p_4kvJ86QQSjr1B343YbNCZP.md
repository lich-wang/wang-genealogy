---
schema: wang-person/v1
id: p_4kvJ86QQSjr1B343YbNCZP
status: active
merged_into: null
display_name: 王鉦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5FYAGspPeKCoiqkWSNH4Es
        subject_person_id: p_4kvJ86QQSjr1B343YbNCZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n51jCuC3HKutuZuVEUURsm
          claim_id: c_5FYAGspPeKCoiqkWSNH4Es
          source_id: s_2119Yk2PsQgDGJ9hUfWNDd
          stance: supports
          locator: CBDB:290157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290157）
          source: &a1
            id: s_2119Yk2PsQgDGJ9hUfWNDd
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 290157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json
            external_identifier: CBDB:290157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VL4KA6ApDtn78idF3KxDBA
        subject_person_id: p_4kvJ86QQSjr1B343YbNCZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉦，明人物。嘉靖八年進士，籍贯灤州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 290157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kezSGey8XMOtMzTYe9ivXX
          claim_id: c_VL4KA6ApDtn78idF3KxDBA
          source_id: s_2119Yk2PsQgDGJ9hUfWNDd
          stance: supports
          locator: CBDB:290157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kmZcG9-_CFXq1Mtc0flkv9
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4kvJ86QQSjr1B343YbNCZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-1G8PphBF7x6eydWyOMLu
          claim_id: c_kmZcG9-_CFXq1Mtc0flkv9
          source_id: s_60_zIxBDL5-OHUbugcndgj
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉦 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鉦 之父／母。
          source:
            id: s_60_zIxBDL5-OHUbugcndgj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 290157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json
            external_identifier: CBDB:290157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gGs45wBLrz1PrQ7nJg3Ni8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kNylusrRmJ5BOOdGWk4EJS
        subject_person_id: p_4kvJ86QQSjr1B343YbNCZP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9Odbs6LODH3cg8-3O7HTJ
          claim_id: c_kNylusrRmJ5BOOdGWk4EJS
          source_id: s_60_zIxBDL5-OHUbugcndgj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60_zIxBDL5-OHUbugcndgj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 290157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json
            external_identifier: CBDB:290157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
        merged_into_person_id: null
---

# 王鉦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉦 | accepted |
| bio.summary | 王鉦，明人物。嘉靖八年進士，籍贯灤州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 290157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGs45wBLrz1PrQ7nJg3Ni8 | 王璋 | accepted |
| other | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉦（CBDB 290157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json)
