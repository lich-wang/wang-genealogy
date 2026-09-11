---
schema: wang-person/v1
id: p_yQj75xbH4Jubs3Acbg8Fdx
status: active
merged_into: null
display_name: 王𤇍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fCFPBdz7aNiais5GvnCETd
        subject_person_id: p_yQj75xbH4Jubs3Acbg8Fdx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𤇍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wzXMzWbb6bPPDxGdhH8cvo
          claim_id: c_fCFPBdz7aNiais5GvnCETd
          source_id: s_Guq63oLTHGsBHLV5LEezsJ
          stance: supports
          locator: CBDB:703834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703834）
          source: &a1
            id: s_Guq63oLTHGsBHLV5LEezsJ
            source_type: api_record
            title: 中国历代人物传记资料库：王𤇍（CBDB 703834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703834&o=json
            external_identifier: CBDB:703834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HVtwE33XFQP2X6JhbiNu4i
        subject_person_id: p_yQj75xbH4Jubs3Acbg8Fdx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𤇍，清人物。籍贯上虞，身份为死國難，入仕太學生。（中国历代人物传记资料库 CBDB 703834）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HRJXK_Qf6-_McdgmLLMJ9C
          claim_id: c_HVtwE33XFQP2X6JhbiNu4i
          source_id: s_Guq63oLTHGsBHLV5LEezsJ
          stance: supports
          locator: CBDB:703834
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

# 王𤇍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𤇍 | accepted |
| bio.summary | 王𤇍，清人物。籍贯上虞，身份为死國難，入仕太學生。（中国历代人物传记资料库 CBDB 703834） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王𤇍（CBDB 703834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703834&o=json)
