---
schema: wang-person/v1
id: p_6NNQvsKDXWNuYR3EoDkFBE
status: active
merged_into: null
display_name: 王錫旗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sCyMgvJ2KVLD2Xyvsbta67
        subject_person_id: p_6NNQvsKDXWNuYR3EoDkFBE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫旗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oDXovVoHbAM11oCdi6g7n8
          claim_id: c_sCyMgvJ2KVLD2Xyvsbta67
          source_id: s_BcsMXAUqPZJv27VMF55zM3
          stance: supports
          locator: CBDB:640605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640605）
          source: &a1
            id: s_BcsMXAUqPZJv27VMF55zM3
            source_type: api_record
            title: 中国历代人物传记资料库：王錫旗（CBDB 640605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640605&o=json
            external_identifier: CBDB:640605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HoWv1acSUuAYr3nNrT2psF
        subject_person_id: p_6NNQvsKDXWNuYR3EoDkFBE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫旗，清人物。籍贯壺關，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640605）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vJuQobTnETF5Y3LIVU5Mxc
          claim_id: c_HoWv1acSUuAYr3nNrT2psF
          source_id: s_BcsMXAUqPZJv27VMF55zM3
          stance: supports
          locator: CBDB:640605
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

# 王錫旗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫旗 | accepted |
| bio.summary | 王錫旗，清人物。籍贯壺關，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫旗（CBDB 640605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640605&o=json)
