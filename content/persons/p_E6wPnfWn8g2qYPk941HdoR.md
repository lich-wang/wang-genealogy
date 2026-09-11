---
schema: wang-person/v1
id: p_E6wPnfWn8g2qYPk941HdoR
status: active
merged_into: null
display_name: 王舉善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3fa3wFHbVMomsPSNehzPT
        subject_person_id: p_E6wPnfWn8g2qYPk941HdoR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xtbAfBXnYXM764Fz5DNsK3
          claim_id: c_Y3fa3wFHbVMomsPSNehzPT
          source_id: s_G5YmaBJs1Lt3xuJb4iFqyB
          stance: supports
          locator: CBDB:686346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686346）
          source: &a1
            id: s_G5YmaBJs1Lt3xuJb4iFqyB
            source_type: api_record
            title: 中国历代人物传记资料库：王舉善（CBDB 686346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686346&o=json
            external_identifier: CBDB:686346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2A5xQheeBY5ALxAVeECDB
        subject_person_id: p_E6wPnfWn8g2qYPk941HdoR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王舉善，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 686346）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qdt7F4dxInYy2FjOvDlIth
          claim_id: c_C2A5xQheeBY5ALxAVeECDB
          source_id: s_G5YmaBJs1Lt3xuJb4iFqyB
          stance: supports
          locator: CBDB:686346
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

# 王舉善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉善 | accepted |
| bio.summary | 王舉善，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 686346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉善（CBDB 686346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686346&o=json)
