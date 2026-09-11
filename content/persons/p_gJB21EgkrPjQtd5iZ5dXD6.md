---
schema: wang-person/v1
id: p_gJB21EgkrPjQtd5iZ5dXD6
status: active
merged_into: null
display_name: 王懋昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wvS8APdA9HBWTuScJa3ooM
        subject_person_id: p_gJB21EgkrPjQtd5iZ5dXD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BaAAV9qTRo857GBK5Pe4na
          claim_id: c_wvS8APdA9HBWTuScJa3ooM
          source_id: s_K51maXDANbyfj6RAYjh1E3
          stance: supports
          locator: CBDB:691156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691156）
          source: &a1
            id: s_K51maXDANbyfj6RAYjh1E3
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 691156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691156&o=json
            external_identifier: CBDB:691156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69SwsGFrcEQH7BJgFfpSH5
        subject_person_id: p_gJB21EgkrPjQtd5iZ5dXD6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王懋昭，清人物。籍贯上虞，身份为戲曲作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691156）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G5UXcixHjCEddkbDKAvULI
          claim_id: c_69SwsGFrcEQH7BJgFfpSH5
          source_id: s_K51maXDANbyfj6RAYjh1E3
          stance: supports
          locator: CBDB:691156
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

# 王懋昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋昭 | accepted |
| bio.summary | 王懋昭，清人物。籍贯上虞，身份为戲曲作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋昭（CBDB 691156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691156&o=json)
