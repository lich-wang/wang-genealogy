---
schema: wang-person/v1
id: p_4CM9PFtB9zaaXfbieTkHu6
status: active
merged_into: null
display_name: 王珠耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T8955EJU7R5foJMhmo7ZBw
        subject_person_id: p_4CM9PFtB9zaaXfbieTkHu6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N6CymQhgt69Auc78VB717B
          claim_id: c_T8955EJU7R5foJMhmo7ZBw
          source_id: s_BPwNJrGECj96sWufP3FMZQ
          stance: supports
          locator: CBDB:639399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639399）
          source: &a1
            id: s_BPwNJrGECj96sWufP3FMZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珠耀（CBDB 639399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639399&o=json
            external_identifier: CBDB:639399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BHHJTozZvdBrMTgboE8uGR
        subject_person_id: p_4CM9PFtB9zaaXfbieTkHu6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠耀，清人物。籍贯濟陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rI0l5jGh8D1FwCd4Nax5lb
          claim_id: c_BHHJTozZvdBrMTgboE8uGR
          source_id: s_BPwNJrGECj96sWufP3FMZQ
          stance: supports
          locator: CBDB:639399
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

# 王珠耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珠耀 | accepted |
| bio.summary | 王珠耀，清人物。籍贯濟陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珠耀（CBDB 639399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639399&o=json)
