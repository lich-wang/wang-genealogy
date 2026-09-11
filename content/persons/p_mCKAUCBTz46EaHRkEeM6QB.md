---
schema: wang-person/v1
id: p_mCKAUCBTz46EaHRkEeM6QB
status: active
merged_into: null
display_name: 王兆祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jan85SNkBdK8str2WfWXQ1
        subject_person_id: p_mCKAUCBTz46EaHRkEeM6QB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rEiyE4JnbMPjXByfCks9P4
          claim_id: c_Jan85SNkBdK8str2WfWXQ1
          source_id: s_MNV22zVbBafMY2dv9Fz7Vj
          stance: supports
          locator: CBDB:636214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636214）
          source: &a1
            id: s_MNV22zVbBafMY2dv9Fz7Vj
            source_type: api_record
            title: 中国历代人物传记资料库：王兆祥（CBDB 636214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636214&o=json
            external_identifier: CBDB:636214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WGAcvfwBSeh7dkYw35oMre
        subject_person_id: p_mCKAUCBTz46EaHRkEeM6QB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆祥，清人物。籍贯湘鄉，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 636214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H2J1_K7F2DFEDZZ9i3u9e-
          claim_id: c_WGAcvfwBSeh7dkYw35oMre
          source_id: s_MNV22zVbBafMY2dv9Fz7Vj
          stance: supports
          locator: CBDB:636214
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
  descendants: []
  other: []
---

# 王兆祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆祥 | accepted |
| bio.summary | 王兆祥，清人物。籍贯湘鄉，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 636214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆祥（CBDB 636214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636214&o=json)
