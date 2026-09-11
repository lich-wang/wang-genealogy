---
schema: wang-person/v1
id: p_LqF9usGJ5oh56A8f1asKPE
status: active
merged_into: null
display_name: 王鍾琇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HmyKARaBX8R8eWZCBEpeaf
        subject_person_id: p_LqF9usGJ5oh56A8f1asKPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vL1gjDtmptqPekxMJbej11
          claim_id: c_HmyKARaBX8R8eWZCBEpeaf
          source_id: s_j7nAAv5Z7c5kVgEjjuA2TZ
          stance: supports
          locator: CBDB:640679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640679）
          source: &a1
            id: s_j7nAAv5Z7c5kVgEjjuA2TZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾琇（CBDB 640679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640679&o=json
            external_identifier: CBDB:640679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BN2PRBxtXYPLJLd9hSVRvN
        subject_person_id: p_LqF9usGJ5oh56A8f1asKPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾琇，清人物。籍贯諸城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lH9LLk9coG1QQHV6a3SN-j
          claim_id: c_BN2PRBxtXYPLJLd9hSVRvN
          source_id: s_j7nAAv5Z7c5kVgEjjuA2TZ
          stance: supports
          locator: CBDB:640679
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

# 王鍾琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾琇 | accepted |
| bio.summary | 王鍾琇，清人物。籍贯諸城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾琇（CBDB 640679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640679&o=json)
