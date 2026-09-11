---
schema: wang-person/v1
id: p_HjCETvL1Gd7LwHzn5MSNtG
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ULpDdFmgkE7WHLaR1MZJe
        subject_person_id: p_HjCETvL1Gd7LwHzn5MSNtG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cpLwVtxuEb7t7vHxxSTo79
          claim_id: c_5ULpDdFmgkE7WHLaR1MZJe
          source_id: s_6UtKNUyFV6AJ3GqkBRBAT8
          stance: supports
          locator: CBDB:504563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504563）
          source: &a1
            id: s_6UtKNUyFV6AJ3GqkBRBAT8
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 504563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504563&o=json
            external_identifier: CBDB:504563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cdt4gFkJVbqrCEHdBVVF9Y
        subject_person_id: p_HjCETvL1Gd7LwHzn5MSNtG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。入仕考上會試/貢士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 504563）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_21947ePeVwqtOLL1QY-n_7
          claim_id: c_cdt4gFkJVbqrCEHdBVVF9Y
          source_id: s_6UtKNUyFV6AJ3GqkBRBAT8
          stance: supports
          locator: CBDB:504563
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，明人物。入仕考上會試/貢士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 504563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 504563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504563&o=json)
