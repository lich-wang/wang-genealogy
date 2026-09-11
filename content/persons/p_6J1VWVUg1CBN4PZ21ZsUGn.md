---
schema: wang-person/v1
id: p_6J1VWVUg1CBN4PZ21ZsUGn
status: active
merged_into: null
display_name: 王庭堅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bxb5fVgmABQ9McM6E1Yg4L
        subject_person_id: p_6J1VWVUg1CBN4PZ21ZsUGn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KdszcCevYZVVLX5qrg8Bms
          claim_id: c_Bxb5fVgmABQ9McM6E1Yg4L
          source_id: s_LXeW5oc9Bc6yoDJMMPv6jd
          stance: supports
          locator: CBDB:687028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687028）
          source: &a1
            id: s_LXeW5oc9Bc6yoDJMMPv6jd
            source_type: api_record
            title: 中国历代人物传记资料库：王庭堅（CBDB 687028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687028&o=json
            external_identifier: CBDB:687028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1qGPpSZUKeZoXJKEPFK2Yh
        subject_person_id: p_6J1VWVUg1CBN4PZ21ZsUGn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭堅，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 687028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AdhL13-FqF1R6H4fVHV9Vx
          claim_id: c_1qGPpSZUKeZoXJKEPFK2Yh
          source_id: s_LXeW5oc9Bc6yoDJMMPv6jd
          stance: supports
          locator: CBDB:687028
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

# 王庭堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭堅 | accepted |
| bio.summary | 王庭堅，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 687028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭堅（CBDB 687028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687028&o=json)
