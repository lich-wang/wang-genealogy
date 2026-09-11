---
schema: wang-person/v1
id: p_zJmJ3Hu1FhYcdK4Bjzusmj
status: active
merged_into: null
display_name: 王弈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1oP2y6ygUZJCVSVpo4MBkA
        subject_person_id: p_zJmJ3Hu1FhYcdK4Bjzusmj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PrnykNHB9WMA7BmMHGKi6B
          claim_id: c_1oP2y6ygUZJCVSVpo4MBkA
          source_id: s_Zg4X8DeZCkxX4CT1C8uRQq
          stance: supports
          locator: CBDB:39667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39667）
          source: &a1
            id: s_Zg4X8DeZCkxX4CT1C8uRQq
            source_type: api_record
            title: 中国历代人物传记资料库：王弈（CBDB 39667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39667&o=json
            external_identifier: CBDB:39667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7M2ZhopvJVR2CS1y46dMAU
        subject_person_id: p_zJmJ3Hu1FhYcdK4Bjzusmj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈，宋人物。籍贯瑞安，身份为地理學家。（中国历代人物传记资料库 CBDB 39667）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kz68jdTzIMTBunDOfZ4wVU
          claim_id: c_7M2ZhopvJVR2CS1y46dMAU
          source_id: s_Zg4X8DeZCkxX4CT1C8uRQq
          stance: supports
          locator: CBDB:39667
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

# 王弈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弈 | accepted |
| bio.summary | 王弈，宋人物。籍贯瑞安，身份为地理學家。（中国历代人物传记资料库 CBDB 39667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弈（CBDB 39667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39667&o=json)
