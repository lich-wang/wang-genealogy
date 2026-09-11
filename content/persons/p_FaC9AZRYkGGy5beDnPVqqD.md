---
schema: wang-person/v1
id: p_FaC9AZRYkGGy5beDnPVqqD
status: active
merged_into: null
display_name: 王于藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r6H8uKhR14Hv6wibytyXtc
        subject_person_id: p_FaC9AZRYkGGy5beDnPVqqD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于藩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwU26iH2YgFKmzbYX3P8bR
          claim_id: c_r6H8uKhR14Hv6wibytyXtc
          source_id: s_xcFAWn26LnENTEhNiKHydQ
          stance: supports
          locator: CBDB:635846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635846）
          source: &a1
            id: s_xcFAWn26LnENTEhNiKHydQ
            source_type: api_record
            title: 中国历代人物传记资料库：王于藩（CBDB 635846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635846&o=json
            external_identifier: CBDB:635846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JEkBdXr11qNuy13NaxLNDu
        subject_person_id: p_FaC9AZRYkGGy5beDnPVqqD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王于藩，清人物。籍贯雲南，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 635846）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g6BAFl5AaVCtLJrYZGdvGE
          claim_id: c_JEkBdXr11qNuy13NaxLNDu
          source_id: s_xcFAWn26LnENTEhNiKHydQ
          stance: supports
          locator: CBDB:635846
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

# 王于藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王于藩 | accepted |
| bio.summary | 王于藩，清人物。籍贯雲南，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 635846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王于藩（CBDB 635846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635846&o=json)
