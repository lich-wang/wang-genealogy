---
schema: wang-person/v1
id: p_xUbeQiuiSPUBhJQiV887Au
status: active
merged_into: null
display_name: 王高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aj1wPQrz5EPLD3x73SeUku
        subject_person_id: p_xUbeQiuiSPUBhJQiV887Au
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_umB4DeJZbw9XHgTyoGshJN
          claim_id: c_aj1wPQrz5EPLD3x73SeUku
          source_id: s_N3eDdBNgBTWqDyeUZhChEV
          stance: supports
          locator: CBDB:22208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22208）
          source: &a1
            id: s_N3eDdBNgBTWqDyeUZhChEV
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 22208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22208&o=json
            external_identifier: CBDB:22208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nnypWS7FP7AYL72pCS8Cr9
        subject_person_id: p_xUbeQiuiSPUBhJQiV887Au
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，宋人物。籍贯穀城，身份为孝子/孝女、義門。（中国历代人物传记资料库 CBDB 22208）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_70tI9ncrwADgfOluab9KDy
          claim_id: c_nnypWS7FP7AYL72pCS8Cr9
          source_id: s_N3eDdBNgBTWqDyeUZhChEV
          stance: supports
          locator: CBDB:22208
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

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，宋人物。籍贯穀城，身份为孝子/孝女、義門。（中国历代人物传记资料库 CBDB 22208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 22208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22208&o=json)
