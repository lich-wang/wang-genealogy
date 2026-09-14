---
schema: wang-person/v1
id: p_xcVALxfeL7MZt3RyAGBgVa
status: active
merged_into: null
display_name: 王志仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4PWt8UiMvveGWnjG4tNLh9
        subject_person_id: p_xcVALxfeL7MZt3RyAGBgVa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EEpDfy4fn1QsPKvcb9BAVL
          claim_id: c_4PWt8UiMvveGWnjG4tNLh9
          source_id: s_4KZPZxVD1VMEaJzcsL6Wwt
          stance: supports
          locator: CBDB:221778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221778）
          source: &a1
            id: s_4KZPZxVD1VMEaJzcsL6Wwt
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 221778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json
            external_identifier: CBDB:221778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vZSe1WKe8FPWcSVHNrrfnx
        subject_person_id: p_xcVALxfeL7MZt3RyAGBgVa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志仁，明人物。萬曆八年進士，籍贯滄州，曾任大使。（中国历代人物传记资料库 CBDB 221778）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4LOKVwGoL6FUy3FNDG54gw
          claim_id: c_vZSe1WKe8FPWcSVHNrrfnx
          source_id: s_4KZPZxVD1VMEaJzcsL6Wwt
          stance: supports
          locator: CBDB:221778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g-lpXcaM3nPoWNbLV_MRP4
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xcVALxfeL7MZt3RyAGBgVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_As1MXESEqgewVJD7YAdQem
          claim_id: c_g-lpXcaM3nPoWNbLV_MRP4
          source_id: s_tocNDNFo5IFWgILwoCVm6Y
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王志仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王志仁 之父／母。
          source:
            id: s_tocNDNFo5IFWgILwoCVm6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 221778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json
            external_identifier: CBDB:221778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6o2MBBH4Jq7FvHl1mTSFkl
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xcVALxfeL7MZt3RyAGBgVa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hg4AOw4QtqFf2vpl_dw-EM
          claim_id: c_6o2MBBH4Jq7FvHl1mTSFkl
          source_id: s_tocNDNFo5IFWgILwoCVm6Y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tocNDNFo5IFWgILwoCVm6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 221778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json
            external_identifier: CBDB:221778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王志仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志仁 | accepted |
| bio.summary | 王志仁，明人物。萬曆八年進士，籍贯滄州，曾任大使。（中国历代人物传记资料库 CBDB 221778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志仁（CBDB 221778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221778&o=json)
