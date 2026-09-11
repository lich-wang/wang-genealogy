---
schema: wang-person/v1
id: p_P8XRSUmnPBMLtsq1Ci4nM6
status: active
merged_into: null
display_name: 王祚昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jC49WCg2QnRRrad91qpdKs
        subject_person_id: p_P8XRSUmnPBMLtsq1Ci4nM6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VD9kJosMD8mPQDM2HdBrdo
          claim_id: c_jC49WCg2QnRRrad91qpdKs
          source_id: s_8G3KreNUcmvHcNk6bHFiCT
          stance: supports
          locator: CBDB:342836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342836）
          source: &a1
            id: s_8G3KreNUcmvHcNk6bHFiCT
            source_type: api_record
            title: 中国历代人物传记资料库：王祚昌（CBDB 342836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342836&o=json
            external_identifier: CBDB:342836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5w32z3hkb9DEGUy5ZPpUJ5
        subject_person_id: p_P8XRSUmnPBMLtsq1Ci4nM6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚昌，清人物。明清進士進士，籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 342836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGFkhTwQDTWdkMoM8L9i3P
          claim_id: c_5w32z3hkb9DEGUy5ZPpUJ5
          source_id: s_8G3KreNUcmvHcNk6bHFiCT
          stance: supports
          locator: CBDB:342836
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

# 王祚昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚昌 | accepted |
| bio.summary | 王祚昌，清人物。明清進士進士，籍贯樂平，入仕進士。（中国历代人物传记资料库 CBDB 342836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚昌（CBDB 342836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342836&o=json)
