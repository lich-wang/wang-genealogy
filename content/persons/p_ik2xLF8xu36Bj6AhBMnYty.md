---
schema: wang-person/v1
id: p_ik2xLF8xu36Bj6AhBMnYty
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mpr3HgAXReE4mP9AkpKVwk
        subject_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WD4dg6veD823irwBSfVLfP
          claim_id: c_Mpr3HgAXReE4mP9AkpKVwk
          source_id: s_vp1u3ztJaDZZ5KmzX8oB3K
          stance: supports
          locator: CBDB:12055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12055）
          source: &a1
            id: s_vp1u3ztJaDZZ5KmzX8oB3K
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 12055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json
            external_identifier: CBDB:12055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WjRpAxx5pMMwZrgzTSgrrC
        subject_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任縣令。（中国历代人物传记资料库 CBDB 12055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AGwF10MZUbfdK7tUfuK4FH
          claim_id: c_WjRpAxx5pMMwZrgzTSgrrC
          source_id: s_vp1u3ztJaDZZ5KmzX8oB3K
          stance: supports
          locator: CBDB:12055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WgJeZTOqla6VtzxLaoYGo7
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AoTZMCWVlU1cmJ4Vuizgpn
          claim_id: c_WgJeZTOqla6VtzxLaoYGo7
          source_id: s_hwidjsOxrcsbKglxeMQW43
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_hwidjsOxrcsbKglxeMQW43
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 12055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json
            external_identifier: CBDB:12055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i5579JHLY2cRuS7YHKZJ5T
        status: active
        display_name: 王萬樞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FrEm6kqeMC-HK8IIlMuzmz
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QDDCadTvJV88yy67-_D1Oi
          claim_id: c_FrEm6kqeMC-HK8IIlMuzmz
          source_id: s_hwidjsOxrcsbKglxeMQW43
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12053 王遂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hwidjsOxrcsbKglxeMQW43
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 12055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json
            external_identifier: CBDB:12055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCTkDfQk8qHYiFjuEH45Mr
        status: active
        display_name: 王遂
        merged_into_person_id: null
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任縣令。（中国历代人物传记资料库 CBDB 12055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i5579JHLY2cRuS7YHKZJ5T | 王萬樞 | accepted |
| other | p_DCTkDfQk8qHYiFjuEH45Mr | 王遂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 12055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json)
