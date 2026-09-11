---
schema: wang-person/v1
id: p_XtFYorMCVV5UXZwZC8UBC9
status: active
merged_into: null
display_name: 王存
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mN6Z7VXYhYnT1rLmSCS96C
        subject_person_id: p_XtFYorMCVV5UXZwZC8UBC9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y6iUNr9G91199N8RApWKF8
          claim_id: c_mN6Z7VXYhYnT1rLmSCS96C
          source_id: s_C9vNMgVgRTM2M1PTj57Y6h
          stance: supports
          locator: CBDB:97853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97853）
          source: &a1
            id: s_C9vNMgVgRTM2M1PTj57Y6h
            source_type: api_record
            title: 中国历代人物传记资料库：王存（CBDB 97853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97853&o=json
            external_identifier: CBDB:97853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ijzVb6EDhTtStRQze7wy1h
        subject_person_id: p_XtFYorMCVV5UXZwZC8UBC9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存，宋人物。曾任刺史、武功大夫。（中国历代人物传记资料库 CBDB 97853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u92cBFbbLg1rQkhJxAIrtb
          claim_id: c_ijzVb6EDhTtStRQze7wy1h
          source_id: s_C9vNMgVgRTM2M1PTj57Y6h
          stance: supports
          locator: CBDB:97853
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

# 王存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存 | accepted |
| bio.summary | 王存，宋人物。曾任刺史、武功大夫。（中国历代人物传记资料库 CBDB 97853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存（CBDB 97853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97853&o=json)
