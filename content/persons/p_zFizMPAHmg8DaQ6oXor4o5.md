---
schema: wang-person/v1
id: p_zFizMPAHmg8DaQ6oXor4o5
status: active
merged_into: null
display_name: 王浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3YnSDC6yDiBdoiJSVZNFFw
        subject_person_id: p_zFizMPAHmg8DaQ6oXor4o5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vKATprx82G4xK93aMVcX7T
          claim_id: c_3YnSDC6yDiBdoiJSVZNFFw
          source_id: s_a2dXoC1EprVz7hg1jLkgka
          stance: supports
          locator: CBDB:491307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491307）
          source: &a1
            id: s_a2dXoC1EprVz7hg1jLkgka
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 491307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491307&o=json
            external_identifier: CBDB:491307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6EZ1aBkbt5Yx8qKoDFdRYt
        subject_person_id: p_zFizMPAHmg8DaQ6oXor4o5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。曾任典史。（中国历代人物传记资料库 CBDB 491307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ymvyVOXVu8AN8P1hYHebBg
          claim_id: c_6EZ1aBkbt5Yx8qKoDFdRYt
          source_id: s_a2dXoC1EprVz7hg1jLkgka
          stance: supports
          locator: CBDB:491307
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

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | 王浩，明人物。曾任典史。（中国历代人物传记资料库 CBDB 491307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 491307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491307&o=json)
