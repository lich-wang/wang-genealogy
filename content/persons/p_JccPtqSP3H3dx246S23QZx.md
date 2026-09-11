---
schema: wang-person/v1
id: p_JccPtqSP3H3dx246S23QZx
status: active
merged_into: null
display_name: 王祚鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FmPt3Jcn2M542g8Gd57jSE
        subject_person_id: p_JccPtqSP3H3dx246S23QZx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kndSmACgMkXfiSogKULsjA
          claim_id: c_FmPt3Jcn2M542g8Gd57jSE
          source_id: s_syJyeTrAiJNtdfkb4PUUdg
          stance: supports
          locator: CBDB:701263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701263）
          source: &a1
            id: s_syJyeTrAiJNtdfkb4PUUdg
            source_type: api_record
            title: 中国历代人物传记资料库：王祚鼎（CBDB 701263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701263&o=json
            external_identifier: CBDB:701263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B1RjEg2geeKPJFagrc5XuL
        subject_person_id: p_JccPtqSP3H3dx246S23QZx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚鼎，明人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 701263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6zE9O_cMj3S1AJmkjgHZz1
          claim_id: c_B1RjEg2geeKPJFagrc5XuL
          source_id: s_syJyeTrAiJNtdfkb4PUUdg
          stance: supports
          locator: CBDB:701263
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

# 王祚鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚鼎 | accepted |
| bio.summary | 王祚鼎，明人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 701263） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚鼎（CBDB 701263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701263&o=json)
