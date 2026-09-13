---
schema: wang-person/v1
id: p_YWkQnSn4rASSwAza6mMrBM
status: active
merged_into: null
display_name: 王廷枚
cbdb_id: 71561
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8GpmsNsW56Ffp2E62WYAWV
        subject_person_id: p_YWkQnSn4rASSwAza6mMrBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷枚（生于1680年），清人物。籍贯劍州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 71561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_f3BXq3mTU8GfHTKGhvms3l
          claim_id: c_8GpmsNsW56Ffp2E62WYAWV
          source_id: s_2t92CefkEtHK2fjyGiDr2V
          stance: supports
          locator: CBDB:71561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2t92CefkEtHK2fjyGiDr2V
            source_type: api_record
            title: 中国历代人物传记资料库：王廷枚（CBDB 71561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71561&o=json
            external_identifier: CBDB:71561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_juHBFhN1KwwWJrvbL4nruy
        subject_person_id: p_YWkQnSn4rASSwAza6mMrBM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1680-01-01
            latest: 1680-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KQvfB7Sb8ocANzX7ue7RX8
          claim_id: c_juHBFhN1KwwWJrvbL4nruy
          source_id: s_2t92CefkEtHK2fjyGiDr2V
          stance: supports
          locator: CBDB:71561
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1680
          source:
            id: s_2t92CefkEtHK2fjyGiDr2V
            source_type: api_record
            title: 中国历代人物传记资料库：王廷枚（CBDB 71561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71561&o=json
            external_identifier: CBDB:71561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qhgNuV5M5nZPG1LnXHvDw
        subject_person_id: p_YWkQnSn4rASSwAza6mMrBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷枚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N51ZhoBATPJEtM5KtWP2Um
          claim_id: c_9qhgNuV5M5nZPG1LnXHvDw
          source_id: s_2t92CefkEtHK2fjyGiDr2V
          stance: supports
          locator: CBDB:71561
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1680
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

# 王廷枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷枚（生于1680年），清人物。籍贯劍州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 71561） | accepted |
| birth.date | 1680年 | accepted |
| name.primary | 王廷枚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷枚（CBDB 71561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71561&o=json)
