---
schema: wang-person/v1
id: p_5xAVa3shVSKKWDozY77843
status: active
merged_into: null
display_name: 王儼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CVgktkmuTihTsKWT3Qjz3d
        subject_person_id: p_5xAVa3shVSKKWDozY77843
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PeL5xvJ6pDBLipPRvUn5t
          claim_id: c_CVgktkmuTihTsKWT3Qjz3d
          source_id: s_QrzwJWbNALRN35s9tNdjM7
          stance: supports
          locator: CBDB:326928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326928）
          source: &a1
            id: s_QrzwJWbNALRN35s9tNdjM7
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 326928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json
            external_identifier: CBDB:326928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GYEy52W4VxyCe79YVU7UEB
        subject_person_id: p_5xAVa3shVSKKWDozY77843
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NLVfUJLMWXYVGI-5wzs8ai
          claim_id: c_GYEy52W4VxyCe79YVU7UEB
          source_id: s_QrzwJWbNALRN35s9tNdjM7
          stance: supports
          locator: CBDB:326928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YJAIwYrspDATM5SAWji_4r
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5xAVa3shVSKKWDozY77843
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p68sowQbkPCovUSDGyrKGZ
          claim_id: c_YJAIwYrspDATM5SAWji_4r
          source_id: s_dRhJNSqrFbbesJm5DZj8Rg
          stance: supports
          locator: CBDB：兄弟 王俸（204993）之父／母 王周
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王俸 为同胞（CBDB 记「弟」），王俸 之父／母即 王儼 之父／母。
          source:
            id: s_dRhJNSqrFbbesJm5DZj8Rg
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 326928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json
            external_identifier: CBDB:326928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CYU3Lmv2NgFNx8uqhmJMJn
        status: active
        display_name: 王周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BxjVwitxsi7FxjGXluszlW
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5xAVa3shVSKKWDozY77843
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vUvHeDB6r3Mb9m90YBpjz
          claim_id: c_BxjVwitxsi7FxjGXluszlW
          source_id: s_dRhJNSqrFbbesJm5DZj8Rg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204993 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dRhJNSqrFbbesJm5DZj8Rg
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 326928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json
            external_identifier: CBDB:326928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4j28cTB4FbkC46frs3J8PW
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CYU3Lmv2NgFNx8uqhmJMJn | 王周 | accepted |
| other | p_4j28cTB4FbkC46frs3J8PW | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 326928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json)
