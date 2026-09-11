---
schema: wang-person/v1
id: p_UDYSXW1NLQZwunCC6GKALW
status: active
merged_into: null
display_name: 王亨華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VjQ1qrQV29mA9BENpfe57
        subject_person_id: p_UDYSXW1NLQZwunCC6GKALW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_he5dzKGJzpdWGdH8XJZGv7
          claim_id: c_6VjQ1qrQV29mA9BENpfe57
          source_id: s_3tvh8QrQbNym17sipRK1Bb
          stance: supports
          locator: CBDB:635858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635858）
          source: &a1
            id: s_3tvh8QrQbNym17sipRK1Bb
            source_type: api_record
            title: 中国历代人物传记资料库：王亨華（CBDB 635858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635858&o=json
            external_identifier: CBDB:635858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1x3LJXSQ9K5Lv28s1PXz9
        subject_person_id: p_UDYSXW1NLQZwunCC6GKALW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨華，清人物。籍贯兗州府，曾任訓導。（中国历代人物传记资料库 CBDB 635858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5A4BxqaUFrlq2g0ruFyvp
          claim_id: c_c1x3LJXSQ9K5Lv28s1PXz9
          source_id: s_3tvh8QrQbNym17sipRK1Bb
          stance: supports
          locator: CBDB:635858
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

# 王亨華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨華 | accepted |
| bio.summary | 王亨華，清人物。籍贯兗州府，曾任訓導。（中国历代人物传记资料库 CBDB 635858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨華（CBDB 635858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635858&o=json)
