---
schema: wang-person/v1
id: p_YNmwFYPPFyfF6N9gTbS9mL
status: active
merged_into: null
display_name: 王承且
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjQJD7uyyQMHTufr9ZsTc4
        subject_person_id: p_YNmwFYPPFyfF6N9gTbS9mL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承且
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNRcSUKeQA1LJcHg286hC5
          claim_id: c_MjQJD7uyyQMHTufr9ZsTc4
          source_id: s_vq2yG2k7QK68NT7Bsyd1dz
          stance: supports
          locator: CBDB:638062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638062）
          source: &a1
            id: s_vq2yG2k7QK68NT7Bsyd1dz
            source_type: api_record
            title: 中国历代人物传记资料库：王承且（CBDB 638062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638062&o=json
            external_identifier: CBDB:638062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ggUxzMhDMFz3FYnoHcfmU8
        subject_person_id: p_YNmwFYPPFyfF6N9gTbS9mL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王承且，清人物。籍贯貴陽府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638062）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xZOsNHEV7-72A_9EIDIaQM
          claim_id: c_ggUxzMhDMFz3FYnoHcfmU8
          source_id: s_vq2yG2k7QK68NT7Bsyd1dz
          stance: supports
          locator: CBDB:638062
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

# 王承且

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承且 | accepted |
| bio.summary | 王承且，清人物。籍贯貴陽府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承且（CBDB 638062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638062&o=json)
