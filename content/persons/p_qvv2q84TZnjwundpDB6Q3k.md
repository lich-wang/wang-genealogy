---
schema: wang-person/v1
id: p_qvv2q84TZnjwundpDB6Q3k
status: active
merged_into: null
display_name: 王履坦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4SFSvt69VcjH5Lzm3qE1j
        subject_person_id: p_qvv2q84TZnjwundpDB6Q3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ngfGAe9XVtEXqe13dmN5hZ
          claim_id: c_Q4SFSvt69VcjH5Lzm3qE1j
          source_id: s_8uQ2fdWMo49mDrTE9QywAJ
          stance: supports
          locator: CBDB:637316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637316）
          source: &a1
            id: s_8uQ2fdWMo49mDrTE9QywAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王履坦（CBDB 637316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637316&o=json
            external_identifier: CBDB:637316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XUah2xfcGpohjCqVRAJZ8Y
        subject_person_id: p_qvv2q84TZnjwundpDB6Q3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王履坦，清人物。籍贯歸德土司，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 637316）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WyEy8u6uSLg9LfPQx5yvNn
          claim_id: c_XUah2xfcGpohjCqVRAJZ8Y
          source_id: s_8uQ2fdWMo49mDrTE9QywAJ
          stance: supports
          locator: CBDB:637316
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

# 王履坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履坦 | accepted |
| bio.summary | 王履坦，清人物。籍贯歸德土司，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 637316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履坦（CBDB 637316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637316&o=json)
