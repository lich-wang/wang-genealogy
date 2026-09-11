---
schema: wang-person/v1
id: p_UNANcv5ernz6J5DJ5WXxAE
status: active
merged_into: null
display_name: 王丕績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjvqu4UB6JjVxbajfjFky6
        subject_person_id: p_UNANcv5ernz6J5DJ5WXxAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HbCbFfdLrz6n4G39xLx8Y6
          claim_id: c_hjvqu4UB6JjVxbajfjFky6
          source_id: s_ZbnDYqvaNCVJc4ktMBCBj7
          stance: supports
          locator: CBDB:635660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635660）
          source: &a1
            id: s_ZbnDYqvaNCVJc4ktMBCBj7
            source_type: api_record
            title: 中国历代人物传记资料库：王丕績（CBDB 635660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635660&o=json
            external_identifier: CBDB:635660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5B6dL3PemmAbEwp5ahf39C
        subject_person_id: p_UNANcv5ernz6J5DJ5WXxAE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕績，清人物。籍贯代州直隸州直轄地方，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635660）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_92ogsnNAlkrLUK04pxPthD
          claim_id: c_5B6dL3PemmAbEwp5ahf39C
          source_id: s_ZbnDYqvaNCVJc4ktMBCBj7
          stance: supports
          locator: CBDB:635660
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

# 王丕績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕績 | accepted |
| bio.summary | 王丕績，清人物。籍贯代州直隸州直轄地方，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕績（CBDB 635660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635660&o=json)
