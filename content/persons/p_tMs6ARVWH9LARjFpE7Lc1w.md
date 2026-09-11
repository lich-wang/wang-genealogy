---
schema: wang-person/v1
id: p_tMs6ARVWH9LARjFpE7Lc1w
status: active
merged_into: null
display_name: 王在
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oZsVA2HwGkKSncrDQQrTaa
        subject_person_id: p_tMs6ARVWH9LARjFpE7Lc1w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5oouqGf1UTCB11EiU3Zu7y
          claim_id: c_oZsVA2HwGkKSncrDQQrTaa
          source_id: s_6e7wd2FDaDHzbtr9uEx2T2
          stance: supports
          locator: CBDB:38710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38710）
          source: &a1
            id: s_6e7wd2FDaDHzbtr9uEx2T2
            source_type: api_record
            title: 中国历代人物传记资料库：王在（CBDB 38710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38710&o=json
            external_identifier: CBDB:38710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TK8APcr9SnHH88thVM9nTV
        subject_person_id: p_tMs6ARVWH9LARjFpE7Lc1w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在，宋人物。籍贯武陵，身份为經學家—禮經，入仕進士，曾任殿中省尚藥奉御、知禮部貢舉事。（中国历代人物传记资料库 CBDB 38710）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ai52RPejU-vlinSAcxmYrE
          claim_id: c_TK8APcr9SnHH88thVM9nTV
          source_id: s_6e7wd2FDaDHzbtr9uEx2T2
          stance: supports
          locator: CBDB:38710
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

# 王在

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在 | accepted |
| bio.summary | 王在，宋人物。籍贯武陵，身份为經學家—禮經，入仕進士，曾任殿中省尚藥奉御、知禮部貢舉事。（中国历代人物传记资料库 CBDB 38710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王在（CBDB 38710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38710&o=json)
