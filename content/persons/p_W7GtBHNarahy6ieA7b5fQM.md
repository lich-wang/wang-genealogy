---
schema: wang-person/v1
id: p_W7GtBHNarahy6ieA7b5fQM
status: active
merged_into: null
display_name: 王景堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2uJw4got4kLc62ZjQwCJTG
        subject_person_id: p_W7GtBHNarahy6ieA7b5fQM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ST17xf3AJJ4pWps3jyPZXE
          claim_id: c_2uJw4got4kLc62ZjQwCJTG
          source_id: s_McRjW32zsPFhroGGJXXxD9
          stance: supports
          locator: CBDB:72064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72064）
          source: &a1
            id: s_McRjW32zsPFhroGGJXXxD9
            source_type: api_record
            title: 中国历代人物传记资料库：王景堯（CBDB 72064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72064&o=json
            external_identifier: CBDB:72064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W41bS9GqCTuaQGAxv8Fx1H
        subject_person_id: p_W7GtBHNarahy6ieA7b5fQM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1929年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4fMHTuM2Whc1AWjAivgExn
          claim_id: c_W41bS9GqCTuaQGAxv8Fx1H
          source_id: s_McRjW32zsPFhroGGJXXxD9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GbkxeQyFH37jgwWed3yvji
        subject_person_id: p_W7GtBHNarahy6ieA7b5fQM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景堯（卒于1929年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 72064）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8HO-XAhZm9WRyx2znYlbFc
          claim_id: c_GbkxeQyFH37jgwWed3yvji
          source_id: s_McRjW32zsPFhroGGJXXxD9
          stance: supports
          locator: CBDB:72064
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

# 王景堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景堯 | accepted |
| death.date | 1929年 | accepted |
| bio.summary | 王景堯（卒于1929年），中華民國人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 72064） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景堯（CBDB 72064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72064&o=json)
