---
schema: wang-person/v1
id: p_vQNn1YP2QXM2hWHz12d5NN
status: active
merged_into: null
display_name: 王邦彰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v4cQ439JmP2WD5h515brpV
        subject_person_id: p_vQNn1YP2QXM2hWHz12d5NN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦彰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MPK5QKV2o753xEGBiTK88y
          claim_id: c_v4cQ439JmP2WD5h515brpV
          source_id: s_ac7SsaQ4MwPEccXFqdvv2F
          stance: supports
          locator: CBDB:547722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547722）
          source: &a1
            id: s_ac7SsaQ4MwPEccXFqdvv2F
            source_type: api_record
            title: 中国历代人物传记资料库：王邦彰（CBDB 547722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547722&o=json
            external_identifier: CBDB:547722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T1YYQi8Ry4bpjMCcJzEH6c
        subject_person_id: p_vQNn1YP2QXM2hWHz12d5NN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦彰，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 547722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UXSLm3LObGU7dbpd5dk9BO
          claim_id: c_T1YYQi8Ry4bpjMCcJzEH6c
          source_id: s_ac7SsaQ4MwPEccXFqdvv2F
          stance: supports
          locator: CBDB:547722
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

# 王邦彰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦彰 | accepted |
| bio.summary | 王邦彰，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 547722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦彰（CBDB 547722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547722&o=json)
