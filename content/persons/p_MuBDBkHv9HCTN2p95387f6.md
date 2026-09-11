---
schema: wang-person/v1
id: p_MuBDBkHv9HCTN2p95387f6
status: active
merged_into: null
display_name: 王娙
cbdb_id: 134849
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ow68J7TuvErec8HPimAsmg
        subject_person_id: p_MuBDBkHv9HCTN2p95387f6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王娙，清人物。中国历代人物传记资料库（CBDB）以人物编号 134849 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NYzf6CmWYas8R25-kTWSPw
          claim_id: c_ow68J7TuvErec8HPimAsmg
          source_id: s_jWKCCMtaeomBLrRN1MuieC
          stance: supports
          locator: CBDB:134849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jWKCCMtaeomBLrRN1MuieC
            source_type: api_record
            title: 中国历代人物传记资料库：王娙（CBDB 134849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134849&o=json
            external_identifier: CBDB:134849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1MLtuJVSS896TQcxfEHyKy
        subject_person_id: p_MuBDBkHv9HCTN2p95387f6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王娙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ts2zTFfiYj1iTAwRRA72P3
          claim_id: c_1MLtuJVSS896TQcxfEHyKy
          source_id: s_jWKCCMtaeomBLrRN1MuieC
          stance: supports
          locator: CBDB:134849
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_jWKCCMtaeomBLrRN1MuieC
            source_type: api_record
            title: 中国历代人物传记资料库：王娙（CBDB 134849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134849&o=json
            external_identifier: CBDB:134849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IweYNdieBpXe-Ee0pT9fpg
        subject_person_id: p_2qPS6547Y8EHmCpuJ52roe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MuBDBkHv9HCTN2p95387f6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ne7woVFc12W6Tnt94a3NaU
          claim_id: c_IweYNdieBpXe-Ee0pT9fpg
          source_id: s_jWKCCMtaeomBLrRN1MuieC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5504：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2qPS6547Y8EHmCpuJ52roe
        status: active
        display_name: 王雪窗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Hy0c7DPoVOgeihiYSOeuTY
        subject_person_id: p_MuBDBkHv9HCTN2p95387f6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kDoXgX5Nsyr9eGjyk2JgTp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iOIkG2SEN94ePhMyEbf494
          claim_id: c_Hy0c7DPoVOgeihiYSOeuTY
          source_id: s_LumpSO0dPf6VTLW64kII_l
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5504：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LumpSO0dPf6VTLW64kII_l
            source_type: api_record
            title: 中国历代人物传记资料库：林初文（CBDB 134850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134850&o=json
            external_identifier: CBDB:134850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kDoXgX5Nsyr9eGjyk2JgTp
        status: active
        display_name: 林初文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王娙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王娙，清人物。中国历代人物传记资料库（CBDB）以人物编号 134849 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王娙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2qPS6547Y8EHmCpuJ52roe | 王雪窗 | accepted |
| spouses | p_kDoXgX5Nsyr9eGjyk2JgTp | 林初文 | accepted |

## 外部来源

- [中国历代人物传记资料库：林初文（CBDB 134850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134850&o=json)
- [中国历代人物传记资料库：王娙（CBDB 134849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134849&o=json)
