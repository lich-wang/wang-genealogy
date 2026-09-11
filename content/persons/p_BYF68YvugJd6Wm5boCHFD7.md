---
schema: wang-person/v1
id: p_BYF68YvugJd6Wm5boCHFD7
status: active
merged_into: null
display_name: 王渭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Ayox1KumfQv6sJ8FqpMoX
        subject_person_id: p_BYF68YvugJd6Wm5boCHFD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pbonscZXEH3CUKZc35uaE8
          claim_id: c_5Ayox1KumfQv6sJ8FqpMoX
          source_id: s_uaskcD2tHWaRAPw6HqNugk
          stance: supports
          locator: CBDB:685727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685727）
          source: &a1
            id: s_uaskcD2tHWaRAPw6HqNugk
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 685727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685727&o=json
            external_identifier: CBDB:685727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1C9Ah6ehdrco5hpfyynMpL
        subject_person_id: p_BYF68YvugJd6Wm5boCHFD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 685727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cy9A7RLZ9kqOLi7vJuJIJ5
          claim_id: c_1C9Ah6ehdrco5hpfyynMpL
          source_id: s_uaskcD2tHWaRAPw6HqNugk
          stance: supports
          locator: CBDB:685727
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

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| bio.summary | 王渭，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 685727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 685727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685727&o=json)
