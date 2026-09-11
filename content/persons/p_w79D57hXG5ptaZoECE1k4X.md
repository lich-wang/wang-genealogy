---
schema: wang-person/v1
id: p_w79D57hXG5ptaZoECE1k4X
status: active
merged_into: null
display_name: 王好古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tdkG3nBrWAPLSmNuPf5uzT
        subject_person_id: p_w79D57hXG5ptaZoECE1k4X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ztiAsMGQqYLaT1Xi9nSQ71
          claim_id: c_tdkG3nBrWAPLSmNuPf5uzT
          source_id: s_XsH4BPB5QKXLQ7HgbamjGN
          stance: supports
          locator: CBDB:10041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10041）
          source: &a1
            id: s_XsH4BPB5QKXLQ7HgbamjGN
            source_type: api_record
            title: 中国历代人物传记资料库：王好古（CBDB 10041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10041&o=json
            external_identifier: CBDB:10041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7j46uTUdVVg7FZbwyAiSKa
        subject_person_id: p_w79D57hXG5ptaZoECE1k4X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好古，元人物。籍贯平棘，曾任縣尹、諸路總管府醫學教授。（中国历代人物传记资料库 CBDB 10041）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fIm1cxzzhO5bsCvOnaVACv
          claim_id: c_7j46uTUdVVg7FZbwyAiSKa
          source_id: s_XsH4BPB5QKXLQ7HgbamjGN
          stance: supports
          locator: CBDB:10041
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

# 王好古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好古 | accepted |
| bio.summary | 王好古，元人物。籍贯平棘，曾任縣尹、諸路總管府醫學教授。（中国历代人物传记资料库 CBDB 10041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王好古（CBDB 10041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10041&o=json)
