---
schema: wang-person/v1
id: p_wYeT2qrU9bdVXPyPY37PnG
status: active
merged_into: null
display_name: 王之誘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nNu9XUebfkBHin372kWFrT
        subject_person_id: p_wYeT2qrU9bdVXPyPY37PnG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39tVY2GYvY3Vih4GQCGdtg
          claim_id: c_nNu9XUebfkBHin372kWFrT
          source_id: s_V6St3z7Pq5G18uQkUn6QDL
          stance: supports
          locator: CBDB:568679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568679）
          source: &a1
            id: s_V6St3z7Pq5G18uQkUn6QDL
            source_type: api_record
            title: 中国历代人物传记资料库：王之誘（CBDB 568679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568679&o=json
            external_identifier: CBDB:568679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zLYP5BfKmun4DNFHyesMUF
        subject_person_id: p_wYeT2qrU9bdVXPyPY37PnG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誘，清人物。籍贯善化。（中国历代人物传记资料库 CBDB 568679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fcs5ddStm3TTa5PSNKbglE
          claim_id: c_zLYP5BfKmun4DNFHyesMUF
          source_id: s_V6St3z7Pq5G18uQkUn6QDL
          stance: supports
          locator: CBDB:568679
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

# 王之誘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之誘 | accepted |
| bio.summary | 王之誘，清人物。籍贯善化。（中国历代人物传记资料库 CBDB 568679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之誘（CBDB 568679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568679&o=json)
