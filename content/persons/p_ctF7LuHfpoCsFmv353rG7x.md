---
schema: wang-person/v1
id: p_ctF7LuHfpoCsFmv353rG7x
status: active
merged_into: null
display_name: 王錫九
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9A7PsGXm13Hbj2u4MdtbsF
        subject_person_id: p_ctF7LuHfpoCsFmv353rG7x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o3cJb1E3uGGE8bUCBP16iW
          claim_id: c_9A7PsGXm13Hbj2u4MdtbsF
          source_id: s_g48Y6SoJn5hmsPjcHPbMR9
          stance: supports
          locator: CBDB:343813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343813）
          source: &a1
            id: s_g48Y6SoJn5hmsPjcHPbMR9
            source_type: api_record
            title: 中国历代人物传记资料库：王錫九（CBDB 343813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343813&o=json
            external_identifier: CBDB:343813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RBvmR9jsuVa7x8EHU7B46z
        subject_person_id: p_ctF7LuHfpoCsFmv353rG7x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫九，清人物。明清進士進士，籍贯汾陽，入仕進士。（中国历代人物传记资料库 CBDB 343813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xyec5jPrrHhvxkQi2jSGhg
          claim_id: c_RBvmR9jsuVa7x8EHU7B46z
          source_id: s_g48Y6SoJn5hmsPjcHPbMR9
          stance: supports
          locator: CBDB:343813
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

# 王錫九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫九 | accepted |
| bio.summary | 王錫九，清人物。明清進士進士，籍贯汾陽，入仕進士。（中国历代人物传记资料库 CBDB 343813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫九（CBDB 343813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343813&o=json)
