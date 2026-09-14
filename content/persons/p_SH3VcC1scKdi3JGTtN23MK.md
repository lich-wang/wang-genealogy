---
schema: wang-person/v1
id: p_SH3VcC1scKdi3JGTtN23MK
status: active
merged_into: null
display_name: 王綺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBMRXLA5kmaczBgUCiTGkg
        subject_person_id: p_SH3VcC1scKdi3JGTtN23MK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BRUW7jJFTSu62z3EcV7aod
          claim_id: c_KBMRXLA5kmaczBgUCiTGkg
          source_id: s_XCcsEztYsQkC5oosmQYtG2
          stance: supports
          locator: CBDB:264721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264721）
          source: &a1
            id: s_XCcsEztYsQkC5oosmQYtG2
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 264721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json
            external_identifier: CBDB:264721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RdMxB6qkBgufQiGJ65UBzD
        subject_person_id: p_SH3VcC1scKdi3JGTtN23MK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264721）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mRiXUy9RbnFL3WZ82RYrjQ
          claim_id: c_RdMxB6qkBgufQiGJ65UBzD
          source_id: s_XCcsEztYsQkC5oosmQYtG2
          stance: supports
          locator: CBDB:264721
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r0hA2NJXrimynkagLT3Jb_
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SH3VcC1scKdi3JGTtN23MK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGSls2wjcBKDxf1U3OHWG5
          claim_id: c_r0hA2NJXrimynkagLT3Jb_
          source_id: s_JNghk0hFJo8jHPCf3bl28B
          stance: supports
          locator: CBDB：兄弟 王純（126658）之父／母 王琯
          quotation: null
          interpretation_note: 由兄弟关系推断：王綺 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王綺 之父／母。
          source:
            id: s_JNghk0hFJo8jHPCf3bl28B
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 264721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json
            external_identifier: CBDB:264721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uDFyS67KkM247fUDTDP1d8
        status: active
        display_name: 王琯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1K-m8u8D34HeK4aF7rrSq0
        subject_person_id: p_SH3VcC1scKdi3JGTtN23MK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFtFdlV26-IkxzbS5jtHWm
          claim_id: c_1K-m8u8D34HeK4aF7rrSq0
          source_id: s_JNghk0hFJo8jHPCf3bl28B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126658 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JNghk0hFJo8jHPCf3bl28B
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 264721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json
            external_identifier: CBDB:264721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yt7BTSHcHKsWozExAQWe78
        status: active
        display_name: 王純
        merged_into_person_id: null
---

# 王綺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綺 | accepted |
| bio.summary | 王綺，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uDFyS67KkM247fUDTDP1d8 | 王琯 | accepted |
| other | p_yt7BTSHcHKsWozExAQWe78 | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綺（CBDB 264721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json)
