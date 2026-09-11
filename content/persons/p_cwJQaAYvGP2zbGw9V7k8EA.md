---
schema: wang-person/v1
id: p_cwJQaAYvGP2zbGw9V7k8EA
status: active
merged_into: null
display_name: 王如意
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T74Bat7gr4r84D6VefZj15
        subject_person_id: p_cwJQaAYvGP2zbGw9V7k8EA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如意
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ksGUX4nKjW9jVoKTSCJaxt
          claim_id: c_T74Bat7gr4r84D6VefZj15
          source_id: s_JZ8jCdFjNbN7RpTSsT2ozM
          stance: supports
          locator: CBDB:535993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535993）
          source: &a1
            id: s_JZ8jCdFjNbN7RpTSsT2ozM
            source_type: api_record
            title: 中国历代人物传记资料库：王如意（CBDB 535993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535993&o=json
            external_identifier: CBDB:535993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sDv4MPAxnRHafzdP8bvFSy
        subject_person_id: p_cwJQaAYvGP2zbGw9V7k8EA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如意，宋人物。籍贯資州，入仕進士。（中国历代人物传记资料库 CBDB 535993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__dTy_2b1CD-Cp--B4d_ktc
          claim_id: c_sDv4MPAxnRHafzdP8bvFSy
          source_id: s_JZ8jCdFjNbN7RpTSsT2ozM
          stance: supports
          locator: CBDB:535993
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

# 王如意

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如意 | accepted |
| bio.summary | 王如意，宋人物。籍贯資州，入仕進士。（中国历代人物传记资料库 CBDB 535993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如意（CBDB 535993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535993&o=json)
