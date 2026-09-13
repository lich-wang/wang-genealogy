---
schema: wang-person/v1
id: p_jJnbhZFP2NBWF7scp6eXoP
status: active
merged_into: null
display_name: 王孫某
cbdb_id: 474955
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v4Yh7bPDc7jCNZrmB8EzWg
        subject_person_id: p_jJnbhZFP2NBWF7scp6eXoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫某，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 474955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LRvaYVHV9xS_hw0D4_9J11
          claim_id: c_v4Yh7bPDc7jCNZrmB8EzWg
          source_id: s_xNR9fPfog9DTP7MvJD89jt
          stance: supports
          locator: CBDB:474955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xNR9fPfog9DTP7MvJD89jt
            source_type: api_record
            title: 中国历代人物传记资料库：王孫某（CBDB 474955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474955&o=json
            external_identifier: CBDB:474955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJZE1FSGGToCEsBy36sU8X
        subject_person_id: p_jJnbhZFP2NBWF7scp6eXoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EA8pNEDAWuNGxoDL7VLDEA
          claim_id: c_UJZE1FSGGToCEsBy36sU8X
          source_id: s_xNR9fPfog9DTP7MvJD89jt
          stance: supports
          locator: CBDB:474955
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 清
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

# 王孫某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫某，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 474955） | accepted |
| name.primary | 王孫某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孫某（CBDB 474955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474955&o=json)
