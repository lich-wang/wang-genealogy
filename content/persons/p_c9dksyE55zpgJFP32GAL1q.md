---
schema: wang-person/v1
id: p_c9dksyE55zpgJFP32GAL1q
status: active
merged_into: null
display_name: 王涉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uWX89vJEnWgPk6RCZ2zM7T
        subject_person_id: p_c9dksyE55zpgJFP32GAL1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAdssMptePPF3ss6PfLuGg
          claim_id: c_uWX89vJEnWgPk6RCZ2zM7T
          source_id: s_mKt5Dfmsas5mLCdkUiSAj7
          stance: supports
          locator: CBDB:379265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379265）
          source: &a1
            id: s_mKt5Dfmsas5mLCdkUiSAj7
            source_type: api_record
            title: 中国历代人物传记资料库：王涉（CBDB 379265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379265&o=json
            external_identifier: CBDB:379265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pQDHwK5GuMjibDu73b5ssi
        subject_person_id: p_c9dksyE55zpgJFP32GAL1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涉，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379265）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kkgJlW-mL11T27nnr0Xr_S
          claim_id: c_pQDHwK5GuMjibDu73b5ssi
          source_id: s_mKt5Dfmsas5mLCdkUiSAj7
          stance: supports
          locator: CBDB:379265
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

# 王涉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涉 | accepted |
| bio.summary | 王涉，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379265） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王涉（CBDB 379265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379265&o=json)
