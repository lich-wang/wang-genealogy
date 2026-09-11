---
schema: wang-person/v1
id: p_dsYjPE8mYJsL2nViEyY94A
status: active
merged_into: null
display_name: 王者佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MmUJwnFtjGMLv3zSbtj5t4
        subject_person_id: p_dsYjPE8mYJsL2nViEyY94A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FWaCL5bZa3iioe7NKYjFFg
          claim_id: c_MmUJwnFtjGMLv3zSbtj5t4
          source_id: s_PcJdiQaRsLXPt7vM1AQQ4m
          stance: supports
          locator: CBDB:689736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689736）
          source: &a1
            id: s_PcJdiQaRsLXPt7vM1AQQ4m
            source_type: api_record
            title: 中国历代人物传记资料库：王者佐（CBDB 689736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689736&o=json
            external_identifier: CBDB:689736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9G3Y4KtLQaNeMHa6CDeXJ
        subject_person_id: p_dsYjPE8mYJsL2nViEyY94A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者佐，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T1orgh-fkSViyu3Cm6RDjj
          claim_id: c_x9G3Y4KtLQaNeMHa6CDeXJ
          source_id: s_PcJdiQaRsLXPt7vM1AQQ4m
          stance: supports
          locator: CBDB:689736
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

# 王者佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者佐 | accepted |
| bio.summary | 王者佐，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者佐（CBDB 689736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689736&o=json)
