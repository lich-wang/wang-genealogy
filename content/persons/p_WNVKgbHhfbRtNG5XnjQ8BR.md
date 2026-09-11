---
schema: wang-person/v1
id: p_WNVKgbHhfbRtNG5XnjQ8BR
status: active
merged_into: null
display_name: 王九萬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E26cHj3Mkz1aeivG8cTDuK
        subject_person_id: p_WNVKgbHhfbRtNG5XnjQ8BR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_adQcJMMGb5KkKsHke1hMDr
          claim_id: c_E26cHj3Mkz1aeivG8cTDuK
          source_id: s_7V8nFtSyLMNGQgkW1KR5KN
          stance: supports
          locator: CBDB:685904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685904）
          source: &a1
            id: s_7V8nFtSyLMNGQgkW1KR5KN
            source_type: api_record
            title: 中国历代人物传记资料库：王九萬（CBDB 685904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685904&o=json
            external_identifier: CBDB:685904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qPJCFNMhonEcTFtoS8qBN8
        subject_person_id: p_WNVKgbHhfbRtNG5XnjQ8BR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九萬，宋人物。籍贯建安，入仕進士。（中国历代人物传记资料库 CBDB 685904）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1u3cGWEnAhi_WOcs68FwA8
          claim_id: c_qPJCFNMhonEcTFtoS8qBN8
          source_id: s_7V8nFtSyLMNGQgkW1KR5KN
          stance: supports
          locator: CBDB:685904
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

# 王九萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九萬 | accepted |
| bio.summary | 王九萬，宋人物。籍贯建安，入仕進士。（中国历代人物传记资料库 CBDB 685904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九萬（CBDB 685904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685904&o=json)
