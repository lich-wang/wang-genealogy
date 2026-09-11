---
schema: wang-person/v1
id: p_tQ6nzH2FsCGBPchTs3gMft
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oNVX2LGJjr3EbsoECRAFEN
        subject_person_id: p_tQ6nzH2FsCGBPchTs3gMft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8kqJ9gk4Qq4dp1QL8EWh95
          claim_id: c_oNVX2LGJjr3EbsoECRAFEN
          source_id: s_4bWbPCbwZjCPBKFeM3PUJ3
          stance: supports
          locator: CBDB:216218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216218）
          source: &a1
            id: s_4bWbPCbwZjCPBKFeM3PUJ3
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 216218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json
            external_identifier: CBDB:216218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FGxtTP9EWHUMKmCpWUdAMv
        subject_person_id: p_tQ6nzH2FsCGBPchTs3gMft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216218）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5HCdiTprAesP1PqhyJqrY3
          claim_id: c_FGxtTP9EWHUMKmCpWUdAMv
          source_id: s_4bWbPCbwZjCPBKFeM3PUJ3
          stance: supports
          locator: CBDB:216218
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 216218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json)
