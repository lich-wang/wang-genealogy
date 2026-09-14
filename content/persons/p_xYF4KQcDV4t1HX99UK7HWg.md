---
schema: wang-person/v1
id: p_xYF4KQcDV4t1HX99UK7HWg
status: active
merged_into: null
display_name: 王縠
cbdb_id: 36864
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JsxR1JSeLhanZ8wwm823jz
        subject_person_id: p_xYF4KQcDV4t1HX99UK7HWg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縠，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36864）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sKAf8WkfF6ciGg234ZT0IR
          claim_id: c_JsxR1JSeLhanZ8wwm823jz
          source_id: s_rDbhSW32oEt85E2AMTg369
          stance: supports
          locator: CBDB:36864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rDbhSW32oEt85E2AMTg369
            source_type: api_record
            title: 中国历代人物传记资料库：王縠（CBDB 36864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36864&o=json
            external_identifier: CBDB:36864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_izaux59VKBdDENt9Pgtvhb
        subject_person_id: p_xYF4KQcDV4t1HX99UK7HWg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7uELgFyC8D5G4PcHFb6wVp
          claim_id: c_izaux59VKBdDENt9Pgtvhb
          source_id: s_rDbhSW32oEt85E2AMTg369
          stance: supports
          locator: CBDB:36864
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AyIEyp9k6tV43aw0VvHbJ_
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xYF4KQcDV4t1HX99UK7HWg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_0xP83Qg3Yu80z37d2nCT_T
          claim_id: c_AyIEyp9k6tV43aw0VvHbJ_
          source_id: s_elHPCn2PVgwR2JdxZ1IlW0
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7385）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_elHPCn2PVgwR2JdxZ1IlW0
            source_type: api_record
            title: 中国历代人物传记资料库：王縠（CBDB 36864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36864&o=json
            external_identifier: CBDB:36864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7i6jUhtwwYvnVixPJQMhua
        status: active
        display_name: 王元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王縠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王縠，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 36864） | accepted |
| name.primary | 王縠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7i6jUhtwwYvnVixPJQMhua | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縠（CBDB 36864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36864&o=json)
