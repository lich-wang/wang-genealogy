---
schema: wang-person/v1
id: p_GeNhZizZoQFXpeR9EtPr9t
status: active
merged_into: null
display_name: 王應雷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QjBrEzp8WxPL3N2vni15qf
        subject_person_id: p_GeNhZizZoQFXpeR9EtPr9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應雷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3T6D6Z45DeUM5ASD2m5CL
          claim_id: c_QjBrEzp8WxPL3N2vni15qf
          source_id: s_Zve58Yb5LNcz5Nd4jhXT8g
          stance: supports
          locator: CBDB:545861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545861）
          source: &a1
            id: s_Zve58Yb5LNcz5Nd4jhXT8g
            source_type: api_record
            title: 中国历代人物传记资料库：王應雷（CBDB 545861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545861&o=json
            external_identifier: CBDB:545861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3K9vSSRx1E8V7P3VKmsT8J
        subject_person_id: p_GeNhZizZoQFXpeR9EtPr9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應雷，宋人物。籍贯永豐，入仕進士。（中国历代人物传记资料库 CBDB 545861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMTtNzC-imptXQCL_9A6VM
          claim_id: c_3K9vSSRx1E8V7P3VKmsT8J
          source_id: s_Zve58Yb5LNcz5Nd4jhXT8g
          stance: supports
          locator: CBDB:545861
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

# 王應雷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應雷 | accepted |
| bio.summary | 王應雷，宋人物。籍贯永豐，入仕進士。（中国历代人物传记资料库 CBDB 545861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應雷（CBDB 545861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545861&o=json)
