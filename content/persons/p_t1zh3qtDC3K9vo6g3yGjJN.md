---
schema: wang-person/v1
id: p_t1zh3qtDC3K9vo6g3yGjJN
status: active
merged_into: null
display_name: 王志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cWE5L87ZmdEeUkaTjccntD
        subject_person_id: p_t1zh3qtDC3K9vo6g3yGjJN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8EG2cyeJA4Z6558WsPBwWZ
          claim_id: c_cWE5L87ZmdEeUkaTjccntD
          source_id: s_zWPxP4cANsun5jAhhvnviM
          stance: supports
          locator: CBDB:497248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497248）
          source: &a1
            id: s_zWPxP4cANsun5jAhhvnviM
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 497248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497248&o=json
            external_identifier: CBDB:497248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mtfa4iwYopTLDJ19Cg91R7
        subject_person_id: p_t1zh3qtDC3K9vo6g3yGjJN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，史料所见人物。本项目依据《中国历代人物传记资料库：王志（CBDB 497248）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2nVkeoTg31zoFD8hDrI-Xd
          claim_id: c_mtfa4iwYopTLDJ19Cg91R7
          source_id: s_zWPxP4cANsun5jAhhvnviM
          stance: supports
          locator: CBDB:497248
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，史料所见人物。本项目依据《中国历代人物传记资料库：王志（CBDB 497248）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 497248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497248&o=json)
