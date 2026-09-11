---
schema: wang-person/v1
id: p_4J1VFPB1S75Zqj7iD7DyUw
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WWxHJAXTw4R4FwAQigQ5uA
        subject_person_id: p_4J1VFPB1S75Zqj7iD7DyUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EJUHAdxunq8vbEKBu8WjKs
          claim_id: c_WWxHJAXTw4R4FwAQigQ5uA
          source_id: s_iSND4XqSK32uD1QkVNXr8J
          stance: supports
          locator: CBDB:492179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492179）
          source: &a1
            id: s_iSND4XqSK32uD1QkVNXr8J
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 492179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492179&o=json
            external_identifier: CBDB:492179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KnsLG2CamnYojBMSDCE4Xj
        subject_person_id: p_4J1VFPB1S75Zqj7iD7DyUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王潤，明人物。入仕學校: 生員(庠生)，曾任醫學訓科。（中国历代人物传记资料库 CBDB 492179）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WCFZS26xOStk-lGQrKs9A9
          claim_id: c_KnsLG2CamnYojBMSDCE4Xj
          source_id: s_iSND4XqSK32uD1QkVNXr8J
          stance: supports
          locator: CBDB:492179
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。入仕學校: 生員(庠生)，曾任醫學訓科。（中国历代人物传记资料库 CBDB 492179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 492179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492179&o=json)
