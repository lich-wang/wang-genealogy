---
schema: wang-person/v1
id: p_6hbbFCzdnc5oLpCKWDFd7m
status: active
merged_into: null
display_name: 王泗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DH2chAyvCDqdXgtFpVmjr
        subject_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Et9qF4NTLbumTrCdyC6sY1
          claim_id: c_6DH2chAyvCDqdXgtFpVmjr
          source_id: s_2C92YNW5AWHF56TKYCB2od
          stance: supports
          locator: CBDB:288609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288609）
          source: &a1
            id: s_2C92YNW5AWHF56TKYCB2od
            source_type: api_record
            title: 中国历代人物传记资料库：王泗（CBDB 288609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json
            external_identifier: CBDB:288609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKEZ8aq4cJ5gQFgcxtSNCT
        subject_person_id: p_6hbbFCzdnc5oLpCKWDFd7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泗，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZesXmOHGaBSZ-8BnM-bNe9
          claim_id: c_MKEZ8aq4cJ5gQFgcxtSNCT
          source_id: s_2C92YNW5AWHF56TKYCB2od
          stance: supports
          locator: CBDB:288609
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

# 王泗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泗 | accepted |
| bio.summary | 王泗，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泗（CBDB 288609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288609&o=json)
