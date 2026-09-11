---
schema: wang-person/v1
id: p_gsQpKQ3R4RFTToEAam4RA3
status: active
merged_into: null
display_name: 王居敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zjumSUZV9sHHMEvJV6u1Tb
        subject_person_id: p_gsQpKQ3R4RFTToEAam4RA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qHriUyVEu33NLK8DaoCP2n
          claim_id: c_zjumSUZV9sHHMEvJV6u1Tb
          source_id: s_JumzjBvAnHce6MqhEa4YA4
          stance: supports
          locator: CBDB:101247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101247）
          source: &a1
            id: s_JumzjBvAnHce6MqhEa4YA4
            source_type: api_record
            title: 中国历代人物传记资料库：王居敬（CBDB 101247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101247&o=json
            external_identifier: CBDB:101247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FBo262DXDXGg28cPGAA9BF
        subject_person_id: p_gsQpKQ3R4RFTToEAam4RA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居敬，元人物。籍贯長山，曾任禮部尚書。（中国历代人物传记资料库 CBDB 101247）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k1F3DBHZ7VGPk4eDe9IAkh
          claim_id: c_FBo262DXDXGg28cPGAA9BF
          source_id: s_JumzjBvAnHce6MqhEa4YA4
          stance: supports
          locator: CBDB:101247
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

# 王居敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居敬 | accepted |
| bio.summary | 王居敬，元人物。籍贯長山，曾任禮部尚書。（中国历代人物传记资料库 CBDB 101247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居敬（CBDB 101247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101247&o=json)
