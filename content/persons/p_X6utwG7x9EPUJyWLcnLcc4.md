---
schema: wang-person/v1
id: p_X6utwG7x9EPUJyWLcnLcc4
status: active
merged_into: null
display_name: 王埴
cbdb_id: 37930
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gapgnAAJhQAMAK9bNTDkPj
        subject_person_id: p_X6utwG7x9EPUJyWLcnLcc4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埴，宋人物。籍贯永嘉。（中国历代人物传记资料库 CBDB 37930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_568Z9mkDqJ87r-ezxbOtfL
          claim_id: c_gapgnAAJhQAMAK9bNTDkPj
          source_id: s_N9Tvuqs5f68QzYMKXGhe4V
          stance: supports
          locator: CBDB:37930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N9Tvuqs5f68QzYMKXGhe4V
            source_type: api_record
            title: 中国历代人物传记资料库：王埴（CBDB 37930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37930&o=json
            external_identifier: CBDB:37930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1Jx5o1L3Jipu2is156M8D
        subject_person_id: p_X6utwG7x9EPUJyWLcnLcc4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5eHEkJ6NjM5vEETYDmUDZM
          claim_id: c_p1Jx5o1L3Jipu2is156M8D
          source_id: s_N9Tvuqs5f68QzYMKXGhe4V
          stance: supports
          locator: CBDB:37930
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王埴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王埴，宋人物。籍贯永嘉。（中国历代人物传记资料库 CBDB 37930） | accepted |
| name.primary | 王埴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埴（CBDB 37930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37930&o=json)
