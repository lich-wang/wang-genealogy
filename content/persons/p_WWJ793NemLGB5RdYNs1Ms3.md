---
schema: wang-person/v1
id: p_WWJ793NemLGB5RdYNs1Ms3
status: active
merged_into: null
display_name: 王利增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NYMebc5HcmU3WdyymvdMP
        subject_person_id: p_WWJ793NemLGB5RdYNs1Ms3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAWu1YexWZDgE973rnpix8
          claim_id: c_8NYMebc5HcmU3WdyymvdMP
          source_id: s_HUBJ3MGojiaL2HcFn93vA4
          stance: supports
          locator: CBDB:636364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636364）
          source: &a1
            id: s_HUBJ3MGojiaL2HcFn93vA4
            source_type: api_record
            title: 中国历代人物传记资料库：王利增（CBDB 636364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636364&o=json
            external_identifier: CBDB:636364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mk3qnSgmtpFoAKEHk7BzhM
        subject_person_id: p_WWJ793NemLGB5RdYNs1Ms3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利增，清人物。籍贯樂昌，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636364）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1h7_EXFhm81wPc26nlO30v
          claim_id: c_mk3qnSgmtpFoAKEHk7BzhM
          source_id: s_HUBJ3MGojiaL2HcFn93vA4
          stance: supports
          locator: CBDB:636364
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

# 王利增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利增 | accepted |
| bio.summary | 王利增，清人物。籍贯樂昌，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636364） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利增（CBDB 636364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636364&o=json)
