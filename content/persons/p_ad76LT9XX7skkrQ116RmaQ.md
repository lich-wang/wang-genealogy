---
schema: wang-person/v1
id: p_ad76LT9XX7skkrQ116RmaQ
status: active
merged_into: null
display_name: 王廷瑚
cbdb_id: 524268
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xNfbn7x2nuUHfrHhaK2NPB
        subject_person_id: p_ad76LT9XX7skkrQ116RmaQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑚，清人物。中国历代人物传记资料库（CBDB）以人物编号 524268 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_1i7cJaSF_KkqNKEW79p7Mf
          claim_id: c_xNfbn7x2nuUHfrHhaK2NPB
          source_id: s_xQH8m9xAoL3pPvDTys23vK
          stance: supports
          locator: CBDB:524268
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xQH8m9xAoL3pPvDTys23vK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瑚（CBDB 524268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524268&o=json
            external_identifier: CBDB:524268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3pCyqzfPJVgFeekwbrNtM
        subject_person_id: p_ad76LT9XX7skkrQ116RmaQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5JT2rvNPxNdTF8E391nKCk
          claim_id: c_E3pCyqzfPJVgFeekwbrNtM
          source_id: s_xQH8m9xAoL3pPvDTys23vK
          stance: supports
          locator: CBDB:524268
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_xQH8m9xAoL3pPvDTys23vK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瑚（CBDB 524268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524268&o=json
            external_identifier: CBDB:524268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OwiG3EXEtPhw2-e0_8QdTL
        subject_person_id: p_ad76LT9XX7skkrQ116RmaQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4p7V4p5eFXQ8MixqGbFnV3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PkcJtZC3J9sAR0YwONb1C5
          claim_id: c_OwiG3EXEtPhw2-e0_8QdTL
          source_id: s_fnWosa2T25pLo3t6jueHnx
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10767：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fnWosa2T25pLo3t6jueHnx
            source_type: api_record
            title: 中国历代人物传记资料库：王德沅（CBDB 67164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67164&o=json
            external_identifier: CBDB:67164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4p7V4p5eFXQ8MixqGbFnV3
        status: active
        display_name: 王德沅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷瑚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷瑚，清人物。中国历代人物传记资料库（CBDB）以人物编号 524268 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王廷瑚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4p7V4p5eFXQ8MixqGbFnV3 | 王德沅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德沅（CBDB 67164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67164&o=json)
- [中国历代人物传记资料库：王廷瑚（CBDB 524268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524268&o=json)
