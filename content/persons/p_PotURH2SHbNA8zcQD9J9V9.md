---
schema: wang-person/v1
id: p_PotURH2SHbNA8zcQD9J9V9
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sVMEPp134SuDqt74tT4eXV
        subject_person_id: p_PotURH2SHbNA8zcQD9J9V9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iieKjHTVZG7FgXhTXmzn3k
          claim_id: c_sVMEPp134SuDqt74tT4eXV
          source_id: s_mxThm4CnmjktBqTnAZBdRz
          stance: supports
          locator: CBDB:327259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327259）
          source: &a1
            id: s_mxThm4CnmjktBqTnAZBdRz
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 327259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json
            external_identifier: CBDB:327259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pgf5GiCVBqoaNB1QFGCT9d
        subject_person_id: p_PotURH2SHbNA8zcQD9J9V9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖四十一年進士，籍贯南昌。（中国历代人物传记资料库 CBDB 327259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p3fTv1EM05l0kI0ypkc39K
          claim_id: c_pgf5GiCVBqoaNB1QFGCT9d
          source_id: s_mxThm4CnmjktBqTnAZBdRz
          stance: supports
          locator: CBDB:327259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gnw8esSeEzm6z8Zi9UXRrp
        subject_person_id: p_7XpW6Mhs2mSCn7hHeLnWwf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PotURH2SHbNA8zcQD9J9V9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_eq71pRwzVD_S3C5CB9ph
          claim_id: c_Gnw8esSeEzm6z8Zi9UXRrp
          source_id: s_wm0DTgle_jVxb2I4F0XtnY
          stance: supports
          locator: CBDB：兄弟 王楨（205021）之父／母 王秉新
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王楨 为同胞（CBDB 记「弟」），王楨 之父／母即 王相 之父／母。
          source:
            id: s_wm0DTgle_jVxb2I4F0XtnY
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 327259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json
            external_identifier: CBDB:327259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7XpW6Mhs2mSCn7hHeLnWwf
        status: active
        display_name: 王秉新
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4MfBie5FFFMEiIUJFG_zT7
        subject_person_id: p_PotURH2SHbNA8zcQD9J9V9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tdH923W47W8dKqdDiYNAZ8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XtqgGIhxLn3JWEvr9CgG9U
          claim_id: c_4MfBie5FFFMEiIUJFG_zT7
          source_id: s_wm0DTgle_jVxb2I4F0XtnY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205021 王楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wm0DTgle_jVxb2I4F0XtnY
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 327259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json
            external_identifier: CBDB:327259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tdH923W47W8dKqdDiYNAZ8
        status: active
        display_name: 王楨
        merged_into_person_id: null
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖四十一年進士，籍贯南昌。（中国历代人物传记资料库 CBDB 327259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7XpW6Mhs2mSCn7hHeLnWwf | 王秉新 | accepted |
| other | p_tdH923W47W8dKqdDiYNAZ8 | 王楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 327259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327259&o=json)
