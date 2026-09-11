---
schema: wang-person/v1
id: p_AA7JHmEQLikw2Y7Zpw2XJY
status: active
merged_into: null
display_name: 王思文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dj5r3yMNT66MkQ2JDBVR9a
        subject_person_id: p_AA7JHmEQLikw2Y7Zpw2XJY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dQdEgDfvqGeFd2sEzH1wCR
          claim_id: c_dj5r3yMNT66MkQ2JDBVR9a
          source_id: s_jEanaQhpNTwMK2TmW4N5qk
          stance: supports
          locator: CBDB:637799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637799）
          source: &a1
            id: s_jEanaQhpNTwMK2TmW4N5qk
            source_type: api_record
            title: 中国历代人物传记资料库：王思文（CBDB 637799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637799&o=json
            external_identifier: CBDB:637799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DRDD1BFRLKA5y7CKQeg3aJ
        subject_person_id: p_AA7JHmEQLikw2Y7Zpw2XJY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思文，清人物。籍贯蘭山，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 637799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dwLMzwDGM1l2Xj_eUPKSQF
          claim_id: c_DRDD1BFRLKA5y7CKQeg3aJ
          source_id: s_jEanaQhpNTwMK2TmW4N5qk
          stance: supports
          locator: CBDB:637799
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

# 王思文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思文 | accepted |
| bio.summary | 王思文，清人物。籍贯蘭山，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 637799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思文（CBDB 637799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637799&o=json)
