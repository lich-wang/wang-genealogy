---
schema: wang-person/v1
id: p_bqziQixDk7cRhyVnUP2TRf
status: active
merged_into: null
display_name: 王伽
cbdb_id: 148775
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDSbHFYXdXvfMo8vNV4QXx
        subject_person_id: p_bqziQixDk7cRhyVnUP2TRf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伽，唐人物。籍贯芒山，曾任州刺史、州司馬。（中国历代人物传记资料库 CBDB 148775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AEDb2jlera2WX8OpbphS3K
          claim_id: c_qDSbHFYXdXvfMo8vNV4QXx
          source_id: s_if5yNiwcoVQy339dmiBsBy
          stance: supports
          locator: CBDB:148775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_if5yNiwcoVQy339dmiBsBy
            source_type: api_record
            title: 中国历代人物传记资料库：王伽（CBDB 148775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148775&o=json
            external_identifier: CBDB:148775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cxEU1d1qBgqMMPavrBKoJM
        subject_person_id: p_bqziQixDk7cRhyVnUP2TRf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PpCzCfPz1pvXNcjPGfimJF
          claim_id: c_cxEU1d1qBgqMMPavrBKoJM
          source_id: s_if5yNiwcoVQy339dmiBsBy
          stance: supports
          locator: CBDB:148775
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MCbIz1yNWq8AAa_wfbYj79
        subject_person_id: p_bqziQixDk7cRhyVnUP2TRf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1EtNsoF82rvGpDdB6Y1nhN
          claim_id: c_MCbIz1yNWq8AAa_wfbYj79
          source_id: s_ELhxQGiRV46JkMokkuSyyN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 112：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ELhxQGiRV46JkMokkuSyyN
            source_type: api_record
            title: 中国历代人物传记资料库：王郎（CBDB 139689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139689&o=json
            external_identifier: CBDB:139689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8a23gwaWGoMWfZGVZ2r2p4
        status: active
        display_name: 王郎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伽，唐人物。籍贯芒山，曾任州刺史、州司馬。（中国历代人物传记资料库 CBDB 148775） | accepted |
| name.primary | 王伽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8a23gwaWGoMWfZGVZ2r2p4 | 王郎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伽（CBDB 148775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148775&o=json)
- [中国历代人物传记资料库：王郎（CBDB 139689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139689&o=json)
