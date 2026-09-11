---
schema: wang-person/v1
id: p_Sn4xnYEbPLHDVKCddkrfoy
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LfLD1EwK78FMaCs8cq9fwX
        subject_person_id: p_Sn4xnYEbPLHDVKCddkrfoy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fRvZ7Xk5LkBuQktDJazY7m
          claim_id: c_LfLD1EwK78FMaCs8cq9fwX
          source_id: s_XDuJtmXbat1ciPAtpsA6ao
          stance: supports
          locator: CBDB:60912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60912）
          source: &a1
            id: s_XDuJtmXbat1ciPAtpsA6ao
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 60912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60912&o=json
            external_identifier: CBDB:60912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ru6viAHyvmHMv1GwdKJJ2A
        subject_person_id: p_Sn4xnYEbPLHDVKCddkrfoy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，清人物。籍贯廣東省，入仕武舉進士，曾任城守右營守備。（中国历代人物传记资料库 CBDB 60912）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OIu544aFwkTorQuVl6oKSf
          claim_id: c_Ru6viAHyvmHMv1GwdKJJ2A
          source_id: s_XDuJtmXbat1ciPAtpsA6ao
          stance: supports
          locator: CBDB:60912
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，清人物。籍贯廣東省，入仕武舉進士，曾任城守右營守備。（中国历代人物传记资料库 CBDB 60912） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 60912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60912&o=json)
