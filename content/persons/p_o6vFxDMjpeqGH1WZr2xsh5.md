---
schema: wang-person/v1
id: p_o6vFxDMjpeqGH1WZr2xsh5
status: active
merged_into: null
display_name: 王齊望
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b5FgBShgiG3XYYgHyLXg96
        subject_person_id: p_o6vFxDMjpeqGH1WZr2xsh5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPBCTW2HkNm4Y7cVe7YP1W
          claim_id: c_b5FgBShgiG3XYYgHyLXg96
          source_id: s_AGURC5FxfAVNBJWhmQLKZ3
          stance: supports
          locator: CBDB:383092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383092）
          source: &a1
            id: s_AGURC5FxfAVNBJWhmQLKZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王齊望（CBDB 383092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383092&o=json
            external_identifier: CBDB:383092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AmSHvDSQYzKAEM3QMjsVtW
        subject_person_id: p_o6vFxDMjpeqGH1WZr2xsh5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊望，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383092）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HNKkpixumbesGjSrauM6LY
          claim_id: c_AmSHvDSQYzKAEM3QMjsVtW
          source_id: s_AGURC5FxfAVNBJWhmQLKZ3
          stance: supports
          locator: CBDB:383092
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

# 王齊望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊望 | accepted |
| bio.summary | 王齊望，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383092） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊望（CBDB 383092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383092&o=json)
