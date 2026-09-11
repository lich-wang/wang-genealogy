---
schema: wang-person/v1
id: p_PSSwkob9duMXfk4AWeA2n4
status: active
merged_into: null
display_name: 王鶚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UddRdHHwJ5V7Z5ZGhuaYPZ
        subject_person_id: p_PSSwkob9duMXfk4AWeA2n4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WrdQsR6FU7PpvPPgyRD7f
          claim_id: c_UddRdHHwJ5V7Z5ZGhuaYPZ
          source_id: s_YZLUd5xkCojFqRxRsURtFD
          stance: supports
          locator: CBDB:101007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101007）
          source: &a1
            id: s_YZLUd5xkCojFqRxRsURtFD
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚（CBDB 101007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101007&o=json
            external_identifier: CBDB:101007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2Q6pK7aXHjSdXmCtHG5kFv
        subject_person_id: p_PSSwkob9duMXfk4AWeA2n4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1190年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vqsBGe6P3XeEpyWbtsCDKN
          claim_id: c_2Q6pK7aXHjSdXmCtHG5kFv
          source_id: s_YZLUd5xkCojFqRxRsURtFD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5ML8psrfVxKSQJCCnEnts4
        subject_person_id: p_PSSwkob9duMXfk4AWeA2n4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1273年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ze5ppUYdcpvMbNQmMwdz7F
          claim_id: c_5ML8psrfVxKSQJCCnEnts4
          source_id: s_YZLUd5xkCojFqRxRsURtFD
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
        id: c_11EM9GBYF454hmHxuztNDp
        subject_person_id: p_PSSwkob9duMXfk4AWeA2n4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶚（1190年—1273年），元人物。籍贯東明，身份为建書院/義塾/家塾，入仕進士，曾任翰林國史院應奉翰林文字、翰林國史院學士承旨、尚書省郎中。（中国历代人物传记资料库 CBDB 101007）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ILVC6Ano3zr8QolW3bqfB2
          claim_id: c_11EM9GBYF454hmHxuztNDp
          source_id: s_YZLUd5xkCojFqRxRsURtFD
          stance: supports
          locator: CBDB:101007
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

# 王鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶚 | accepted |
| birth.date | 1190年 | accepted |
| death.date | 1273年 | accepted |
| bio.summary | 王鶚（1190年—1273年），元人物。籍贯東明，身份为建書院/義塾/家塾，入仕進士，曾任翰林國史院應奉翰林文字、翰林國史院學士承旨、尚書省郎中。（中国历代人物传记资料库 CBDB 101007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶚（CBDB 101007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101007&o=json)
