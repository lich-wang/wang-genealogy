---
schema: wang-person/v1
id: p_s8JQ2aHLmAsEZdqLjKUr6U
status: active
merged_into: null
display_name: 王華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Rn7MiDin16SxUffGBGTYH
        subject_person_id: p_s8JQ2aHLmAsEZdqLjKUr6U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U17gE2FZ5GzNXtKL1V6xGs
          claim_id: c_3Rn7MiDin16SxUffGBGTYH
          source_id: s_e2iAGTHREdCy9zAyg7EeGf
          stance: supports
          locator: CBDB:685360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685360）
          source: &a1
            id: s_e2iAGTHREdCy9zAyg7EeGf
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 685360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685360&o=json
            external_identifier: CBDB:685360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ntwbai1fJ1igK4RuZj8fmp
        subject_person_id: p_s8JQ2aHLmAsEZdqLjKUr6U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華，宋人物。籍贯榮州，入仕進士。（中国历代人物传记资料库 CBDB 685360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nj2YzGF2A9V9wXk1VmQCW-
          claim_id: c_Ntwbai1fJ1igK4RuZj8fmp
          source_id: s_e2iAGTHREdCy9zAyg7EeGf
          stance: supports
          locator: CBDB:685360
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

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| bio.summary | 王華，宋人物。籍贯榮州，入仕進士。（中国历代人物传记资料库 CBDB 685360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 685360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685360&o=json)
