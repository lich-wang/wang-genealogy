---
schema: wang-person/v1
id: p_UXMFwq1ceYbjxkdybrrguL
status: active
merged_into: null
display_name: 王世鞗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8JHkPy8jzWZJoERzuoiuy
        subject_person_id: p_UXMFwq1ceYbjxkdybrrguL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鞗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_APeFJ6VnhJ2NGLS67h2FVa
          claim_id: c_z8JHkPy8jzWZJoERzuoiuy
          source_id: s_y32ntr6un57ERpR84Yy7LB
          stance: supports
          locator: CBDB:635726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635726）
          source: &a1
            id: s_y32ntr6un57ERpR84Yy7LB
            source_type: api_record
            title: 中国历代人物传记资料库：王世鞗（CBDB 635726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635726&o=json
            external_identifier: CBDB:635726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qnqHoEZuGbnMHG7LEZ2YgM
        subject_person_id: p_UXMFwq1ceYbjxkdybrrguL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鞗，清人物。籍贯觀城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635726）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MxWOApbOPKQ6ELzwn4Muue
          claim_id: c_qnqHoEZuGbnMHG7LEZ2YgM
          source_id: s_y32ntr6un57ERpR84Yy7LB
          stance: supports
          locator: CBDB:635726
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

# 王世鞗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世鞗 | accepted |
| bio.summary | 王世鞗，清人物。籍贯觀城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世鞗（CBDB 635726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635726&o=json)
