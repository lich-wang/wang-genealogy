---
schema: wang-person/v1
id: p_3uwmBW4MTB2fzDkSD6daLh
status: active
merged_into: null
display_name: 王淑凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ss5oEuEmUwzrBSWBvPuK38
        subject_person_id: p_3uwmBW4MTB2fzDkSD6daLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3VMX4CcYY8s4UdLutp7zrj
          claim_id: c_ss5oEuEmUwzrBSWBvPuK38
          source_id: s_JUQtYodQopCkTSHaUSiazU
          stance: supports
          locator: CBDB:701902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701902）
          source: &a1
            id: s_JUQtYodQopCkTSHaUSiazU
            source_type: api_record
            title: 中国历代人物传记资料库：王淑凱（CBDB 701902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701902&o=json
            external_identifier: CBDB:701902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9H3ELj5SoBF675vLSNHFG
        subject_person_id: p_3uwmBW4MTB2fzDkSD6daLh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑凱，清人物。籍贯平陰，身份为鄉里長者、為善鄉里。（中国历代人物传记资料库 CBDB 701902）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cSAWItLfPbhggOls50K0eg
          claim_id: c_j9H3ELj5SoBF675vLSNHFG
          source_id: s_JUQtYodQopCkTSHaUSiazU
          stance: supports
          locator: CBDB:701902
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

# 王淑凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑凱 | accepted |
| bio.summary | 王淑凱，清人物。籍贯平陰，身份为鄉里長者、為善鄉里。（中国历代人物传记资料库 CBDB 701902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑凱（CBDB 701902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701902&o=json)
