---
schema: wang-person/v1
id: p_JQ7AfU2zMtAe7o8sTX2B5m
status: active
merged_into: null
display_name: 王有齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c5a4TnBhYEw6eXM8nEn5hJ
        subject_person_id: p_JQ7AfU2zMtAe7o8sTX2B5m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aH3TbbJoDiouhQPZyjPWQt
          claim_id: c_c5a4TnBhYEw6eXM8nEn5hJ
          source_id: s_KtpAeE7Nvn5K66TqtZhVHK
          stance: supports
          locator: CBDB:638606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638606）
          source: &a1
            id: s_KtpAeE7Nvn5K66TqtZhVHK
            source_type: api_record
            title: 中国历代人物传记资料库：王有齢（CBDB 638606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638606&o=json
            external_identifier: CBDB:638606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SBj4jeH88YBjAbTYCCNXr8
        subject_person_id: p_JQ7AfU2zMtAe7o8sTX2B5m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有齢，清人物。籍贯閩縣，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gSBks8l-yKNmcAbitDcSRm
          claim_id: c_SBj4jeH88YBjAbTYCCNXr8
          source_id: s_KtpAeE7Nvn5K66TqtZhVHK
          stance: supports
          locator: CBDB:638606
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

# 王有齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有齢 | accepted |
| bio.summary | 王有齢，清人物。籍贯閩縣，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有齢（CBDB 638606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638606&o=json)
