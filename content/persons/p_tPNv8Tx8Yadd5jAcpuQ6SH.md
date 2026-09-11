---
schema: wang-person/v1
id: p_tPNv8Tx8Yadd5jAcpuQ6SH
status: active
merged_into: null
display_name: 王箴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LA2nDBQX6SCrbvqQt4roeZ
        subject_person_id: p_tPNv8Tx8Yadd5jAcpuQ6SH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VJvxxH4vo5mijwHJ2ie35f
          claim_id: c_LA2nDBQX6SCrbvqQt4roeZ
          source_id: s_fgE9BA3zqe4sC3JcgLbSWK
          stance: supports
          locator: CBDB:688656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688656）
          source: &a1
            id: s_fgE9BA3zqe4sC3JcgLbSWK
            source_type: api_record
            title: 中国历代人物传记资料库：王箴（CBDB 688656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688656&o=json
            external_identifier: CBDB:688656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJFnAjRg71WeMbKmK8qtGp
        subject_person_id: p_tPNv8Tx8Yadd5jAcpuQ6SH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴，宋人物。籍贯安仁，入仕進士。（中国历代人物传记资料库 CBDB 688656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTFSY4nk-LaolZASWcjUIN
          claim_id: c_AJFnAjRg71WeMbKmK8qtGp
          source_id: s_fgE9BA3zqe4sC3JcgLbSWK
          stance: supports
          locator: CBDB:688656
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

# 王箴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王箴 | accepted |
| bio.summary | 王箴，宋人物。籍贯安仁，入仕進士。（中国历代人物传记资料库 CBDB 688656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王箴（CBDB 688656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688656&o=json)
