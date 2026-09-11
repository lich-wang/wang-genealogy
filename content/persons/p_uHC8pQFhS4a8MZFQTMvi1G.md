---
schema: wang-person/v1
id: p_uHC8pQFhS4a8MZFQTMvi1G
status: active
merged_into: null
display_name: 王瑮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xctw3y2t1wfuCd74bSGbJ8
        subject_person_id: p_uHC8pQFhS4a8MZFQTMvi1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wo2FBLNTLRaQwJmEkAP2tH
          claim_id: c_xctw3y2t1wfuCd74bSGbJ8
          source_id: s_rZANs8CBRYBDzfb7PBuJpA
          stance: supports
          locator: CBDB:639447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639447）
          source: &a1
            id: s_rZANs8CBRYBDzfb7PBuJpA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑮（CBDB 639447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639447&o=json
            external_identifier: CBDB:639447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ygEnzULgGqqDCgfGe18PZH
        subject_person_id: p_uHC8pQFhS4a8MZFQTMvi1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑮，清人物。籍贯膠州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nVDO0DaLaXgSf6RZSZVTxC
          claim_id: c_ygEnzULgGqqDCgfGe18PZH
          source_id: s_rZANs8CBRYBDzfb7PBuJpA
          stance: supports
          locator: CBDB:639447
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

# 王瑮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑮 | accepted |
| bio.summary | 王瑮，清人物。籍贯膠州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑮（CBDB 639447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639447&o=json)
