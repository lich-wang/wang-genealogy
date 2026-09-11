---
schema: wang-person/v1
id: p_45yFDQ8DJZj7uQpBhK93wm
status: active
merged_into: null
display_name: 王展
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1PTuJPHrDqowZ2k3Nj2mwL
        subject_person_id: p_45yFDQ8DJZj7uQpBhK93wm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王展
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_viz2QGHH8443qhEFZ4ue5K
          claim_id: c_1PTuJPHrDqowZ2k3Nj2mwL
          source_id: s_xnA9y2YJEgnQ4cS2u83VME
          stance: supports
          locator: CBDB:382242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382242）
          source: &a1
            id: s_xnA9y2YJEgnQ4cS2u83VME
            source_type: api_record
            title: 中国历代人物传记资料库：王展（CBDB 382242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382242&o=json
            external_identifier: CBDB:382242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94oo9q89ToQwUPFNAF3Mxa
        subject_person_id: p_45yFDQ8DJZj7uQpBhK93wm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王展，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aHMhntdXjLZDbqTHYRkA5D
          claim_id: c_94oo9q89ToQwUPFNAF3Mxa
          source_id: s_xnA9y2YJEgnQ4cS2u83VME
          stance: supports
          locator: CBDB:382242
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

# 王展

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王展 | accepted |
| bio.summary | 王展，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王展（CBDB 382242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382242&o=json)
