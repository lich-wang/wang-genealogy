---
schema: wang-person/v1
id: p_PjZjP8EDevdHKEtY8FrjQq
status: active
merged_into: null
display_name: 王敏道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5X6L5YrwKVM7iMPhSYfni4
        subject_person_id: p_PjZjP8EDevdHKEtY8FrjQq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BEdR99K3udDRN3e5BtENky
          claim_id: c_5X6L5YrwKVM7iMPhSYfni4
          source_id: s_Se6BHbMs4GxSFynzUscLZ7
          stance: supports
          locator: CBDB:242207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242207）
          source: &a1
            id: s_Se6BHbMs4GxSFynzUscLZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王敏道（CBDB 242207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242207&o=json
            external_identifier: CBDB:242207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FEktF4FsKfHLKM91EzYXuW
        subject_person_id: p_PjZjP8EDevdHKEtY8FrjQq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 242207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_083Nk_Ey00Sn3daIuXXjr0
          claim_id: c_FEktF4FsKfHLKM91EzYXuW
          source_id: s_Se6BHbMs4GxSFynzUscLZ7
          stance: supports
          locator: CBDB:242207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_aEaXfGtnBlr6nXqSs9vzhd
        subject_person_id: p_PjZjP8EDevdHKEtY8FrjQq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_REMFSRLZ54VHUYbuVez2mM
          claim_id: c_aEaXfGtnBlr6nXqSs9vzhd
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bbRqnXQuKPo1U93iT5YxWY
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 199241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json
            external_identifier: CBDB:199241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
  other: []
---

# 王敏道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏道 | accepted |
| bio.summary | 王敏道，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 242207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏道（CBDB 242207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242207&o=json)
- [中国历代人物传记资料库：王義（CBDB 199241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json)
