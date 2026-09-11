---
schema: wang-person/v1
id: p_vCsFGpFb4d3cpoo72CgKMh
status: active
merged_into: null
display_name: 王錚鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f3qRehnmnRCZTkw6ceJezy
        subject_person_id: p_vCsFGpFb4d3cpoo72CgKMh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dceHdLAyDzBHrMWpRoj8a1
          claim_id: c_f3qRehnmnRCZTkw6ceJezy
          source_id: s_AMg2bFjSJtf1Qbs3A2BAQC
          stance: supports
          locator: CBDB:640573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640573）
          source: &a1
            id: s_AMg2bFjSJtf1Qbs3A2BAQC
            source_type: api_record
            title: 中国历代人物传记资料库：王錚鳴（CBDB 640573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640573&o=json
            external_identifier: CBDB:640573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYF3BzYVUm6RjPkbdo4HCD
        subject_person_id: p_vCsFGpFb4d3cpoo72CgKMh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚鳴，清人物。籍贯彰德府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_URupQbrqiSYVxDFV9g7D9a
          claim_id: c_ZYF3BzYVUm6RjPkbdo4HCD
          source_id: s_AMg2bFjSJtf1Qbs3A2BAQC
          stance: supports
          locator: CBDB:640573
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

# 王錚鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錚鳴 | accepted |
| bio.summary | 王錚鳴，清人物。籍贯彰德府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錚鳴（CBDB 640573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640573&o=json)
