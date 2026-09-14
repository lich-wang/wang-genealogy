---
schema: wang-person/v1
id: p_rgjCHhxL6Ex3DnTcPj411u
status: active
merged_into: null
display_name: 王通
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BYjAp89HKXTb262BHsKtJ
        subject_person_id: p_rgjCHhxL6Ex3DnTcPj411u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5RUWnR4gP5EndDWdzb9hUV
          claim_id: c_7BYjAp89HKXTb262BHsKtJ
          source_id: s_zUYyVDL8XPUNsu4CYnfY7b
          stance: supports
          locator: CBDB:253056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253056）
          source: &a1
            id: s_zUYyVDL8XPUNsu4CYnfY7b
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 253056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json
            external_identifier: CBDB:253056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYR1uy3kmGf9EL9W21ZFb3
        subject_person_id: p_rgjCHhxL6Ex3DnTcPj411u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ESIL5v2V8biA5g5NKHL_7z
          claim_id: c_NYR1uy3kmGf9EL9W21ZFb3
          source_id: s_zUYyVDL8XPUNsu4CYnfY7b
          stance: supports
          locator: CBDB:253056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jBGmxzSmF-4cCXNpl3y6cp
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rgjCHhxL6Ex3DnTcPj411u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nkCs-NxHq2nHaCskFtvIg-
          claim_id: c_jBGmxzSmF-4cCXNpl3y6cp
          source_id: s_43orTJ9hmWJnKPMNgMEaif
          stance: supports
          locator: CBDB：兄弟 王進（200041）之父／母 王誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王通 与 王進 为同胞（CBDB 记「兄」），王進 之父／母即 王通 之父／母。
          source:
            id: s_43orTJ9hmWJnKPMNgMEaif
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 253056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json
            external_identifier: CBDB:253056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_khCnb8PLsCY5kwDiuH2tbM
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9MTvMrw9b4xTdINH8Hkb0j
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rgjCHhxL6Ex3DnTcPj411u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTKG5K6Ny7i4xMDte7Kzt6
          claim_id: c_9MTvMrw9b4xTdINH8Hkb0j
          source_id: s_43orTJ9hmWJnKPMNgMEaif
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200041 王進）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_43orTJ9hmWJnKPMNgMEaif
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 253056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json
            external_identifier: CBDB:253056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dGT7XJPTzH43E2nwtnh2aH
        status: active
        display_name: 王進
        merged_into_person_id: null
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_khCnb8PLsCY5kwDiuH2tbM | 王誠 | accepted |
| other | p_dGT7XJPTzH43E2nwtnh2aH | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 253056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json)
