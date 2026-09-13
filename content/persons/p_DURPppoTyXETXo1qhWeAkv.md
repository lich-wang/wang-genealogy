---
schema: wang-person/v1
id: p_DURPppoTyXETXo1qhWeAkv
status: active
merged_into: null
display_name: 王士芳
cbdb_id: 71317
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKNdQ63PbDTE8q3eQyss2N
        subject_person_id: p_DURPppoTyXETXo1qhWeAkv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士芳（生于1659年），清人物。籍贯臨海。（中国历代人物传记资料库 CBDB 71317）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Csxhq6Ou2zX7abuuS8WzlN
          claim_id: c_uKNdQ63PbDTE8q3eQyss2N
          source_id: s_598GpqfBspeDozCzb7PaVg
          stance: supports
          locator: CBDB:71317
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_598GpqfBspeDozCzb7PaVg
            source_type: api_record
            title: 中国历代人物传记资料库：王士芳（CBDB 71317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71317&o=json
            external_identifier: CBDB:71317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nc9s4qnpoHDWDT5a26qw7M
        subject_person_id: p_DURPppoTyXETXo1qhWeAkv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1659年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1659-01-01
            latest: 1659-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nj4D82Kyu9kAED2EhDt1X8
          claim_id: c_nc9s4qnpoHDWDT5a26qw7M
          source_id: s_598GpqfBspeDozCzb7PaVg
          stance: supports
          locator: CBDB:71317
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1659
          source:
            id: s_598GpqfBspeDozCzb7PaVg
            source_type: api_record
            title: 中国历代人物传记资料库：王士芳（CBDB 71317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71317&o=json
            external_identifier: CBDB:71317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EKehbfXQ3DCsSCZiM9eRMD
        subject_person_id: p_DURPppoTyXETXo1qhWeAkv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dkbrsFpCVMVzSAgdBUYtJB
          claim_id: c_EKehbfXQ3DCsSCZiM9eRMD
          source_id: s_598GpqfBspeDozCzb7PaVg
          stance: supports
          locator: CBDB:71317
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1659
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

# 王士芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士芳（生于1659年），清人物。籍贯臨海。（中国历代人物传记资料库 CBDB 71317） | accepted |
| birth.date | 1659年 | accepted |
| name.primary | 王士芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士芳（CBDB 71317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71317&o=json)
