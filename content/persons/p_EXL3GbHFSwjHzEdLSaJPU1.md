---
schema: wang-person/v1
id: p_EXL3GbHFSwjHzEdLSaJPU1
status: active
merged_into: null
display_name: 王瑚
revision: 1
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
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
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

## 外部来源

- [中国历代人物传记资料库：王瑚（CBDB 230879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json)
