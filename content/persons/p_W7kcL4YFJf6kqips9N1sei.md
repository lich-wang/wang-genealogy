---
schema: wang-person/v1
id: p_W7kcL4YFJf6kqips9N1sei
status: active
merged_into: null
display_name: 王學詩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o6AtCFxa5uCSE44qJqGQfC
        subject_person_id: p_W7kcL4YFJf6kqips9N1sei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uR5uVHBuFVdW71Fn34Dsxh
          claim_id: c_o6AtCFxa5uCSE44qJqGQfC
          source_id: s_DJaZg1KuXfGeXZdV6GnfD8
          stance: supports
          locator: CBDB:512854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512854）
          source: &a1
            id: s_DJaZg1KuXfGeXZdV6GnfD8
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 512854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512854&o=json
            external_identifier: CBDB:512854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEqzETJMabkS3roTsUYRCp
        subject_person_id: p_W7kcL4YFJf6kqips9N1sei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 512854）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_89bNcS45SB52j5HVimNTPf
          claim_id: c_oEqzETJMabkS3roTsUYRCp
          source_id: s_DJaZg1KuXfGeXZdV6GnfD8
          stance: supports
          locator: CBDB:512854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tFzV-ZK2mv7dNVrKNL5axv
        subject_person_id: p_BFZFaDiENQCR7pFh7SaGyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7kcL4YFJf6kqips9N1sei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBN8uJ1W1ntnmJqjO8X0Mk
          claim_id: c_tFzV-ZK2mv7dNVrKNL5axv
          source_id: s_6T6hHHBQgVocrjof6bWTao
          stance: supports
          locator: 榆林府志，lgid=1046722：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6T6hHHBQgVocrjof6bWTao
            source_type: api_record
            title: 中国历代人物传记资料库：王保（CBDB 512852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512852&o=json
            external_identifier: CBDB:512852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BFZFaDiENQCR7pFh7SaGyS
        status: active
        display_name: 王保
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王學詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學詩 | accepted |
| bio.summary | 王學詩，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 512854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BFZFaDiENQCR7pFh7SaGyS | 王保 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 512852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512852&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 512854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512854&o=json)
