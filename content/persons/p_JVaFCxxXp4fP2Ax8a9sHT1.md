---
schema: wang-person/v1
id: p_JVaFCxxXp4fP2Ax8a9sHT1
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9CJqsGoQH4uH43q6aaBM6R
        subject_person_id: p_JVaFCxxXp4fP2Ax8a9sHT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RvY6MSGTLssGyAsPgVNrfL
          claim_id: c_9CJqsGoQH4uH43q6aaBM6R
          source_id: s_L6GamUeANyXJE4pVAWxeJY
          stance: supports
          locator: CBDB:688869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688869）
          source: &a1
            id: s_L6GamUeANyXJE4pVAWxeJY
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 688869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688869&o=json
            external_identifier: CBDB:688869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iSgDSp3HwMq7kXBN3L8SBn
        subject_person_id: p_JVaFCxxXp4fP2Ax8a9sHT1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，宋人物。籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 688869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tCFrVFdXbJ3fz-bWI5zYRY
          claim_id: c_iSgDSp3HwMq7kXBN3L8SBn
          source_id: s_L6GamUeANyXJE4pVAWxeJY
          stance: supports
          locator: CBDB:688869
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

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | 王述，宋人物。籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 688869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 688869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688869&o=json)
