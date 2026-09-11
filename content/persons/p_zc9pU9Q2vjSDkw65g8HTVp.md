---
schema: wang-person/v1
id: p_zc9pU9Q2vjSDkw65g8HTVp
status: active
merged_into: null
display_name: 王書圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sp8qeTwom75hDx9fU7snRy
        subject_person_id: p_zc9pU9Q2vjSDkw65g8HTVp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8FYT1Vi9XPkqrLJpJHzxFW
          claim_id: c_sp8qeTwom75hDx9fU7snRy
          source_id: s_eu4czgFX5cLt89WSGh7qVG
          stance: supports
          locator: CBDB:638536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638536）
          source: &a1
            id: s_eu4czgFX5cLt89WSGh7qVG
            source_type: api_record
            title: 中国历代人物传记资料库：王書圖（CBDB 638536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638536&o=json
            external_identifier: CBDB:638536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ee9jErfvAMiP6yZHzoHUCy
        subject_person_id: p_zc9pU9Q2vjSDkw65g8HTVp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書圖，清人物。籍贯蕭山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638536）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0XKoGMuRP85oLHUHkHsQ9b
          claim_id: c_ee9jErfvAMiP6yZHzoHUCy
          source_id: s_eu4czgFX5cLt89WSGh7qVG
          stance: supports
          locator: CBDB:638536
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

# 王書圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書圖 | accepted |
| bio.summary | 王書圖，清人物。籍贯蕭山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638536） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書圖（CBDB 638536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638536&o=json)
