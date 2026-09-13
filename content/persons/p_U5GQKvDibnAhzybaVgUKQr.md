---
schema: wang-person/v1
id: p_U5GQKvDibnAhzybaVgUKQr
status: active
merged_into: null
display_name: 王藝芳
cbdb_id: 54847
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_odVZ1pKn9EHB4gU2eME1F3
        subject_person_id: p_U5GQKvDibnAhzybaVgUKQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藝芳，史料所见人物。本项目依据《中国历代人物传记资料库：王藝芳（CBDB 54847）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Jj-YutVpVncGWKWOD3dOj7
          claim_id: c_odVZ1pKn9EHB4gU2eME1F3
          source_id: s_MF3B1KwBx9X3LdBaQj3Qvg
          stance: supports
          locator: CBDB:54847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MF3B1KwBx9X3LdBaQj3Qvg
            source_type: api_record
            title: 中国历代人物传记资料库：王藝芳（CBDB 54847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54847&o=json
            external_identifier: CBDB:54847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_APBeQg8H4QPxEHC8qCJ3N5
        subject_person_id: p_U5GQKvDibnAhzybaVgUKQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藝芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8aJvbiUsJf9nqDYu8i3X5n
          claim_id: c_APBeQg8H4QPxEHC8qCJ3N5
          source_id: s_MF3B1KwBx9X3LdBaQj3Qvg
          stance: supports
          locator: CBDB:54847
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Jxk37Iar007jIVrMFbFYOm
        subject_person_id: p_U5GQKvDibnAhzybaVgUKQr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e3AB7nzjMvwszPiJKX6phE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wnKEho8H5vsTX4DRilueGD
          claim_id: c_Jxk37Iar007jIVrMFbFYOm
          source_id: s_hF1GUGzLJvr0ARQnf_2V01
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #410, HuWenKai #487：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hF1GUGzLJvr0ARQnf_2V01
            source_type: api_record
            title: 中国历代人物传记资料库：丁文蔚（CBDB 54843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54843&o=json
            external_identifier: CBDB:54843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e3AB7nzjMvwszPiJKX6phE
        status: active
        display_name: 丁文蔚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王藝芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王藝芳，史料所见人物。本项目依据《中国历代人物传记资料库：王藝芳（CBDB 54847）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王藝芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_e3AB7nzjMvwszPiJKX6phE | 丁文蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁文蔚（CBDB 54843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54843&o=json)
- [中国历代人物传记资料库：王藝芳（CBDB 54847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54847&o=json)
