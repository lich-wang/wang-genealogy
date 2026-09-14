---
schema: wang-person/v1
id: p_EXL3GbHFSwjHzEdLSaJPU1
status: active
merged_into: null
display_name: 王瑚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_89dLFLNLussGgsRF6sZsa3
        subject_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mcZ4De574ZtcqmmoxHAb51
          claim_id: c_89dLFLNLussGgsRF6sZsa3
          source_id: s_gEQ7eBUE1TAA4uFVs8sK9i
          stance: supports
          locator: CBDB:230879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230879）
          source: &a1
            id: s_gEQ7eBUE1TAA4uFVs8sK9i
            source_type: api_record
            title: 中国历代人物传记资料库：王瑚（CBDB 230879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json
            external_identifier: CBDB:230879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utUs7NBm9K4FGL2LGoKuE5
        subject_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑚，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230879）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TV-Yf7yeK5VcHOP9q-IbRF
          claim_id: c_utUs7NBm9K4FGL2LGoKuE5
          source_id: s_gEQ7eBUE1TAA4uFVs8sK9i
          stance: supports
          locator: CBDB:230879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Zfvr-osBhoFHsGhxqLSSjz
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mYx7osGdT9BzM8VfaTWcj5
          claim_id: c_Zfvr-osBhoFHsGhxqLSSjz
          source_id: s_oTRnWioMQ9gznlsh9_pYox
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑚 与 王玠 为同胞（CBDB 记「弟」），王玠 之父／母即 王瑚 之父／母。
          source:
            id: s_oTRnWioMQ9gznlsh9_pYox
            source_type: api_record
            title: 中国历代人物传记资料库：王瑚（CBDB 230879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json
            external_identifier: CBDB:230879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6tdTGr8WHYZiKQmeHZ5QVe
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wZT-QQLIT1b39uDSAI99Su
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JasWLtOtiqkDfweArFTAsH
          claim_id: c_wZT-QQLIT1b39uDSAI99Su
          source_id: s_oTRnWioMQ9gznlsh9_pYox
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oTRnWioMQ9gznlsh9_pYox
            source_type: api_record
            title: 中国历代人物传记资料库：王瑚（CBDB 230879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json
            external_identifier: CBDB:230879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAKJt6kT5T4F5kcYrF9f6y
        status: active
        display_name: 王玠
        merged_into_person_id: null
---

# 王瑚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑚 | accepted |
| bio.summary | 王瑚，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6tdTGr8WHYZiKQmeHZ5QVe | 王宗源 | accepted |
| other | p_EAKJt6kT5T4F5kcYrF9f6y | 王玠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑚（CBDB 230879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json)
