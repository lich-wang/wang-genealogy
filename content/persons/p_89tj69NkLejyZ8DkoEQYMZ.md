---
schema: wang-person/v1
id: p_89tj69NkLejyZ8DkoEQYMZ
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s9KwDdrfPrWs26M5Dxv556
        subject_person_id: p_89tj69NkLejyZ8DkoEQYMZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5a1wm6X31ysQvMDRc7uFfH
          claim_id: c_s9KwDdrfPrWs26M5Dxv556
          source_id: s_DPT1WJrtgNF3eHELkThS9F
          stance: supports
          locator: CBDB:45789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45789）
          source: &a1
            id: s_DPT1WJrtgNF3eHELkThS9F
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 45789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45789&o=json
            external_identifier: CBDB:45789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J22KZpCV14DKbEAKi25ZjX
        subject_person_id: p_89tj69NkLejyZ8DkoEQYMZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，宋人物。曾任雲麾將軍。（中国历代人物传记资料库 CBDB 45789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yV3q9OOzj9kt9n_50PVh82
          claim_id: c_J22KZpCV14DKbEAKi25ZjX
          source_id: s_DPT1WJrtgNF3eHELkThS9F
          stance: supports
          locator: CBDB:45789
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，宋人物。曾任雲麾將軍。（中国历代人物传记资料库 CBDB 45789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 45789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45789&o=json)
