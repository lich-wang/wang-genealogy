---
schema: wang-person/v1
id: p_Wp3VDeVYgGa8KbXrxzNQhX
status: active
merged_into: null
display_name: 王景元
cbdb_id: 526837
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D8uAJFFYT49SHT8N6m35iT
        subject_person_id: p_Wp3VDeVYgGa8KbXrxzNQhX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景元，史料所见人物。本项目依据《中国历代人物传记资料库：王景元（CBDB 526837）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_vIzcPEcR828NroyUwfSitL
          claim_id: c_D8uAJFFYT49SHT8N6m35iT
          source_id: s_9uHiVxkJXxoKigE4uqXnsd
          stance: supports
          locator: CBDB:526837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9uHiVxkJXxoKigE4uqXnsd
            source_type: api_record
            title: 中国历代人物传记资料库：王景元（CBDB 526837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526837&o=json
            external_identifier: CBDB:526837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BeXwWujwZxoN9oPq7UF46A
        subject_person_id: p_Wp3VDeVYgGa8KbXrxzNQhX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kKMA4382w93ut63e73jix5
          claim_id: c_BeXwWujwZxoN9oPq7UF46A
          source_id: s_9uHiVxkJXxoKigE4uqXnsd
          stance: supports
          locator: CBDB:526837
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WERS3oox8qxkVL1zh213fv
        subject_person_id: p_aVUmmanLtXb3jpHVbXRgYK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wp3VDeVYgGa8KbXrxzNQhX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwsE2foiEAv7IDDkegTNzr
          claim_id: c_WERS3oox8qxkVL1zh213fv
          source_id: s_9uHiVxkJXxoKigE4uqXnsd
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13023：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9uHiVxkJXxoKigE4uqXnsd
            source_type: api_record
            title: 中国历代人物传记资料库：王景元（CBDB 526837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526837&o=json
            external_identifier: CBDB:526837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aVUmmanLtXb3jpHVbXRgYK
        status: active
        display_name: 王時翔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景元，史料所见人物。本项目依据《中国历代人物传记资料库：王景元（CBDB 526837）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王景元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aVUmmanLtXb3jpHVbXRgYK | 王時翔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景元（CBDB 526837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526837&o=json)
