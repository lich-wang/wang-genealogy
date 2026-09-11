---
schema: wang-person/v1
id: p_rQQ5ZmDaRcbRmGn72wPL2r
status: active
merged_into: null
display_name: 王弘璣
cbdb_id: 148843
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8X12PSKLENPHvFpH1TpC8o
        subject_person_id: p_rQQ5ZmDaRcbRmGn72wPL2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘璣，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_fHoannkEmIfOSgslOYykCF
          claim_id: c_8X12PSKLENPHvFpH1TpC8o
          source_id: s_NhNAWnBdH7F4r82zo386E7
          stance: supports
          locator: CBDB:148843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_NhNAWnBdH7F4r82zo386E7
            source_type: api_record
            title: 中国历代人物传记资料库：王弘璣（CBDB 148843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148843&o=json
            external_identifier: CBDB:148843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8orMXRaLs8TZrcFucxmKjm
        subject_person_id: p_rQQ5ZmDaRcbRmGn72wPL2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nZ9XPQbkeASC78U3XLCZNu
          claim_id: c_8orMXRaLs8TZrcFucxmKjm
          source_id: s_NhNAWnBdH7F4r82zo386E7
          stance: supports
          locator: CBDB:148843
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_NhNAWnBdH7F4r82zo386E7
            source_type: api_record
            title: 中国历代人物传记资料库：王弘璣（CBDB 148843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148843&o=json
            external_identifier: CBDB:148843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ySFJ3fFIbv9ly7kMlT7Nal
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rQQ5ZmDaRcbRmGn72wPL2r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tPE3RCadFzTvGv4aN3HGB
          claim_id: c_ySFJ3fFIbv9ly7kMlT7Nal
          source_id: s_jewBGtKUzpoaLPwiKSBegj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 21：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jewBGtKUzpoaLPwiKSBegj
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 139711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139711&o=json
            external_identifier: CBDB:139711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QdHqCZ7e374do1jp8mCEeo
        status: active
        display_name: 王式
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘璣，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘璣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QdHqCZ7e374do1jp8mCEeo | 王式 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘璣（CBDB 148843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148843&o=json)
- [中国历代人物传记资料库：王式（CBDB 139711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139711&o=json)
