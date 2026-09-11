---
schema: wang-person/v1
id: p_AVb6FN916CViar9FQ4QMbS
status: active
merged_into: null
display_name: 耿氏
revision: 1
cbdb_id: 557343
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_766oD6PJxP9V8Ffm7Eq8vz
        subject_person_id: p_AVb6FN916CViar9FQ4QMbS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 耿氏，史料所见人物。本项目依据《中国历代人物传记资料库：耿氏(王瑀妻)（CBDB 557343）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MYexypGMqQKUBJDTXdG63f
          claim_id: c_766oD6PJxP9V8Ffm7Eq8vz
          source_id: s_InzmpH0GRXfxD5duNScy7r
          stance: supports
          locator: CBDB:557343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_InzmpH0GRXfxD5duNScy7r
            source_type: api_record
            title: 中国历代人物传记资料库：耿氏(王瑀妻)（CBDB 557343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557343&o=json
            external_identifier: CBDB:557343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zLIXXvtEtyUs-p_ruLfgNy
        subject_person_id: p_AVb6FN916CViar9FQ4QMbS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 耿氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VJa9XE3CBekJIF2zJgiNt
          claim_id: c_zLIXXvtEtyUs-p_ruLfgNy
          source_id: s_InzmpH0GRXfxD5duNScy7r
          stance: supports
          locator: CBDB:557343
          quotation: null
          interpretation_note: CBDB 明确记录的王瑀配偶
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
        id: c_OnHIRECZ2ExvyePfdmTpLx
        subject_person_id: p_wMVfyCLqy9dE7qvuBJu9CN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AVb6FN916CViar9FQ4QMbS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXI8ixADx76CTTp9R208mG
          claim_id: c_OnHIRECZ2ExvyePfdmTpLx
          source_id: s_InzmpH0GRXfxD5duNScy7r
          stance: supports
          locator: (乾隆)信陽州志，lgid=868513：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wMVfyCLqy9dE7qvuBJu9CN
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 耿氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 耿氏，史料所见人物。本项目依据《中国历代人物传记资料库：耿氏(王瑀妻)（CBDB 557343）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 耿氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wMVfyCLqy9dE7qvuBJu9CN | 王瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：耿氏(王瑀妻)（CBDB 557343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557343&o=json)
