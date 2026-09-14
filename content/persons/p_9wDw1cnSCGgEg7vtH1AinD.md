---
schema: wang-person/v1
id: p_9wDw1cnSCGgEg7vtH1AinD
status: active
merged_into: null
display_name: 王思忠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2XuzEHwVrJQhcUYiiPBv5
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dF5f4vmdy2zKNaU2DpmeQr
          claim_id: c_r2XuzEHwVrJQhcUYiiPBv5
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: CBDB:236517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236517）
          source: &a1
            id: s_WbCQ4Zq3N7evq78wfesLMK
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 236517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json
            external_identifier: CBDB:236517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o6DyoHCD6DzLPUCFGjVuBV
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠，明人物。籍贯魏縣，曾任文林郎。（中国历代人物传记资料库 CBDB 236517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lmt_dkZKmwscc6_hgRxyUh
          claim_id: c_o6DyoHCD6DzLPUCFGjVuBV
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: CBDB:236517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T0wjXWgqFBxXHqQWuXThBD
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13YxwCgI-DyOw01y6qb0Fo
          claim_id: c_T0wjXWgqFBxXHqQWuXThBD
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fNnEAvuY1BBmarjaAEXknF
        status: active
        display_name: 王時和
        merged_into_person_id: null
    - claim:
        id: c_JECXWd2I0f52BCh60EbThi
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2zcfbTr7Ft9dbmfCtdJEev
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3wAAx-RBgqMwrWQAfJ53C4
          claim_id: c_JECXWd2I0f52BCh60EbThi
          source_id: s_1dEOK9D49kgtQ0MoRBuMUT
          stance: supports
          locator: CBDB：兄弟 王時和（207820）之父／母 王思忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王時興 与 王時和 为同胞（CBDB 记「兄」），王時和 之父／母即 王時興 之父／母。
          source:
            id: s_1dEOK9D49kgtQ0MoRBuMUT
            source_type: api_record
            title: 中国历代人物传记资料库：王時興（CBDB 236522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json
            external_identifier: CBDB:236522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2zcfbTr7Ft9dbmfCtdJEev
        status: active
        display_name: 王時興
        merged_into_person_id: null
    - claim:
        id: c_-bzsktuQa3LWQHC8gzLPnu
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DUzPjdUVWKYjutuFiC5GRt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTdDCghYYB3KEQBVXOgGH0
          claim_id: c_-bzsktuQa3LWQHC8gzLPnu
          source_id: s_9CKuiuAZKO2rhH7Lc7RrW4
          stance: supports
          locator: CBDB：兄弟 王時和（207820）之父／母 王思忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王時太 与 王時和 为同胞（CBDB 记「弟」），王時和 之父／母即 王時太 之父／母。
          source:
            id: s_9CKuiuAZKO2rhH7Lc7RrW4
            source_type: api_record
            title: 中国历代人物传记资料库：王時太（CBDB 236521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json
            external_identifier: CBDB:236521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DUzPjdUVWKYjutuFiC5GRt
        status: active
        display_name: 王時太
        merged_into_person_id: null
    - claim:
        id: c_RvtkwjfgBFMgmMx3IO5G0g
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RSQHpN1w6cmsNZi8icjSo3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uP45xTn2ItJ-UmZKG19Jm3
          claim_id: c_RvtkwjfgBFMgmMx3IO5G0g
          source_id: s_P6HPzlIgnkK8ElptSupS3m
          stance: supports
          locator: CBDB：兄弟 王時和（207820）之父／母 王思忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王時晟 与 王時和 为同胞（CBDB 记「兄」），王時和 之父／母即 王時晟 之父／母。
          source:
            id: s_P6HPzlIgnkK8ElptSupS3m
            source_type: api_record
            title: 中国历代人物传记资料库：王時晟（CBDB 236523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236523&o=json
            external_identifier: CBDB:236523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RSQHpN1w6cmsNZi8icjSo3
        status: active
        display_name: 王時晟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思忠 | accepted |
| bio.summary | 王思忠，明人物。籍贯魏縣，曾任文林郎。（中国历代人物传记资料库 CBDB 236517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fNnEAvuY1BBmarjaAEXknF | 王時和 | accepted |
| children | p_2zcfbTr7Ft9dbmfCtdJEev | 王時興 | accepted |
| children | p_DUzPjdUVWKYjutuFiC5GRt | 王時太 | accepted |
| children | p_RSQHpN1w6cmsNZi8icjSo3 | 王時晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時晟（CBDB 236523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236523&o=json)
- [中国历代人物传记资料库：王時太（CBDB 236521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json)
- [中国历代人物传记资料库：王時興（CBDB 236522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json)
- [中国历代人物传记资料库：王思忠（CBDB 236517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json)
