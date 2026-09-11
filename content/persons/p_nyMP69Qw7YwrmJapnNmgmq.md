---
schema: wang-person/v1
id: p_nyMP69Qw7YwrmJapnNmgmq
status: active
merged_into: null
display_name: 王思沉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tC65WpWidFJPpvHXif9Hv
        subject_person_id: p_nyMP69Qw7YwrmJapnNmgmq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思沉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9NabB5Hh4zLkc5BZ1427h
          claim_id: c_5tC65WpWidFJPpvHXif9Hv
          source_id: s_R7UM3VZSefUE3H1qchnE9t
          stance: supports
          locator: CBDB:575183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575183）
          source: &a1
            id: s_R7UM3VZSefUE3H1qchnE9t
            source_type: api_record
            title: 中国历代人物传记资料库：王思沉（CBDB 575183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575183&o=json
            external_identifier: CBDB:575183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xbc1BEiPqKfHEbSNN8jXo7
        subject_person_id: p_nyMP69Qw7YwrmJapnNmgmq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思沉，明人物。籍贯鄖縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 575183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kscXnAOIIPkQbsFK544vZF
          claim_id: c_Xbc1BEiPqKfHEbSNN8jXo7
          source_id: s_R7UM3VZSefUE3H1qchnE9t
          stance: supports
          locator: CBDB:575183
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

# 王思沉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思沉 | accepted |
| bio.summary | 王思沉，明人物。籍贯鄖縣，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 575183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思沉（CBDB 575183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575183&o=json)
