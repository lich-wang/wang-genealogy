---
schema: wang-person/v1
id: p_q6n3DJs9PbV2wUC5SMQreP
status: active
merged_into: null
display_name: 王同道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eBMNTEGqht19Q5DSZGAHot
        subject_person_id: p_q6n3DJs9PbV2wUC5SMQreP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MeeNCPWfAxyztDNt5bJfry
          claim_id: c_eBMNTEGqht19Q5DSZGAHot
          source_id: s_FpNJvVsGJQCrijjPCjn11g
          stance: supports
          locator: CBDB:636511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636511）
          source: &a1
            id: s_FpNJvVsGJQCrijjPCjn11g
            source_type: api_record
            title: 中国历代人物传记资料库：王同道（CBDB 636511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636511&o=json
            external_identifier: CBDB:636511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X1P6o7eXATYhh3G57DKZAA
        subject_person_id: p_q6n3DJs9PbV2wUC5SMQreP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同道，清人物。籍贯汾西，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SCwGQZrlflqeyIc99esPvb
          claim_id: c_X1P6o7eXATYhh3G57DKZAA
          source_id: s_FpNJvVsGJQCrijjPCjn11g
          stance: supports
          locator: CBDB:636511
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

# 王同道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同道 | accepted |
| bio.summary | 王同道，清人物。籍贯汾西，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同道（CBDB 636511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636511&o=json)
