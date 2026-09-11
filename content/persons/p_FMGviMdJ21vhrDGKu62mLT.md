---
schema: wang-person/v1
id: p_FMGviMdJ21vhrDGKu62mLT
status: active
merged_into: null
display_name: 王三雋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6w3oGbFH58zmAShud7cCq7
        subject_person_id: p_FMGviMdJ21vhrDGKu62mLT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三雋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ENXDJFrxMZh3Us9cHb7Lao
          claim_id: c_6w3oGbFH58zmAShud7cCq7
          source_id: s_Yk6nh6y4uPPSJE3gGbpYnv
          stance: supports
          locator: CBDB:635644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635644）
          source: &a1
            id: s_Yk6nh6y4uPPSJE3gGbpYnv
            source_type: api_record
            title: 中国历代人物传记资料库：王三雋（CBDB 635644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635644&o=json
            external_identifier: CBDB:635644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wG5CNUEUdvGYwr1NJc57xM
        subject_person_id: p_FMGviMdJ21vhrDGKu62mLT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三雋，清人物。籍贯荊州府，入仕鄉貢舉人，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ArqBKNs-LVYjT2Swa7sMU1
          claim_id: c_wG5CNUEUdvGYwr1NJc57xM
          source_id: s_Yk6nh6y4uPPSJE3gGbpYnv
          stance: supports
          locator: CBDB:635644
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

# 王三雋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三雋 | accepted |
| bio.summary | 王三雋，清人物。籍贯荊州府，入仕鄉貢舉人，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三雋（CBDB 635644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635644&o=json)
