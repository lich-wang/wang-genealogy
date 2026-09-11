---
schema: wang-person/v1
id: p_R9pNm772ppjz2bB721mAQz
status: active
merged_into: null
display_name: 王長城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e96AKGyaNWC11cx3xaCXTQ
        subject_person_id: p_R9pNm772ppjz2bB721mAQz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kqQF74BnF2CCzR2x5Lp8yr
          claim_id: c_e96AKGyaNWC11cx3xaCXTQ
          source_id: s_2Vv7gSmTbrtuqXx2L8brjC
          stance: supports
          locator: CBDB:640728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640728）
          source: &a1
            id: s_2Vv7gSmTbrtuqXx2L8brjC
            source_type: api_record
            title: 中国历代人物传记资料库：王長城（CBDB 640728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640728&o=json
            external_identifier: CBDB:640728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7mwEN41gTENLtKkCbmFJPm
        subject_person_id: p_R9pNm772ppjz2bB721mAQz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長城，清人物。籍贯霍州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640728）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N_Ma1j77S8f1itfle9MJoy
          claim_id: c_7mwEN41gTENLtKkCbmFJPm
          source_id: s_2Vv7gSmTbrtuqXx2L8brjC
          stance: supports
          locator: CBDB:640728
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

# 王長城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長城 | accepted |
| bio.summary | 王長城，清人物。籍贯霍州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長城（CBDB 640728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640728&o=json)
