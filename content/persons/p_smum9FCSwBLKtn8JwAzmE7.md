---
schema: wang-person/v1
id: p_smum9FCSwBLKtn8JwAzmE7
status: active
merged_into: null
display_name: 王思注
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6pqKvefhcTmte5KsYQPSne
        subject_person_id: p_smum9FCSwBLKtn8JwAzmE7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JB7Jn5sq6nYycaSYvNEuME
          claim_id: c_6pqKvefhcTmte5KsYQPSne
          source_id: s_wzSKoJ4MnX778mL1sbAVVh
          stance: supports
          locator: CBDB:637803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637803）
          source: &a1
            id: s_wzSKoJ4MnX778mL1sbAVVh
            source_type: api_record
            title: 中国历代人物传记资料库：王思注（CBDB 637803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637803&o=json
            external_identifier: CBDB:637803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fvg1TFXKwEyAeQ13r9w6hV
        subject_person_id: p_smum9FCSwBLKtn8JwAzmE7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思注，清人物。籍贯婺源，曾任內閣中書。（中国历代人物传记资料库 CBDB 637803）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iMTi5z0Hyr4-0Hljb2FjMw
          claim_id: c_fvg1TFXKwEyAeQ13r9w6hV
          source_id: s_wzSKoJ4MnX778mL1sbAVVh
          stance: supports
          locator: CBDB:637803
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

# 王思注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思注 | accepted |
| bio.summary | 王思注，清人物。籍贯婺源，曾任內閣中書。（中国历代人物传记资料库 CBDB 637803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思注（CBDB 637803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637803&o=json)
