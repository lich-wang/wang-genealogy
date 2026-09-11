---
schema: wang-person/v1
id: p_ZG8MN1yqUpJDC9RLyNPhDm
status: active
merged_into: null
display_name: 王嘉福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_geuE7p5SUuUTnJG2cSCRUQ
        subject_person_id: p_ZG8MN1yqUpJDC9RLyNPhDm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QZCJPX6NbLHkGnMsmMmisy
          claim_id: c_geuE7p5SUuUTnJG2cSCRUQ
          source_id: s_B4yAoy1YPizQYcyj6Zuq8o
          stance: supports
          locator: CBDB:700270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700270）
          source: &a1
            id: s_B4yAoy1YPizQYcyj6Zuq8o
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉福（CBDB 700270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700270&o=json
            external_identifier: CBDB:700270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4zW69JyWHyHJ7RJcFMgz3
        subject_person_id: p_ZG8MN1yqUpJDC9RLyNPhDm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉福，清人物。籍贯長洲，入仕恩蔭、蔭補，曾任雲騎尉。（中国历代人物传记资料库 CBDB 700270）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RT2d_jMRtCZfAalsUcRapw
          claim_id: c_b4zW69JyWHyHJ7RJcFMgz3
          source_id: s_B4yAoy1YPizQYcyj6Zuq8o
          stance: supports
          locator: CBDB:700270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__X6qeFrS3cTNL1swQub7aw
        subject_person_id: p_aArAr57FPkptmzRHrW1Kma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZG8MN1yqUpJDC9RLyNPhDm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvyqeFxqwRL9dheh1oAvcK
          claim_id: c__X6qeFrS3cTNL1swQub7aw
          source_id: s_B4yAoy1YPizQYcyj6Zuq8o
          stance: supports
          locator: 吳門補乘，lgid=177452：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aArAr57FPkptmzRHrW1Kma
        status: active
        display_name: 王翼孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉福 | accepted |
| bio.summary | 王嘉福，清人物。籍贯長洲，入仕恩蔭、蔭補，曾任雲騎尉。（中国历代人物传记资料库 CBDB 700270） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aArAr57FPkptmzRHrW1Kma | 王翼孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉福（CBDB 700270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700270&o=json)
