---
schema: wang-person/v1
id: p_cfbSo699FQEfuoc3FoGXE2
status: active
merged_into: null
display_name: 王先鋐
cbdb_id: 526009
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sksGWRks7nADEi3WiZ7WJq
        subject_person_id: p_cfbSo699FQEfuoc3FoGXE2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先鋐，明人物。中国历代人物传记资料库（CBDB）以人物编号 526009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rNyr1q_StC3jqeM7hQGSif
          claim_id: c_sksGWRks7nADEi3WiZ7WJq
          source_id: s_pYMKhbNXSVwEjN3V4qmwX9
          stance: supports
          locator: CBDB:526009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_pYMKhbNXSVwEjN3V4qmwX9
            source_type: api_record
            title: 中国历代人物传记资料库：王先鋐（CBDB 526009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526009&o=json
            external_identifier: CBDB:526009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X14GvicH3fu4shzBqu8Uye
        subject_person_id: p_cfbSo699FQEfuoc3FoGXE2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先鋐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ErobvWEtgsHDU6DxTtXNDm
          claim_id: c_X14GvicH3fu4shzBqu8Uye
          source_id: s_pYMKhbNXSVwEjN3V4qmwX9
          stance: supports
          locator: CBDB:526009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_pYMKhbNXSVwEjN3V4qmwX9
            source_type: api_record
            title: 中国历代人物传记资料库：王先鋐（CBDB 526009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526009&o=json
            external_identifier: CBDB:526009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cHxvSDNfirKexugUgCIn_C
        subject_person_id: p_D3ZKwNoKjeEJXSHgQd8CdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cfbSo699FQEfuoc3FoGXE2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K5dvHbEp0qgea2pQj-Ejk1
          claim_id: c_cHxvSDNfirKexugUgCIn_C
          source_id: s_yUmzrSxNNCC7j1D7AdYPLL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11920：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yUmzrSxNNCC7j1D7AdYPLL
            source_type: api_record
            title: 中国历代人物传记资料库：王守仁（CBDB 30374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json
            external_identifier: CBDB:30374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D3ZKwNoKjeEJXSHgQd8CdC
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王先鋐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王先鋐，明人物。中国历代人物传记资料库（CBDB）以人物编号 526009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王先鋐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_D3ZKwNoKjeEJXSHgQd8CdC | 王守仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守仁（CBDB 30374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30374&o=json)
- [中国历代人物传记资料库：王先鋐（CBDB 526009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526009&o=json)
