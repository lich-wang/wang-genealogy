---
schema: wang-person/v1
id: p_8tYG6z2ukQPivcubGV4NjM
status: active
merged_into: null
display_name: 王戩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TsnxAxm3DxNteMNaErDXQM
        subject_person_id: p_8tYG6z2ukQPivcubGV4NjM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2JxoH59ik6Jh27oe5oWabT
          claim_id: c_TsnxAxm3DxNteMNaErDXQM
          source_id: s_fU2TrA24nwesrdpTxiZyEg
          stance: supports
          locator: CBDB:689639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689639）
          source: &a1
            id: s_fU2TrA24nwesrdpTxiZyEg
            source_type: api_record
            title: 中国历代人物传记资料库：王戩（CBDB 689639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689639&o=json
            external_identifier: CBDB:689639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PFNoW5H5VnyrGFDNX6uiYq
        subject_person_id: p_8tYG6z2ukQPivcubGV4NjM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paAhNbWcP569ZUzpftNj8k
          claim_id: c_PFNoW5H5VnyrGFDNX6uiYq
          source_id: s_fU2TrA24nwesrdpTxiZyEg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王戩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王戩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王戩（CBDB 689639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689639&o=json)
