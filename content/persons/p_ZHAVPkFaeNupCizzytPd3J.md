---
schema: wang-person/v1
id: p_ZHAVPkFaeNupCizzytPd3J
status: active
merged_into: null
display_name: 王桂森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k4WV5EiathQ9e9j7VXoDbC
        subject_person_id: p_ZHAVPkFaeNupCizzytPd3J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ocW3QTx3Nuc4gargLMDJ6F
          claim_id: c_k4WV5EiathQ9e9j7VXoDbC
          source_id: s_vbREWUMge1MiZ5N6Nt6YDJ
          stance: supports
          locator: CBDB:638711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638711）
          source: &a1
            id: s_vbREWUMge1MiZ5N6Nt6YDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王桂森（CBDB 638711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638711&o=json
            external_identifier: CBDB:638711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ufu4iUzLJv2TFNTv3nbrNh
        subject_person_id: p_ZHAVPkFaeNupCizzytPd3J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂森，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fjpn66Yg84hVu3fEg1K1Iu
          claim_id: c_Ufu4iUzLJv2TFNTv3nbrNh
          source_id: s_vbREWUMge1MiZ5N6Nt6YDJ
          stance: supports
          locator: CBDB:638711
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

# 王桂森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂森 | accepted |
| bio.summary | 王桂森，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂森（CBDB 638711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638711&o=json)
