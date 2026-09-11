---
schema: wang-person/v1
id: p_y7sKs8NfY1d4N9gGVLEhmp
status: active
merged_into: null
display_name: 王橒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sdPTuL3WrkcZdRV154Bh3m
        subject_person_id: p_y7sKs8NfY1d4N9gGVLEhmp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ag6Mr1QZMChU1nPQYVuWMM
          claim_id: c_sdPTuL3WrkcZdRV154Bh3m
          source_id: s_YvydCauLgMsA2CaHAZHG16
          stance: supports
          locator: CBDB:453669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453669）
          source: &a1
            id: s_YvydCauLgMsA2CaHAZHG16
            source_type: api_record
            title: 中国历代人物传记资料库：王橒（CBDB 453669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453669&o=json
            external_identifier: CBDB:453669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b1tjRSnCmBSmC551LQjp1N
        subject_person_id: p_y7sKs8NfY1d4N9gGVLEhmp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橒，清人物。曾任典史。（中国历代人物传记资料库 CBDB 453669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtHGZeOa2U47LGdIulgUcr
          claim_id: c_b1tjRSnCmBSmC551LQjp1N
          source_id: s_YvydCauLgMsA2CaHAZHG16
          stance: supports
          locator: CBDB:453669
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

# 王橒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橒 | accepted |
| bio.summary | 王橒，清人物。曾任典史。（中国历代人物传记资料库 CBDB 453669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王橒（CBDB 453669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453669&o=json)
