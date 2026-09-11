---
schema: wang-person/v1
id: p_dbeHBsi97YAwQZNenQ4CEJ
status: active
merged_into: null
display_name: 王甸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ocP5iCAXQ8cLbfh6zFVWDy
        subject_person_id: p_dbeHBsi97YAwQZNenQ4CEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NMYRtHKU6vHjbbQEPs3MCt
          claim_id: c_ocP5iCAXQ8cLbfh6zFVWDy
          source_id: s_8EiKM2dfpmEac11scUXjvg
          stance: supports
          locator: CBDB:488939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488939）
          source: &a1
            id: s_8EiKM2dfpmEac11scUXjvg
            source_type: api_record
            title: 中国历代人物传记资料库：王甸（CBDB 488939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488939&o=json
            external_identifier: CBDB:488939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FJExMUS81VNnn14VVTbVuZ
        subject_person_id: p_dbeHBsi97YAwQZNenQ4CEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甸，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 488939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tk7Z70gENl0Q5hYPHqLteB
          claim_id: c_FJExMUS81VNnn14VVTbVuZ
          source_id: s_8EiKM2dfpmEac11scUXjvg
          stance: supports
          locator: CBDB:488939
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

# 王甸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甸 | accepted |
| bio.summary | 王甸，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 488939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王甸（CBDB 488939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488939&o=json)
