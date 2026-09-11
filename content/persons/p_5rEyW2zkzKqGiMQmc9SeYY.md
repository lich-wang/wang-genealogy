---
schema: wang-person/v1
id: p_5rEyW2zkzKqGiMQmc9SeYY
status: active
merged_into: null
display_name: 王丕猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bohQxGYVSV9B2p9U2588cn
        subject_person_id: p_5rEyW2zkzKqGiMQmc9SeYY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n1JYMP5BpWBERD888J4gHk
          claim_id: c_bohQxGYVSV9B2p9U2588cn
          source_id: s_p69vWnNejc3URuDDGzf6Ur
          stance: supports
          locator: CBDB:635658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635658）
          source: &a1
            id: s_p69vWnNejc3URuDDGzf6Ur
            source_type: api_record
            title: 中国历代人物传记资料库：王丕猷（CBDB 635658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635658&o=json
            external_identifier: CBDB:635658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mtQLSY1ua8V7WinaPwMpaW
        subject_person_id: p_5rEyW2zkzKqGiMQmc9SeYY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕猷，清人物。籍贯階州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 635658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1l7K7kbutK2Bkze7wfH6u4
          claim_id: c_mtQLSY1ua8V7WinaPwMpaW
          source_id: s_p69vWnNejc3URuDDGzf6Ur
          stance: supports
          locator: CBDB:635658
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

# 王丕猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕猷 | accepted |
| bio.summary | 王丕猷，清人物。籍贯階州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 635658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕猷（CBDB 635658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635658&o=json)
