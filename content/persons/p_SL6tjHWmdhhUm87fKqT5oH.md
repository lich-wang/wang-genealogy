---
schema: wang-person/v1
id: p_SL6tjHWmdhhUm87fKqT5oH
status: active
merged_into: null
display_name: 王琚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fizPTwy6Vt5MRi7aU9hGt3
        subject_person_id: p_SL6tjHWmdhhUm87fKqT5oH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hjd24FGxsUEbyUaf6fQCG8
          claim_id: c_fizPTwy6Vt5MRi7aU9hGt3
          source_id: s_Evgte1hAJ13y4hcnQqSuBS
          stance: supports
          locator: CBDB:166284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166284）
          source: &a1
            id: s_Evgte1hAJ13y4hcnQqSuBS
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 166284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166284&o=json
            external_identifier: CBDB:166284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T1pLHLiMMcEqs4mkXQsHPc
        subject_person_id: p_SL6tjHWmdhhUm87fKqT5oH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚，唐人物。曾任中書侍郎、州刺史。（中国历代人物传记资料库 CBDB 166284）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LI5emyAYsDeMdT625_HyDu
          claim_id: c_T1pLHLiMMcEqs4mkXQsHPc
          source_id: s_Evgte1hAJ13y4hcnQqSuBS
          stance: supports
          locator: CBDB:166284
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

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| bio.summary | 王琚，唐人物。曾任中書侍郎、州刺史。（中国历代人物传记资料库 CBDB 166284） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 166284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166284&o=json)
