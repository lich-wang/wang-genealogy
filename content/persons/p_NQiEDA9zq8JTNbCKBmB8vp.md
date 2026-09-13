---
schema: wang-person/v1
id: p_NQiEDA9zq8JTNbCKBmB8vp
status: active
merged_into: null
display_name: 王文翼
cbdb_id: 414748
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wYTZNJANhFJeQkGJn9XRE8
        subject_person_id: p_NQiEDA9zq8JTNbCKBmB8vp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翼，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 414748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9_YbAueHJ6fIQc1dd-qwyZ
          claim_id: c_wYTZNJANhFJeQkGJn9XRE8
          source_id: s_Vhwb353Jq3vAz4MzRoD9So
          stance: supports
          locator: CBDB:414748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Vhwb353Jq3vAz4MzRoD9So
            source_type: api_record
            title: 中国历代人物传记资料库：王文翼（CBDB 414748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414748&o=json
            external_identifier: CBDB:414748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cPtpnSzAcyU9x9zNssYanC
        subject_person_id: p_NQiEDA9zq8JTNbCKBmB8vp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UyiHnMzrTJ4iEZNJKpmWB7
          claim_id: c_cPtpnSzAcyU9x9zNssYanC
          source_id: s_Vhwb353Jq3vAz4MzRoD9So
          stance: supports
          locator: CBDB:414748
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 明
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

# 王文翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文翼，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 414748） | accepted |
| name.primary | 王文翼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文翼（CBDB 414748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414748&o=json)
