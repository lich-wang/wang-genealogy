---
schema: wang-person/v1
id: p_m5FNq9t84WFT71V8jW2sGf
status: active
merged_into: null
display_name: 王果
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_STLCzBpZs2q5BdQZtikvNV
        subject_person_id: p_m5FNq9t84WFT71V8jW2sGf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDMBmVG6n5YDhzE7Ywt1W6
          claim_id: c_STLCzBpZs2q5BdQZtikvNV
          source_id: s_ALPrHCX7DGagCVwU7BWyLo
          stance: supports
          locator: CBDB:687312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687312）
          source: &a1
            id: s_ALPrHCX7DGagCVwU7BWyLo
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 687312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687312&o=json
            external_identifier: CBDB:687312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5e7SennRAxk1b8765C4Epe
        subject_person_id: p_m5FNq9t84WFT71V8jW2sGf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 687312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MSBDng-hpW7FFXq1j-Khta
          claim_id: c_5e7SennRAxk1b8765C4Epe
          source_id: s_ALPrHCX7DGagCVwU7BWyLo
          stance: supports
          locator: CBDB:687312
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

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | 王果，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 687312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 687312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687312&o=json)
