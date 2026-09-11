---
schema: wang-person/v1
id: p_wSDz6nHH8kjqKbUC1C6Lbk
status: active
merged_into: null
display_name: 王彙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H7wqdy3sALBDNoVBU1zR51
        subject_person_id: p_wSDz6nHH8kjqKbUC1C6Lbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DFijjeRqFD5T6gNcK7q6uA
          claim_id: c_H7wqdy3sALBDNoVBU1zR51
          source_id: s_HaM1umGSaZnWSskao962ZP
          stance: supports
          locator: CBDB:100855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100855）
          source: &a1
            id: s_HaM1umGSaZnWSskao962ZP
            source_type: api_record
            title: 中国历代人物传记资料库：王彙（CBDB 100855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100855&o=json
            external_identifier: CBDB:100855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_281bvcCGdB316kwkD3cfJK
        subject_person_id: p_wSDz6nHH8kjqKbUC1C6Lbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彙，元人物。籍贯邵陽，身份为拒絕出仕，入仕進士，曾任行中書省參政。（中国历代人物传记资料库 CBDB 100855）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xFWNk_KLh1lBJubLua0OIn
          claim_id: c_281bvcCGdB316kwkD3cfJK
          source_id: s_HaM1umGSaZnWSskao962ZP
          stance: supports
          locator: CBDB:100855
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

# 王彙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彙 | accepted |
| bio.summary | 王彙，元人物。籍贯邵陽，身份为拒絕出仕，入仕進士，曾任行中書省參政。（中国历代人物传记资料库 CBDB 100855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彙（CBDB 100855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100855&o=json)
