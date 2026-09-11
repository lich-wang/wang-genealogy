---
schema: wang-person/v1
id: p_ykbwaDVScoBNKEJCJPBvph
status: active
merged_into: null
display_name: 王郅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XMyWRWKAmTsAjCee1Hi5Vm
        subject_person_id: p_ykbwaDVScoBNKEJCJPBvph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7b9yFawv1ZrDhWPBcQuygz
          claim_id: c_XMyWRWKAmTsAjCee1Hi5Vm
          source_id: s_6YmW4EgDM2toRn1PkkmjWh
          stance: supports
          locator: CBDB:640488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640488）
          source: &a1
            id: s_6YmW4EgDM2toRn1PkkmjWh
            source_type: api_record
            title: 中国历代人物传记资料库：王郅（CBDB 640488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640488&o=json
            external_identifier: CBDB:640488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eBmBZWNYs212fyr6oKYBrd
        subject_person_id: p_ykbwaDVScoBNKEJCJPBvph
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郅，清人物。籍贯懷寧，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 640488）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LPPOtfQA--50tLHQQD2rXk
          claim_id: c_eBmBZWNYs212fyr6oKYBrd
          source_id: s_6YmW4EgDM2toRn1PkkmjWh
          stance: supports
          locator: CBDB:640488
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

# 王郅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郅 | accepted |
| bio.summary | 王郅，清人物。籍贯懷寧，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 640488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王郅（CBDB 640488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640488&o=json)
